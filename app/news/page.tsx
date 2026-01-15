import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, Linkedin, Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageSlider } from "@/components/image-slider"

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/news-header-camera.jpg"
            alt="Industrial vision camera in automotive manufacturing"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            News & Updates
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">
            Stay updated with the latest developments and achievements at IUNA AI
          </p>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-lg font-medium text-gray-700">Follow us on social media for more updates:</p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/iuna-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://x.com/iunaai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-medium">X</span>
              </a>
              <a
                href="https://www.youtube.com/@iunaai2860"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
              >
                <Youtube className="h-6 w-6" />
                <span className="font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* News Item - Basler Use Case Article */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2026</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Basler Publishes Use Case Article About IUNA AI
              </h2>

              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/basler-iuna-weld-inspection.png"
                  alt="Welding process with AI-based weld seam inspection showing OK and NOT OK classification"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p>
                  <strong>Basler</strong>, one of the world's leading manufacturers of industrial cameras, has published
                  a detailed use case article about <strong>IUNA AI</strong> and our solutions for automated visual
                  inspection in the automotive industry.
                </p>
                <p>
                  The article highlights how the <strong>IUNA Weld Inspector</strong> enables{" "}
                  <strong>ISO-compliant weld seam inspection</strong> and how our AI-based systems automate visual
                  inspection in <strong>body-in-white manufacturing</strong>. The collaboration between IUNA AI and
                  Basler demonstrates how cutting-edge industrial imaging hardware combined with intelligent AI software
                  delivers reliable quality assurance in demanding production environments.
                </p>

                <div className="bg-gray-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                  <p className="text-gray-700 font-medium mb-0">
                    "With Basler's high-performance industrial cameras and IUNA AI's intelligent software, we enable
                    manufacturers to achieve 100% automated visual inspection compliant with international welding
                    standards like ISO 5817."
                  </p>
                </div>

                <div className="mt-8">
                  <a
                    href="https://www.baslerweb.com/de-de/use-cases/iuna-ai-systems/?utm_source=basler-newsletter&utm_medium=email&utm_campaign=ace-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 font-medium transition-colors"
                  >
                    Read the Full Article on Basler.com
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* News Item - Text-to-Mask Technology Video */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>December 9, 2025</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                New Update to Our IUNA Label Toolkit: How We Train AI Models in Minutes Instead of Days
              </h2>

              {/* YouTube Video Embed */}
              <div className="relative w-full mb-8 overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/1gZpjtHAkjA"
                  title="IUNA AI Text-to-Mask Technology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p>
                  Our self-developed <strong>IUNA Label Toolkit</strong> has received a new update! Since 2021, we have
                  been continuously using and optimizing this internal tool to constantly improve our labeling pipeline
                  and make it even more efficient.
                </p>
                <p>
                  Why are the <strong>IUNA Weld Inspector</strong> and <strong>Assembly Inspector</strong> ready for
                  deployment so quickly? Because we have eliminated AI's biggest bottleneck: Manual labeling.
                </p>
                <p>
                  In this video, we reveal our internal "secret sauce": With the latest version of our Label Toolkit and{" "}
                  <strong>Text-to-Mask technology</strong>, we train our models for your components in minutes instead
                  of days. See for yourself how we detect weld seams using simple text commands.
                </p>

                <div className="bg-gray-50 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                  <p className="text-gray-700 font-medium mb-0">
                    By leveraging <strong>Vision Foundation Models</strong> and our continuously evolving IUNA Label
                    Toolkit, we drastically reduce the commissioning time at your facility.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    Want to know how quickly we can automate the inspection of your components?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 font-medium transition-colors"
                  >
                    Request a Feasibility Check Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* News Item - SCHWEISSEN & SCHNEIDEN 2025 */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>September 15, 2025</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                IUNA AI at SCHWEISSEN & SCHNEIDEN 2025 in Essen
              </h2>

              {/* Image Slider */}
              <div className="w-full mb-24" style={{ height: "400px" }}>
                <ImageSlider
                  images={[
                    {
                      src: "/images/schweissen-schneiden-2025-demo-1.jpeg",
                      alt: "Visitors examining the IUNA AI Weld Seam Scanner demonstration at the AWL booth",
                    },
                    {
                      src: "/images/schweissen-schneiden-2025-demo-2.jpeg",
                      alt: "IUNA team member demonstrating real-time AI weld inspection to a visitor",
                    },
                    {
                      src: "/images/schweissen-schneiden-2025-booth.jpeg",
                      alt: "AWL booth at SCHWEISSEN & SCHNEIDEN 2025 with many interested visitors",
                    },
                    {
                      src: "/images/schweissen-schneiden-2025-team.jpeg",
                      alt: "IUNA AI and AWL team at their joint booth at the trade fair",
                    },
                  ]}
                  aspectRatio="wide"
                  showAttribution={false}
                  className="h-full w-full"
                />
              </div>

              {/* Visual Separator */}
              <div className="w-full h-1 bg-gray-200 my-6"></div>

              {/* Text content */}
              <div className="prose prose-lg max-w-none mt-20 pt-6">
                <p>
                  This year's SCHWEISSEN & SCHNEIDEN trade fair in Essen was truly special for IUNA AI. We had the
                  opportunity to showcase the future of weld seam inspection live, and the response was overwhelming.
                  Not only companies from the automotive sector stopped by, but also many other industries eager to
                  explore how AI-powered inspection can enhance their quality processes.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Highlights from the Fair</h3>

                <p>
                  <strong>Live Demo of Our Weld Seam Scanner:</strong> Visitors experienced real-time AI weld inspection
                  firsthand, seeing how our technology moves beyond manual checks toward faster, more consistent quality
                  control. The interactive demonstrations allowed attendees to see the system detect and classify weld
                  defects in real-time, showcasing the practical benefits of AI-powered inspection.
                </p>

                <p>
                  <strong>AI Innovation in Practice:</strong> We demonstrated how computer vision and deep learning can
                  be transformed into robust, practical tools for production environments. Our system's ability to
                  detect defects according to international standards like ISO 5817, ISO 10042, and ISO 6520-1 impressed
                  many visitors who are looking for reliable, automated quality assurance solutions.
                </p>

                <p>
                  <strong>Inspiring Conversations:</strong> The discussions with partners, customers, and new contacts
                  were incredibly valuable. We connected with companies from various industries including automotive,
                  manufacturing, metal fabrication, and construction, all interested in leveraging AI for quality
                  control. These conversations have already led to several follow-up meetings and potential
                  partnerships.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4">Partnership with AWL</h3>

                <p>
                  We would like to extend a big thank you to everyone who visited us at our joint booth with AWL. The
                  collaboration between IUNA AI's intelligent software solutions and AWL's expertise in smart robotic
                  automation creates a powerful combination for the future of industrial quality control.
                </p>

                <p>
                  The journey of bringing deep learning-based weld inspection to production lines has just begun, and
                  we're excited for what's next. The positive feedback and interest from the fair confirm that the
                  industry is ready for AI-powered quality assurance, and we're proud to be at the forefront of this
                  transformation.
                </p>

                <div className="mt-8">
                  <Link
                    href="/products/weld-inspector"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Learn more about our Weld Inspector
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* News Item - inVISION Magazine */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>August 1, 2024</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                IUNA AI featured in inVISION Magazine
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  We are pleased to announce that our company IUNA AI has been mentioned in the trade magazine inVISION
                  News in the article "Weld Seam Inspection". The article presents our Weld Seam Vision System, which
                  was specially developed for the automated inspection of MIG/MAG weld seams - for both manual and
                  robot-assisted welding processes.
                </p>
                <p>
                  Our system provides comprehensive quality assurance by detecting weld seam defects in real-time,
                  ensuring compliance with international standards including ISO 5817, ISO 10042, and ISO 6520-1. This
                  recognition in a leading industry publication underscores our commitment to innovation in industrial
                  quality control.
                </p>
                <div className="mt-6">
                  <a
                    href="https://invision-news.de/ki-deep-learning/weld-seam-inspection/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Read the article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* News Item - Valve Cap Recognition */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>June 28, 2024</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Valve cap recognition: IUNA supports wheel and tire assembly for OEMs
              </h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/manufacturing-worker.png"
                  alt="IUNA AI valve cap recognition system"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs text-white text-center">
                  Image Source: Audi AG
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  For our customers, checking the correct wheel/tyre combinations before delivery to the vehicle
                  manufacturer is a major challenge. Due to the increasing diversification and individualization of
                  tires, rims and valve caps, the requirements for precision and accuracy in tire assembly have risen
                  sharply in recent years.
                </p>
                <p>
                  Thanks to the IUNA Assembly Inspector, it is now possible to automate this inspection process. The
                  IUNA Assembly Inspector compares the color and shape of the valve cap and the valve on the image and
                  compares this information with the target value from the database. This use of industrial computer
                  vision and AI technology avoids errors and returns even before delivery.
                </p>
              </div>
            </div>

            {/* News Item - Auto Scanner Development */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>October 14, 2023</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Further development of the IUNA Auto Scanner for use in the final assembly (finish)
              </h2>

              <div className="w-full mb-24" style={{ height: "400px" }}>
                <ImageSlider
                  images={[
                    {
                      src: "/images/auto-scanner-discussion.jpeg",
                      alt: "IUNA team member discussing Auto Scanner results with Audi specialist",
                    },
                    {
                      src: "/images/auto-scanner-inspection-station.jpeg",
                      alt: "Audi e-tron GT in the Auto Scanner inspection station with visualization display",
                    },
                    {
                      src: "/images/auto-scanner-cameras.jpeg",
                      alt: "High-precision cameras mounted on the Auto Scanner inspection system",
                    },
                  ]}
                  aspectRatio="wide"
                  showAttribution={true}
                  attribution="Image Source: Audi AG"
                  className="h-full w-full"
                />
              </div>

              <div className="w-full h-1 bg-gray-200 my-6"></div>

              <div className="prose prose-lg max-w-none mt-20 pt-6">
                <p>
                  We are proud to announce the latest development of our IUNA Auto Scanner. The Auto Scanner can now
                  also be used in the finishing process and accurately detects paint defects, dents, dings and other
                  surface defects. This enhancement enables vehicle manufacturers to further improve the quality of
                  their products and increase the efficiency of the final inspection.
                </p>
                <p>
                  The system uses advanced computer vision and AI algorithms to identify even subtle imperfections that
                  might be missed by human inspectors. Our collaboration with Audi has been instrumental in refining
                  this technology for high-end automotive applications.
                </p>
              </div>
            </div>

            {/* News Item - Auto Scanner v3 */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>February 15, 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Auto Scanner v3 / Body Shop</h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/auto-scanner-v3-interface.jpeg"
                  alt="IUNA Auto Scanner v3 user interface showing body analysis in Audi production facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  The third version of our Auto Scanner was expanded with "anomaly detection" functionality. The system
                  not only detects predefined defects, but is also able to check the entire vehicle surface for
                  anomalies. Anomalies are defects for which little to no historical image data is available. This means
                  that even rare defects that would otherwise only be detected by humans can be captured fully
                  automatically. This achieved complete automation of the inspection process in Audi's body shop and
                  replaced manual visual inspection.
                </p>
              </div>
            </div>

            {/* News Item - IUNA AI Inspector Release */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>September 24, 2021</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Release IUNA AI Inspector</h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image src="/images/ai-scanner.png" alt="IUNA AI Inspector" fill className="object-cover" />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  Based on the know-how from the Auto Scanner, the IUNA AI Inspector was developed in September 2021.
                  With the AI Inspector, we have developed a modular and easy-to-use AI image processing system that can
                  be integrated inline. Combined with the right software application, we are flexible to solve a wide
                  range of tasks in industrial manufacturing.
                </p>
                <div className="mt-6">
                  <Link
                    href="/products/ai-inspector"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* News Item - Auto Scanner v2 */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>March 11, 2021</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Auto Scanner v2 / Body Shop</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  In March, the second version of the IUNA Auto Scanner was completed. The system checks standard points
                  on the vehicle body for surface geometry defects. These include waviness, dents, sheet metal
                  irregularities and other defects that predominantly occur in the body shop department. In addition,
                  the data helps the respective department to identify process-related errors or errors from suppliers.
                </p>
              </div>
            </div>

            {/* News Item - Development Partner */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>September 1, 2020</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Iuna.ai becomes development partner of Audi AG
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  In September 2020, iuna.ai became an official development partner of VW. The goal of the development
                  cooperation was to further develop the IUNA Auto Scanner v1 in the body shop of the Audi R8 for fully
                  autonomous identification of surface geometry defects on the body.
                </p>
              </div>
            </div>

            {/* News Item - Auto Scanner v1 */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>March 15, 2020</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Auto Scanner v1 / Surface defect detection
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  In March 2020, the first version of the Auto Scanner was completed as part of the research project of
                  the University of Stuttgart's Machine Learning group and Audi. This provided the proof of concept of
                  an AI-based detection of surface damage on vehicles on the assembly line.
                </p>
              </div>
            </div>

            {/* News Item - Press Article Heilbronner Stimme */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>July 28, 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Press Article / IUNA AI x Audi</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The current article in Heilbronner Stimme describes how Audi wants to drive change in production in
                  the future and how we at IUNA AI are helping to shape this change. Our goal has always been to bring
                  AI technology to today's manufacturing as easily and quickly as possible. We have already implemented
                  exactly this for Audi. Further projects with Audi are in the planning phase.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.stimme.de/wirtschaft/baden-wuerttemberg/wirtschaft/audi-startet-radikalen-umbau-der-produktion-digitalisierung-kosten-geschwindigkeit-art-4655141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* News Item - Research Project - now last item without border */}
            <div className="mb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>September 1, 2019</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Research project / Universität Stuttgart x Audi AG
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The idea for an AI-based image data analysis came from a cooperation between the university group for
                  Machine Learning at the University of Stuttgart and Audi AG in Neckarsulm. The goal of the research
                  project was to deliver proof of concept of an AI-based autonomous quality assurance of vehicles on the
                  assembly line. The university group was initiated and led by Jan Nabatian in 2019.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want to learn more about our AI vision systems?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Contact our team to schedule a personalized demonstration of our products.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
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
