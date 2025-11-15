import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Mail, Phone, Calendar } from 'lucide-react'
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vielen Dank - IUNA AI",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <>
      {/* Google Ads Conversion Event */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion_event_submit_lead_form', {
            // event_parameters
          });
        `}
      </Script>

      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative h-[40vh] w-full">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/header_landing_page.jpg"
              alt="IUNA AI Vielen Dank"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Vielen Dank!
            </h1>
            <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          </div>
        </section>

        {/* Thank You Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <CheckCircle2 className="mx-auto h-20 w-20 text-green-500 mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Ihre Nachricht wurde erfolgreich übermittelt!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Vielen Dank für Ihre Kontaktaufnahme mit IUNA AI Systems. Unser Team wird Ihre Anfrage prüfen und sich
                innerhalb von 24 Stunden bei Ihnen melden.
              </p>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wie geht es weiter?</h3>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-1">
                      1
                    </div>
                    <p className="ml-4 text-gray-700">
                      Unser Team prüft Ihre Nachricht und alle von Ihnen bereitgestellten Anhänge.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-1">
                      2
                    </div>
                    <p className="ml-4 text-gray-700">
                      Ein Spezialist wird Sie per E-Mail oder Telefon kontaktieren, um Ihre Anforderungen zu besprechen.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-1">
                      3
                    </div>
                    <p className="ml-4 text-gray-700">
                      Wir vereinbaren einen Beratungstermin, um zu besprechen, wie unsere KI-Vision-Systeme Ihre
                      Anforderungen erfüllen können.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg">
                  <Link href="/de">Zur Startseite</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/de/products/ai-scanner">Unsere Produkte</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Benötigen Sie sofortige Hilfe?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">E-Mail</h4>
                  <a href="mailto:sales@iuna.ai" className="text-primary hover:underline">
                    sales@iuna.ai
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Telefon</h4>
                  <a href="tel:+4915255386189" className="text-primary hover:underline">
                    +49 152 5538 6189
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Termin vereinbaren</h4>
                  <a href="/de/contact#schedule-consultation" className="text-primary hover:underline">
                    Jetzt buchen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
