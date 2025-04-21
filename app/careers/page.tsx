"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, Users, Lightbulb, Zap, GraduationCap, Clock, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/iuna-team-audi.jpeg"
            alt="IUNA AI Team at Audi"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">Careers</h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-2xl text-gray-200 sm:text-3xl">
            Join our team and shape the future of AI vision systems
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Join IUNA AI?</h2>
            <p className="mt-4 text-lg text-gray-600">
              At IUNA AI, we're revolutionizing industrial quality assurance with cutting-edge AI vision systems. Join
              our team and be part of something extraordinary.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative Team</h3>
              <p className="text-gray-600">
                Work directly with our founding team and experienced developers in a supportive environment where your
                ideas matter.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovative Projects</h3>
              <p className="text-gray-600">
                Develop cutting-edge AI solutions for real-world challenges in the automotive and manufacturing
                industries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                Expand your skills and advance your career in a fast-growing startup with opportunities to make a
                significant impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
                Stay at the forefront of AI and computer vision technology with ongoing learning and development
                opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Work</h3>
              <p className="text-gray-600">
                Enjoy a balanced work environment with flexible hours and the opportunity to visit customer sites and
                see your work in action.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Startup Culture</h3>
              <p className="text-gray-600">
                Experience the dynamic startup ecosystem as a member of the Campus Founders on the Bildungscampus in
                Heilbronn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Images Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join a passionate team dedicated to revolutionizing industrial quality assurance
            </p>
          </div>

          <div className="relative h-80 overflow-hidden rounded-lg shadow-lg mb-8">
            <Image
              src="/images/iuna-team-thumbs-up.png"
              alt="IUNA AI team giving thumbs up"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/team-exhibition.png"
                alt="IUNA AI team at an exhibition"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/manufacturing-worker.png"
                alt="Manufacturing worker using IUNA AI vision system"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/team-audi-inspection.png"
                alt="IUNA AI team inspecting components at Audi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Open Positions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join our team and help us revolutionize industrial quality assurance with AI vision systems
            </p>
          </div>

          <div className="mx-auto max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Role</h3>
              <p className="text-lg text-gray-600 mb-6">
                We're looking for talented individuals to join our team. Visit our careers portal to view all current
                openings and apply directly with your resume and cover letter.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our open positions include roles in software development, machine learning, computer vision, and more.
                Whether you're looking for a full-time position, internship, or working student opportunity, we'd love
                to hear from you.
              </p>
              <a href="https://join.com/companies/iuna" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group">
                  View All Open Positions
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Benefits at IUNA AI</h2>
              <p className="text-lg text-gray-600 mb-6">
                At IUNA AI, we value our team members and offer a range of benefits to ensure a rewarding and balanced
                work experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Work on real projects with immediate impact</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Visit customer sites and see your work in action</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Collaborate directly with the founding team</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Competitive compensation and benefits</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="ml-3 text-gray-600">Opportunity to grow with a rapidly expanding company</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/team-audi-inspection.png"
                alt="IUNA AI team working with customers"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Application Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our streamlined application process is designed to find the right fit for both you and our team
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Application</h3>
              <p className="text-gray-600">
                Submit your application with your CV and a brief cover letter explaining why you're interested in
                joining IUNA AI.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Interview</h3>
              <p className="text-gray-600">
                If your profile matches our requirements, we'll invite you for an initial interview to get to know you
                better.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Assessment</h3>
              <p className="text-gray-600">
                Depending on the role, we may ask you to complete a small technical task or participate in a technical
                discussion.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Final Decision</h3>
              <p className="text-gray-600">
                After the assessment, we'll make a decision and provide feedback as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to join our team?</h2>
            <p className="mt-4 text-xl text-white/90">
              Apply today and be part of our mission to revolutionize industrial quality assurance with AI vision
              systems.
            </p>
            <p className="mt-2 text-lg text-white/90">
              Send your application to{" "}
              <a href="mailto:sales@iuna.ai" className="underline hover:text-white">
                sales@iuna.ai
              </a>
            </p>
            <div className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a href="https://join.com/companies/iuna" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">
                  View Open Positions
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 bg-gray-200 text-gray-900 hover:bg-gray-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
