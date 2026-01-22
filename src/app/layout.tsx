import type { Metadata, Viewport } from "next";
import "./globals.css";
import MobileMenu from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Christine Pichlhöfer – Psychotherapie mit Psychodrama",
  description:
    "Geschlechtersensibel & traumasensibel in Wien. Psychotherapie, Coaching, Supervision, Workshops.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-lg px-3 py-2 text-sm text-black/70 hover:bg-black/5 hover:text-black transition"
    >
      {label}
    </a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgb(var(--bg))]/80 backdrop-blur">
          <div className="container-page flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-2xl bg-black/5 text-sm font-semibold">
                CP
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold">Christine Pichlhöfer</div>
                <div className="text-xs text-black/60">
                  Psychotherapie mit Psychodrama · Wien
                </div>
              </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              <NavLink href="#start" label="Start" />
              <NavLink href="#privat" label="Privatpersonen" />
              <NavLink href="#institutionen" label="Kassen & Institutionen" />
              <NavLink href="#methode" label="Methode" />
              <NavLink href="#ueber" label="Über mich" />
              <NavLink href="#kontakt" label="Kontakt" />
            </nav>

            <div className="flex items-center gap-2">
              {/* Desktop CTAs */}
              <a href="#kontakt" className="btn btn-ghost hidden sm:inline-flex">
                Kurz telefonieren
              </a>
              <a
                href="#kontakt"
                className="btn btn-primary hidden md:inline-flex"
              >
                Erstgespräch anfragen
              </a>

              {/* Mobile menu */}
              <MobileMenu />
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-black/5">
          <div className="container-page py-10 text-sm text-black/60">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Christine Pichlhöfer · Wien</div>
              <div className="flex gap-4">
                <a className="hover:text-black" href="#kontakt">
                  Kontakt
                </a>
                <a className="hover:text-black" href="/impressum">
                  Impressum
                </a>
                <a className="hover:text-black" href="/datenschutz">
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
