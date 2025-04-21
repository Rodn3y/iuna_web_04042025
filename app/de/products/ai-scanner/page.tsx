import Image from "next/image"
import { Check, Zap, Shield, Cpu, DollarSign, Target, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AIScanner() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header-ai-scanner.jpeg"
            alt="IUNA AI Scanner - Automatisiertes visuelles Inspektionssystem"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            IUNA AI Scanner
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
            Automatisierte visuelle Inspektion für Ihre Produktion
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Das intelligente Kamerasystem für Ihre Qualitätssicherung
          </h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-600">
            <p>
              Mit dem IUNA AI Scanner bieten wir Ihnen ein System, das flexibel in der Qualitätssicherung eingesetzt
              werden kann. Jeder AI Scanner wird individuell für Ihren Fertigungsprozess konfiguriert. Durch die
              optimale Abstimmung von Software und Hardware maximieren wir die Zuverlässigkeit der Inspektion.
            </p>
            <p>
              Für unseren AI Scanner kombinieren wir hochauflösende Industriekameras und maßgeschneiderte KI-Modelle. So
              können wir Ihnen automatisierte Prüfungen mit maximaler Präzision anbieten.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Application Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Anwendungsbereiche</h2>
            <p className="mt-4 text-lg text-gray-600">
              Der IUNA AI Scanner bietet vielseitige Lösungen für eine breite Palette von Herausforderungen in der
              Qualitätssicherung in der Fertigung
            </p>
          </div>

          {/* Presence Check */}
          <div className="grid gap-16 items-center md:grid-cols-2 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Anwesenheitsprüfung</h3>
              <p className="text-lg text-gray-600 mb-6">
                Unser AI Scanner zeichnet sich durch die Überprüfung der Anwesenheit kritischer Komponenten in komplexen
                Baugruppen aus. Das System kann selbst kleine Teile wie Muttern, Schrauben, Clips und Steckverbinder mit
                hoher Präzision erkennen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Überprüfung von Muttern, Schrauben, Bolzen und Clips</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Erkennung fehlender oder falsch installierter Komponenten</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Inspektion mehrerer Merkmale in einem einzigen Zyklus</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Vermeidung kostspieliger Montagefehler und Nacharbeit</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-800 p-4">
              <Image
                src="/images/presence-check-rendering-camera-red.png"
                alt="IUNA AI Scanner - Anwesenheitsprüfung von Automobilkomponenten"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Dimensional Measurement */}
          <div className="grid gap-16 items-center md:grid-cols-2 mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dimensionale Messung</h3>
              <p className="text-lg text-gray-600 mb-6">
                Unser AI Scanner liefert präzise Maßmessungen kritischer Komponenten und stellt sicher, dass sie den
                exakten Spezifikationen entsprechen. Das System kann Abstände, Winkel, Durchmesser und andere
                geometrische Parameter mit Submillimeter-Genauigkeit messen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Überprüfung von Maß- und Lagetoleranzen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Messung von Lochabständen, Winkeln und Spalten</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Vergleich mit CAD-Spezifikationen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Gleichzeitige Messung mehrerer Dimensionen in der Linie</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl bg-gray-800 p-4">
              <Image
                src="/images/dimensional-measurement-rendering-measure-large.png"
                alt="IUNA AI Scanner - Dimensionale Messung von Automobilkomponenten"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* OCR and Additional Applications */}
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {/* OCR */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optische Zeichenerkennung (OCR)</h3>
              <p className="text-gray-600 mb-6">
                Unser AI Scanner kann Text, Codes und Seriennummern auf Komponenten und Baugruppen lesen und überprüfen,
                um die Rückverfolgbarkeit und korrekte Teileidentifikation zu gewährleisten.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">Lesen von Datumscodes und Seriennummern</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">Überprüfung von Teilekennzeichnungen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">
                    Kompatibel mit verschiedenen Markierungsmethoden, z.B. Laserschneiden, Stempeln, Gravieren
                  </span>
                </li>
              </ul>
            </div>

            {/* Completeness Check */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vollständigkeitsprüfung</h3>
              <p className="text-gray-600 mb-6">
                Unser AI Scanner stellt sicher, dass alle erforderlichen Komponenten in einer Baugruppe vorhanden sind,
                und verhindert so kostspielige Fehler und Nacharbeit in späteren Produktionsphasen.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">Überprüfung vollständiger Baugruppen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">Erkennung fehlender Komponenten</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-2 text-gray-600">Prüfung auf korrekte Komponentenpositionierung</span>
                </li>
              </ul>
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
                  alt="Hochauflösende Industriekamera für AI Scanner"
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
                    <span className="ml-2">Maßgeschneidertes Beleuchtungsdesign</span>
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
                  src="/images/ai-scanner-software.png"
                  alt="IUNA AI Vision Software-Oberfläche"
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
                  alt="IUNA AI Station für automatisierte visuelle Inspektion"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Box</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Kleiner und effizienter KI-Computer für die Bildverarbeitung</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">Robust und zuverlässig</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2">
                      Kompatibel mit gängigen Schnittstellen (PROFINET, ProfiBus, digitale IOs,...)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Automatisierung ohne Grenzen</h2>
            <p className="mt-4 text-lg text-gray-600">
              Der IUNA AI Scanner bietet zahlreiche Vorteile für Ihre Produktion
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Einfach</h3>
              <p className="text-gray-600">
                Die Benutzeroberfläche unserer Inspektionssoftware kann ohne Expertenwissen und mit wenigen Klicks
                eingerichtet werden.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent</h3>
              <p className="text-gray-600">
                Für unsere Software kombinieren wir die neuesten Methoden und KI-Modelle für ein Maximum an Genauigkeit
                und Flexibilität.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sicher</h3>
              <p className="text-gray-600">
                Die Sicherheit Ihrer Daten hat für uns höchste Priorität. Die gesamte Datenverarbeitung läuft lokal oder
                über ein verschlüsseltes Cloud-System.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kosteneffizient</h3>
              <p className="text-gray-600">
                Mit dem AI Scanner sparen Sie Arbeitszeit und Geld. Gleichzeitig sind die Kosten kalkulierbar und
                amortisieren sich frühzeitig.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leistungsstark</h3>
              <p className="text-gray-600">
                Durch Multi-GPU-Verarbeitung kann der AI Scanner große Datenmengen sehr schnell verarbeiten und kurze
                Taktzeiten einhalten.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Präzise</h3>
              <p className="text-gray-600">
                Durch die individuelle Auswahl der Hardware maximieren wir die Zuverlässigkeit der Prüfung entsprechend
                Ihrem Anwendungsfall.
              </p>
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
              Unser bewährter Implementierungsprozess gewährleistet eine reibungslose Integration des IUNA AI Scanners
              in Ihre Produktion
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
                Wir integrieren die Kamera, das Lichtmodul und die AI Box in Ihren Produktionsprozess und installieren
                unsere AI Vision-Software.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kennzeichnung</h3>
              <p className="text-gray-600">
                Die ersten Bilddaten werden verwendet, um die AI-Inspektionssoftware zu trainieren. Hierfür ist bereits
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
                Von nun an übernimmt der AI Scanner Ihre Inspektion vollautomatisch. Mit Hilfe der Benutzeroberfläche
                mit Statistikfunktion erhalten Sie volle Transparenz über Ihr Qualitätsniveau.
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
              Bereit, Ihre Qualitätskontrolle zu automatisieren?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Kontaktieren Sie unser Team, um eine persönliche Demonstration des IUNA AI Scanners zu vereinbaren.
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
