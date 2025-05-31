import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GoogleAnalytics from "@/components/google-analytics"
import { headers } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const pathname = headersList.get("x-pathname") || ""
  const isGerman = pathname.startsWith("/de")

  // Generate canonical URL and alternate URLs
  const baseUrl = "https://www.iuna.ai"
  const englishPath = isGerman ? pathname.replace(/^\/de/, "") || "/" : pathname
  const germanPath = isGerman ? pathname : `/de${pathname}`

  return {
    title: "IUNA AI - Fortschrittliche KI-Sichtsysteme für die Fertigung",
    description:
      "Führender Anbieter von KI-Sichtsystemen für die Automobil- und Fertigungsindustrie, spezialisiert auf Schweißnahtinspektion und Qualitätskontrolle.",
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
  return (
    <html lang="de">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Google Analytics */}
          <GoogleAnalytics GA_MEASUREMENT_ID="G-YVPD5C9ZKC" />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
