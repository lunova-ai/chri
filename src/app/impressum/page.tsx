// ===============================
// 1) src/app/impressum/page.tsx
// ===============================
export default function ImpressumPage() {
  return (
    <main className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Impressum
        </h1>
        <p className="mt-3 text-sm text-black/60">
          Angaben gemäß § 5 ECG (Österreich). Bitte die Platzhalter in eckigen
          Klammern ergänzen.
        </p>

        <div className="mt-8 grid gap-4">
          <section className="card p-6">
            <h2 className="text-lg font-semibold">Diensteanbieterin</h2>
            <div className="mt-3 space-y-2 text-sm text-black/70">
              <p>
                <span className="font-medium">Name:</span> Christine Pichlhöfer
              </p>
              <p>
                <span className="font-medium">Anschrift:</span> [Straße, PLZ,
                Ort, Österreich]
              </p>
              <p>
                <span className="font-medium">Telefon:</span> [Telefonnummer]
              </p>
              <p>
                <span className="font-medium">E-Mail:</span>{" "}
                <span className="select-all">
                  psychodrama [at] pichlhoefer.eu
                </span>
                <span className="block text-xs text-black/50 mt-1">
                  Hinweis: Schreibweise mit [at] dient der Reduktion automatisierter
                  Adress-Erfassung.
                </span>
              </p>
              <p>
                <span className="font-medium">Kontaktformular:</span>{" "}
                <a className="underline underline-offset-4" href="/#kontakt">
                  /#kontakt
                </a>
              </p>
            </div>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">Berufsangaben</h2>
            <div className="mt-3 space-y-2 text-sm text-black/70">
              <p>
                <span className="font-medium">Berufsbezeichnung:</span>{" "}
                Psychotherapeutin
              </p>
              <p>
                <span className="font-medium">Berufsrecht / Aufsicht:</span>{" "}
                [zuständige Kammer/Behörde, Eintragung, ggf. Register/Nummer]
              </p>
              <p className="text-xs text-black/50">
                (Bitte hier deine tatsächlichen berufsrechtlichen Angaben
                ergänzen.)
              </p>
            </div>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">Zweck der Website</h2>
            <p className="mt-3 text-sm text-black/70">
              Information über psychotherapeutische Leistungen, Supervision,
              Workshops sowie Kontaktaufnahme.
            </p>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">Haftungsausschluss</h2>
            <p className="mt-3 text-sm text-black/70">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte übernehmen wir jedoch keine Gewähr. Für Inhalte externer
              Links sind ausschließlich deren Betreiber:innen verantwortlich.
            </p>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">Urheberrecht</h2>
            <p className="mt-3 text-sm text-black/70">
              Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht.
              Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der
              vorherigen schriftlichen Zustimmung.
            </p>
          </section>
        </div>

        <div className="mt-10 flex gap-3">
          <a className="btn btn-ghost" href="/#start">
            Zur Startseite
          </a>
          <a className="btn btn-primary" href="/datenschutz">
            Datenschutz
          </a>
        </div>
      </div>
    </main>
  );
}
