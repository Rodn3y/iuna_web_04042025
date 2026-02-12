import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GoogleAnalytics from "@/components/google-analytics"
import { CookieConsentProvider } from "@/components/cookie-consent-provider"
import CookieBanner from "@/components/cookie-banner"
import { headers } from "next/headers"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "IUNA AI - AI Vision Systems for industrial Manufacturing",
  description:
    "Leading provider of AI Vision Systems for automotive and manufacturing industries, specializing in weld seam inspection and dimensional measurement.",
  icons: {
    icon: "/favicon512.png",
    apple: "/favicon512.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if the path starts with /de to determine language
  const headersList = headers()
  const pathname = headersList.get("x-pathname") || ""
  const isGerman = pathname.startsWith("/de")

  return (
    <html lang={isGerman ? "de" : "en"}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CookieConsentProvider>
            {/* Google Analytics - only loads with consent */}
            <GoogleAnalytics GA_MEASUREMENT_ID="G-YVPD5C9ZKC" />
            <Navbar />
            {children}
            <Footer />
            {/* Cookie Banner */}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
