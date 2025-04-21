import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageSlider } from "@/components/image-slider"

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/news-header-camera.jpg"
            alt="Industrielle Visionskamera in der Automobilfertigung"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Neuigkeiten & Updates
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
            Bleiben Sie über die neuesten Entwicklungen und Erfolge bei IUNA AI informiert
          </p>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-lg font-medium text-gray-700">
              Folgen Sie uns in den sozialen Medien für weitere Updates:
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/iuna-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://x.com/iunaai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="font-medium">X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>28. Juni 2024</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Ventilkappenerkennung: IUNA unterstützt Rad- und Reifenmontage für OEMs
              </h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/manufacturing-worker.png"
                  alt="IUNA AI Ventilkappenerkennung"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs text-white text-center">
                  Bildquelle: Audi AG
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  Für unsere Kunden ist die Überprüfung der korrekten Rad-/Reifenkombinationen vor der Auslieferung an
                  den Fahrzeughersteller eine große Herausforderung. Aufgrund der zunehmenden Diversifizierung und
                  Individualisierung von Reifen, Felgen und Ventilkappen sind die Anforderungen an Präzision und
                  Genauigkeit bei der Reifenmontage in den letzten Jahren stark gestiegen.
                </p>
                <p>
                  Dank des IUNA AI Scanners ist es jetzt möglich, diesen Inspektionsprozess zu automatisieren. Der IUNA
                  AI Scanner vergleicht Farbe und Form der Ventilkappe und des Ventils auf dem Bild und gleicht diese
                  Informationen mit dem Sollwert aus der Datenbank ab. Dieser Einsatz von industrieller Computer Vision
                  und KI-Technologie vermeidet Fehler und Rücksendungen bereits vor der Auslieferung.
                </p>
              </div>
            </div>

            {/* News Item - Auto Scanner Development */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>14. Oktober 2023</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Weiterentwicklung des IUNA Auto Scanners für den Einsatz in der Endmontage (Finish)
              </h2>

              {/* Slider in eigenem Container mit fester Höhe */}
              <div className="w-full mb-24" style={{ height: "400px" }}>
                <ImageSlider
                  images={[
                    {
                      src: "/images/auto-scanner-discussion.jpeg",
                      alt: "IUNA Teammitglied diskutiert Auto Scanner Ergebnisse mit Audi-Spezialist",
                    },
                    {
                      src: "/images/auto-scanner-inspection-station.jpeg",
                      alt: "Audi e-tron GT in der Auto Scanner Inspektionsstation mit Visualisierungsanzeige",
                    },
                    {
                      src: "/images/auto-scanner-cameras.jpeg",
                      alt: "Hochpräzisionskameras am Auto Scanner Inspektionssystem montiert",
                    },
                  ]}
                  aspectRatio="wide"
                  showAttribution={true}
                  attribution="Bildquelle: Audi AG"
                  className="h-full w-full"
                />
              </div>

              {/* Visueller Trenner */}
              <div className="w-full h-1 bg-gray-200 my-6"></div>

              {/* Text content in separatem Container mit extra Abstand */}
              <div className="prose prose-lg max-w-none mt-20 pt-6">
                <p>
                  Wir sind stolz, die neueste Entwicklung unseres IUNA Auto Scanners bekannt zu geben. Der Auto Scanner
                  kann jetzt auch im Finishing-Prozess eingesetzt werden und erkennt präzise Lackfehler, Dellen, Beulen
                  und andere Oberflächendefekte. Diese Erweiterung ermöglicht es Fahrzeugherstellern, die Qualität ihrer
                  Produkte weiter zu verbessern und die Effizienz der Endkontrolle zu steigern.
                </p>
                <p>
                  Das System verwendet fortschrittliche Computer Vision und KI-Algorithmen, um selbst subtile
                  Unvollkommenheiten zu identifizieren, die von menschlichen Inspektoren möglicherweise übersehen
                  werden. Unsere Zusammenarbeit mit Audi war maßgeblich für die Verfeinerung dieser Technologie für
                  hochwertige Automobilanwendungen.
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>28. Juli 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Presseartikel / IUNA AI x Audi</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Der aktuelle Artikel der Heilbronner Stimme beschreibt, wie Audi den Wandel in der Produktion
                  zukünftig vorantreiben will und auch wie wir bei IUNA AI dabei helfen, diesen Wandel mitzugestalten.
                  Unser Ziel war es schon immer, KI-Technologie so einfach und schnell wie möglich in die heutige
                  Fertigung zu bringen. Genau das konnten wir für Audi bereits umsetzen. Weitere Projekte mit Audi
                  befinden sich in der Planungsphase.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.stimme.de/wirtschaft/baden-wuerttemberg/wirtschaft/audi-startet-radikalen-umbau-der-produktion-digitalisierung-kosten-geschwindigkeit-art-4655141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Mehr lesen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>27. Mai 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                IUNA AI als Gewinner des Industrie 4.0 Awards
              </h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/industry-4-award.png"
                  alt="IUNA AI Präsentation bei der Industrie 4.0 Award Veranstaltung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  IUNA AI ist einer der "100 Orte für Industrie 4.0" in Baden-Württemberg und wurde als eines von acht
                  Leuchtturmprojekten von der Allianz Industrie 4.0 ausgezeichnet. Die Auszeichnung wurde online durch
                  eine Videobotschaft des Staatssekretärs Dr. Patrick Rapp überreicht.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.i40-bw.de/100-orte-acht-leuchtturmprojekte-zur-industrie-4-0-im-land-ausgezeichnet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Mehr lesen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>20. April 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Finanzierung / Campus Founders Venture Studio x WOLFMAN.ONE
              </h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/campus-founders-meeting.webp"
                  alt="IUNA AI Team unterzeichnet Finanzierungsvereinbarung mit Campus Founders und WOLFMAN.ONE"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  Um die Produktentwicklung weiter zu beschleunigen, haben wir Anfang 2022 die Entscheidung getroffen,
                  eine erste Finanzierungsrunde abzuschließen. Nach sorgfältiger Prüfung aller Angebote fiel die
                  endgültige Entscheidung zugunsten zweier lokaler und erfahrener VC-Unternehmen aus dem Heilbronner
                  Raum: Die Campus Founders Venture Studios und der erfahrene Business Angel Prof. Wolf Nietzer mit der
                  VC Corporation Wolfman.One.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.stimme.de/wirtschaft/baden-wuerttemberg/wirtschaft/iuna-ai-mit-100000-euro-starthilfe-bei-audi-punkten-art-4629967"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Mehr lesen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>15. Februar 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Auto Scanner v3 / Karosseriebau</h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/auto-scanner-v3-interface.jpeg"
                  alt="IUNA Auto Scanner v3 Oberfläche zeigt Karosserieanalyse in der Audi-Produktionsanlage"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs text-white text-center">
                  Bildquelle: Audi AG
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  Die dritte Version unseres Auto Scanners wurde um die Funktionalität der "Anomalieerkennung"
                  erweitert. Hier erkennt das System nicht nur vordefinierte Defekte, sondern ist auch in der Lage, die
                  gesamte Fahrzeugoberfläche auf Anomalien zu überprüfen. Anomalien sind Defekte, für die wenig bis
                  keine Bilddaten aus der Vergangenheit vorliegen. Dadurch können auch seltene Defekte, die sonst nur
                  von Menschen erkannt würden, vollautomatisch erkannt werden. Dadurch wurde im Karosseriebau von Audi
                  eine vollständige Automatisierung des Inspektionsprozesses erreicht, die die manuelle Sichtprüfung
                  ersetzt.
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>24. September 2021</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Release IUNA AI Scanner</h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image src="/images/ai-scanner.png" alt="IUNA AI Scanner" fill className="object-cover" />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  Basierend auf dem Know-how des Auto Scanners wurde im September 2021 der IUNA AI Scanner entwickelt.
                  Mit dem AI Scanner haben wir ein modulares und einfach zu bedienendes AI Vision System entwickelt, das
                  in-line integriert werden kann. In Kombination mit der richtigen Softwareanwendung sind wir flexibel,
                  um eine Vielzahl von Aufgaben in der industriellen Fertigung zu lösen.
                </p>
                <div className="mt-6">
                  <Link
                    href="/de/products/ai-scanner"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Mehr lesen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>11. März 2021</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Auto Scanner v2 / Karosseriebau</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Im März wurde die zweite Version des IUNA Auto Scanners fertiggestellt. Das System prüft
                  Standardpunkte an der Karosserie des Fahrzeugs auf Oberflächengeometriedefekte. Dazu gehören
                  Welligkeit, Eindruckstellen, Blechungleichgewichte und andere Defekte, die vor allem im Karosseriebau
                  auftreten. Darüber hinaus helfen die Daten der jeweiligen Fachabteilung, prozessbedingte Fehler oder
                  durch Zulieferer verursachte Fehler zu erkennen.
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>1. September 2020</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Iuna.ai wird Entwicklungspartner der Audi AG
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Im September 2020 wurde iuna.ai offizieller Entwicklungspartner von VW. Ziel der
                  Entwicklungskooperation war die Weiterentwicklung des IUNA Auto Scanners v1 im Karosseriebau des Audi
                  R8 zur vollautonomen Identifikation von Oberflächengeometriedefekten an der Karosserie.
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>20. Mai 2020</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Die IUNA AI Systems GmbH wird gegründet
              </h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/founding-team.jpeg"
                  alt="IUNA AI Gründerteam - Jan Nabatian, William Chen und Samira Nabatian in ihrem Büro"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  Im Mai 2020 wurde die IUNA AI Systems GmbH mit dem Ziel gegründet, die Automatisierung in der
                  industriellen Fertigung im Bereich der visuellen Inspektion und Qualitätssicherung zu revolutionieren.
                  Gesellschafter der GmbH sind Jan Nabatian (Geschäftsführer), Tong Chen (Leiter Produktentwicklung) und
                  Samira Nabatian (Leiterin Business Development).
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>15. März 2020</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Auto Scanner v1 / Oberflächenfehlererkennung
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Im März 2020 wurde die erste Version des Auto Scanners im Rahmen des Forschungsprojekts der Machine
                  Learning-Gruppe der Universität Stuttgart und Audi fertiggestellt. Damit wurde der Proof of Concept
                  einer KI-basierten Erkennung von Oberflächenschäden an Fahrzeugen auf dem Fließband erbracht.
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>1. September 2019</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Forschungsprojekt / Universität Stuttgart x Audi AG
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Die Idee für eine KI-basierte Bilddatenanalyse entstand aus einer Kooperation zwischen der
                  Universitätsgruppe für Machine Learning an der Universität Stuttgart und der Audi AG in Neckarsulm.
                  Ziel des Forschungsprojekts war es, den Proof of Concept einer KI-basierten autonomen
                  Qualitätssicherung von Fahrzeugen auf dem Fließband zu liefern. Die Universitätsgruppe wurde 2019 von
                  Jan Nabatian initiiert und geleitet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Möchten Sie mehr über unsere AI Vision Systeme erfahren?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Kontaktieren Sie unser Team, um eine persönliche Demonstration unserer Produkte zu vereinbaren.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/de/contact">
                <Button size="lg" variant="secondary">
                  Kontaktieren Sie uns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
