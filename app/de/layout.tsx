import type React from "react"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { SITE_URL, absoluteUrl } from "@/lib/site"

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const pathname = headersList.get("x-pathname") || "/de"

  const canonicalUrl = absoluteUrl(pathname)

  // Generate alternate URLs for hreflang
  const englishPath = pathname.replace(/^\/de/, "") || "/"
  const alternates = {
    en: absoluteUrl(englishPath),
    de: canonicalUrl,
    "x-default": absoluteUrl(englishPath),
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: "IUNA AI – KI-Bildverarbeitungssysteme für die industrielle Fertigung",
    description:
      "Führender Anbieter von KI-Bildverarbeitungssystemen für die Automobil- und Fertigungsindustrie, spezialisiert auf Schweißnahtprüfung und dimensionales Messen.",
    icons: {
      icon: [{ url: "/favicon512.png", sizes: "any", type: "image/png" }],
      shortcut: "/favicon512.png",
      apple: "/apple-icon.png",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: alternates,
    },
    openGraph: {
      url: canonicalUrl,
      siteName: "IUNA AI",
      locale: "de_DE",
    },
  }
}

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
