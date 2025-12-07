import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Full viewport height */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/automotive-head.jpg"
            alt="AI Vision Systeme für die Automobilfertigung"
            fill
            className="object-cover brightness-[0.4]"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>
        <div className="relative z-10 flex h-full flex-col">
          {/* Hauptinhalt - vertikal zentriert */}
          <div className="flex flex-grow items-center">
            <div className="container px-4 sm:px-6 lg:px-8">
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                IUNA AI Vision Systeme
              </h1>
              <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
              <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
                für die automatisierte Schweißnahtprüfung und dimensionale Vermessung
              </p>
            </div>
          </div>

          {/* Client Logos Section - Full width */}
          <div className="w-full bg-black/50 py-8 backdrop-blur-sm">
            <div className="container px-4 sm:px-6 lg:px-8">
              <p className="mb-6 text-center text-lg font-medium text-white">
                IUNA AI arbeitet mit Automobilherstellern, Zulieferern und Anlagenbauern zusammen
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_vw.png"
                    alt="VW Logo weiß"
                    width={70}
                    height={70}
                    className="h-[70px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_audi.png"
                    alt="Audi Logo weiß"
                    width={90}
                    height={90}
                    className="h-[90px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_awl.png"
                    alt="AWL Logo weiß"
                    width={120}
                    height={40}
                    className="h-[40px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_ehr.png"
                    alt="EHR Logo weiß"
                    width={70}
                    height={35}
                    className="h-[35px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_heidelberg.png"
                    alt="Heidelberger Druckmaschinen Logo weiß"
                    width={120}
                    height={60}
                    className="h-[60px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_schedl.png"
                    alt="Schedl Automotive Logo weiß"
                    width={100}
                    height={100}
                    className="h-[100px] w-auto object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Unsere Kernkompetenzen</h2>
            <p className="mt-4 text-lg text-gray-300">
              Fortschrittliche AI Vision Lösungen für die Automobil- und Fertigungsindustrie
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {/* Dimensional Measurement */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-gray-800">
                <Image
                  src="/images/dimensional-measurement-rendering-measure-large.png"
                  alt="Dimensionale Messung - 3D-Rendering mit Messskala"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Dimensionale Messung</h3>
              <p className="mb-6 text-gray-300">
                Überprüfen Sie die Einhaltung von Maß- und Lagetoleranzen, Lochabständen und Winkeln gleichzeitig und
                in-line.
              </p>
              <Link href="/de/products/ai-scanner">
                <Button
                  variant="outline"
                  className="mt-auto group border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  MEHR ERFAHREN
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Presence Check */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-gray-800">
                <Image
                  src="/images/presence-check-rendering-camera-red.png"
                  alt="Anwesenheitsprüfung - Kamerainspektionssystem"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Anwesenheitsprüfung</h3>
              <p className="mb-6 text-gray-300">
                Führen Sie Anwesenheitsprüfungen für Merkmale wie Muttern, Schrauben, Bolzen und Löcher während
                desselben Inspektionszyklus durch.
              </p>
              <Link href="/de/products/ai-scanner">
                <Button
                  variant="outline"
                  className="mt-auto group border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  MEHR ERFAHREN
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Weld Seam Inspection */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-gray-800">
                <Image
                  src="/images/weld-seam-inspection-rendering-spark-croped.png"
                  alt="Schweißnahtinspektion - Roboterinspektion mit Funkenvisualisierung"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Schweißnahtinspektion</h3>
              <p className="mb-6 text-gray-300">
                KI-gestützte Fehlererkennung: Das IUNA AI Vision System verwendet fortschrittliche neuronale Netzwerke,
                um OK- und Nicht-OK-Schweißnähte direkt aus den aufgenommenen Bildern zu identifizieren.
              </p>
              <Link href="/de/products/ai-weld-inspector">
                <Button
                  variant="outline"
                  className="mt-auto group border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  MEHR ERFAHREN
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Unsere Produkte</h2>
            <p className="mt-4 text-xl text-gray-600">
              AI Vision Systeme, die für Präzision, Zuverlässigkeit und Effizienz entwickelt wurden
            </p>
          </div>

          {/* AI Weld Inspector */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Weld Inspector</h3>
              <p className="text-lg text-gray-600 mb-6">
                Unser IUNA AI Weld Inspector verwendet fortschrittliche KI-Algorithmen, um Schweißfehler mit
                beispielloser Genauigkeit zu erkennen und zu klassifizieren. Das System unterscheidet zwischen
                akzeptablen (I.O.) und fehlerhaften (N.I.O.) Schweißnähten und liefert sofortiges Feedback zur
                Optimierung Ihres Fertigungsprozesses.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">KI-gestütztes Fehlerklassifizierungssystem</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Erkennt Poren, Risse, Kerben und andere Schweißfehler</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Nahtlose Integration in bestehende Produktionslinien</span>
                </li>
              </ul>
              <Link href="/de/products/ai-weld-inspector">
                <Button className="group">
                  Mehr über den AI Weld Inspector erfahren
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/weld-seam-scanner.png"
                  alt="IUNA AI Weld Inspector - KI-gestütztes Schweißinspektionssystem, das gute und fehlerhafte Schweißnähte zeigt"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* AI Scanner */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/ai-scanner.png"
                  alt="IUNA AI Scanner - Roboter-Sichtsystem zur Inspektion von Automobilkomponenten"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Scanner</h3>
              <p className="text-lg text-gray-600 mb-6">
                Mit dem IUNA AI Scanner bieten wir Ihnen ein System, das flexibel in der Qualitätssicherung eingesetzt
                werden kann. Jeder AI Scanner wird individuell für Sie konfiguriert. Durch die optimale Abstimmung von
                Software und Hardware maximieren wir die Zuverlässigkeit der Inspektion.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Für unseren AI Scanner kombinieren wir hochauflösende Industriekameras, die neueste
                NVIDIA-Chip-Generation und vortrainierte und angepasste KI-Modelle. So können wir Ihnen automatisierte
                Tests mit maximaler Präzision anbieten.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Anwendungsfälle</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Anwesenheitsprüfung</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Positionsprüfung</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Optische Zeichenerkennung (OCR)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Vollständigkeitsprüfung</span>
                </li>
              </ul>
              <Link href="/de/products/ai-scanner">
                <Button className="group">
                  Mehr über den AI Scanner erfahren
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bereit, Ihren Fertigungsprozess zu transformieren?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Vereinbaren Sie eine Beratung mit unseren Experten, um zu erfahren, wie unsere AI Vision Systeme die
              Qualität verbessern, Kosten senken und die Effizienz steigern können.
            </p>
            <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/de/contact#schedule-consultation">
                <Button size="lg" variant="secondary">
                  Beratung vereinbaren
                </Button>
              </Link>
              <Link href="/de/contact#contact-form">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300"
                >
                  Demo anfragen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
