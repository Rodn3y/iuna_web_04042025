import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SolutionPageProps {
  params: {
    slug: string
  }
}

export default function SolutionPage({ params }: SolutionPageProps) {
  // In a real application, you would fetch this data from a CMS or API
  const solution = getSolutionBySlug(params.slug)

  if (!solution) {
    return <div className="container py-20 text-center">Solution not found</div>
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={solution.heroImage || "/placeholder.svg"}
            alt={solution.title}
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {solution.title}
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">{solution.description}</p>
          <div className="mt-10">
            <Button size="lg" className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300">
              Request Demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Overview</h2>
            <div className="mt-6 prose prose-lg max-w-none text-gray-600">
              <p>{solution.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our {solution.title} solution offers cutting-edge capabilities to transform your operations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((feature, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to implement {solution.title}?</h2>
            <p className="mt-4 text-xl text-white/90">Contact our team to schedule a personalized demonstration.</p>
            <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data - in a real application, this would come from a CMS or API
function getSolutionBySlug(slug: string) {
  const solutions = {
    automotive: {
      title: "Automotive Solutions",
      description: "AI vision systems for vehicle assembly, component inspection, and quality control.",
      heroImage: "/images/automotive.jpg",
      overview:
        "Our automotive solutions leverage advanced AI vision systems to enhance quality control, streamline production, and reduce defects in vehicle manufacturing. From weld seam inspection to surface defect detection, our systems integrate seamlessly with your existing production lines to deliver immediate improvements in efficiency and quality.",
      features: [
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          ),
          title: "Weld Seam Inspection",
          description: "AI-powered visual inspection system that detects defects in weld seams with 99.8% accuracy.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          ),
          title: "Paint Inspection",
          description: "Advanced computer vision that identifies paint imperfections invisible to the human eye.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          ),
          title: "Assembly Verification",
          description: "Real-time verification of component assembly to prevent errors and ensure quality.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          title: "Predictive Maintenance",
          description: "Vision systems that predict equipment failures before they occur, reducing downtime.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          ),
          title: "Process Optimization",
          description: "Data-driven insights to optimize manufacturing processes and increase efficiency.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          ),
          title: "Custom AI Solutions",
          description: "Tailored AI vision systems designed for your specific automotive manufacturing challenges.",
        },
      ],
    },
    manufacturing: {
      title: "Manufacturing Solutions",
      description: "Advanced inspection solutions for production lines, assembly verification, and defect detection.",
      heroImage: "/images/manufacturing.jpg",
      overview:
        "Our manufacturing solutions provide end-to-end quality control and process optimization through advanced AI vision systems. By integrating our technology into your production lines, you can detect defects earlier, reduce waste, and improve overall product quality while increasing operational efficiency.",
      features: [
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          ),
          title: "Surface Defect Detection",
          description: "AI-powered visual inspection system that detects surface defects with high precision.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          ),
          title: "Component Verification",
          description: "Ensure correct components are used in assembly with real-time verification.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          ),
          title: "Quality Control",
          description: "End-to-end quality control systems that integrate with your existing production line.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          title: "Predictive Maintenance",
          description: "Vision systems that predict equipment failures before they occur, reducing downtime.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          ),
          title: "Process Optimization",
          description: "Data-driven insights to optimize manufacturing processes and increase efficiency.",
        },
        {
          icon: (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          ),
          title: "Custom AI Solutions",
          description: "Tailored AI vision systems designed for your specific manufacturing challenges.",
        },
      ],
    },
  }

  return solutions[slug as keyof typeof solutions]
}
