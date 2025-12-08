import Image from "next/image"
import {
  Check,
  Zap,
  Shield,
  Cpu,
  DollarSign,
  Target,
  Gauge,
  Camera,
  Globe,
  Lightbulb,
  Monitor,
  Eye,
  Server,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AssemblyInspector() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header-ai-scanner.jpeg"
            alt="IUNA Assembly Inspector - Automatisiertes visuelles Inspektionssystem"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            IUNA Assembly Inspector
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
              Mit dem IUNA Assembly Inspector bieten wir Ihnen ein System, das flexibel in der Qualitätssicherung
              eingesetzt werden kann. Jeder Assembly Inspector wird individuell für Ihren Fertigungsprozess
              konfiguriert. Durch die optimale Abstimmung von Software und Hardware maximieren wir die Zuverlässigkeit
              der Inspektion.
            </p>
            <p>
              Für unseren Assembly Inspector kombinieren wir hochauflösende Industriekameras und maßgeschneiderte
              KI-Modelle. So können wir Ihnen automatisierte Prüfungen mit maximaler Präzision anbieten.
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
              Der IUNA Assembly Inspector bietet vielseitige Lösungen für eine breite Palette von Herausforderungen in
              der Qualitätssicherung in der Fertigung
            </p>
          </div>

          {/* Presence Check */}
          <div className="grid gap-16 items-center md:grid-cols-2 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Anwesenheitsprüfung</h3>
              <p className="text-lg text-gray-600 mb-6">
                Unser Assembly Inspector zeichnet sich durch die Überprüfung der Anwesenheit kritischer Komponenten in
                komplexen Baugruppen aus. Das System kann selbst kleine Teile wie Muttern, Schrauben, Clips und
                Steckverbinder mit hoher Präzision erkennen.
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
                alt="IUNA Assembly Inspector - Anwesenheitsprüfung von Automobilkomponenten"
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
                Unser Assembly Inspector liefert präzise Maßmessungen kritischer Komponenten und stellt sicher, dass sie
                den exakten Spezifikationen entsprechen. Das System kann Abstände, Winkel, Durchmesser und andere
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
                alt="IUNA Assembly Inspector - Dimensionale Messung von Automobilkomponenten"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* OCR and Additional Applications */}
          <div className="grid gap-12 md:grid-cols-2 mt-12">
            {/* OCR */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Optische Zeichenerkennung (OCR)</h3>
              <p className="text-lg text-gray-600 mb-6">
                Lesen und überprüfen Sie Texte, Seriennummern und Etiketten auf Bauteilen. Unser OCR-System verarbeitet
                verschiedene Schriftarten, Größen und Oberflächen mit hoher Genauigkeit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Text- und Seriennummererkennung</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Unterstützung verschiedener Schriftarten und Oberflächen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Etikettenverifizierung und Qualitätskontrolle</span>
                </li>
              </ul>
            </div>

            {/* Code Reading */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Code-Erkennung</h3>
              <p className="text-lg text-gray-600 mb-6">
                Der Assembly Inspector liest und verifiziert zuverlässig QR-Codes, Datamatrix-Codes und Barcodes. Dies
                ermöglicht eine lückenlose Rückverfolgbarkeit und automatische Identifikation von Komponenten während
                des gesamten Produktionsprozesses.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Lesen von QR-Codes, Datamatrix-Codes und Barcodes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Komponenten-Rückverfolgbarkeit während der Produktion</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Verifizierung der Code-Lesbarkeit und des Inhalts</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Integration mit MES- und ERP-Systemen</span>
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
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Systemarchitektur
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Modulares Design für maximale Flexibilität
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Unser komplettes schlüsselfertiges System enthält alle Hardware- und Softwarekomponenten für zuverlässige
              visuelle Inspektion
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start mb-16">
            {/* Left: Featured User Interface */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-2xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-2">IUNA Control Center</span>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src="/images/ai-scanner-software.png"
                    alt="IUNA Assembly Inspector Benutzeroberfläche mit Inspektionsergebnissen"
                    fill
                    className="object-contain bg-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* Right: Vision Software Description */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
                <Monitor className="h-5 w-5" />
                <span>Vision Software</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intuitive Benutzeroberfläche</h3>
              <p className="text-gray-600 mb-6">
                Die Benutzeroberfläche wird direkt auf dem IUNA Assembly Server gehostet und kann über jeden Webbrowser
                von jedem PC mit Netzwerkverbindung zum Server aufgerufen werden. Keine zusätzliche Softwareinstallation
                erforderlich.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Echtzeit-Visualisierung</h4>
                    <p className="text-sm text-gray-600">
                      Bediener sehen Inspektionsergebnisse sofort mit klaren OK/NOK-Statusanzeigen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sofortige Ergebnisse</h4>
                    <p className="text-sm text-gray-600">
                      Schnelle KI-Inferenz liefert Inspektionsergebnisse mit detaillierten Fehlerinformationen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Browserbasierter Zugriff</h4>
                    <p className="text-sm text-gray-600">
                      Zugriff von jedem vernetzten Gerät - keine Client-Software-Installation erforderlich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hardware Components Grid */}
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Industrial Camera */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 p-6">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src="/images/high-res-industrial-camera.webp"
                    alt="Hochauflösende Industriekamera für visuelle Inspektion"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Camera className="h-4 w-4" />
                    <span className="text-sm">Bilderfassung</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Industriekamera</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Hochauflösende Industriekameras</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Inklusive Objektive und Montage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IUNA Assembly Server */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 p-6">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src="/images/ai-station.jpeg"
                    alt="IUNA Assembly Server für visuelle Inspektion"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Server className="h-4 w-4" />
                    <span className="text-sm">Verarbeitungseinheit</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">IUNA Assembly Server</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>KI-Inferenz für Bildverarbeitung</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Verfügbar im 19″ Rackgehäuse</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PLC */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 p-6">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src="/images/simatic-s7-plc.jpg"
                    alt="Siemens SIMATIC S7 SPS für Systemintegration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Cpu className="h-4 w-4" />
                    <span className="text-sm">Steuereinheit</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">SPS</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>PROFINET Simatic oder EtherNet/IP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Nahtlose Linienintegration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision Light */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 p-6">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src="/images/smart-vision-light.jpg"
                    alt="Smart Vision Light für optimale Beleuchtung"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Lightbulb className="h-4 w-4" />
                    <span className="text-sm">Beleuchtung</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Vision Light</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Industrielle LED-Beleuchtung</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Optimale Bauteilsichtbarkeit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Vorteile des IUNA Assembly Inspector</h2>
            <p className="mt-4 text-lg text-gray-600">
              Der IUNA Assembly Inspector bietet zahlreiche Vorteile für Ihre Produktion
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Maximale Präzision</h3>
              <p className="text-gray-600">
                Unsere KI-Modelle sind für höchste Präzision trainiert und liefern zuverlässige Inspektionsergebnisse.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Schnelle Integration</h3>
              <p className="text-gray-600">
                Unsere Systeme können nahtlos in bestehende Produktionslinien integriert werden.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Zuverlässige Ergebnisse</h3>
              <p className="text-gray-600">Konsistente Qualitätskontrolle durch objektive KI-basierte Inspektion.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kosteneffizienz</h3>
              <p className="text-gray-600">
                Mit dem Assembly Inspector sparen Sie Arbeitszeit und Geld. Gleichzeitig sind die Kosten kalkulierbar
                und transparent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Schnelle Taktzeiten</h3>
              <p className="text-gray-600">
                Durch Multi-GPU-Verarbeitung kann der Assembly Inspector große Datenmengen sehr schnell verarbeiten und
                kurze Taktzeiten einhalten.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Individuelle KI-Modelle</h3>
              <p className="text-gray-600">
                Unsere KI-Modelle werden individuell für Ihre spezifischen Anforderungen trainiert und optimiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Unser Implementierungsprozess</h2>
            <p className="mt-4 text-lg text-gray-600">
              Unser bewährter Implementierungsprozess gewährleistet eine reibungslose Integration des IUNA Assembly
              Inspector in Ihre Produktionsumgebung
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bewertung des Anwendungsfalls</h3>
              <p className="text-gray-600">
                Wir analysieren Ihre Anforderungen und entwickeln ein maßgeschneidertes Lösungskonzept.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Systeminstallation</h3>
              <p className="text-gray-600">
                Wir installieren die komplette Hardware inkl. Industriekamera, IUNA Assembly Server, SPS, Lichttechnik
                und bei Bedarf Prüfzelle vor Ort.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">KI-Modell Anlernen & Konfiguration</h3>
              <p className="text-gray-600">
                Wir trainieren und konfigurieren die KI-Modelle speziell für Ihre Inspektionsaufgabe.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Autonome Prüfung</h3>
              <p className="text-gray-600">
                Von nun an übernimmt der Assembly Inspector Ihre Inspektion vollautomatisch. Mit Hilfe der
                Benutzeroberfläche können Sie die Ergebnisse jederzeit verfolgen und auswerten.
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
              Bereit, Ihre Qualitätssicherung zu optimieren?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Kontaktieren Sie unser Team, um eine persönliche Demonstration des IUNA Assembly Inspector zu vereinbaren.
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
