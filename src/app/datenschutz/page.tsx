// ===============================
// 2) src/app/datenschutz/page.tsx
// ===============================
export default function DatenschutzPage() {
  return (
    <main className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Datenschutz
        </h1>
        <p className="mt-3 text-sm text-black/60">
          Datenschutzinformation gemäß Art. 13 DSGVO. Bitte Platzhalter in eckigen
          Klammern ergänzen.
        </p>

        <div className="mt-8 space-y-4">
          <section className="card p-6">
            <h2 className="text-lg font-semibold">1. Verantwortliche</h2>
            <div className="mt-3 space-y-2 text-sm text-black/70">
              <p>Christine Pichlhöfer</p>
              <p>[Straße, PLZ, Ort, Österreich]</p>
              <p>Telefon: [Telefonnummer]</p>
              <p>
                E-Mail: <span className="select-all">psychodrama [at] pichlhoefer.eu</span>
              </p>
            </div>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">
              2. Zwecke & Rechtsgrundlagen der Verarbeitung
            </h2>

            <div className="mt-4 space-y-4 text-sm text-black/70">
              <div>
                <div className="font-medium">a) Websitebetrieb (Server-Logfiles)</div>
                <p className="mt-2 text-black/70">
                  Beim Aufruf der Website werden technisch notwendige Daten
                  verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite,
                  User-Agent), um die Website sicher und zuverlässig bereitzustellen
                  und Angriffe/Fehler analysieren zu können.
                </p>
                <p className="mt-2 text-black/70">
                  <span className="font-medium">Rechtsgrundlage:</span>{" "}
                  Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div className="border-t border-black/5 pt-4">
                <div className="font-medium">b) Kontaktaufnahme über Formular</div>
                <p className="mt-2 text-black/70">
                  Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir
                  die von Ihnen angegebenen Daten (Name, E-Mail, Nachricht), um Ihre
                  Anfrage zu bearbeiten und zu beantworten.
                </p>
                <p className="mt-2 text-black/70">
                  <span className="font-medium">Rechtsgrundlage:</span>{" "}
                  Durchführung vorvertraglicher Maßnahmen / Beantwortung Ihrer Anfrage
                  (Art. 6 Abs. 1 lit. b DSGVO) und – soweit erforderlich –
                  berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p className="mt-3 text-xs text-black/50">
                  Hinweis: Bitte übermitteln Sie über das Formular keine hochsensiblen
                  Gesundheitsdaten/Detailbeschreibungen. Für den Erstkontakt reichen
                  wenige Sätze (Themenfeld + Terminwunsch). Sensible Details können im
                  persönlichen Gespräch geklärt werden.
                </p>
              </div>
            </div>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">3. Empfänger:innen / Dienstleister</h2>
            <p className="mt-3 text-sm text-black/70">
              Für den technischen Betrieb und den Versand von Formularnachrichten setzen
              wir folgende Dienstleister ein:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>
                • <span className="font-medium">Vercel</span> (Hosting/Deployment der Website,
                technischer Betrieb).
              </li>
              <li>
                • <span className="font-medium">Resend</span> (E-Mail-Versand der Kontaktformular-Nachrichten).
              </li>
            </ul>
            <p className="mt-3 text-xs text-black/50">
              Je nach Konfiguration können technische Daten (z. B. IP, Request-Infos)
              in Systemprotokollen verarbeitet werden.
            </p>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">4. Drittlandübermittlung</h2>
            <p className="mt-3 text-sm text-black/70">
              Je nach Standort/Technik der eingesetzten Dienstleister kann eine Verarbeitung
              außerhalb der EU/des EWR nicht ausgeschlossen sein. In solchen Fällen werden
              geeignete Garantien (z. B. Standardvertragsklauseln) eingesetzt.
            </p>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">5. Speicherdauer</h2>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>
                • <span className="font-medium">Kontaktanfragen:</span> solange wie für die Bearbeitung
                erforderlich und darüber hinaus nur, soweit gesetzliche Pflichten bestehen oder
                dies zur Abwehr/ Durchsetzung von Ansprüchen notwendig ist.
              </li>
              <li>
                • <span className="font-medium">Server-Logs:</span> nur so lange, wie es für Betrieb,
                Sicherheit und Fehleranalyse erforderlich ist (anbieter-/systembedingt).
              </li>
            </ul>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">6. Ihre Rechte</h2>
            <p className="mt-3 text-sm text-black/70">
              Sie haben – je nach Voraussetzungen – das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen eine
              Verarbeitung auf Basis berechtigter Interessen. Zudem besteht ein Beschwerderecht bei
              der Datenschutzbehörde.
            </p>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">7. Cookies & Tracking</h2>
            <p className="mt-3 text-sm text-black/70">
              Diese Website verwendet keine Tracking-Cookies und kein nutzerbasiertes Profiling.
              Es werden keine Analyse- oder Marketing-Tools eingesetzt. Es können jedoch technisch
              notwendige Daten im Rahmen des Websitebetriebs verarbeitet werden (z. B. Logfiles).
            </p>
          </section>

          <section className="card p-6">
            <h2 className="text-lg font-semibold">
              8. Wichtiger Hinweis zur Kommunikation per E-Mail
            </h2>
            <p className="mt-3 text-sm text-black/70">
              Wenn Sie uns per E-Mail kontaktieren oder wenn wir Ihnen per E-Mail antworten,
              erfolgt die Übertragung über Kommunikationsnetze und E-Mail-Dienstleister
              (z. B. Google/Gmail, Microsoft/Outlook, GMX u. a.). Diese Anbieter können Inhalte und
              Metadaten im Rahmen ihrer Dienste verarbeiten. Eine vollständig vertrauliche
              Kommunikation per Standard-E-Mail kann daher nicht garantiert werden.
            </p>
            <p className="mt-3 text-sm text-black/70">
              Bitte übermitteln Sie im Erstkontakt nur notwendige Informationen. Sensible Details
              klären wir nach Möglichkeit im persönlichen Gespräch.
            </p>
            <p className="mt-3 text-sm text-black/70">
              <span className="font-medium">Haftungsausschluss (E-Mail):</span>{" "}
              Für Risiken, die aus der Übertragung per E-Mail (z. B. unbefugter Zugriff, Fehler in der
              Zustellung, Verarbeitung durch E-Mail-Anbieter) entstehen, übernehmen wir – soweit
              gesetzlich zulässig – keine Haftung.
            </p>
          </section>
        </div>

        <div className="mt-10 flex gap-3">
          <a className="btn btn-ghost" href="/#start">
            Zur Startseite
          </a>
          <a className="btn btn-primary" href="/impressum">
            Impressum
          </a>
        </div>
      </div>
    </main>
  );
}
