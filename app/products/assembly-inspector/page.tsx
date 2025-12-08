import Image from "next/image"
import {
  Check,
  Zap,
  Shield,
  Cpu,
  DollarSign,
  Target,
  Gauge,
  Camera,
  Eye,
  Server,
  Monitor,
  Globe,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AssemblyInspector() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header-ai-scanner.jpeg"
            alt="IUNA Assembly Inspector - Automated visual inspection system"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            IUNA Assembly Inspector
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
            Automated visual inspection for your production
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            The intelligent camera system for your quality assurance
          </h2>
          <div className="mt-6 prose prose-lg max-w-none text-gray-600">
            <p>
              With the IUNA Assembly Inspector, we offer you a system that can be used flexibly in quality assurance.
              Each Assembly Inspector is individually configured for your manufacturing process. By optimally
              coordinating software and hardware, we maximize the reliability of the inspection.
            </p>
            <p>
              For our Assembly Inspector, we combine high-resolution industrial cameras and customized AI models. This
              allows us to offer you automated testing with maximum precision.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Application Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Areas of Application</h2>
            <p className="mt-4 text-lg text-gray-600">
              The IUNA Assembly Inspector offers versatile solutions for a wide range of quality assurance challenges in
              manufacturing
            </p>
          </div>

          {/* Presence Check */}
          <div className="grid gap-16 items-center md:grid-cols-2 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Presence Check</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our Assembly Inspector excels at verifying the presence of critical components in complex assemblies.
                The system can detect even small parts like nuts, bolts, clips, and connectors with high precision.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Verification of nuts, bolts, studs, and clips</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Detection of missing or incorrectly installed components</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Inspection of multiple features in a single cycle</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Prevention of costly assembly errors and rework</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-800 p-4">
              <Image
                src="/images/presence-check-rendering-camera-red.png"
                alt="IUNA Assembly Inspector - Presence check of automotive components"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Dimensional Measurement */}
          <div className="grid gap-16 items-center md:grid-cols-2 mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dimensional Measurement</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our Assembly Inspector provides precise dimensional measurements of critical components, ensuring they
                meet exact specifications. The system can measure distances, angles, diameters, and other geometric
                parameters with sub-millimeter accuracy.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Verification of dimensional and positional tolerances</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Measurement of hole spacing, angles, and gaps</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Comparison with CAD specifications</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Simultaneous measurement of multiple dimensions in-line</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden shadow-xl bg-gray-800 p-4">
              <Image
                src="/images/dimensional-measurement-rendering-measure-large.png"
                alt="IUNA Assembly Inspector - Dimensional measurement of automotive components"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* OCR and Additional Applications */}
          <div className="grid gap-12 md:grid-cols-2 mt-12">
            {/* OCR */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Optical Character Recognition (OCR)</h3>
              <p className="text-lg text-gray-600 mb-6">
                Read and verify text, serial numbers, and labels on components. Our OCR system handles various fonts,
                sizes, and surfaces with high accuracy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Text and serial number recognition</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Support for various fonts and surfaces</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Label verification and quality control</span>
                </li>
              </ul>
            </div>

            {/* Code Reading */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Code Reading</h3>
              <p className="text-lg text-gray-600 mb-6">
                The Assembly Inspector reliably reads and verifies QR codes, Datamatrix codes, and barcodes. This
                enables seamless traceability and automated identification of components throughout the production
                process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Reading of QR codes, Datamatrix codes, and barcodes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Component traceability throughout production</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Verification of code readability and content</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Integration with MES and ERP systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Components Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              System Architecture
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Modular design for maximum flexibility</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our complete turnkey system includes all hardware and software components for reliable visual inspection
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start mb-16">
            {/* Left: Featured User Interface */}
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
                    src="/images/ai-scanner-software.png"
                    alt="IUNA Assembly Inspector User Interface showing inspection results"
                    fill
                    className="object-contain bg-gray-100"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intuitive User Interface</h3>
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
                    <h4 className="font-semibold text-gray-900">Real-time Visualization</h4>
                    <p className="text-sm text-gray-600">
                      Operators can see inspection results immediately with clear OK/NG status indicators.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Results</h4>
                    <p className="text-sm text-gray-600">
                      Fast AI inference delivers inspection results with detailed defect information.
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
                    alt="High-resolution industrial camera for visual inspection"
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
                    alt="IUNA AI Server for visual inspection"
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
                      <span>Optimal component visibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Advantages of the IUNA Assembly Inspector
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The IUNA Assembly Inspector offers numerous advantages for your production
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Maximum Precision</h3>
              <p className="text-gray-600">
                Our AI models are trained for highest precision and provide reliable inspection results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Integration</h3>
              <p className="text-gray-600">Our systems can be seamlessly integrated into existing production lines.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reliable Results</h3>
              <p className="text-gray-600">Consistent quality control through objective AI-based inspection.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">
                With the Assembly Inspector you save working time and money. At the same time, costs are predictable and
                transparent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Cycle Times</h3>
              <p className="text-gray-600">
                Due to Multi-GPU processing the Assembly Inspector can process large amounts of data very fast and
                comply short cycle times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom AI Models</h3>
              <p className="text-gray-600">
                Our AI models are individually trained and optimized for your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Implementation Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our proven implementation process ensures a smooth integration of the IUNA Assembly Inspector into your
              production environment
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Use Case Assessment</h3>
              <p className="text-gray-600">We analyze your requirements and develop a customized solution concept.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">System Installation</h3>
              <p className="text-gray-600">
                We install the complete hardware including industrial camera, IUNA AI Server, PLC, lighting technology,
                and if necessary an inspection cell at your site.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Model Teaching & Configuration</h3>
              <p className="text-gray-600">
                We train and configure the AI models specifically for your inspection task.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Autonomous Inspection</h3>
              <p className="text-gray-600">
                From now on, the Assembly Inspector takes over your inspection fully automatically. With the help of the
                user interface, you can track and evaluate results at any time.
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
              Ready to optimize your quality assurance?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Contact our team to schedule a personalized demonstration of the IUNA Assembly Inspector.
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
