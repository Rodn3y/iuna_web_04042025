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
} from "lucide-react"
import { useState } from "react"

const integrationOptions = [
  {
    id: 1,
    title: "Robot-Mounted Industrial Camera",
    description:
      "The industrial camera is mounted on the robot arm, allowing flexible inspection of stationary parts from multiple angles.",
    image: "/images/interface-weld-inspector-robot-mounted.jpg",
  },
  {
    id: 2,
    title: "Static Camera with Robot Handling",
    description: "A statically mounted camera inspects parts that are presented by a product handling robot.",
    image: "/images/interface-weld-inspector-static-camera.jpg",
  },
  {
    id: 3,
    title: "Fully Static Multi-Camera Setup",
    description:
      "Multiple statically mounted cameras inspect parts without requiring any robot. Ideal for high-throughput applications.",
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
            alt="IUNA AI Weld Inspector - AI-powered weld inspection"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Automated weld seam inspection with AI
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <h2 className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl font-normal">
            Fully automatic visual inspection of weld seams
          </h2>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Ensure the highest weld quality – based on international standards
          </h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-600">
            <p>
              Our system enables the visual inspection of weld seams in accordance with globally recognized welding
              standards:
            </p>
            <ul className="space-y-4 mt-6">
              <li>
                <strong>ISO 5817:</strong> Defines quality levels and acceptance criteria for weld imperfections in
                steel, stainless steel, titanium, and nickel.
              </li>
              <li>
                <strong>ISO 10042:</strong> Applies specifically to aluminum welds and sets limits for acceptable
                deviations in aluminum arc welding.
              </li>
              <li>
                <strong>ISO 6520-1:</strong> Serves as the classification basis for all welding imperfections and
                defines the types and categories of weld seam irregularities.
              </li>
            </ul>
            <p className="mt-6">
              These standards ensure an objective, repeatable, and traceable assessment of weld quality across all
              production batches.
            </p>
          </div>
        </div>
      </section>

      {/* Weld Testing Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Weld Testing</h2>
              <p className="text-lg text-gray-600 mb-6">
                With the IUNA AI Weld Inspector you can automate various testing and inspection steps:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Is the weld seam there?</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Is the weld seam within the predefined tolerance range?</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Automatic detection of irregularities in the weld seam</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">
                    Automatic detection of cracks, pores, open end crater blowholes, burn-through, spatter, excessive
                    asymmetry in the fillet and other defects that can be expected in normal production
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/weld-seam-comparison.png"
                alt="IUNA AI Weld Inspector - Comparison of good and defective welds"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Analysis Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Precise AI Analysis</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI-powered system precisely analyzes each weld seam, identifying the tolerance range and performing
                detailed segmentation. The IUNA AI Weld Inspector can detect even the smallest defects that might be
                invisible to the human eye.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The system automatically determines whether a weld seam is within the acceptable tolerance range and
                highlights any areas that require attention. This ensures consistent quality control and reduces the
                risk of defective parts reaching the next production stage.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Precise tolerance measurement</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Advanced segmentation algorithms</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Real-time defect detection</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/weld-seam-analysis.png"
                  alt="IUNA AI Weld Inspector - AI analysis with tolerance and segmentation"
                  width={800}
                  height={300}
                  className="w-full h-auto"
                />
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
              System Architecture
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Modular design for maximum flexibility</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our complete turnkey system includes all hardware and software components for reliable weld seam
              inspection
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
                    alt="IUNA AI Weld Inspector User Interface with 3D Viewer showing weld seam inspection results"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intuitive User Interface with 3D Visualization</h3>
              <p className="text-gray-600 mb-6">
                The user interface is hosted directly on the IUNA AI Server and can be accessed via any web browser from
                any PC with network connection to the server. No additional software installation required.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Interactive 3D Viewer</h4>
                    <p className="text-sm text-gray-600">
                      Rework operators can see at a glance which weld seam on the product requires rework - highlighted
                      in red for NG (not good) and green for OK.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Results</h4>
                    <p className="text-sm text-gray-600">
                      Instant visualization of inspection results with detailed defect information and classification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Browser-Based Access</h4>
                    <p className="text-sm text-gray-600">
                      Access from any networked device - no client software installation needed.
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
                    alt="High-resolution industrial camera for weld seam inspection"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Camera className="h-4 w-4" />
                    <span className="text-sm">Image Acquisition</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Industrial Camera</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>High-resolution industrial cameras</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Including lenses and mounting</span>
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
                    alt="IUNA AI Server for weld seam inspection"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Server className="h-4 w-4" />
                    <span className="text-sm">Processing Unit</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">IUNA AI Server</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>AI inference for image processing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Available in 19″ rack housing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PLC */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 p-6">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <Image
                    src="/images/simatic-s7-plc.jpg"
                    alt="Siemens SIMATIC S7 PLC for system integration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Cpu className="h-4 w-4" />
                    <span className="text-sm">Control Unit</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">PLC</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>PROFINET Simatic or EtherNet/IP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Seamless line integration</span>
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
                    alt="Smart Vision Light for optimal illumination"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-primary font-medium mb-2">
                    <Lightbulb className="h-4 w-4" />
                    <span className="text-sm">Illumination</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Vision Light</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Industrial LED lighting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Optimal weld seam visibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible System Integration Options */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Flexible System Integration Options</h2>
            <p className="mt-4 text-lg text-gray-600">
              The IUNA AI Weld Inspector can be easily integrated into your existing production environment via the
              included PLC. Choose from three flexible camera configuration options to match your specific production
              requirements.
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
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              aria-label="Next slide"
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
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* PLC and Robot Compatibility */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">PLC Compatibility</h3>
              <p className="text-gray-600 mb-4">
                The IUNA AI Weld Inspector supports industry-standard communication protocols:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600">PROFINET Simatic PLCs</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600">EtherNet/IP Allen-Bradley PLCs</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Robot Compatibility</h3>
              <p className="text-gray-600 mb-4">Full support for all major industrial robot brands:</p>
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
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Complete Turnkey Solution</h3>
            <p className="text-gray-600 text-center mb-6">
              We deliver the complete hardware package including industrial camera technology and accessories such as
              lenses and tripods, light sources, PLC, and if required, the enclosure (inspection cell). We also handle
              on-site commissioning, so you can integrate the complete ready-to-use system into your production without
              any prior knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
                Industrial Cameras
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">Lenses & Tripods</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">Light Sources</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">PLC Integration</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">Inspection Cell</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
                On-Site Commissioning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages of automated visual weld seam inspection */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Advantages of Automated Visual Weld Seam Inspection
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                See why leading manufacturers choose the IUNA AI Weld Inspector over laser-based and ultrasound systems
              </p>
            </div>

            {/* Speed Highlight */}
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-white mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-4">
                    <Zap className="h-4 w-4" />
                    Lightning Fast
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Image Capture in Less Than 0.5 Seconds</h3>
                  <p className="text-white/90 text-lg">
                    The AI Weld Inspector flies over the seam (or the part moves past the camera), and the result is
                    available immediately. We don't slow down your production line - we keep pace with it.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="text-8xl md:text-9xl font-bold text-white/20">&lt;0.5s</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl md:text-6xl font-bold">100%</div>
                        <div className="text-lg font-medium">Inline Inspection</div>
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
                <div className="bg-gray-900 text-white px-6 py-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    vs. Laser-Based Systems
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Significantly More Cost-Effective</p>
                      <p className="text-sm text-gray-600">
                        No expensive 3D laser profile sensors required - just high-resolution industrial cameras
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Much Faster Inspection</p>
                      <p className="text-sm text-gray-600">
                        Extremely fast cycle times that don't slow down your production
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Superior Detection for Low-Height Welds</p>
                      <p className="text-sm text-gray-600">
                        Detects fine details where laser systems reach their limits
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* vs Ultrasound */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-900 text-white px-6 py-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    vs. Ultrasound Testing
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">100% Inline Inspection</p>
                      <p className="text-sm text-gray-600">
                        We inspect every single part in cycle time - no offline sampling required
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">No Part Contamination</p>
                      <p className="text-sm text-gray-600">
                        Non-contact inspection keeps your parts clean and ready for the next process
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Low Maintenance</p>
                      <p className="text-sm text-gray-600">
                        No coupling agents, no wear parts - reliable operation with minimal upkeep
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
                    Comprehensive Analytics
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">One-Click Complete Reports</h3>
                  <p className="text-gray-600 mb-6">
                    Our customers love the ability to generate complete inspection reports with a single click. See
                    exactly which weld seams are causing problems, how many welds across how many products are defective
                    on average, and track quality trends over time.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      Identify problematic welds instantly
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      Average defect rates across products
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      Historical trend analysis
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      Export to PDF, CSV, or integrate via API
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Inspection Rate</span>
                      <span className="text-sm font-bold text-primary">100%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">OK Rate (Today)</span>
                      <span className="text-sm font-bold text-green-600">98.7%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "98.7%" }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Parts Inspected</span>
                      <span className="text-sm font-bold text-gray-900">12,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Welds Analyzed</span>
                      <span className="text-sm font-bold text-gray-900">154,164</span>
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
                <h4 className="font-bold text-gray-900 mb-2">Drop-in Solution</h4>
                <p className="text-sm text-gray-600">
                  Ready to integrate into any robot cell without extensive modifications
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Real-Time Results</h4>
                <p className="text-sm text-gray-600">
                  Operates in production cycle time with instant pass/fail decisions
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Consistent Quality</h4>
                <p className="text-sm text-gray-600">Eliminates human error with objective, repeatable inspections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our proven implementation process ensures a smooth integration
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our proven implementation process ensures a smooth integration of the IUNA AI Weld Inspector into your
              production environment:
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Evaluation of Use Case</h3>
              <p className="text-gray-600">
                Contact us. Together, we will check your use case and the implementation options. After that we will
                select the required hardware components.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Installation</h3>
              <p className="text-gray-600">
                We integrate all required hardware into your production process: industrial camera, IUNA AI Server, PLC,
                lighting system, and if necessary an inspection cell. We also install and configure our AI vision
                software.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Model Teaching & Configuration</h3>
              <p className="text-gray-600">
                The first image data is used to teach the AI inspection software. Even a small amount of images is
                sufficient for this.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Inspection</h3>
              <p className="text-gray-600">
                From now on, the IUNA AI Weld Inspector takes over your inspection fully automatically. With the help of
                advanced AI vision models, you achieve consistent, objective quality control that is far superior to
                manual inspection.
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
              Ready to automate your weld seam inspection?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Contact our team to schedule a personalized demonstration of the IUNA AI Weld Inspector.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
