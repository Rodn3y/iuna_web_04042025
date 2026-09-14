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
      icon: [
        { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
        { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
        { url: "/icon-144.png", sizes: "144x144", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png",
    },
    manifest: "/site.webmanifest",
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
