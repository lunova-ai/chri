"use client";

import { useEffect, useState } from "react";

type LinkItem = { href: string; label: string };

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2 text-sm text-black/70 hover:bg-black/5 hover:text-black transition"
    >
      {label}
    </a>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links: LinkItem[] = [
    { href: "#start", label: "Start" },
    { href: "#privat", label: "Privatpersonen" },
    { href: "#institutionen", label: "Kassen & Institutionen" },
    { href: "#methode", label: "Methode" },
    { href: "#ueber", label: "Über mich" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  // Scroll lock (optional, aber nice)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm hover:bg-black/5 transition"
        aria-label="Menü öffnen"
      >
        <span className="grid gap-1">
          <span className="block h-[2px] w-5 bg-black/70" />
          <span className="block h-[2px] w-5 bg-black/70" />
          <span className="block h-[2px] w-5 bg-black/70" />
        </span>
        <span className="text-black/70">Menü</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/25"
            aria-label="Menü schließen"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[rgb(var(--bg))] border-l border-black/10 shadow-xl">
            <div className="flex items-center justify-between border-b border-black/5 px-4 py-4">
              <div className="leading-tight">
                <div className="text-sm font-semibold">Christine Pichlhöfer</div>
                <div className="text-xs text-black/60">
                  Psychotherapie · Wien
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm hover:bg-black/5 transition"
              >
                Schließen
              </button>
            </div>

            <div className="p-4">
              <nav className="grid gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.href}
                    href={l.href}
                    label={l.label}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </nav>

              <div className="mt-6 grid gap-2">
                <a
                  href="#kontakt"
                  className="btn btn-primary w-full"
                  onClick={() => setOpen(false)}
                >
                  Erstgespräch anfragen
                </a>
                <a
                  href="#kontakt"
                  className="btn btn-ghost w-full"
                  onClick={() => setOpen(false)}
                >
                  Kurz telefonieren
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

