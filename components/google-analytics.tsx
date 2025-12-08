"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"

// Helper function to get cookie value
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null
  }
  return null
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const [hasAnalyticsConsent, setHasAnalyticsConsent] = useState(false)

  useEffect(() => {
    // Check for cookie consent
    const consentCookie = getCookie("iuna_cookie_consent")
    if (consentCookie) {
      try {
        const consent = JSON.parse(decodeURIComponent(consentCookie))
        setHasAnalyticsConsent(consent.analytics === true)
      } catch {
        setHasAnalyticsConsent(false)
      }
    }
  }, [])

  useEffect(() => {
    if (pathname && hasAnalyticsConsent && window.gtag) {
      // When the page changes, log a pageview
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, GA_MEASUREMENT_ID, hasAnalyticsConsent])

  // Only load Google Analytics if user has consented
  if (!hasAnalyticsConsent) {
    return null
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
