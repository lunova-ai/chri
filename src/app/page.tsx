import ContactForm from "@/components/ContactForm";

type Topic = {
  title: string;
  description: string;
  badge?: string;
};

type Publication = {
  title: string;
  meta: string;
  url: string;
  blurb: string;
  tags?: string[];
  featured?: boolean;
};

const topics: Topic[] = [
  {
    title: "Flucht & Trauma",
    description:
      "Stabilisierung, Orientierung und Ressourcenarbeit – Schritt für Schritt, in Ihrem Tempo.",
    badge: "traumasensibel",
  },
  {
    title: "Stress & Überforderung",
    description:
      "Wenn alles zu viel wird: gemeinsam entlasten, sortieren und neue Handlungsspielräume finden.",
  },
  {
    title: "Beziehung & Rollen",
    description:
      "Konflikte, Trennung, Nähe/Distanz, Rollenbilder – Klarheit und neue Perspektiven entwickeln.",
    badge: "geschlechtersensibel",
  },
  {
    title: "Selbstwert & Identität",
    description:
      "Innere Kritiker, Scham, Unsicherheit – Stabilität und Selbstmitgefühl stärken.",
  },
  {
    title: "Essverhalten & Prävention",
    description:
      "Verstehen, was dahinterliegt – achtsame Schritte in Richtung Balance und Selbstfürsorge.",
    badge: "präventiv",
  },
  {
    title: "Abhängigkeit & Co-Dependence",
    description:
      "Muster erkennen, Grenzen stärken und neue Wege im Umgang mit Nähe, Verantwortung und Kontrolle.",
  },
];

