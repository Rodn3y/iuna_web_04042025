"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, Users, Lightbulb, Zap, GraduationCap, Clock, Coffee } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/iuna-team-audi.jpeg"
            alt="IUNA AI Team bei Audi"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">Karriere</h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-2xl text-gray-200 sm:text-3xl">
            Werde Teil unseres Teams und gestalte die Zukunft von AI Vision Systemen
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Warum zu IUNA AI?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Bei IUNA AI revolutionieren wir die industrielle Qualitätssicherung mit hochmodernen AI Vision Systemen.
              Werde Teil unseres Teams und sei Teil von etwas Außergewöhnlichem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kollaboratives Team</h3>
              <p className="text-gray-600">
                Arbeite direkt mit unserem Gründerteam und erfahrenen Entwicklern in einer unterstützenden Umgebung, in
                der deine Ideen zählen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovative Projekte</h3>
              <p className="text-gray-600">
                Entwickle hochmoderne KI-Lösungen für reale Herausforderungen in der Automobil- und Fertigungsindustrie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wachstumschancen</h3>
              <p className="text-gray-600">
                Erweitere deine Fähigkeiten und bringe deine Karriere in einem schnell wachsenden Startup voran, mit
                Möglichkeiten, einen bedeutenden Einfluss zu nehmen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kontinuierliches Lernen</h3>
              <p className="text-gray-600">
                Bleibe an der Spitze von KI- und Computer-Vision-Technologie mit kontinuierlichen Lern- und
                Entwicklungsmöglichkeiten.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Arbeit</h3>
              <p className="text-gray-600">
                Genieße eine ausgewogene Arbeitsumgebung mit flexiblen Arbeitszeiten und der Möglichkeit,
                Kundenstandorte zu besuchen und deine Arbeit in Aktion zu sehen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Startup-Kultur</h3>
              <p className="text-gray-600">
                Erlebe das dynamische Startup-Ökosystem als Mitglied der Campus Founders auf dem Bildungscampus in
                Heilbronn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Images Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Unser Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Werde Teil eines leidenschaftlichen Teams, das sich der Revolutionierung der industriellen
              Qualitätssicherung widmet
            </p>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg shadow-lg mb-8">
            <Image
              src="/images/iuna-team-thumbs-up.png"
              alt="IUNA AI Team mit Daumen hoch"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/team-exhibition.png"
                alt="IUNA AI Team auf einer Ausstellung"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/manufacturing-worker.png"
                alt="Fertigungsmitarbeiter mit IUNA AI Vision System"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/team-audi-inspection.png"
                alt="IUNA AI Team bei der Inspektion von Komponenten bei Audi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Offene Stellen</h2>
            <p className="mt-4 text-lg text-gray-600">
              Werde Teil unseres Teams und hilf uns, die industrielle Qualitätssicherung mit AI Vision Systemen zu
              revolutionieren
            </p>
          </div>

          <div className="mx-auto max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Finde deine perfekte Rolle</h3>
              <p className="text-lg text-gray-600 mb-6">
                Wir suchen talentierte Personen, die Teil unseres Teams werden möchten. Besuche unser Karriereportal, um
                alle aktuellen Stellenangebote einzusehen und dich direkt mit deinem Lebenslauf und Anschreiben zu
                bewerben.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Unsere offenen Stellen umfassen Positionen in der Softwareentwicklung, im maschinellen Lernen, in der
                Computer Vision und mehr. Ob du eine Vollzeitstelle, ein Praktikum oder eine Werkstudententätigkeit
                suchst, wir freuen uns, von dir zu hören.
              </p>
              <a href="https://join.com/companies/iuna" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group">
                  Alle offenen Stellen ansehen
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Vorteile bei IUNA AI</h2>
              <p className="text-lg text-gray-600 mb-6">
                Bei IUNA AI schätzen wir unsere Teammitglieder und bieten eine Reihe von Vorteilen, um eine lohnende und
                ausgewogene Arbeitserfahrung zu gewährleisten.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Arbeit an realen Projekten mit unmittelbarer Wirkung</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Besuche bei Kunden und Erleben deiner Arbeit in Aktion</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Direkte Zusammenarbeit mit dem Gründerteam</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Wettbewerbsfähige Vergütung und Zusatzleistungen</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Möglichkeit, mit einem schnell wachsenden Unternehmen zu wachsen
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/team-audi-inspection.png"
                alt="IUNA AI Team arbeitet mit Kunden"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Bewerbungsprozess</h2>
            <p className="mt-4 text-lg text-gray-600">
              Unser optimierter Bewerbungsprozess ist darauf ausgelegt, die richtige Passung für dich und unser Team zu
              finden
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bewerbung</h3>
              <p className="text-gray-600">
                Reiche deine Bewerbung mit deinem Lebenslauf und einem kurzen Anschreiben ein, in dem du erklärst, warum
                du an einer Mitarbeit bei IUNA AI interessiert bist.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Erstes Gespräch</h3>
              <p className="text-gray-600">
                Wenn dein Profil unseren Anforderungen entspricht, laden wir dich zu einem ersten Gespräch ein, um dich
                besser kennenzulernen.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fachliche Beurteilung</h3>
              <p className="text-gray-600">
                Je nach Position bitten wir dich möglicherweise, eine kleine technische Aufgabe zu lösen oder an einem
                fachlichen Gespräch teilzunehmen.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Endgültige Entscheidung</h3>
              <p className="text-gray-600">
                Nach der Beurteilung treffen wir eine Entscheidung und geben dir so schnell wie möglich Feedback.
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
              Bereit, Teil unseres Teams zu werden?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Bewirb dich noch heute und sei Teil unserer Mission, die industrielle Qualitätssicherung mit AI Vision
              Systemen zu revolutionieren.
            </p>
            <p className="mt-2 text-lg text-white/90">
              Sende deine Bewerbung an{" "}
              <a href="mailto:careers@iuna.ai" className="underline hover:text-white">
                careers@iuna.ai
              </a>
            </p>
            <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a href="https://join.com/companies/iuna" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  Offene Stellen ansehen
                </Button>
              </a>
              <Link href="/de/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300"
                >
                  Kontaktiere uns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
