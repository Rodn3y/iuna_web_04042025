import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Full viewport height */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/automotive-head.jpg"
            alt="AI Vision Systems for Automotive Manufacturing"
            fill
            className="object-cover brightness-[0.4]"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>
        <div className="relative z-10 flex h-full flex-col">
          {/* Hauptinhalt - vertikal zentriert */}
          <div className="flex flex-grow items-center">
            <div className="container px-4 sm:px-6 lg:px-8">
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                IUNA AI Vision Systems
              </h1>
              <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
              <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
                for automated weld seam inspection and dimensional measurement
              </p>
            </div>
          </div>

          {/* Client Logos Section - Full width */}
          <div className="w-full bg-black/50 py-8 backdrop-blur-sm">
            <div className="container px-4 sm:px-6 lg:px-8">
              <p className="mb-6 text-center text-lg font-medium text-white">
                IUNA AI works with Automotive Manufacturers, Suppliers and Plant Constructors
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_vw.png"
                    alt="vw logo white"
                    width={70}
                    height={70}
                    className="h-[70px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_audi.png"
                    alt="audi logo white"
                    width={90}
                    height={90}
                    className="h-[90px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_michael.png"
                    alt="rudolph michael gmbh logo white"
                    width={70}
                    height={35}
                    className="h-[35px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_ehr.png"
                    alt="ehr logo white"
                    width={70}
                    height={35}
                    className="h-[35px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_heidelberg.png"
                    alt="heidelberger druckmaschinen logo white"
                    width={120}
                    height={60}
                    className="h-[60px] w-auto object-contain brightness-0 invert"
                  />
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/images/logo_schedl.png"
                    alt="schedl automotive logo white"
                    width={100}
                    height={100}
                    className="h-[100px] w-auto object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Competencies</h2>
            <p className="mt-4 text-lg text-gray-300">
              Advanced AI vision solutions for the automotive and manufacturing industries
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {/* Dimensional Measurement */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-gray-800">
                <Image
                  src="/images/dimensional-measurement-rendering-measure-large.png"
                  alt="Dimensional Measurement - 3D rendering with measurement scale"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Dimensional Measurement</h3>
              <p className="mb-6 text-gray-300">
                Check compliance with dimensional and positional tolerances, hole spacing and angles simultaneously and
                in line.
              </p>
              <Link href="/products/ai-scanner">
                <Button
                  variant="outline"
                  className="mt-auto group border-primary text-primary hover:bg-primary hover:text-white"
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Presence Check */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-gray-800">
                <Image
                  src="/images/presence-check-rendering-camera-red.png"
                  alt="Presence Check - Camera inspection system"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Presence Check</h3>
              <p className="mb-6 text-gray-300">
                Conduct presence checks for features like nuts, bolts, studs, and holes during the same inspection
                cycle.
              </p>
              <Link href="/products/ai-scanner">
                <Button
                  variant="outline"
                  className="mt-auto group border-primary text-primary hover:bg-primary hover:text-white"
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Weld Seam Inspection */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-gray-800">
                <Image
                  src="/images/weld-seam-inspection-rendering-spark-croped.png"
                  alt="Weld Seam Inspection - Robotic inspection with spark visualization"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold">Weld Seam Inspection</h3>
              <p className="mb-6 text-gray-300">
                AI-powered defect detection: The IUNA AI Vision System uses advanced neural networks to identify OK and
                Not-OK weld seams directly from captured images.
              </p>
              <Link href="/products/weld-seam-scanner">
                <Button
                  variant="outline"
                  className="mt-auto group border-primary text-primary hover:bg-primary hover:text-white"
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Our Products</h2>
            <p className="mt-4 text-xl text-gray-600">
              AI Vision Systems designed for precision, reliability, and efficiency
            </p>
          </div>

          {/* AI Scanner */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">AI Scanner</h3>
              <p className="text-lg text-gray-600 mb-6">
                With the IUNA AI scanner, we offer you a system that can be used flexibly in quality assurance. Each AI
                scanner is individually configured for you. By optimally coordinating software and hardware, we maximize
                the reliability of the inspection.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                For our AI scanner, we combine high-resolution industrial cameras, the latest NVIDIA chip generation and
                pre-trained and customized AI models. This allows us to offer you automated testing with maximum
                precision.
              </p>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Presence check</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Location check</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Optical character recognition (OCR)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Completeness check</span>
                </li>
              </ul>
              <Link href="/products/ai-scanner">
                <Button className="group">
                  Learn More About AI Scanner
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/ai-scanner.png"
                  alt="IUNA AI Scanner - Robotic vision system inspecting automotive components"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Weld Seam Scanner */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/weld-seam-scanner.png"
                  alt="IUNA Weld Seam Scanner - AI-powered weld inspection system showing good and defective welds"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Weld Seam Scanner</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our Weld Seam Scanner uses advanced AI algorithms to detect and classify weld defects with unprecedented
                accuracy. The system distinguishes between acceptable (I.O.) and defective (N.I.O.) welds, providing
                immediate feedback to optimize your manufacturing process.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">AI-powered defect classification system</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Detects pores, cracks, undercuts, and other weld defects</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Seamless integration with existing production lines</span>
                </li>
              </ul>
              <Link href="/products/weld-seam-scanner">
                <Button className="group">
                  Learn More About Weld Seam Scanner
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              Ready to transform your manufacturing process?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Schedule a consultation with our experts to discover how our AI vision systems can improve quality, reduce
              costs, and increase efficiency.
            </p>
            <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/contact#schedule-consultation">
                <Button size="lg" variant="secondary">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/contact#contact-form">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
