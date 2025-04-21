"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Car,
  ImageIcon,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Users,
  Lightbulb,
  Award,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">IUNA AI</h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-2xl text-gray-200 sm:text-3xl">AI Made in Germany</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 mb-12">Das ist IUNA AI</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Vehicles Inspected */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-black mb-6">
                <Car className="h-12 w-12 text-white" />
              </div>
              <p className="text-5xl font-bold text-primary mb-2">100.000+</p>
              <p className="text-xl text-gray-700">inspizierte Fahrzeuge</p>
            </div>

            {/* Labeled Images */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-black mb-6">
                <ImageIcon className="h-12 w-12 text-white" />
              </div>
              <p className="text-5xl font-bold text-primary mb-2">1.000.000+</p>
              <p className="text-xl text-gray-700">gelabelte Bilder</p>
            </div>

            {/* Processed Images */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-black mb-6">
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
              <p className="text-5xl font-bold text-primary mb-2">150M+</p>
              <p className="text-xl text-gray-700">verarbeitete Bilder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Unternehmen</h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  IUNA AI Systems GmbH ist ein 2020 gegründetes Unternehmen mit Sitz in Heilbronn, Deutschland. Wir
                  entwickeln Deep-Learning-basierte Kamerasysteme und Bildverarbeitungssoftware zur Automatisierung der
                  Qualitätssicherung in der industriellen Fertigung.
                </p>
                <p>
                  Unser Team vereint Expertise in Softwareentwicklung, maschinellem Lernen und Automobilherstellung, um
                  hochmoderne AI Vision Systeme zu entwickeln, die reale Herausforderungen in der Qualitätskontrolle
                  lösen.
                </p>
                <p>
                  Als Mitglied der Campus Founders auf dem Bildungscampus in Heilbronn sind wir Teil eines lebendigen
                  Startup-Ökosystems, das Innovation und Wachstum fördert.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/iuna-team-thumbs-up.png"
                alt="IUNA AI Team mit Daumen hoch"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/team-exhibition.png"
                alt="IUNA AI Team auf einer Ausstellung"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Unsere Mission</h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  Wir wollen die Automatisierung in der industriellen Produktion auf die nächste Stufe heben,
                  insbesondere im Bereich der visuellen Inspektion und Qualitätssicherung. Dabei helfen wir Unternehmen,
                  effizienter zu arbeiten und die Qualität ihrer Endprodukte zu steigern.
                </p>
                <p>
                  In einer Zeit, in der Arbeit schneller, besser und effizienter erledigt werden muss und der
                  Kostendruck auf Unternehmen steigt, stoßen Mitarbeiter und Unternehmen an ihre Grenzen. An diesem
                  Punkt haben Technologien das Potenzial, mit künstlicher Intelligenz zu unterstützen.
                </p>
                <p>
                  Wir lassen die Zeit hinter uns, in der Menschen mit repetitiven und körperlich anstrengenden Arbeiten
                  belastet werden. Wir wollen, dass Mitarbeiter ihre Energie in kreative und wertschöpfende Aufgaben
                  investieren können. Um dies zu erreichen, bringen wir die neuesten technologischen Entwicklungen von
                  Software und Hardware im Bereich der Bildverarbeitung in die Industrie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - New */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Unsere Werte</h2>
            <p className="mt-4 text-lg text-gray-600">
              Die Prinzipien, die unsere Arbeit und Unternehmenskultur leiten
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zusammenarbeit</h3>
              <p className="text-gray-600">
                Wir glauben an die Kraft der Teamarbeit und offenen Kommunikation. Durch die Zusammenarbeit über
                Disziplinen hinweg schaffen wir Lösungen, die die Erwartungen übertreffen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Wir erweitern ständig die Grenzen des Möglichen mit KI- und Computer-Vision-Technologie und suchen nach
                kreativen Lösungen für komplexe industrielle Herausforderungen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exzellenz</h3>
              <p className="text-gray-600">
                Wir sind bestrebt, in allem, was wir tun, höchste Qualität zu liefern, von unseren KI-Algorithmen bis zu
                unserem Kundenservice und Support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Environment - New */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Unsere Arbeitsumgebung</h2>
            <p className="mt-4 text-lg text-gray-600">
              Bei IUNA AI arbeiten wir an der Schnittstelle von Spitzentechnologie und industrieller Fertigung
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/manufacturing-worker.png"
                alt="Fertigungsmitarbeiter mit IUNA AI Vision System"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs text-white text-center">
                Bildquelle: Audi AG
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/team-audi-inspection.png"
                alt="IUNA AI Team bei der Inspektion von Komponenten bei Audi"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs text-white text-center">
                Bildquelle: Audi AG
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unser Team besucht regelmäßig Kundenstandorte, um unsere AI Vision Systeme zu implementieren und arbeitet
              direkt mit Fertigungsteams zusammen, um Qualitätskontrollprozesse zu optimieren. Dieser praktische Ansatz
              stellt sicher, dass unsere Lösungen reale Bedürfnisse erfüllen und messbare Ergebnisse liefern.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Gründer</h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {/* Jan */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full mb-6">
                <Image src="/images/jan.png" alt="Jan Nabatian - IUNA AI CEO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Jan Nabatian</h3>
              <p className="text-primary font-medium">CEO</p>
              <p className="mt-2 text-gray-600">
                Jan studierte Softwareentwicklung in Stuttgart, bevor er im Bereich der Produktionsanalyse in der
                Automobilindustrie arbeitete. Seit 2020 leitet Jan IUNA AI als Geschäftsführer.
              </p>
            </div>

            {/* William */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full mb-6">
                <Image src="/images/tong.png" alt="William Chen - IUNA AI CTO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">William Chen</h3>
              <p className="text-primary font-medium">CTO</p>
              <p className="mt-2 text-gray-600">
                William studierte Automobilingenieurwesen in Peking und Karlsruhe, bevor er als Entwicklungsingenieur in
                der Automobilindustrie arbeitete. Seit 2020 ist er Leiter der Produktentwicklung bei IUNA AI.
              </p>
            </div>

            {/* Samira */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full mb-6">
                <Image src="/images/samira.png" alt="Samira Nabatian - IUNA AI COO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Samira Nabatian</h3>
              <p className="text-primary font-medium">COO</p>
              <p className="mt-2 text-gray-600">
                Samira studierte Wirtschaftswissenschaften in Nürnberg, bevor sie im kaufmännischen Projektmanagement
                bei Siemens arbeitete. Seit 2020 ist sie Leiterin für Business Development und Finanzen bei IUNA AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Kontaktieren Sie uns</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Adresse</h3>
                  <div className="flex items-start space-x-3 text-gray-700">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                    <div>
                      <p>IUNA AI Systems GmbH</p>
                      <p>Humboldstr. 14</p>
                      <p>74199 Untergruppenbach</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Kontakt</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span>sales@iuna.ai</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Phone className="h-5 w-5 flex-shrink-0" />
                      <span>+49 152 5538 6189</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Social Media</h3>
                  <div className="flex space-x-8">
                    <a
                      href="https://www.linkedin.com/company/iuna-ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                      aria-label="Folgen Sie uns auf LinkedIn"
                    >
                      <Linkedin className="h-12 w-12" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://x.com/iunaai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                      aria-label="Folgen Sie uns auf X (Twitter)"
                    >
                      <Twitter className="h-12 w-12" />
                      <span className="sr-only">X (Twitter)</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@iunaai2860"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                      aria-label="Abonnieren Sie unseren YouTube-Kanal"
                    >
                      <Youtube className="h-12 w-12" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672000.8487139231!2d8.5518653!3d48.9936516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f7.1!3m3!1m2!1s0x47982feb3f36f741%3A0x1ef0dcda750483d4!2sIUNA%20AI!5e0!3m2!1sen!2sde!4v1711057234567!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IUNA AI Standortkarte mit der Region Baden-Württemberg"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section - New */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
              Werde Teil unseres Teams
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Wir suchen stets nach talentierten Personen, die sich für KI, Computer Vision und Qualitätssicherung
              begeistern und Teil unseres wachsenden Teams werden möchten.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Bei IUNA AI haben Sie die Möglichkeit, an Spitzentechnologien zu arbeiten, die die industrielle Fertigung
              verändern, mit einem talentierten Team zusammenzuarbeiten und einen echten Einfluss auf die Abläufe
              unserer Kunden zu nehmen.
            </p>
            <div className="flex justify-center">
              <Link href="/de/careers">
                <Button className="group">
                  Offene Stellen ansehen
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              Bereit, Ihre Qualitätskontrolle zu transformieren?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Kontaktieren Sie uns, um zu erfahren, wie unsere AI Vision Systeme Ihre Fertigungsprozesse verbessern
              können.
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
