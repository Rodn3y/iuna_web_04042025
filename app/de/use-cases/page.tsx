import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ImageSlider } from "@/components/image-slider"

export default function UseCasesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/auto-scanner-quality-assurance.jpeg"
            alt="AI Vision Systeme für die Automobilfertigung"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Anwendungsfälle
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
            Entdecken Sie, wie unsere AI Vision Systeme reale Herausforderungen in der Automobil- und
            Fertigungsindustrie lösen
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Überblick</h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-600">
            <p>
              Die Vision Systeme von IUNA AI werden in einer Vielzahl von Anwendungen in der Automobil- und
              Fertigungsindustrie eingesetzt. Unsere KI-gestützten Lösungen adressieren kritische Herausforderungen in
              der Qualitätskontrolle und ermöglichen automatisierte Inspektionen mit beispielloser Genauigkeit und
              Effizienz.
            </p>
            <p>
              Von der Schweißnahtinspektion bis zur optischen Zeichenerkennung lassen sich unsere Systeme nahtlos in
              bestehende Produktionslinien integrieren und sorgen für sofortige Verbesserungen der Qualität, Reduzierung
              der Kosten und Steigerung der betrieblichen Effizienz.
            </p>
          </div>
        </div>
      </section>

      {/* Weld Seam Inspection for Automotive Seating Structures */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Schweißnahtinspektion für Automotive Sitzstrukturen
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In dieser Anwendung prüft der IUNA AI Weld Inspector alle MAG-Schweißnähte einer Automotive
                Sitzstruktur. Die Kamera ist statisch montiert, während ein Handling-Roboter die Positionierung des
                Bauteils übernimmt und so eine umfassende Inspektionsabdeckung gewährleistet.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Statisch montierte Kamera für konsistente Inspektionsqualität
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Automatisiertes Bauteil-Handling über Industrieroboter</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Vollständige Inspektion aller MAG-Schweißnähte</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Echtzeit-Fehlererkennung und Klassifizierung</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Integration in die Produktionslinie für nahtlosen Workflow</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <ImageSlider
                images={[
                  {
                    src: "/images/seat-structure-mag-welding.jpg",
                    alt: "IUNA AI Schweißnahtinspektion - Automotive Sitzstruktur mit Handling-Roboter",
                  },
                  {
                    src: "/images/iuna-web-demo-seat-20250630-2.png",
                    alt: "IUNA AI Control Interface - 3D-Visualisierung der Schweißnahtinspektion mit Fehleranalyse",
                  },
                  {
                    src: "/images/seat-structure-ui-2.png",
                    alt: "IUNA AI Control Interface - Detaillierte Schweißnahtanalyse mit Fehlerklassifizierung",
                  },
                ]}
                aspectRatio="video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weld Seam Detection for Cross Car Beams */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Schweißnahterkennung für Cockpitträger
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser Schweißnahterkennungssystem für Cockpitträger (CCBs) bietet flexible Montageoptionen mit Kameras,
                die entweder statisch oder auf einem Industrieroboter montiert werden können. Dies ermöglicht eine
                vollautomatische Schweißnahtprüfung der CCBs inline mit einer weit schnelleren Taktzeit als es z.B. mit
                einem laserbasierten Prüfsystem möglich wäre.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Flexible Kameramontage: statisch oder robotergeführte Konfigurationen
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Vollautomatische Inline-Schweißnahtprüfung</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Weit schnellere Taktzeiten als laserbasierte Prüfsysteme</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Fast in Echtzeit automatisierte Fehlererkennung und Klassifizierung
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Optimiert für hochvolumige Automobilproduktionslinien</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ccb-weld-inspection-spark.png"
                alt="IUNA AI Schweißnahterkennung für Cockpitträger - Robotergeführtes Kamerasystem während des Schweißens"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fully Automated Inspection of Weld Seams on Vehicle Bodies */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Vollautomatische Inspektion von Schweißnähten an Fahrzeugkarosserien
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Der IUNA AI Weld Inspector ist in der Lage, die gesamte Fahrzeugkarosserie auf Schweißfehler zu prüfen.
                Jede einzelne Schweißnaht kann an unterschiedlichen Stationen in der Fertigung geprüft werden. Die
                Software prüft das Vorhandensein, die Länge sowie ob Schweißfehler wie Poren, Risse, Durchbrände, usw.
                vorhanden sind.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Vollständige Fahrzeugkarosserie-Inspektion über mehrere Produktionsstationen
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Prüft Vorhandensein, Länge und Schweißfehler (Poren, Risse, Durchbrände, usw.)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Kameras können statisch oder robotergestützt sein</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Unterstützt sowohl MIG als auch MAG Schweißen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Vollautomatische Fehlererkennung und Klassifizierung</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">(Bildquelle: Audi AG)</p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/vehicle-body-inspection-audi-light-tunnel.png"
                alt="IUNA AI Fahrzeugkarosserie-Inspektion - Automatisiertes Kamerasystem zur Inspektion von Schweißnähten"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Presence Check */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Anwesenheitsprüfung</h2>
              <p className="text-lg text-gray-600 mb-6">
                Unsere Anwesenheitsprüfungssoftware verifiziert, dass alle erforderlichen Komponenten während des
                Montageprozesses korrekt installiert sind. Kunden können Anwesenheitsprüfungen für Merkmale wie Muttern,
                Schrauben, Bolzen, Clips und Bohrungen während desselben Inspektionszyklus durchführen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Überprüft das Vorhandensein von Muttern, Schrauben, Bolzen, Clips, Bohrungen und anderen Komponenten
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Verhindert kostspielige Montagefehler und Nacharbeit</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Hochgeschwindigkeitsinspektion, geeignet für die Integration in Produktionslinien
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Anpassbar für verschiedene Komponententypen und Montagekonfigurationen
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/presence-check-rendering-camera-red.png"
                alt="IUNA AI Anwesenheitsprüfungssystem - Überprüfung der Komponenteninstallation"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Optical Character Recognition (OCR) */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Optische Zeichenerkennung (OCR)</h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser OCR-System liest und verifiziert Text, Codes und Seriennummern auf Komponenten und Baugruppen.
                Dies gewährleistet die Rückverfolgbarkeit während des gesamten Fertigungsprozesses und hilft bei der
                Einhaltung von Qualitätskontrollstandards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Liest Datumscodes, Seriennummern und Teilekennzeichnungen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Stellt sicher, dass die richtigen Teile bei der Montage verwendet werden
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Erhält die Rückverfolgbarkeit während des gesamten Fertigungsprozesses
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Funktioniert mit verschiedenen Markierungsmethoden, einschließlich Lasergravur, Nadelprägen und
                    Druck
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ocr-example.jpeg"
                alt="IUNA AI OCR-System - Lesen von Seriennummern und Datumscodes"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dimensional Measurement */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Dimensionale Messung</h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser dimensionales Messsystem verwendet fortschrittliche Computer Vision, um zu überprüfen, ob
                Komponenten präzise Maßvorgaben erfüllen. Dies stellt sicher, dass Teile während der Montage korrekt
                zusammenpassen und Qualitätsstandards entsprechen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Misst kritische Dimensionen mit Submillimeter-Genauigkeit</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Inspiziert komplexe Automobilkomponenten, einschließlich Karosserieteile und Strukturelemente
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Identifiziert Abweichungen von CAD-Spezifikationen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Liefert umfassende Messberichte für die Qualitätskontrolle</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/dimensional-measurement-rendering-measure-large.png"
                alt="IUNA AI Dimensionale Messung - Präzisionsmessung mit Maßstabsüberlagerung"
                width={800}
                height={600}
                className="w-full h-auto bg-gray-800 p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assembly Verification */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Montageverifikation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Unser Montageverifikationssystem stellt sicher, dass komplexe Baugruppen korrekt zusammengesetzt werden.
                Das System überprüft, ob alle Komponenten vorhanden, korrekt positioniert und ordnungsgemäß verbunden
                sind.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Verifiziert die korrekte Montage komplexer Komponenten</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Überprüft die ordnungsgemäße Verlegung von Kabeln und Schläuchen
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Stellt die korrekte Positionierung und Ausrichtung von Teilen sicher
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Identifiziert fehlende oder falsch installierte Komponenten
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/cross_car_beam_solo.png"
                alt="IUNA AI Montageverifikation - Cockpitträger-Komponente"
                width={800}
                height={600}
                className="w-full h-auto bg-gray-100 p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bereit, Ihren Qualitätskontrollprozess zu transformieren?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Kontaktieren Sie unser Team, um zu besprechen, wie unsere AI Vision Systeme auf Ihre spezifischen
              Fertigungsherausforderungen zugeschnitten werden können.
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
