import Image from "next/image"

export default function ImprintPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA AI Imprint"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Imprint</h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
        </div>
      </section>

      {/* Imprint Content */}
      <section className="bg-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-lg">
            <p>
              Information obligation according to §5 E-Commerce Act, §14 Company Code, §63 Trade Regulations and
              disclosure obligation according to §25 Media Act.
            </p>

            <div className="my-8">
              <p className="font-semibold">IUNA AI Systems GmbH</p>
              <p>Humboldtstr. 14,</p>
              <p>74199 Untergruppenbach,</p>
              <p>Germany</p>
            </div>

            <p>Represented by the Managing Director: Mr. Jan Nabatian</p>

            <div className="my-6">
              <p>
                Tel.: <a href="tel:+4915255386189">+49 152 5538 6189</a>
              </p>
              <p>
                E-mail: <a href="mailto:sales@iuna.ai">sales@iuna.ai</a>
              </p>
            </div>

            <h2>Register entry</h2>
            <p>Entry in the commercial register</p>
            <p>Register court: Stuttgart Local Court</p>
            <p>Register number: HRB 774222</p>

            <h2>Value added tax</h2>
            <p>Value added tax identification number according to §27 a Value Added Tax Act:</p>
            <p>DE334749915</p>

            <h2>EU dispute resolution</h2>
            <p>
              In accordance with the Regulation on Online Dispute Resolution in Consumer Matters (ODR Regulation), we
              would like to inform you about the online dispute resolution platform (OS platform). Consumers have the
              option of submitting complaints to the European Commission's online dispute resolution platform at{" "}
              <a href="http://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer">
                http://ec.europa.eu/odr
              </a>
              . You will find the necessary contact details above in our legal notice.
            </p>
            <p>
              However, we would like to point out that we are not willing or obliged to participate in dispute
              resolution proceedings before a consumer arbitration board.
            </p>

            <h2>Liability for the content of this website</h2>
            <p>
              We are constantly developing the content of this website and endeavor to provide correct and up-to-date
              information. Unfortunately, we cannot accept any liability for the correctness of all content on this
              website, especially for that provided by third parties.
            </p>
            <p>
              If you notice any problematic or illegal content, please contact us immediately, you will find the contact
              details in the imprint.
            </p>

            <h2>Copyright notice</h2>
            <p>
              All content on this website (images, photos, texts, videos) is subject to copyright. If necessary, we will
              prosecute the unauthorized use of parts of the contents of our site.
            </p>
            <p>If you find any content on this website that violates copyright law, please contact us.</p>

            <h2>Liability for links on this website</h2>
            <p>
              Our website contains links to other websites for whose content we are not responsible. Liability for
              linked websites does not exist for us according to § 17 ECG, as we had and have no knowledge of illegal
              activities, we have not noticed such illegal activities and we would remove links immediately if we became
              aware of illegal activities.
            </p>
            <p>
              If you notice any illegal links on our website, please contact us, you will find the contact details in
              the legal notice.
            </p>

            <h2>Image credits</h2>
            <p>The images, photos and graphics on this website are protected by copyright.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
