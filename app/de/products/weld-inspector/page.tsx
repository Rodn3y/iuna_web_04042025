"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Camera,
  Server,
  Zap,
  BarChart3,
  Clock,
  Shield,
  Eye,
  Monitor,
  Globe,
  CheckCircle,
  Settings,
  Cpu,
  Lightbulb,
  Ruler,
  Focus,
  Flame,
  ListChecks,
  ClipboardCheck,
} from "lucide-react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const integrationOptions = [
  {
    id: 1,
    title: "Robotergeführte Industriekamera",
    description:
      "Die Industriekamera ist am Roboterarm montiert und ermöglicht eine flexible Inspektion stationärer Teile aus mehreren Winkeln.",
    image: "/images/interface-weld-inspector-robot-mounted.jpg",
  },
  {
    id: 2,
    title: "Statische Kamera mit Roboter-Handling",
    description:
      "Eine statisch montierte Kamera inspiziert Teile, die von einem Produkthandhabungsroboter präsentiert werden.",
    image: "/images/interface-weld-inspector-static-camera.jpg",
  },
  {
    id: 3,
    title: "Vollständig statisches Multi-Kamera-Setup",
    description:
      "Mehrere statisch montierte Kameras inspizieren Teile ohne Roboter. Ideal für Anwendungen mit hohem Durchsatz.",
    image: "/images/interface-weld-inspector-complete-static.jpg",
  },
]

