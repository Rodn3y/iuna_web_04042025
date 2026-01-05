"use client"

import { useEffect } from "react"
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

  const hasAnalyticsConsent = consent?.analytics === true

  // For EU: only load after explicit consent
  const shouldLoadGA = isLoaded && hasAnalyticsConsent

  useEffect(() => {
    // Track page views when pathname changes and GA is loaded
    if (pathname && shouldLoadGA && typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, GA_MEASUREMENT_ID, shouldLoadGA])

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && isLoaded) {
      window.gtag("consent", "update", {
        analytics_storage: hasAnalyticsConsent ? "granted" : "denied",
        ad_storage: consent?.marketing ? "granted" : "denied",
        ad_user_data: consent?.marketing ? "granted" : "denied",
        ad_personalization: consent?.marketing ? "granted" : "denied",
      })
    }
  }, [consent, hasAnalyticsConsent, isLoaded])

  // Don't render anything until geo-check is complete
  if (!isLoaded) {
    return null
  }

  // For EU users without consent, only render the default denied consent state
  if (!shouldLoadGA) {
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
          `,
        }}
      />
    )
  }

  return (
    <>
      {/* Google Consent Mode v2 - Set initial state based on geo */}
      <Script
        id="google-consent-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': '${isEU ? "denied" : "granted"}',
              'ad_storage': '${isEU ? "denied" : "granted"}',
              'ad_user_data': '${isEU ? "denied" : "granted"}',
              'ad_personalization': '${isEU ? "denied" : "granted"}',
              'wait_for_update': ${isEU ? 500 : 0}
            });
            ${
              hasAnalyticsConsent
                ? `
            gtag('consent', 'update', {
              'analytics_storage': 'granted',
              'ad_storage': '${consent?.marketing ? "granted" : "denied"}',
              'ad_user_data': '${consent?.marketing ? "granted" : "denied"}',
              'ad_personalization': '${consent?.marketing ? "granted" : "denied"}'
            });
            `
                : ""
            }
          `,
        }}
      />
      {/* GA4 Script - Only loaded when consent is granted */}
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
