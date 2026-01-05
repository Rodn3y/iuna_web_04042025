"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { useCookieConsent } from "./cookie-consent-provider"

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const { consent, isLoaded, isEU } = useCookieConsent()
  const [gaLoaded, setGaLoaded] = useState(false)

  const hasAnalyticsConsent = consent?.analytics === true

  // For EU: only load after explicit consent
  const shouldLoadGA = isLoaded && (hasAnalyticsConsent || !isEU)

  // Debug logging
  useEffect(() => {
    console.log(
      "[v0] GA Debug - isLoaded:",
      isLoaded,
      "isEU:",
      isEU,
      "hasAnalyticsConsent:",
      hasAnalyticsConsent,
      "shouldLoadGA:",
      shouldLoadGA,
    )
  }, [isLoaded, isEU, hasAnalyticsConsent, shouldLoadGA])

  // Track page views when pathname changes and GA is loaded
  useEffect(() => {
    if (pathname && gaLoaded && typeof window !== "undefined" && window.gtag) {
      console.log("[v0] GA tracking page view:", pathname)
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, GA_MEASUREMENT_ID, gaLoaded])

  // Update consent when it changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && gaLoaded) {
      console.log("[v0] GA updating consent - analytics:", hasAnalyticsConsent, "marketing:", consent?.marketing)
      window.gtag("consent", "update", {
        analytics_storage: hasAnalyticsConsent ? "granted" : "denied",
        ad_storage: consent?.marketing ? "granted" : "denied",
        ad_user_data: consent?.marketing ? "granted" : "denied",
        ad_personalization: consent?.marketing ? "granted" : "denied",
      })
    }
  }, [consent, hasAnalyticsConsent, gaLoaded])

  // Don't render anything until geo-check is complete
  if (!isLoaded) {
    console.log("[v0] GA - waiting for geo-check")
    return null
  }

  // For EU users without consent, only render the default denied consent state
  if (!shouldLoadGA) {
    console.log("[v0] GA - EU user without consent, showing denied state")
    return (
      <Script
        id="google-consent-default"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
            console.log('[v0] GA consent default set to denied for EU user');
          `,
        }}
      />
    )
  }

  console.log("[v0] GA - Loading GA4 scripts, isEU:", isEU, "hasConsent:", hasAnalyticsConsent)

  return (
    <>
      {/* Google Consent Mode v2 - Set initial state */}
      <Script
        id="google-consent-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Set default consent - granted for non-EU, denied for EU (will be updated)
            gtag('consent', 'default', {
              'analytics_storage': 'granted',
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted'
            });
            console.log('[v0] GA consent default set to granted');
          `,
        }}
      />
      {/* GA4 Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => {
          console.log("[v0] GA4 script loaded successfully")
          setGaLoaded(true)
        }}
      />
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
            console.log('[v0] GA4 configured with ID: ${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}
