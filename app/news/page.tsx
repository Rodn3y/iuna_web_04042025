import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight, Linkedin, Twitter } from "lucide-react"
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
                <Twitter className="h-6 w-6" />
                <span className="font-medium">X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
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
                    href="/products/weld-seam-scanner"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Learn more about our Weld Seam Scanner
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
                  Thanks to the IUNA AI scanner, it is now possible to automate this inspection process. The IUNA AI
                  scanner compares the color and shape of the valve cap and the valve on the image and compares this
                  information with the target value from the database. This use of industrial computer vision and AI
                  technology avoids errors and returns even before delivery.
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

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>July 28, 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Press article / IUNA AI x Audi</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The current article of the Heilbronner Stimme describes how Audi wants to drive the change in
                  production in the future and also how we at IUNA AI are helping to shape this change. Our goal has
                  always been to bring AI technology as easily and quickly as possible into today's manufacturing. That
                  is exactly what we have already been able to do for Audi. Further projects with Audi are in the
                  planning stage.
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

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>May 27, 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                IUNA AI as winner of Industry 4.0 Award
              </h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/industry-4-award.png"
                  alt="IUNA AI presentation at Industry 4.0 Award event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  IUNA AI is one of the "100 Places for Industry 4.0" in Baden-Würtemberg and was awarded as one of
                  eight lighthouse projects by the Allianz Industrie 4.0. The award was presented online by a video
                  message of the State Secretary Dr. Patrick Rapp.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.i40-bw.de/100-orte-acht-leuchtturmprojekte-zur-industrie-4-0-im-land-ausgezeichnet/"
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

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>April 20, 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Funding / Campus Founders Venture Studio x WOLFMAN.ONE
              </h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/campus-founders-meeting.webp"
                  alt="IUNA AI team signing funding agreement with Campus Founders and WOLFMAN.ONE"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  In order to further accelerate product development, we made the decision to close a first funding
                  round at the beginning of 2022. After careful evaluation of all offers, the final decision was made in
                  favor of two local and experienced VC companies from the Heilbronn area: The Campus Founders Venture
                  Studios and the experienced Business Angel Prof. Wolf Nietzer with the VC Corporation Wolfman.One.
                </p>
                <div className="mt-6">
                  <a
                    href="https://www.stimme.de/wirtschaft/baden-wuerttemberg/wirtschaft/iuna-ai-mit-100000-euro-starthilfe-bei-audi-punkten-art-4629967"
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

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>February 15, 2022</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Auto Scanner v3 / Car body shop</h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/auto-scanner-v3-interface.jpeg"
                  alt="IUNA Auto Scanner v3 interface showing car body analysis in Audi production facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs text-white text-center">
                  Image Source: Audi AG
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  The third version of our Auto Scanner has been extended by the functionality of "Anomaly Detection".
                  Here, the system not only detects predefined defects, but is also able to check the entire vehicle
                  surface for anomalies. Anomalies are defects for which little to no past image data is available. This
                  means that even rare defects, which would otherwise only be detected by humans, can be detected fully
                  automatically. As a result, full automation of the inspection process has been achieved in Audi's body
                  shop, replacing manual visual inspection.
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>September 24, 2021</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Release IUNA AI Scanner</h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image src="/images/ai-scanner.png" alt="IUNA AI Scanner" fill className="object-cover" />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  Based on the know-how of the Auto Scanner, the IUNA AI Scanner was developed in September 2021. With
                  the AI Scanner we have developed a modular and easy to use AI Vision System, which can be integrated
                  in-line. Combined with the right software application, we are flexible to solve a wide range of tasks
                  in industrial manufacturing.
                </p>
                <div className="mt-6">
                  <Link
                    href="/products/ai-scanner"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>March 11, 2021</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Auto Scanner v2 / Car body shop</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  In March, the second version of the IUNA Auto Scanner was finalized. The system checks standard points
                  on the body of the car for surface geometry defects. This includes waviness, indentation points, sheet
                  metal unbalances and other defects that occur primarily in the body shop department. In addition, the
                  data helps the respective specialist department to detect process-related errors or errors caused by
                  suppliers.
                </p>
              </div>
            </div>

            {/* News Item */}
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
                  In September 2020, iuna.ai became an official development partner of VW. The aim of the development
                  cooperation was the further development of the IUNA Auto Scanner v1 in the body shop of the Audi R8
                  for the fully autonomous identification of surface geometry defects on the body.
                </p>
              </div>
            </div>

            {/* News Item */}
            <div className="mb-16 border-b border-gray-200 pb-16">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>May 20, 2020</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                The IUNA AI Systems GmbH is founded
              </h2>
              <div className="relative h-80 w-full mb-6 overflow-hidden rounded-lg">
                <Image
                  src="/images/founding-team.jpeg"
                  alt="IUNA AI founding team - Jan Nabatian, William Chen, and Samira Nabatian at their office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p>
                  In May 2020, IUNA AI Systems GmbH was founded with the aim of revolutionizing automation in industrial
                  manufacturing in the field of visual inspection and quality assurance. The shareholders of the GmbH
                  are Jan Nabatian (Managing Director), Tong Chen (Head of Product Development) and Samira Nabatian
                  (Head of Business Development).
                </p>
              </div>
            </div>

            {/* News Item */}
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

            {/* News Item */}
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
