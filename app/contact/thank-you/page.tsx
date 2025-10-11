"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Mail, Phone, Calendar } from "lucide-react"

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    // Track Google Ads conversion
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with your actual conversion ID
      })
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA AI Thank You"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Thank You!</h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
        </div>
      </section>

      {/* Thank You Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <CheckCircle2 className="mx-auto h-24 w-24 text-green-500 mb-8" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Your Message Has Been Received!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for contacting IUNA AI. Our team has received your inquiry and will get back to you within 24
              hours.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next?</h3>
              <ul className="text-left space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-semibold">
                      1
                    </div>
                  </div>
                  <p className="ml-4 text-gray-600">
                    Our team will review your inquiry and assess your specific requirements
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-semibold">
                      2
                    </div>
                  </div>
                  <p className="ml-4 text-gray-600">
                    A member of our team will reach out to you via email or phone within 24 hours
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-semibold">
                      3
                    </div>
                  </div>
                  <p className="ml-4 text-gray-600">
                    We'll schedule a consultation to discuss how our AI vision systems can meet your needs
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <Link href="/">Return to Homepage</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products/ai-scanner">Explore Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold text-center mb-8">Need Immediate Assistance?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Email</h4>
                <a href="mailto:sales@iuna.ai" className="text-primary hover:underline">
                  sales@iuna.ai
                </a>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <a href="tel:+4915255386189" className="text-primary hover:underline">
                  +49 152 5538 6189
                </a>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Schedule</h4>
                <a
                  href="https://meetings-eu1.hubspot.com/jan-nabatian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Book a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