export default function WeldSeamScannerPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % integrationOptions.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + integrationOptions.length) % integrationOptions.length)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/automotive-head.jpg"
            alt="IUNA Weld Inspector - KI-gestützte Schweißnahtinspektion"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Automatisierte Schweißnahtinspektion mit KI
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <h2 className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl font-normal">
            Ersetzen Sie subjektive Sichtprüfungen durch 100% objektive KI-Präzision. Erkennen Sie Fehler in Echtzeit,
            ohne die Produktion zu verlangsamen.
          </h2>
        </div>
      </section>

      {/* Overview Section - ISO standards with expandable descriptions */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Höchste Schweißqualität gewährleisten – basierend auf internationalen Standards
            </h2>
            <div className="mt-4 h-1 w-32 bg-primary mx-auto"></div>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Unser System ermöglicht die visuelle Inspektion von Schweißnähten gemäß weltweit anerkannten
              Schweißnormen. Klicken Sie auf jeden Standard, um mehr zu erfahren.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Lichtbogenschweißen */}
              <AccordionItem value="arc-welding" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Lichtbogenschweißen</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          DIN EN ISO 5817
                        </span>
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          DIN EN ISO 10042
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      Diese Normen sind das weltweite Fundament der Qualitätssicherung im Lichtbogenschweißen. Sie
                      definieren drei Bewertungsgruppen (B, C, D) für Schweißnahtunregelmäßigkeiten – von niedrigen bis
                      zu hohen Qualitätsanforderungen.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">DIN EN ISO 5817:</span> Stahl / Nickel / Titan
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">DIN EN ISO 10042:</span> Aluminium
                      </span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Unser Vorteil:</span> Unser System prüft objektiv,
                        ob eine Naht die geforderten Grenzwerte für Poren, Einbrandkerben oder Nahtüberhöhungen einhält,
                        differenziert nach Materialart (z. B. Stahl vs. Aluminium).
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Laser- & Strahlschweißen */}
              <AccordionItem
                value="laser-welding"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Focus className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Laser- & Strahlschweißen</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          DIN EN ISO 13919-1
                        </span>
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          DIN EN ISO 13919-2
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      Laser- und Elektronenstrahlschweißen erzeugen spezifische Fehlerbilder, die klassische Normen
                      nicht abdecken. Die DIN EN ISO 13919 ist der Maßstab für Hochleistungsschweißverfahren, wie sie
                      häufig in der Automobilindustrie (z. B. Batteriewannen, Powertrain) eingesetzt werden.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">DIN EN ISO 13919-1:</span> Stahl & Eisen
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">DIN EN ISO 13919-2:</span> Aluminium & Legierungen
                      </span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Unser Vorteil:</span> Der IUNA Weld Inspector ist
                        darauf trainiert, die feinen, oft mikroskopischen Defekte dieser Präzisionsverfahren sicher zu
                        erkennen und nach den strengen Kriterien der DIN EN ISO 13919 zu klassifizieren.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Hartlöten */}
              <AccordionItem value="brazing" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Hartlöten</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          DIN EN ISO 18279
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      Im Fahrzeugbau werden Sichtflächen oft gelötet statt geschweißt. Diese Norm definiert
                      Unregelmäßigkeiten speziell für Hartlötverbindungen (Brazing), wie Benetzungsfehler oder
                      Kantenbindefehler, die beim Schweißen so nicht vorkommen.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Unser Vorteil:</span> Da Lötstellen oft ästhetische
                        Sichtnähte sind (z. B. an Heckklappen), kombiniert unsere KI hier technische Prüfung mit
                        ästhetischer Kontrolle gemäß DIN EN ISO 18279.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Fehlerklassifizierung */}
              <AccordionItem
                value="defect-classification"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <ListChecks className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Fehlerklassifizierung</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          DIN EN ISO 6520-1
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      Damit Qualitätsprobleme international verstanden werden, braucht jeder Fehler einen Namen und eine
                      Nummer. Die DIN EN ISO 6520-1 dient als das „Wörterbuch" der Schweißfehler und teilt
                      Unregelmäßigkeiten in sechs Hauptgruppen ein (z. B. Risse, Hohlräume, Bindefehler).
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Unser Vorteil:</span> Unsere Software nutzt diese
                        standardisierte Terminologie für das Reporting. So versteht jeder – vom Werker bis zum Kunden –,
                        welcher Fehler (z. B. „Fehler 2017: Gasblase") vorliegt.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Prüfverfahren */}
              <AccordionItem
                value="inspection-process"
                className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <ClipboardCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Prüfverfahren</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          DIN EN ISO 17637
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      Diese Norm beschreibt nicht den Fehler, sondern das „Wie" der Prüfung: Welche Beleuchtung ist
                      nötig? In welchem Winkel muss geprüft werden? Welcher Abstand ist zulässig?
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Unser Vorteil:</span> Manuelle Prüfer ermüden oder
                        schauen unterschiedlich genau hin. Der IUNA Weld Inspector automatisiert die Vorgaben der DIN EN
                        ISO 17637, indem er immer konstante Beleuchtung, den perfekten Blickwinkel und 100%
                        Aufmerksamkeit garantiert – 24/7.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <p className="mt-10 text-center text-gray-600 max-w-3xl mx-auto">
            Diese Standards gewährleisten eine objektive, wiederholbare und nachvollziehbare Bewertung der
            Schweißqualität über alle Produktionschargen hinweg.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Intelligente Schweißnahtanalyse
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unsere Software kombiniert Deep-Learning-basierte KI-Modelle mit regelbasierten Algorithmen und ermöglicht
              so eine präzise Fehlererkennung sowie eine genaue Messung der Schweißnahtabmessungen in Millimetern.
            </p>
          </div>

          {/* Main Feature Grid */}
          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            {/* Left Column - I.O./N.I.O. Comparison */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/weld-seam-comparison-new.png"
                  alt="IUNA Weld Inspector - Vergleich von OK (I.O.) und fehlerhaften (N.I.O.) Schweißnähten"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatische Fehlererkennung</h3>
                <p className="text-gray-600 mb-4">
                  Automatische Klassifizierung von Schweißnähten als OK (I.O.) oder NICHT OK (N.I.O.) basierend auf
                  trainierten KI-Modellen, die erkennen:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Risse, Poren und Blasenlöcher</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Durchbrand und Spritzer</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Asymmetrie und geometrische Abweichungen</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Tolerance & Segmentation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/weld-seam-tolerance.png"
                  alt="IUNA Weld Inspector - Toleranz- und Segmentierungsanalyse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Toleranz- & Segmentierungsanalyse</h3>
                <p className="text-gray-600 mb-4">
                  Regelbasierte Algorithmen verifizieren Position und Abmessungen der Schweißnaht gegen vordefinierte
                  Toleranzbereiche:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Präzise Positionsverifizierung</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Automatische Toleranzbereichsprüfung</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>KI-gestützte Segmentierung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Precision Measurement Highlight */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full">
                <Image
                  src="/images/weld-seam-measure-mm.jpg"
                  alt="IUNA Weld Inspector - Präzise Schweißnahtmessung in Millimetern"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Ruler className="h-4 w-4 mr-2" />
                  Präzisionsmessung
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schweißnahtabmessungen in Millimetern</h3>
                <p className="text-gray-600 mb-6">
                  Der hybride Ansatz aus Deep Learning und regelbasierten Algorithmen ermöglicht die präzise Messung von
                  Schweißnahtlänge und -breite direkt in Millimetern. Wir können auch direkt an der Bauteilkante messen,
                  um sicherzustellen, dass die Naht symmetrisch zur Kante liegt und die tatsächliche Anbindung
                  gewährleistet ist. Dies liefert genaue Maßdaten für die Qualitätsdokumentation und Prozessoptimierung.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{`<0,5mm`}</div>
                    <div className="text-sm text-gray-600">Messgenauigkeit</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-gray-600">Dokumentierte Ergebnisse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Components Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Systemarchitektur
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Modulares Design für maximale Flexibilität
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Unser komplettes schlüsselfertiges System umfasst alle Hardware- und Softwarekomponenten für zuverlässige
              Schweißnahtprüfung
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start mb-16">
            {/* Left: Featured User Interface with 3D Viewer */}
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
                    src="/images/iuna-ai-weld-inspector-user-interface-3d-viewer.png"
                    alt="IUNA Weld Inspector Benutzeroberfläche mit 3D-Viewer für Schweißnahtprüfungsergebnisse"
                    fill
                    className="object-contain bg-gray-900"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Intuitive Benutzeroberfläche mit 3D-Visualisierung
              </h3>
              <p className="text-gray-600 mb-6">
                Die Benutzeroberfläche wird direkt auf dem IUNA AI Server gehostet und kann über jeden Webbrowser von
                jedem PC mit Netzwerkverbindung zum Server aufgerufen werden. Keine zusätzliche Softwareinstallation
                erforderlich.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Interaktiver 3D-Viewer</h4>
                    <p className="text-sm text-gray-600">
                      Der Nacharbeiter sieht mit einem Blick, welche Schweißnaht am Produkt nacharbeitsrelevant ist -
                      rot markiert für NG (nicht gut) und grün für OK.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Echtzeit-Ergebnisse</h4>
                    <p className="text-sm text-gray-600">
                      Sofortige Visualisierung der Prüfergebnisse mit detaillierten Fehlerinformationen und
                      Klassifizierung.
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
                    alt="Hochauflösende Industriekamera für die Schweißnahtinspektion"
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
                      <span>Inkl. Objektive und Halterung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IUNA AI Server */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 p-6">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src="/images/ai-station.jpeg"
                    alt="IUNA AI Server für die Schweißnahtinspektion"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Server className="h-4 w-4" />
                    <span className="text-sm">Verarbeitungseinheit</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">IUNA AI Server</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>KI-Inferenz für Bildverarbeitung</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Verfügbar im 19″ Rack-Gehäuse</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SPS */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 p-6">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src="/images/simatic-s7-plc.jpg"
                    alt="Siemens SIMATIC S7 SPS für die Systemintegration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Cpu className="h-4 w-4" />
                    <span className="text-sm">Steuerungseinheit</span>
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
                      <span>Optimale Schweißnahtsichtbarkeit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Systemintegrations-Optionen Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Flexible Systemintegrations-Optionen</h2>
            <p className="mt-4 text-lg text-gray-600">
              Der IUNA AI Weld Inspector kann einfach über die mitgelieferte SPS in Ihre bestehende Produktionsumgebung
              integriert werden. Wählen Sie aus drei flexiblen Kamerakonfigurationsoptionen, die Ihren spezifischen
              Anforderungen entsprechen.
            </p>
          </div>

          {/* Image Slider */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-xl">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={integrationOptions[currentSlide].image || "/placeholder.svg"}
                  alt={integrationOptions[currentSlide].title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {currentSlide + 1}. {integrationOptions[currentSlide].title}
                </h3>
                <p className="text-gray-600">{integrationOptions[currentSlide].description}</p>
              </div>
            </div>

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              aria-label="Vorheriger Slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              aria-label="Nächster Slide"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {integrationOptions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Zu Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* PLC and Robot Compatibility */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">SPS-Kompatibilität</h3>
              <p className="text-gray-600 mb-4">
                Der IUNA AI Weld Inspector unterstützt industrieübliche Kommunikationsprotokolle:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600">PROFINET Simatic SPS</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600">EtherNet/IP Allen-Bradley SPS</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Roboter-Kompatibilität</h3>
              <p className="text-gray-600 mb-4">Volle Unterstützung für alle großen Industrierobotermarken:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600">KUKA</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600">FANUC</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600">ABB</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600">Yaskawa</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Turnkey Solution */}
          <div className="mt-12 max-w-4xl mx-auto bg-primary/10 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Komplette Turnkey-Lösung</h3>
            <p className="text-gray-600 text-center mb-6">
              Wir liefern das komplette Hardware-Paket inklusive Industriekameratechnik und Zubehör wie Objektive und
              Stative, Lichtquellen, SPS und bei Bedarf die Umhausung (Prüfzelle). Wir übernehmen auch die
              Vor-Ort-Inbetriebnahme, sodass Sie das komplette betriebsbereite System ohne Vorkenntnisse in Ihre
              Fertigung integrieren können.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">Industriekameras</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
                Objektive & Stative
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">Lichtquellen</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">SPS-Integration</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">Prüfzelle</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
                Vor-Ort-Inbetriebnahme
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Unser bewährter Implementierungsprozess gewährleistet eine reibungslose Integration
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unser bewährter Implementierungsprozess gewährleistet eine reibungslose Integration des IUNA AI Weld
              Inspector in Ihre Produktionsumgebung:
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
                Kontaktieren Sie uns. Gemeinsam prüfen wir Ihren Anwendungsfall und die Umsetzungsmöglichkeiten.
                Anschließend wählen wir die erforderlichen Hardwarekomponenten aus.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Systeminstallation</h3>
              <p className="text-gray-600">
                Wir integrieren die komplette benötigte Hardware in Ihren Produktionsprozess: Industriekamera, IUNA AI
                Server, SPS, Lichttechnik und bei Bedarf eine Prüfzelle. Außerdem installieren und konfigurieren wir
                unsere AI Vision Software.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">KI-Modell Anlernen & Konfiguration</h3>
              <p className="text-gray-600">
                Die ersten Bilddaten werden verwendet, um die KI-Inspektionssoftware anzulernen. Bereits eine geringe
                Anzahl von Bildern ist dafür ausreichend.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonome Prüfung</h3>
              <p className="text-gray-600">
                Ab sofort übernimmt der IUNA AI Weld Inspector Ihre Prüfung vollautomatisch. Mit Hilfe fortschrittlicher
                KI-Vision-Modelle erreichen Sie eine konsistente, objektive Qualitätskontrolle, die der manuellen
                Prüfung weit überlegen ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Vorteile der automatisierten visuellen Schweißnahtprüfung
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Erfahren Sie, warum führende Hersteller den IUNA AI Weld Inspector gegenüber laserbasierten und
                Ultraschall-Systemen bevorzugen
              </p>
            </div>

            {/* Speed Highlight */}
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-white mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-4">
                    <Zap className="h-4 w-4" />
                    Blitzschnell
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Bildaufnahme in weniger als 0,5 Sekunden</h3>
                  <p className="text-white/90 text-lg">
                    Der AI Weld Inspector fliegt über die Naht (oder das Bauteil bewegt sich an der Kamera vorbei), und
                    das Ergebnis liegt sofort vor. Wir bremsen Ihre Produktionslinie nicht - wir halten mit ihr Schritt.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="text-8xl md:text-9xl font-bold text-white/20">&lt;0,5s</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl md:text-6xl font-bold">100%</div>
                        <div className="text-lg font-medium">Inline-Prüfung</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* vs Laser */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-900 text-white px-6 py-4 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-2">IUNA Control Center</span>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/iuna-ai-weld-inspector-user-interface-3d-viewer.png"
                    alt="IUNA AI Weld Inspector Benutzeroberfläche mit 3D-Viewer für Schweißnahtprüfungsergebnisse"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* vs Ultrasound */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-900 text-white px-6 py-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    vs. Ultraschallprüfung
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">100% Inline-Prüfung</p>
                      <p className="text-sm text-gray-600">
                        Wir prüfen jedes einzelne Teil im Takt - keine Offline-Stichproben erforderlich
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Keine Bauteilkontamination</p>
                      <p className="text-sm text-gray-600">
                        Berührungslose Prüfung hält Ihre Bauteile sauber für den nächsten Prozess
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Wartungsarm</p>
                      <p className="text-sm text-gray-600">
                        Keine Koppelmittel, keine Verschleißteile - zuverlässiger Betrieb mit minimalem Aufwand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* One-Click Reporting */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
                    <BarChart3 className="h-4 w-4" />
                    Umfassende Analysen
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Komplette Reports mit einem Klick</h3>
                  <p className="text-gray-600 mb-6">
                    Unsere Kunden schätzen die Möglichkeit, mit einem einzigen Klick vollständige Inspektionsberichte zu
                    generieren. Sehen Sie genau, welche Schweißnähte Probleme verursachen, wie viele Nähte an wie vielen
                    Produkten durchschnittlich fehlerhaft sind, und verfolgen Sie Qualitätstrends über die Zeit.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      Problematische Nähte sofort identifizieren
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      Durchschnittliche Fehlerraten über Produkte
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      Historische Trendanalyse
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      Export als PDF, CSV oder Integration via API
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Prüfrate</span>
                      <span className="text-sm font-bold text-primary">100%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">OK-Rate (Heute)</span>
                      <span className="text-sm font-bold text-green-600">98,7%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "98.7%" }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Geprüfte Teile</span>
                      <span className="text-sm font-bold text-gray-900">12.847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Analysierte Nähte</span>
                      <span className="text-sm font-bold text-gray-900">154.164</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Drop-in Solution */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Drop-in-Lösung</h4>
                <p className="text-sm text-gray-600">
                  Bereit zur Integration in jede Roboterzelle ohne umfangreiche Anpassungen
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Echtzeit-Ergebnisse</h4>
                <p className="text-sm text-gray-600">
                  Arbeitet im Produktionstakt mit sofortigen OK/NOK-Entscheidungen
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Konstante Qualität</h4>
                <p className="text-sm text-gray-600">
                  Eliminiert menschliche Fehler durch objektive, wiederholbare Prüfungen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process - Duplicated, ensure it's intended */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Unser bewährter Implementierungsprozess gewährleistet eine reibungslose Integration
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unser bewährter Implementierungsprozess gewährleistet eine reibungslose Integration des IUNA AI Weld
              Inspector in Ihre Produktionsumgebung:
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
                Kontaktieren Sie uns. Gemeinsam prüfen wir Ihren Anwendungsfall und die Umsetzungsmöglichkeiten.
                Anschließend wählen wir die erforderlichen Hardwarekomponenten aus.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Systeminstallation</h3>
              <p className="text-gray-600">
                Wir integrieren die komplette benötigte Hardware in Ihren Produktionsprozess: Industriekamera, IUNA AI
                Server, SPS, Lichttechnik und bei Bedarf eine Prüfzelle. Außerdem installieren und konfigurieren wir
                unsere AI Vision Software.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">KI-Modell Anlernen & Konfiguration</h3>
              <p className="text-gray-600">
                Die ersten Bilddaten werden verwendet, um die KI-Inspektionssoftware anzulernen. Bereits eine geringe
                Anzahl von Bildern ist dafür ausreichend.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonome Prüfung</h3>
              <p className="text-gray-600">
                Ab sofort übernimmt der IUNA AI Weld Inspector Ihre Prüfung vollautomatisch. Mit Hilfe fortschrittlicher
                KI-Vision-Modelle erreichen Sie eine konsistente, objektive Qualitätskontrolle, die der manuellen
                Prüfung weit überlegen ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Bereit, Ihre Schweißnahtinspektion zu automatisieren?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Kontaktieren Sie unser Team, um eine persönliche Demonstration des IUNA AI Weld Inspector zu vereinbaren.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/de/contact">Beratung vereinbaren</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/de/contact">Demo anfordern</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
