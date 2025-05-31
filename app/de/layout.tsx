import type React from "react"
import type { Metadata } from "next"
import { headers } from "next/headers"

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const pathname = headersList.get("x-pathname") || ""

  // Generate canonical URL and alternate URLs
  const baseUrl = "https://iuna.ai"
  const canonicalUrl = `${baseUrl}${pathname}`

  // Generate alternate URLs for hreflang
  const englishPath = pathname.replace("/de", "") || "/"
  const alternates = {
    en: `${baseUrl}${englishPath}`,
    de: canonicalUrl,
    "x-default": `${baseUrl}${englishPath}`,
  }

  return {
    title: "IUNA AI - Fortschrittliche AI Vision Systeme für die Fertigung",
    description:
      "Führender Anbieter von AI Vision Systemen für die Automobil- und Fertigungsindustrie, spezialisiert auf Schweißnahtinspektion und Qualitätskontrolle.",
    icons: {
      icon: "/favicon512.png",
      apple: "/favicon512.png",
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
