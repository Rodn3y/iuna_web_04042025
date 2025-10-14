import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Mail, Phone, Calendar } from "lucide-react"
import Script from "next/script"

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
              alt="IUNA AI Thank You"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Thank You!
            </h1>
            <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          </div>
        </section>

        {/* Thank You Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <CheckCircle2 className="mx-auto h-20 w-20 text-green-500 mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Your message has been received!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for contacting IUNA AI Systems. Our team will review your inquiry and get back to you within
                24 hours.
              </p>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-1">
                      1
                    </div>
                    <p className="ml-4 text-gray-700">
                      Our team will review your message and any attachments you provided.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-1">
                      2
                    </div>
                    <p className="ml-4 text-gray-700">
                      A specialist will reach out to you via email or phone to discuss your requirements.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mt-1">
                      3
                    </div>
                    <p className="ml-4 text-gray-700">
                      We'll schedule a consultation to explore how our AI vision systems can meet your needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg">
                  <Link href="/">Back to Home</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products/ai-scanner">View Our Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Need immediate assistance?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                  <a href="mailto:sales@iuna.ai" className="text-primary hover:underline">
                    sales@iuna.ai
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                  <a href="tel:+4915255386189" className="text-primary hover:underline">
                    +49 152 5538 6189
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Book a Meeting</h4>
                  <a href="/contact#schedule-consultation" className="text-primary hover:underline">
                    Schedule Now
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
