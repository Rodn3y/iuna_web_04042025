import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WeldSeamScannerPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA Schweißnahtscanner - KI-gestützte Schweißnahtinspektion"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            IUNA Schweißnahtscanner
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
            Vollautomatische visuelle Inspektion von Schweißnähten
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">KI-basierte Schweißnahtinspektion</h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-600">
            <p>
              Unser Standardsystem, bestehend aus einer oder mehreren Industriekameras, einem Industrie-PC und der IUNA
              AI-Software, kann individuell an Ihre Anforderungen angepasst werden und überzeugt durch seine einfache
              Integration in Ihren Produktionsprozess. Unser System eignet sich ideal zur Inspektion sowohl manuell als
              auch automatisch geschweißter Nähte.
            </p>
            <p>
              Mit dem IUNA Schweißnahtscanner profitieren Sie von einer effizienten, zuverlässigen und
              benutzerfreundlichen Lösung, die Ihre Qualitätskontrolle auf die nächste Stufe hebt. Ob Sie eine präzise
              Inspektion Ihrer Schweißnähte benötigen oder eine umfassende Dokumentation der Ergebnisse wünschen, unser
              System passt sich nahtlos in Ihre Produktionsumgebung ein und bietet Ihnen die Flexibilität und
              Genauigkeit, die Sie benötigen.
            </p>
            <p>
              Wir unterstützen die Inspektion aller gängigen Schweißverfahren, einschließlich MIG- und MAG-Schweißen.
            </p>
          </div>
        </div>
      </section>

      {/* Weld Testing Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Schweißnahtprüfung</h2>
              <p className="text-lg text-gray-600 mb-6">
                Mit dem IUNA Schweißnahtscanner können Sie verschiedene Prüf- und Inspektionsschritte automatisieren:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Ist die Schweißnaht vorhanden?</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Liegt die Schweißnaht innerhalb des vordefinierten Toleranzbereichs?
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Automatische Erkennung von Unregelmäßigkeiten in der Schweißnaht
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Automatische Erkennung von Rissen, Poren, offenen Endkraterblasenlöchern, Durchbrand, Spritzern,
                    übermäßiger Asymmetrie in der Kehlnaht und anderen Defekten, die in der normalen Produktion zu
                    erwarten sind
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/weld-seam-comparison.png"
                alt="IUNA Schweißnahtscanner - Vergleich von guten und fehlerhaften Schweißnähten"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Analysis Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Präzise KI-Analyse</h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser KI-gestütztes System analysiert jede Schweißnaht präzise, identifiziert den Toleranzbereich und
                führt eine detaillierte Segmentierung durch. Der IUNA Schweißnahtscanner kann selbst kleinste Defekte
                erkennen, die für das menschliche Auge möglicherweise unsichtbar sind.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Das System bestimmt automatisch, ob eine Schweißnaht innerhalb des akzeptablen Toleranzbereichs liegt,
                und hebt Bereiche hervor, die Aufmerksamkeit erfordern. Dies gewährleistet eine konsistente
                Qualitätskontrolle und reduziert das Risiko, dass fehlerhafte Teile die nächste Produktionsstufe
                erreichen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Präzise Toleranzmessung</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Fortschrittliche Segmentierungsalgorithmen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Echtzeit-Fehlererkennung</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/weld-seam-analysis.png"
                  alt="IUNA Schweißnahtscanner - KI-Analyse mit Toleranz und Segmentierung"
                  width={800}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
              Vorteile der automatisierten visuellen Schweißnahtinspektion
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kosteneffektive Lösung</h3>
                <p className="text-gray-600">
                  Der IUNA Schweißnahtscanner ist besonders benutzerfreundlich und effizient, da er für die Inspektion
                  nur eine hochauflösende Industriekamera und keinen teuren 3D-Lasersensor benötigt. Dies macht unser
                  System im Vergleich zu lasergestützten Inspektionssystemen deutlich kostengünstiger.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Überlegene Erkennungsfähigkeiten</h3>
                <p className="text-gray-600">
                  Unser System bietet hervorragende Leistung für Schweißnähte mit sehr geringen Höhen. Dank der
                  hochauflösenden Industriekamera kann der IUNA Schweißnahtscanner feine Details und kleine
                  Unregelmäßigkeiten erkennen, bei denen laserbasierte Systeme oft an ihre Grenzen stoßen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Konsistente Qualitätskontrolle</h3>
                <p className="text-gray-600">
                  Die automatisierte Inspektion eliminiert menschliche Fehler und gewährleistet eine konsistente,
                  objektive Bewertung von Schweißnähten, was die Produktqualität und -sicherheit erhöht. Dies ist
                  besonders wichtig in sicherheitskritischen Bereichen wie der Automobil- und Luftfahrtindustrie.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nahtlose Integration</h3>
                <p className="text-gray-600">
                  Die Integration in bestehende Produktionslinien ist unkompliziert und erhöht die Gesamteffizienz der
                  Produktion. Der IUNA Schweißnahtscanner bietet eine zuverlässige, wirtschaftliche und
                  benutzerfreundliche Lösung für moderne Anforderungen an die Qualitätskontrolle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Components Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Modulares Design für maximale Flexibilität
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unser System besteht aus drei Hauptkomponenten, die nahtlos zusammenarbeiten
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Industry Camera */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/high-res-industrial-camera.webp"
                  alt="Hochauflösende Industriekamera für die Schweißnahtinspektion"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industriekamera</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Eine oder mehrere hochauflösende Industriekameras</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">
                      Geeignet für die Inspektion von manuell und automatisch geschweißten Nähten
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Kann in bestehende Produktion integriert werden</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Software */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/weld-seam-scanner-interface.jpeg"
                  alt="IUNA AI Vision Software-Oberfläche für die Schweißnahtinspektion"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vision Software</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Benutzerfreundliche Oberfläche</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Echtzeit-Visualisierung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">KI-unterstützt</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Station */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/ai-station.jpeg"
                  alt="IUNA AI Station für die Schweißnahtinspektion"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">KI-Station</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">
                      KI-Inferenzserver für die Bildverarbeitung (auch im 19″-Gehäuse erhältlich)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">
                      Kompatibel mit gängigen Schnittstellen (PROFINET, ProfiBus, digitale IOs,...)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Robust und zuverlässig</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Dashboard */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Umfassende Statistiken und Berichte
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Der IUNA Schweißnahtscanner liefert detaillierte Statistiken und Berichte über Ihre Schweißqualität.
                Unser intuitives Dashboard gibt Ihnen volle Transparenz über Ihr Qualitätsniveau und ermöglicht Ihnen:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Verfolgung der Fehlerraten im Zeitverlauf</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Identifizierung wiederkehrender Probleme und ihrer Ursachen
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Erstellung detaillierter Berichte für das Qualitätsmanagement
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Export von Daten zur weiteren Analyse und Dokumentation</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/weld-seam-statistics.jpeg"
                alt="IUNA Schweißnahtscanner - Statistik-Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Die vier Schritte zur autonomen Inspektion
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unser bewährter Implementierungsprozess gewährleistet eine reibungslose Integration des IUNA
              Schweißnahtscanners in Ihre Produktion
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bewertung des Anwendungsfalls</h3>
              <p className="text-gray-600">
                Kontaktieren Sie uns. Gemeinsam prüfen wir Ihren Anwendungsfall und die Implementierungsmöglichkeiten.
                Danach wählen wir die erforderlichen Hardware-Komponenten aus.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Systeminstallation</h3>
              <p className="text-gray-600">
                Wir integrieren die Kamera, das Lichtmodul und die KI-Box in Ihren Produktionsprozess und installieren
                unsere KI-Vision-Software.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kennzeichnung</h3>
              <p className="text-gray-600">
                Die ersten Bilddaten werden verwendet, um die KI-Inspektionssoftware zu trainieren. Hierfür ist bereits
                eine kleine Menge an Bildern ausreichend.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonome Inspektion</h3>
              <p className="text-gray-600">
                Von nun an übernimmt der IUNA Schweißnahtscanner Ihre Inspektion vollautomatisch. Mit Hilfe der
                Statistikfunktion erhalten Sie volle Transparenz über Ihr Qualitätsniveau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bereit, Ihre Schweißnahtinspektion zu revolutionieren?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Kontaktieren Sie unser Team, um eine persönliche Demonstration des IUNA Schweißnahtscanners zu
              vereinbaren.
            </p>
            <p className="mb-6 text-gray-300">
              KI-gestützte Fehlererkennung: Das IUNA AI Vision System verwendet fortschrittliche neuronale Netzwerke, um
              OK- und Nicht-OK-Schweißnähte direkt aus den aufgenommenen Bildern zu identifizieren.
            </p>
            <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/de/contact#schedule-consultation">
                <Button size="lg" variant="secondary">
                  Beratungstermin vereinbaren
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
