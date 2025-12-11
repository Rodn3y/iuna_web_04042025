import Image from "next/image"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "General Terms and Conditions (GTC) | IUNA AI",
  description:
    "General Terms and Conditions of IUNA AI Systems GmbH for AI vision systems, weld seam inspection, and related services.",
}

export default function GTCPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA AI General Terms and Conditions"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            General Terms and Conditions
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg bg-white p-6 shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Download as PDF</h2>
                  <p className="text-sm text-gray-500">General Terms and Conditions (GTC) - Version 01/2025</p>
                </div>
              </div>
              <Button asChild>
                <a href="/documents/General-Terms-and-Conditions-GTC_01_2025.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GTC Content */}
      <section className="bg-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-lg">
            <p className="text-sm text-gray-500 italic mb-8">
              Last updated: 01/2025 | Note: This is a translation of the German "Allgemeine Geschäftsbedingungen". In
              case of discrepancies between the German and English versions, the German version shall prevail.
            </p>

            <h2>§ 1 Scope and Subject Matter</h2>
            <ol>
              <li>
                These General Terms and Conditions (hereinafter "GTC") apply to all business relationships between IUNA
                AI Systems GmbH (hereinafter "IUNA" or "Contractor") and its customers (hereinafter "Client").
              </li>
              <li>
                The GTC apply exclusively to entrepreneurs (businesses within the meaning of § 14 of the German Civil
                Code BGB), legal entities under public law, or special funds under public law.
              </li>
              <li>
                The subject matter of the contract is – depending on the individual offer – the delivery of hardware
                (e.g., cameras, PLCs, servers), the licensing of software for weld seam inspection, and associated
                services (installation, maintenance, support).
              </li>
              <li>
                Conflicting terms or terms of the Client that deviate from these GTC (e.g., purchasing conditions) shall
                not be recognized unless IUNA expressly agrees to their validity in writing.
              </li>
            </ol>

            <h2>§ 2 Offer and Conclusion of Contract</h2>
            <ol>
              <li>Offers made by IUNA are subject to change and non-binding unless expressly marked as binding.</li>
              <li>
                An order placed by the Client is considered a binding contractual offer. A contract is only concluded
                upon written order confirmation by IUNA or upon delivery of the goods.
              </li>
            </ol>

            <h2>§ 3 Delivery and Installation</h2>
            <ol>
              <li>
                Delivery dates are only binding if they have been expressly agreed upon in writing as fixed dates.
              </li>
              <li>
                <strong>Installation:</strong> The installation and commissioning of the systems on-site (at the
                Client's premises or those of their end customer) is only part of the contract if expressly agreed.
                Otherwise, IUNA only owes the delivery of the components and the provision of the software.
              </li>
              <li>
                If a third party (e.g., system integrator) is commissioned with the installation, IUNA shall not be
                liable for errors attributable to improper installation or incorrect cabling by third parties.
              </li>
            </ol>

            <h2>§ 4 Acceptance (FAT and SAT)</h2>
            <p>
              As the systems are complex technical installations, acceptance shall take place in stages unless otherwise
              regulated in the offer:
            </p>
            <ol>
              <li>
                <strong>Delivery of Goods:</strong> For pure hardware/software deliveries without installation, the
                goods shall be deemed accepted upon delivery unless the Client complains of material defects within 7
                days.
              </li>
              <li>
                <strong>Work Performance (with Installation):</strong>
                <ul>
                  <li>
                    If agreed, a Factory Acceptance Test (FAT) shall first take place at IUNA's premises or virtually.
                  </li>
                  <li>After installation, the Site Acceptance Test (SAT) shall take place at the Client's premises.</li>
                </ul>
              </li>
              <li>
                The system shall also be deemed accepted (implied acceptance) if the Client uses the system in
                operational mode (production) or refuses acceptance without the presence of a material defect.
              </li>
            </ol>

            <h2>§ 5 Prices and Payment Terms</h2>
            <ol>
              <li>
                All prices are in Euros plus the statutory Value Added Tax (VAT) as well as packaging and shipping
                costs.
              </li>
              <li>
                <strong>Payment Schedule:</strong> Unless otherwise agreed in the offer, the following partial payments
                are agreed:
                <ul>
                  <li>
                    30% of the order value upon conclusion of the contract (after receipt of the order confirmation).
                  </li>
                  <li>
                    60% after successful Factory Acceptance Test (FAT) or – if no FAT is agreed – upon notification of
                    readiness for dispatch of the goods.
                  </li>
                  <li>
                    10% after successful Site Acceptance Test (SAT) or at the latest 30 days after delivery if the SAT
                    is delayed for reasons for which IUNA is not responsible.
                  </li>
                </ul>
              </li>
              <li>Invoices are due for payment without deduction within 30 days of the invoice date.</li>
              <li>
                <strong>Maintenance & Support:</strong> Fees for the "Support & License Agreement" (SLA) are billed
                annually in advance unless otherwise agreed.
              </li>
            </ol>

            <h2>§ 6 Retention of Title</h2>
            <ol>
              <li>
                IUNA retains ownership of the delivered hardware until full settlement of all claims arising from the
                respective supply contract.
              </li>
              <li>
                The Client is entitled to resell the goods subject to retention of title in the ordinary course of
                business (e.g., as an integrator to end customers); however, the Client hereby assigns to IUNA all
                claims accruing to them from the resale.
              </li>
            </ol>

            <h2>§ 7 Rights of Use for Software (License)</h2>
            <ol>
              <li>
                <strong>Purchase Software:</strong> Upon full payment, the Client receives a simple, non-exclusive,
                unlimited right to use the software on the hardware defined in the contract.
              </li>
              <li>
                <strong>Prohibition of Modification:</strong> The Client may not modify, reverse engineer, or decompile
                the software unless mandatorily permitted by law.
              </li>
              <li>
                The software serves as an assistance system for quality inspection. The final decision regarding quality
                assurance and the release of produced parts remains with the Client. IUNA only guarantees a specific
                error rate if this has been explicitly fixed in writing in the specifications/offer as a "guaranteed
                value" (e.g., False Positive Rate &lt; X%).
              </li>
            </ol>

            <h2>§ 8 Data Rights and AI Training</h2>
            <ol>
              <li>
                The Client acknowledges that the quality of AI models depends on the quantity and variance of training
                data.
              </li>
              <li>
                <strong>Data Usage:</strong> The Client grants IUNA the temporally, spatially, and content-wise
                unlimited, irrevocable, and free-of-charge right to use the image data generated during the use of the
                system (in particular images of weld seams and components) as well as feedback data (user labels).
              </li>
              <li>
                <strong>Purpose:</strong> This right of use serves the improvement of AI algorithms, the training of new
                models, and the general further development of IUNA products. IUNA is entitled to make these improved
                models available to other customers as well.
              </li>
              <li>
                IUNA ensures that the use of the data does not allow conclusions to be drawn about the Client's trade
                secrets (e.g., complete construction plans), provided the images merely represent detail shots (e.g.,
                weld seam sections).
              </li>
            </ol>

            <h2>§ 9 Maintenance, Updates, and Support</h2>
            <ol>
              <li>
                For projects with a volume of over 50,000 €, the conclusion of a Support & License Agreement (SLA) is
                mandatory. For smaller projects, this is optional.
              </li>
              <li>
                Without a valid SLA, the Client has no claim to software updates, new AI models, or support services.
              </li>
              <li>IUNA is entitled to install updates to maintain the security or functionality of the software.</li>
            </ol>

            <h2>§ 10 Warranty (Defects)</h2>
            <ol>
              <li>The warranty period is 12 months from the transfer of risk (delivery or acceptance).</li>
              <li>
                In the case of software errors, the error must be reproducible. The Client must assist IUNA in error
                analysis (e.g., by providing logs and images).
              </li>
              <li>
                No warranty is assumed for defects resulting from unsuitable or improper use, faulty assembly by the
                Client or third parties, or natural wear and tear.
              </li>
            </ol>

            <h2>§ 11 Liability</h2>
            <ol>
              <li>
                IUNA shall be liable without limitation for intent and gross negligence as well as for damages resulting
                from injury to life, body, or health.
              </li>
              <li>
                <strong>Limitation for Slight Negligence:</strong> In cases of slight negligence, IUNA shall only be
                liable for the breach of a material contractual obligation (cardinal obligation). In this case,
                liability is limited to the foreseeable, typically occurring damage.
              </li>
              <li>
                <strong>Liability Caps:</strong> Liability is limited within the scope of the existing business
                liability insurance as follows:
                <ul>
                  <li>For property damage and personal injury, a lump sum of 3,000,000.00 EUR per claim.</li>
                  <li>
                    For financial losses (e.g., production downtime, IT errors, incorrect sorting), 500,000.00 EUR per
                    claim.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Exclusion of Liability for AI Decisions:</strong> IUNA expressly points out that AI-based
                systems (Machine Learning) operate probabilistically and cannot guarantee 100% freedom from errors. IUNA
                is not liable for consequential damages (e.g., recall costs, lost profits) arising from the system
                failing to detect a defect in a component (slippage/false negative) or identifying a good component as
                defective (pseudo-scrap/false positive), provided the detection rate corresponds to the state of the art
                or the specified performance data.
              </li>
            </ol>

            <h2>§ 12 Confidentiality</h2>
            <p>
              Both parties undertake to treat all business and trade secrets of the other party that become known during
              the cooperation as confidential for an unlimited period and not to disclose them to third parties. This
              does not apply to the use of anonymized image data/raw data for training purposes regulated under § 8.
            </p>

            <h2>§ 13 Final Provisions</h2>
            <ol>
              <li>The law of the Federal Republic of Germany applies, excluding the UN Sales Convention (CISG).</li>
              <li>
                The place of performance and exclusive place of jurisdiction for all disputes arising from this contract
                is the registered office of IUNA AI Systems GmbH (Humboldtstr. 14, 74199 Untergruppenbach, Germany).
              </li>
              <li>
                Should individual provisions of these GTC be or become invalid, the validity of the remaining provisions
                shall remain unaffected.
              </li>
            </ol>

            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-gray-500">
                IUNA AI Systems GmbH
                <br />
                Humboldtstr. 14
                <br />
                74199 Untergruppenbach, Germany
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
