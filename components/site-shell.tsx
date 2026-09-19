import type React from "react"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CookieConsentProvider } from "@/components/cookie-consent-provider"
import CookieBanner from "@/components/cookie-banner"
import GoogleAnalytics from "@/components/google-analytics"
import { Analytics } from "@vercel/analytics/next"
import { OrganizationJsonLd } from "@/components/organization-json-ld"
import type { Locale } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

export function SiteShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <OrganizationJsonLd lang={lang} />
        <CookieConsentProvider>
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
          <GoogleAnalytics GA_MEASUREMENT_ID="G-YVPD5C9ZKC" />
        </CookieConsentProvider>
        <Analytics />
      </body>
    </html>
  )
}
