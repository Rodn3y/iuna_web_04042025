import type React from "react"
import type { Metadata } from "next"
import { headers } from "next/headers"

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const pathname = headersList.get("x-pathname") || ""

  // Generate canonical URL and alternate URLs
  const baseUrl = "https://www.iuna.ai"
  const englishPath = pathname.replace(/^\/de/, "") || "/"
  const germanPath = pathname

  return {
    title: "IUNA AI - Fortschrittliche AI Vision Systeme für die Fertigung",
    description:
      "Führender Anbieter von AI Vision Systemen für die Automobil- und Fertigungsindustrie, spezialisiert auf Schweißnahtinspektion und Qualitätskontrolle.",
    icons: {
      icon: "/favicon512.png",
      apple: "/favicon512.png",
    },
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        en: `${baseUrl}${englishPath}`,
        de: `${baseUrl}${germanPath}`,
        "x-default": `${baseUrl}${englishPath}`,
      },
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
