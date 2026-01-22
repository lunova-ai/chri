import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

// Mini rate limit (light): pro IP max 5 Requests / 10 Minuten (best effort)
const bucket = new Map<string, { count: number; resetAt: number }>();
function rateLimit(ip: string) {
  const now = Date.now();
  const entry = bucket.get(ip);
  const windowMs = 10 * 60 * 1000;
  const limit = 5;

  if (!entry || entry.resetAt < now) {
    bucket.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (entry.count >= limit) return { ok: false };

  entry.count += 1;
  bucket.set(ip, entry);
  return { ok: true };
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const rl = rateLimit(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, error: "rate_limited" },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { ok: false, error: "invalid_json" },
        { status: 400 }
      );
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Honeypot: wenn befüllt -> still ok zurückgeben (Bots nicht triggern)
    const hp = String(body.company ?? "").trim();
    if (hp) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "missing_fields" },
        { status: 400 }
      );
    }

    // Basic sanity checks
    if (name.length > 120 || email.length > 180 || message.length > 6000) {
      return NextResponse.json(
        { ok: false, error: "too_long" },
        { status: 400 }
      );
    }
    if (!email.includes("@") || !email.includes(".")) {
      return NextResponse.json(
        { ok: false, error: "invalid_email" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;
    const apiKey = process.env.RESEND_API_KEY;

    if (!to || !from || !apiKey) {
      return NextResponse.json(
        { ok: false, error: "server_misconfigured" },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>");

    await resend.emails.send({
      from,
      to,
      replyTo: email, // Antworten geht direkt an Absender:in
      subject: `Neue Anfrage über Website – ${name}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
          <h2 style="margin:0 0 12px 0;">Neue Anfrage über die Website</h2>
          <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin:0 0 8px 0;"><strong>E-Mail:</strong> ${safeEmail}</p>
          <p style="margin:16px 0 8px 0;"><strong>Nachricht:</strong></p>
          <div style="padding:12px;border:1px solid #eee;border-radius:12px;background:#fafafa;line-height:1.5;">
            ${safeMessage}
          </div>
          <p style="margin:16px 0 0 0;color:#666;font-size:12px;">
            (Automatisch gesendet. IP: ${escapeHtml(ip)})
          </p>
        </div>
      `,
      text: `Neue Anfrage über die Website\n\nName: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}\n\nIP: ${ip}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 500 }
    );
  }
}
