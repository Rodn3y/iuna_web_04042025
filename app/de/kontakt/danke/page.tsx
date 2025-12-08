import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DankePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA AI Danke"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Vielen Dank
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
        </div>
      </section>

      {/* Thank You Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-8">
              <CheckCircle className="h-20 w-20 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ihre Nachricht wurde gesendet!
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Vielen Dank, dass Sie uns kontaktiert haben. Unser Team wird Ihre Anfrage prüfen und sich innerhalb von 24
              Stunden bei Ihnen melden.
            </p>
            <p className="mt-4 text-gray-600">
              In der Zwischenzeit können Sie gerne unsere Website erkunden, um mehr über unsere KI-gestützten
              Inspektionslösungen zu erfahren.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/de">Zurück zur Startseite</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/de/produkte">Unsere Produkte ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
