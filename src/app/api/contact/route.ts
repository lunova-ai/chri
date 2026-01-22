import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // Resend braucht Node runtime

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  // optional anti-spam field:
  company?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    // Honeypot: if filled -> likely bot
    if (body.company && body.company.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Bitte Name, E-Mail und Nachricht ausfüllen." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Bitte eine gültige E-Mail angeben." },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO || "psychodrama@pichlhoefer.eu";
    const CONTACT_FROM = process.env.CONTACT_FROM || "onboarding@resend.dev";

    // IMPORTANT: fail gracefully at runtime, NOT at build time
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "E-Mail-Versand ist momentan nicht konfiguriert. Bitte später erneut versuchen.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject = `Kontaktanfrage (${name})`;
    const text = `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}\n`;

    await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Senden fehlgeschlagen. Bitte später erneut versuchen." },
      { status: 500 }
    );
  }
}