const publications: Publication[] = [
  {
    featured: true,
    title: "Körperpolitik – eine Körperbeziehungsübung",
    meta: "Journal of Psychodrama and Sociometry · 22. Juni 2023 (SpringerLink)",
    url: "https://link.springer.com/article/10.1007/s11620-023-00721-z",
    blurb:
      "Eine psychodramatische Übung, um Körperthemen behutsam zu bearbeiten – geeignet für Einzel-, Gruppen- und Workshopsettings.",
    tags: ["Psychodrama", "Körper", "Workshop"],
  },
  {
    featured: true,
    title:
      "Virtual sociodrama: Building collective creative resilience in the liminality of Covid-19 pandemic",
    meta: "Journal of Psychodrama and Sociometry · 26. Aug. 2022 (SpringerLink)",
    url: "https://link.springer.com/article/10.1007/s11620-022-00693-6",
    blurb:
      "Wie Sociodrama online kollektive Kreativität und Resilienz in Krisenzeiten stärken kann – mit Praxisbeispiel aus einem Netzwerk-Setting.",
    tags: ["Sociodrama", "Online", "Resilienz"],
  },
  {
    featured: true,
    title:
      "Interkulturelle Kompetenz in der Arbeit mit traumatisierten Menschen mit Fluchterfahrung",
    meta: "Zeitschrift für Psychodrama und Soziometrie · 30. Sept. 2021 (SpringerLink)",
    url: "https://link.springer.com/article/10.1007/s11620-021-00627-8",
    blurb:
      "Über kultursensibles Arbeiten, Sicherheit und Ressourcen – mit Fallvignetten und Blick auf die Herausforderungen unsicherer Lebensbedingungen.",
    tags: ["Trauma", "Flucht", "Interkulturell"],
  },
  {
    title: "Wann bin ich richtig? Prävention von Essstörungen",
    meta: "Zeitschrift für Psychodrama und Soziometrie · 1. Dez. 2018 (SpringerLink)",
    url: "https://link.springer.com/article/10.1007/s11620-018-0464-7",
    blurb:
      "Praxisnahe Ausschnitte aus Workshops: Grenzen, Nähe, Konflikte und Körperbilder – eingebettet in gesellschaftliche Einflussfaktoren.",
    tags: ["Prävention", "Essstörungen", "Jugend"],
  },
  // Hinweis: Link #5 ist identisch zu #4 → bewusst nicht doppelt.
  {
    title:
      "Sollte die Welt nicht besser werden? Digitale Medien, Emanzipationspotenzial und Marginalisierung",
    meta: "Stimme – Zeitschrift der Initiative Minderheiten · 1. Apr. 2016 (PDF)",
    url: "https://stimme.minderheiten.at/wordpress/wp-content/uploads/sites/3/2019/05/stimme98_web_s08-09.pdf",
    blurb:
      "Ein Essay über Medienwelten, Emanzipation und Ausgrenzung – mit dem Höhlengleichnis als Denkfigur.",
    tags: ["Medien", "Gesellschaft", "Marginalisierung"],
  },
  {
    title:
      "Dynamics in the relationship of co-dependent and person with dependent personality disorder",
    meta: "In: Das Drama der Abhängigkeit · Springer · 2013 (Kapitel)",
    url: "https://link.springer.com/chapter/10.1007/978-3-531-19779-1_8#page-1",
    blurb:
      "Dynamiken von Co-Dependency und abhängiger Persönlichkeitsstruktur – als Beziehungsphänomene, diskutiert mit soziometrischem Blick.",
    tags: ["Abhängigkeit", "Beziehung", "Soziometrie"],
  },
];

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {kicker ? (
        <div className="mb-3 flex justify-center">
          <span className="badge">{kicker}</span>
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-black/60 md:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className = "",
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={`card p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title="Öffnet in neuem Tab"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const featured = publications.filter((p) => p.featured);
  const others = publications.filter((p) => !p.featured);

  return (
    <div id="start">
      {/* HERO */}
      <section className="pt-14 md:pt-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[rgb(var(--ring))]/25 blur-3xl" />
              <div className="absolute -right-28 -top-14 h-72 w-72 rounded-full bg-[rgb(var(--ring))]/20 blur-3xl" />
            </div>

            <div className="relative grid gap-10 p-8 md:grid-cols-12 md:gap-8 md:p-12">
              <div className="md:col-span-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="badge">Psychodrama</span>
                  <span className="badge">traumasensibel</span>
                  <span className="badge">Wien</span>
                  <span className="badge">DE · EN · IT</span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  Psychotherapie mit Psychodrama –
                  <span className="text-black/70">
                    {" "}
                    geschlechtersensibel & traumasensibel
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-base text-black/60 md:text-lg">
                  Ein sicherer Raum für Stabilisierung, Orientierung und neue
                  Perspektiven. Gemeinsam finden wir passende nächste Schritte –
                  klar, respektvoll und in Ihrem Tempo.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#kontakt" className="btn btn-primary">
                    Erstgespräch anfragen
                  </a>
                  <a href="#kontakt" className="btn btn-ghost">
                    Kurz telefonieren
                  </a>
                </div>

                <p className="mt-5 text-xs text-black/50">
                  Bei akuten Krisen bitte den Notruf / Krisendienst kontaktieren.
                </p>
              </div>

              <div className="md:col-span-5">
                <div className="card h-full p-6">
                  <div className="text-sm font-semibold">Erstkontakt</div>
                  <p className="mt-2 text-sm text-black/60">
                    Schreiben Sie mir kurz Ihr Anliegen – ich melde mich zeitnah
                    mit Terminvorschlägen für ein Erstgespräch.
                  </p>

                  <div className="mt-5 grid gap-3">
                    <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                      <div className="text-xs text-black/60">Ort</div>
                      <div className="text-sm font-medium">Praxis in Wien</div>
                    </div>
                    <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                      <div className="text-xs text-black/60">Abrechnung</div>
                      <div className="text-sm font-medium">
                        Privat · Kassen/Refundierung möglich · Institutionen
                      </div>
                    </div>
                    <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                      <div className="text-xs text-black/60">Sprachen</div>
                      <div className="text-sm font-medium">DE · EN · IT</div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a href="#kontakt" className="btn btn-primary w-full">
                      Kontakt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THEMEN */}
      <section className="mt-16 md:mt-20">
        <div className="container-page">
          <SectionTitle
            kicker="Wobei ich unterstützen kann"
            title="Für welche Themen bin ich da?"
            subtitle="Einige häufige Anliegen – im Erstgespräch klären wir gemeinsam, was für Sie gerade im Vordergrund steht."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <Card key={t.title}>
                <div className="flex items-start justify-between gap-3">
                  <div className="text-base font-semibold">{t.title}</div>
                  {t.badge ? <span className="badge">{t.badge}</span> : null}
                </div>
                <p className="mt-2 text-sm text-black/60">{t.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ANGEBOTE */}
      <section className="mt-16 md:mt-20" id="privat">
        <div className="container-page">
          <SectionTitle
            kicker="Leistungen"
            title="Meine Angebote"
            subtitle="Privatpersonen sowie Kassen/Institutionen – transparent und klar strukturiert."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-base font-semibold">Psychotherapie</div>
              <p className="mt-2 text-sm text-black/60">
                Einzelsetting – Stabilisierung, Klärung, Integration und
                Entwicklung neuer Perspektiven.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-black/60">
                <li>• Erstgespräch & Zielklärung</li>
                <li>• Frequenz nach Bedarf</li>
                <li>• Privat & Refundierung möglich</li>
              </ul>
            </Card>

            <Card>
              <div className="text-base font-semibold">Coaching & Beratung</div>
              <p className="mt-2 text-sm text-black/60">
                Fokus auf konkrete Situationen und Entscheidungen – klar,
                lösungs- und ressourcenorientiert.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-black/60">
                <li>• Übergänge & Krisen</li>
                <li>• Rollen & Beziehungen</li>
                <li>• Selbstwert & Stress</li>
              </ul>
            </Card>

            <Card id="institutionen">
              <div className="text-base font-semibold">
                Supervision & Workshops
              </div>
              <p className="mt-2 text-sm text-black/60">
                Für Teams, Organisationen und Institutionen – Reflexion, Qualität,
                Entlastung und Weiterentwicklung.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-black/60">
                <li>• Team- & Fallsupervision</li>
                <li>• Seminare / Vorträge</li>
                <li>• Zusammenarbeit nach Vereinbarung</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="mt-16 md:mt-20" id="methode">
        <div className="container-page">
          <SectionTitle
            kicker="Arbeitsweise"
            title="Psychodrama – erlebens- und handlungsorientiert"
            subtitle="Wir arbeiten nicht nur mit Worten, sondern auch mit Bildern, Rollen, Perspektivwechsel und inneren Szenen – behutsam und passend zu Ihrer Stabilität."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold">1) Stabilisieren</div>
              <p className="mt-2 text-sm text-black/60">
                Sicherheit, Orientierung und Ressourcen stehen am Anfang –
                besonders bei traumatischen Erfahrungen.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">2) Verstehen</div>
              <p className="mt-2 text-sm text-black/60">
                Muster erkennen, innere Anteile verstehen und das eigene Erleben
                einordnen.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">3) Verändern</div>
              <p className="mt-2 text-sm text-black/60">
                Neue Handlungsmöglichkeiten ausprobieren – in kleinen, sicheren
                Schritten.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ÜBER MICH + PUBLIKATIONEN */}
      <section className="mt-16 md:mt-20" id="ueber">
        <div className="container-page">
          <SectionTitle
            kicker="Haltung"
            title="Über mich"
            subtitle="Kurz, persönlich, professionell – hier fügen wir danach Bio, Qualifikationen und Rahmenbedingungen ein."
          />

          <div className="grid gap-4 md:grid-cols-12">
            <Card className="md:col-span-7">
              <p className="text-sm text-black/70">
                Ich arbeite respektvoll, klar und ressourcenorientiert. Besonders
                wichtig sind mir Sicherheit, Transparenz und ein Tempo, das zu
                Ihnen passt.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge">Psychodrama</span>
                <span className="badge">interkulturell</span>
                <span className="badge">traumasensibel</span>
                <span className="badge">Supervision</span>
              </div>
            </Card>

            <div className="grid gap-4 md:col-span-5">
              <Card>
                <div className="text-sm font-semibold">Kurz & praktisch</div>
                <ul className="mt-3 space-y-2 text-sm text-black/60">
                  <li>• Privat & Kostenzuschuss (je nach Kasse) möglich</li>
                  <li>• Institutionen: Zusammenarbeit nach Vereinbarung</li>
                  <li>• Sprachen: DE · EN · IT</li>
                </ul>
              </Card>

              <Card>
                <div>
                  <div className="text-sm font-semibold">
                    Interkulturelle Erfahrung
                  </div>
                  <p className="mt-1 text-xs text-black/50">
                    Anonymisiert & aggregiert (Beispiel)
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    ["Westasien", 60],
                    ["Ostafrika", 35],
                    ["Osteuropa", 25],
                  ].map(([label, val]) => (
                    <div key={label} className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-black/60">
                        <span>{label}</span>
                        <span>{val}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-black/5">
                        <div
                          className="h-2 rounded-full bg-[rgb(var(--primary))] opacity-65"
                          style={{ width: `${val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-black/50">
                  Hinweis: Zusammenfassung bei kleinen Zahlen. Keine Rückschlüsse
                  auf Einzelpersonen.
                </p>
              </Card>
            </div>
          </div>

          {/* Publikationen */}
          <div className="mt-10">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                Publikationen & Beiträge
              </h3>
              <p className="mt-3 text-sm text-black/60 md:text-base">
                Auswahl an Veröffentlichungen – externe Links zu Zeitschriften,
                Verlagen oder PDFs (öffnen in neuem Tab).
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {featured.map((p) => (
                <Card key={p.url} className="flex flex-col">
                  <div className="text-sm font-semibold">{p.title}</div>
                  <div className="mt-2 text-xs text-black/50">{p.meta}</div>
                  <p className="mt-3 text-sm text-black/60">{p.blurb}</p>

                  {p.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6">
                    <ExternalLink
                      href={p.url}
                      className="btn btn-ghost w-full text-center"
                    >
                      Zum Verlag / Beitrag
                    </ExternalLink>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 mx-auto max-w-3xl">
              <div className="text-sm font-semibold">Weitere Publikationen</div>
              <div className="mt-3 grid gap-2">
                {others.map((p) => (
                  <div
                    key={p.url}
                    className="card flex flex-col gap-1 px-4 py-3 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="text-sm font-medium">{p.title}</div>
                      <div className="text-xs text-black/50">{p.meta}</div>
                    </div>
                    <ExternalLink
                      href={p.url}
                      className="btn btn-ghost mt-2 md:mt-0"
                    >
                      Öffnen
                    </ExternalLink>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-black/50">
                Hinweis: Link #5 ist identisch zu #4 und wird daher nicht doppelt
                angezeigt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="mt-16 md:mt-20 pb-16" id="kontakt">
        <div className="container-page">
          <SectionTitle
            kicker="Kontakt"
            title="Kontakt & Infos"
            subtitle="Schick mir ein paar Zeilen zu deinem Anliegen – ich melde mich mit nächsten Schritten."
          />

          <div className="grid gap-4 md:grid-cols-12">
            <Card className="md:col-span-7">
              <div className="text-sm font-semibold">Nachricht senden</div>
              <ContactForm />
            </Card>

            <Card className="md:col-span-5">
              <div className="text-sm font-semibold">Privat & Kassen</div>
              <p className="mt-2 text-sm text-black/60">
                Privat abrechenbar. Je nach Versicherung ist eine teilweise
                Refundierung möglich – Details klären wir im Erstgespräch.
              </p>

              <div className="mt-6 border-t border-black/5 pt-5">
                <div className="text-sm font-semibold">Für Institutionen</div>
                <p className="mt-2 text-sm text-black/60">
                  Supervision, Workshops und Zusammenarbeit nach Vereinbarung.
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                  <div className="text-xs text-black/60">Ort</div>
                  <div className="text-sm font-medium">Wien</div>
                </div>

                {/* Optional: Telefon anzeigen, E-Mail bewusst nicht */}
                <div className="rounded-xl border border-black/10 bg-black/[0.02] p-4">
                  <div className="text-xs text-black/60">Kontakt</div>
                  <div className="text-sm font-medium">
                    Bitte über das Formular
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a className="btn btn-ghost w-full" href="#start">
                  Nach oben
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}


