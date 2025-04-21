"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Car,
  ImageIcon,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Users,
  Lightbulb,
  Award,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">IUNA AI</h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-2xl text-gray-200 sm:text-3xl">AI Made in Germany</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 mb-12">This is IUNA AI</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Vehicles Inspected */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-black mb-6">
                <Car className="h-12 w-12 text-white" />
              </div>
              <p className="text-5xl font-bold text-primary mb-2">100,000+</p>
              <p className="text-xl text-gray-700">inspected vehicles</p>
            </div>

            {/* Labeled Images */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-black mb-6">
                <ImageIcon className="h-12 w-12 text-white" />
              </div>
              <p className="text-5xl font-bold text-primary mb-2">1,000,000+</p>
              <p className="text-xl text-gray-700">labeled images</p>
            </div>

            {/* Processed Images */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-black mb-6">
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
              <p className="text-5xl font-bold text-primary mb-2">150M+</p>
              <p className="text-xl text-gray-700">processed images</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Company</h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  IUNA AI Systems GmbH is a company founded in 2020 and based in Heilbronn, Germany. We develop deep
                  learning based camera systems and image processing software to automate quality assurance in
                  industrial manufacturing.
                </p>
                <p>
                  Our team combines expertise in software engineering, machine learning, and automotive manufacturing to
                  create cutting-edge AI vision systems that solve real-world quality control challenges.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/iuna-team-thumbs-up.png"
                alt="IUNA AI team giving thumbs up"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/team-exhibition.png"
                alt="IUNA AI team at an exhibition"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Our Mission</h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  We want to take automation in industrial production to the next level, especially in the area of
                  visual inspection and quality assurance. In doing so, we help companies to work more efficiently plus
                  increase the quality of their end products.
                </p>
                <p>
                  At a time when work needs to be done faster, better and more efficiently and cost pressure on
                  companies is increasing, employees and companies are reaching their limits. At this point,
                  technologies have the potential to support with artificial intelligence.
                </p>
                <p>
                  We are leaving behind the time when people are burdened with repetitive and physically demanding work.
                  We want employees to be able to invest their energy in creative and value-adding tasks. To achieve
                  this, we bring the latest technological developments of software and hardware in the field of image
                  processing to the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - New */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">The principles that guide our work and company culture</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and open communication. By working together across disciplines, we
                create solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible with AI and computer vision technology, seeking
                creative solutions to complex industrial challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality in everything we do, from our AI algorithms to our
                customer service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Environment - New */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Work Environment</h2>
            <p className="mt-4 text-lg text-gray-600">
              At IUNA AI, we work at the intersection of cutting-edge technology and industrial manufacturing
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/manufacturing-worker.png"
                alt="Manufacturing worker using IUNA AI vision system"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs text-white text-center">
                Image Source: Audi AG
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/team-audi-inspection.png"
                alt="IUNA AI team inspecting components at Audi"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs text-white text-center">
                Image Source: Audi AG
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team regularly visits customer sites to implement our AI vision systems, working directly with
              manufacturing teams to optimize quality control processes. This hands-on approach ensures our solutions
              meet real-world needs and deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Founders</h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {/* Jan */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full mb-6">
                <Image src="/images/jan.png" alt="Jan Nabatian - IUNA AI CEO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Jan Nabatian</h3>
              <p className="text-primary font-medium">CEO</p>
              <p className="mt-2 text-gray-600">
                Jan studied software engineering in Stuttgart before working in the field of production analysis in the
                automotive industry. Since 2020, Jan has been leading IUNA AI as Managing Director.
              </p>
            </div>

            {/* William */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full mb-6">
                <Image src="/images/tong.png" alt="William Chen - IUNA AI CTO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">William Chen</h3>
              <p className="text-primary font-medium">CTO</p>
              <p className="mt-2 text-gray-600">
                William studied automotive engineering in Beijing and Karlsruhe before working as a development engineer
                in the automotive industry. Since 2020, he has been head of product development at IUNA AI.
              </p>
            </div>

            {/* Samira */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full mb-6">
                <Image src="/images/samira.png" alt="Samira Nabatian - IUNA AI COO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Samira Nabatian</h3>
              <p className="text-primary font-medium">COO</p>
              <p className="mt-2 text-gray-600">
                Samira studied economics in Nuremberg before working in commercial project management at Siemens. She
                has been Head of Business Development and Finance at IUNA AI since 2020.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Contact Us</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Address</h3>
                  <div className="flex items-start space-x-3 text-gray-700">
                    <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                    <div>
                      <p>IUNA AI Systems GmbH</p>
                      <p>Humboldstr. 14</p>
                      <p>74199 Untergruppenbach</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span>sales@iuna.ai</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Phone className="h-5 w-5 flex-shrink-0" />
                      <span>+49 152 5538 6189</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Social Media</h3>
                  <div className="flex space-x-8">
                    <a
                      href="https://www.linkedin.com/company/iuna-ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                      aria-label="Follow us on LinkedIn"
                    >
                      <Linkedin className="h-12 w-12" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://x.com/iunaai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                      aria-label="Follow us on X (Twitter)"
                    >
                      <Twitter className="h-12 w-12" />
                      <span className="sr-only">X (Twitter)</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@iunaai2860"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                      aria-label="Subscribe to our YouTube channel"
                    >
                      <Youtube className="h-12 w-12" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672000.8487139231!2d8.5518653!3d48.9936516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f7.1!3m3!1m2!1s0x47982feb3f36f741%3A0x1ef0dcda750483d4!2sIUNA%20AI!5e0!3m2!1sen!2sde!4v1711057234567!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IUNA AI Location Map showing broader Baden-Württemberg region"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section - New */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for talented individuals who are passionate about AI, computer vision, and quality
              assurance to join our growing team.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              At IUNA AI, you'll have the opportunity to work on cutting-edge technology that's transforming industrial
              manufacturing, collaborate with a talented team, and make a real impact on our customers' operations.
            </p>
            <div className="flex justify-center">
              <Link href="/careers">
                <Button className="group">
                  View Open Positions
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              Ready to transform your quality control?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Contact us to learn how our AI vision systems can improve your manufacturing processes.
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
