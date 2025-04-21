import Image from "next/image"

export default function ImprintPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA AI Impressum"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Impressum</h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
        </div>
      </section>

      {/* Imprint Content */}
      <section className="bg-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-lg">
            <p>
              Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und
              Offenlegungspflicht laut §25 Mediengesetz.
            </p>

            <div className="my-8">
              <p className="font-semibold">IUNA AI Systems GmbH</p>
              <p>Humboldtstr. 14,</p>
              <p>74199 Untergruppenbach,</p>
              <p>Deutschland</p>
            </div>

            <p>Vertreten durch den Geschäftsführer: Herr Jan Nabatian</p>

            <div className="my-6">
              <p>
                Tel.: <a href="tel:+4915255386189">+49 152 5538 6189</a>
              </p>
              <p>
                E-Mail: <a href="mailto:sales@iuna.ai">sales@iuna.ai</a>
              </p>
            </div>

            <h2>Handelsregistereintrag</h2>
            <p>Eintrag im Handelsregister</p>
            <p>Registergericht: Amtsgericht Stuttgart</p>
            <p>Registernummer: HRB 774222</p>

            <h2>Umsatzsteuer</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p>DE334749915</p>

            <h2>EU-Streitschlichtung</h2>
            <p>
              Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir
              Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren. Verbraucher haben die
              Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der Europäischen Kommission unter{" "}
              <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">
                http://ec.europa.eu/odr
              </a>{" "}
              zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
            </p>
            <p>
              Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte dieser Website</h2>
            <p>
              Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns, korrekte und aktuelle
              Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf
              dieser Website übernehmen, speziell für jene, die von Dritten bereitgestellt wurden.
            </p>
            <p>
              Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie, uns umgehend zu
              kontaktieren, Sie finden die Kontaktdaten im Impressum.
            </p>

            <h2>Urheberrechtshinweis</h2>
            <p>
              Alle Inhalte dieser Website (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig,
              werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
            </p>
            <p>
              Sollten Sie auf dieser Website Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie, uns zu
              kontaktieren.
            </p>

            <h2>Haftung für Links auf dieser Website</h2>
            <p>
              Unsere Website enthält Links zu anderen Websites, für deren Inhalt wir nicht verantwortlich sind. Haftung
              für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und
              haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen
              würden, wenn uns Rechtswidrigkeiten bekannt werden.
            </p>
            <p>
              Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie, uns zu kontaktieren, Sie
              finden die Kontaktdaten im Impressum.
            </p>

            <h2>Bildnachweise</h2>
            <p>Die Bilder, Fotos und Grafiken auf dieser Website sind urheberrechtlich geschützt.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
