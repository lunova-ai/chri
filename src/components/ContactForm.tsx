"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "rate_limited"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      // Honeypot field (should stay empty)
      company: String(fd.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 429) {
        setStatus("rate_limited");
        return;
      }

      const data = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 grid gap-3">
      {/* Honeypot (unsichtbar, aber für Bots) */}
      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-2 md:grid-cols-2">
        <input
          name="name"
          required
          className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]"
          placeholder="Name"
        />
        <input
          name="email"
          required
          type="email"
          className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]"
          placeholder="E-Mail"
        />
      </div>

      <textarea
        name="message"
        required
        className="min-h-[120px] rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]"
        placeholder="Worum geht es? (kurz)"
      />

      <button
        className="btn btn-primary w-full md:w-auto"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sende…" : "Anfrage senden"}
      </button>

      {status === "sent" ? (
        <p className="text-sm text-black/70">
          Danke! Deine Nachricht wurde gesendet. Ich melde mich zeitnah.
        </p>
      ) : null}

      {status === "rate_limited" ? (
        <p className="text-sm text-black/70">
          Bitte kurz warten und später erneut versuchen.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-black/70">
          Leider hat das Senden nicht funktioniert. Bitte später erneut versuchen.
        </p>
      ) : null}

      <p className="text-xs text-black/50">
        Hinweis: Bitte keine sensiblen medizinischen Details im Formular. Für akute
        Krisen: Notruf/Krisendienst.
      </p>
    </form>
  );
}
