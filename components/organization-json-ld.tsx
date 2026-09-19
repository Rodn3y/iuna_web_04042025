import { SITE_URL } from "@/lib/site"
import type { Locale } from "@/lib/seo"

const descriptions: Record<Locale, string> = {
  en: "Provider of AI vision systems for automotive and manufacturing industries, specializing in weld seam inspection, assembly inspection and dimensional measurement.",
  de: "Anbieter von KI-Bildverarbeitungssystemen für die Automobil- und Fertigungsindustrie, spezialisiert auf Schweißnahtprüfung, Montageprüfung und dimensionales Messen.",
}

export function OrganizationJsonLd({ lang }: { lang: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "IUNA AI Systems GmbH",
    alternateName: "IUNA AI",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: descriptions[lang],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Humboldtstr. 14",
      postalCode: "74199",
      addressLocality: "Untergruppenbach",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+49-152-5538-6189",
      contactType: "sales",
      availableLanguage: ["en", "de"],
    },
    sameAs: ["https://www.linkedin.com/company/iuna-ai"],
  }

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is trusted, static data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
