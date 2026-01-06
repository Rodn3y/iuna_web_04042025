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
            alt="IUNA Weld Inspector - AI-powered weld inspection"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-start justify-center px-4 pt-24 md:pt-0 sm:px-6 lg:px-8">
          <p className="text-lg font-semibold text-white sm:text-xl md:text-2xl mb-2">IUNA Weld Inspector</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            The Turnkey AI System for Optical Weld Inspection
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <h2 className="mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl font-normal md:mt-6">
            Complete solution combining industrial imaging hardware and AI software to automate manual visual
            inspection.
          </h2>
        </div>
      </section>

      {/* Overview Section - ISO standards with expandable descriptions */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ensure the highest weld quality – based on international standards
            </h2>
            <div className="mt-4 h-1 w-32 bg-primary mx-auto"></div>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Our system enables the visual inspection of weld seams in accordance with globally recognized welding
              standards. Click on each standard to learn more.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Arc Welding */}
              <AccordionItem value="arc-welding" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Arc Welding</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          ISO 5817
                        </span>
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          ISO 10042
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      These standards are the worldwide foundation of quality assurance in arc welding. They define
                      three evaluation groups (B, C, D) for weld seam irregularities – from low to high quality
                      requirements.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">ISO 5817:</span> Steel / Nickel / Titanium
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">ISO 10042:</span> Aluminum
                      </span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Our advantage:</span> Our system objectively checks
                        whether a seam meets the required limits for pores, undercuts, or excessive reinforcement,
                        differentiated by material type (e.g., steel vs. aluminum).
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Laser & Beam Welding */}
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
                      <h3 className="font-semibold text-gray-900">Laser & Beam Welding</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          ISO 13919-1
                        </span>
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          ISO 13919-2
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      Laser and electron beam welding produce specific defect patterns that conventional standards do
                      not cover. ISO 13919 is the benchmark for high-performance welding processes, commonly used in the
                      automotive industry (e.g., battery trays, powertrain).
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">ISO 13919-1:</span> Steel & Iron
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium">ISO 13919-2:</span> Aluminum & Alloys
                      </span>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Our advantage:</span> The IUNA Weld Inspector is
                        trained to reliably detect the fine, often microscopic defects of these precision processes and
                        classify them according to the strict criteria of ISO 13919.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Brazing */}
              <AccordionItem value="brazing" className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Flame className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">Brazing</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          ISO 18279
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      In vehicle manufacturing, visible surfaces are often brazed rather than welded. This standard
                      defines irregularities specifically for brazed joints, such as wetting defects or edge bonding
                      defects that do not occur in welding.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Our advantage:</span> Since brazed joints are often
                        aesthetic visible seams (e.g., on tailgates), our AI combines technical inspection with
                        aesthetic control according to ISO 1879.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Defect Classification */}
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
                      <h3 className="font-semibold text-gray-900">Defect Classification</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          ISO 6520-1
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      For quality issues to be understood internationally, every defect needs a name and a number. ISO
                      6520-1 serves as the "dictionary" of welding defects and divides irregularities into six main
                      groups (e.g., cracks, cavities, lack of fusion).
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Our advantage:</span> Our software uses this
                        standardized terminology for reporting. This way, everyone – from the operator to the customer –
                        understands which defect (e.g., "Defect 2017: Gas pore") is present.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Inspection Process */}
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
                      <h3 className="font-semibold text-gray-900">Inspection Process</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-primary font-mono text-xs font-medium bg-primary/5 px-2 py-0.5 rounded">
                          ISO 17637
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="pl-14 space-y-3">
                    <p className="text-gray-600">
                      This standard describes not the defect, but the "how" of the inspection: What lighting is
                      required? At what angle should inspection be performed? What distance is permissible?
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 mt-3">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-primary">Our advantage:</span> Manual inspectors tire or
                        look with varying attention. The IUNA Weld Inspector automates the requirements of ISO 17637 by
                        always guaranteeing constant lighting, the perfect viewing angle, and 100% attention – 24/7.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <p className="mt-10 text-center text-gray-600 max-w-3xl mx-auto">
            These standards ensure an objective, repeatable, and traceable assessment of weld quality across all
            production batches.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Intelligent Weld Seam Analysis
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our software combines deep learning-based AI models with rule-based algorithms, enabling precise detection
              of defects and accurate measurement of weld seam dimensions in millimeters.
            </p>
          </div>

          {/* Main Feature Grid */}
          <div className="grid gap-8 lg:grid-cols-2 mb-16">
            {/* Left Column - OK/NOT OK Comparison */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/weld-seam-comparison-new.png"
                  alt="IUNA Weld Inspector - Comparison of OK and defective (NOT OK) weld seams"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Defect Detection</h3>
                <p className="text-gray-600 mb-4">
                  Automatic classification of weld seams as OK or NOT OK based on trained AI models that detect:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Cracks, pores and blowholes</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Burn-through and spatter</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Asymmetry and geometric deviations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Tolerance & Segmentation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image
                  src="/images/weld-seam-tolerance.png"
                  alt="IUNA Weld Inspector - Tolerance and segmentation analysis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tolerance & Segmentation Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Rule-based algorithms verify weld seam position and dimensions against predefined tolerance ranges:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Precise position verification</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Automatic tolerance range checking</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>AI-powered segmentation</span>
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
                  alt="IUNA Weld Inspector - Precise weld seam measurement in millimeters"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Ruler className="h-4 w-4 mr-2" />
                  Precision Measurement
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Weld Seam Dimensions in Millimeters</h3>
                <p className="text-gray-600 mb-6">
                  The hybrid approach of deep learning and rule-based algorithms enables precise measurement of weld
                  seam length and width directly in millimeters. We can also measure directly at the component edge,
                  ensuring the seam is symmetrical to the edge and verifying proper bonding. This provides accurate
                  dimensional data for quality documentation and process optimization.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{`<0.5mm`}</div>
                    <div className="text-sm text-gray-600">Measurement Accuracy</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-gray-600">Documented Results</div>
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
                    alt="IUNA Weld Inspector User Interface with 3D Viewer showing weld seam inspection results"
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

            {/* One-Click Reporting */}
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
