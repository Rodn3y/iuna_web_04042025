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
            alt="AI Vision Systems for Automotive Manufacturing"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Use Cases</h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
            Discover how our AI vision systems solve real-world challenges in automotive and manufacturing industries
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Overview</h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-600">
            <p>
              IUNA AI's vision systems are deployed across a wide range of applications in the automotive and
              manufacturing industries. Our AI-powered solutions address critical quality control challenges, enabling
              automated inspection with unprecedented accuracy and efficiency.
            </p>
            <p>
              From weld seam inspection to optical character recognition, our systems integrate seamlessly into existing
              production lines, providing immediate improvements in quality, reducing costs, and increasing operational
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Weld Seam Inspection for Automotive Seating Structures */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Weld Seam Inspection for Automotive Seating Structures
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In this application, the IUNA AI Weld Inspector inspects all MAG weld seams of an automotive seating
                structure. The camera is statically mounted while a handling robot manages the component positioning,
                ensuring comprehensive inspection coverage.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Statically mounted camera for consistent inspection quality
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Automated component handling via industrial robot</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Complete inspection of all MAG weld seams</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Real-time defect detection and classification</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Integrated with production line for seamless workflow</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <ImageSlider
                images={[
                  {
                    src: "/images/seat-structure-mag-welding.jpg",
                    alt: "IUNA AI Weld Seam Inspection - Automotive seating structure with handling robot",
                  },
                  {
                    src: "/images/iuna-web-demo-seat-20250630-2.png",
                    alt: "IUNA AI Control Interface - 3D visualization of weld inspection with defect analysis",
                  },
                  {
                    src: "/images/seat-structure-ui-2.png",
                    alt: "IUNA AI Control Interface - Detailed weld seam analysis with defect classification",
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
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Weld Seam Detection for Cross Car Beams
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our weld seam detection system for Cross Car Beams (CCBs) offers flexible mounting options with cameras
                that can be mounted either statically or on an industrial robot. This enables fully automated inline
                weld seam inspection of CCBs with significantly faster cycle times compared to laser-based inspection
                systems.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Flexible camera mounting: static or robot-mounted configurations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Fully automated inline weld seam inspection</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Much faster cycle times than laser-based inspection systems
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Near real-time automated defect detection and classification
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Optimized for high-volume automotive production lines</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ccb-weld-inspection-spark.png"
                alt="IUNA AI Weld Seam Detection for Cross Car Beams - Robot-mounted camera system during welding"
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
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Fully Automated Inspection of Weld Seams on Vehicle Bodies
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The IUNA AI Weld Inspector is capable of inspecting the entire vehicle body for weld defects. Each
                individual weld seam can be inspected at different stations throughout the production process. The
                software checks for presence, length, and weld defects such as pores, cracks, burn-throughs, etc.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Complete vehicle body inspection across multiple production stations
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Checks for weld presence, length, and defects (pores, cracks, burn-throughs, etc.)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Cameras can be static or robot-mounted</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Supports both MIG and MAG welding processes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Fully automated defect detection and classification</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">(Image Source: Audi AG)</p>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/vehicle-body-inspection-audi-light-tunnel.png"
                alt="IUNA AI Vehicle Body Inspection - Automated camera system inspecting vehicle body weld seams"
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Presence Check</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our presence check software verifies that all required components are correctly installed during the
                assembly process. Customers can conduct presence checks for features like nuts, bolts, studs, clips and
                holes during the same inspection cycle.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Verifies presence of nuts, bolts, studs, clips, holes, and other components
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Prevents costly assembly errors and rework</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    High-speed inspection suitable for production line integration
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Customizable for different component types and assembly configurations
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/presence-check-rendering-camera-red.png"
                alt="IUNA AI Presence Check System - Verifying component installation"
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Optical Character Recognition (OCR)
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our OCR system reads and verifies text, codes, and serial numbers on components and assemblies. This
                ensures traceability throughout the manufacturing process and helps maintain quality control standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Reads date codes, serial numbers, and part identifiers</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Ensures correct parts are used in assembly</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Maintains traceability throughout the manufacturing process
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Works with various marking methods including laser etching, dot peen, and printing
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ocr-example.jpeg"
                alt="IUNA AI OCR System - Reading serial numbers and date codes"
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Dimensional Measurement</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our dimensional measurement system uses advanced computer vision to verify that components meet precise
                dimensional specifications. This ensures that parts fit together correctly during assembly and meet
                quality standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Measures critical dimensions with sub-millimeter accuracy</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Inspects complex automotive components including body panels and structural elements
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Identifies deviations from CAD specifications</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Provides comprehensive measurement reports for quality control
                  </span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/dimensional-measurement-rendering-measure-large.png"
                alt="IUNA AI Dimensional Measurement - Precision measurement with scale overlay"
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
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Assembly Verification</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our assembly verification system ensures that complex assemblies are correctly put together. The system
                checks that all components are present, correctly positioned, and properly connected.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Verifies correct assembly of complex components</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Checks for proper routing of cables and hoses</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Ensures correct positioning and orientation of parts</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Identifies missing or incorrectly installed components</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/cross_car_beam_solo.png"
                alt="IUNA AI Assembly Verification - Cross car beam component"
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
              Ready to transform your quality control process?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Contact our team to discuss how our AI vision systems can be tailored to your specific manufacturing
              challenges.
            </p>
            <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/contact">
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
