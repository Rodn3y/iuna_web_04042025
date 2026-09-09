import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CookieConsentProvider } from "@/components/cookie-consent-provider"
import CookieBanner from "@/components/cookie-banner"
import GoogleAnalytics from "@/components/google-analytics"
import { headers } from "next/headers"
import { Analytics } from "@vercel/analytics/next"
import { SITE_URL } from "@/lib/site"

const inter = Inter({ subsets: ["latin"] })

const BASE_URL = SITE_URL

export function generateMetadata(): Metadata {
  const headersList = headers()
  const pathname = headersList.get("x-pathname") || "/"

  const isGerman = pathname.startsWith("/de")
  const englishPath = isGerman ? pathname.replace(/^\/de/, "") || "/" : pathname
  const germanPath = isGerman ? pathname : `/de${pathname === "/" ? "" : pathname}`

  const abs = (path: string) => `${BASE_URL}${path === "/" ? "" : path}`

  return {
    metadataBase: new URL(BASE_URL),
    title: "IUNA AI - AI Vision Systems for industrial Manufacturing",
    description:
      "Leading provider of AI Vision Systems for automotive and manufacturing industries, specializing in weld seam inspection and dimensional measurement.",
    icons: {
      icon: [{ url: "/favicon512.png", sizes: "any", type: "image/png" }],
      shortcut: "/favicon512.png",
      apple: "/apple-icon.png",
    },
    alternates: {
      canonical: abs(pathname),
      languages: {
        en: abs(englishPath),
        de: abs(germanPath),
        "x-default": abs(englishPath),
      },
    },
    openGraph: {
      type: "website",
      url: abs(pathname),
      siteName: "IUNA AI",
      locale: isGerman ? "de_DE" : "en_US",
    },
    generator: "v0.app",
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if the path starts with /de to determine language
  const headersList = await headers()
  const pathname = headersList.get("x-pathname") || ""
  const isGerman = pathname.startsWith("/de")

  return (
    <html lang={isGerman ? "de" : "en"}>
      <body className={inter.className}>
        <CookieConsentProvider>
          <Navbar />
          {children}
          <Footer />
          {/* Cookie Banner */}
          <CookieBanner />
          <GoogleAnalytics GA_MEASUREMENT_ID="G-YVPD5C9ZKC" />
        </CookieConsentProvider>
        <Analytics />
      </body>
    </html>
  )
}
