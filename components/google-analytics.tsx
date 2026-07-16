"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useCookieConsent } from "./cookie-consent-provider"

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function ensureGtag() {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
  }
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()
  const { consent, isLoaded, isEU } = useCookieConsent()
  const [gaLoaded, setGaLoaded] = useState(false)

  const hasAnalyticsConsent = consent?.analytics === true

  // For EU: only load after explicit consent
  const shouldLoadGA = isLoaded && (hasAnalyticsConsent || !isEU)

  // For EU users without consent: set default denied consent state
  useEffect(() => {
    if (!isLoaded || shouldLoadGA) return
    ensureGtag()
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    })
  }, [isLoaded, shouldLoadGA])

  // Load GA4 script dynamically once consent conditions are met
  useEffect(() => {
    if (!shouldLoadGA) return
    if (document.getElementById("ga4-script")) {
      setGaLoaded(true)
      return
    }

    ensureGtag()

    // Set default consent - granted for non-EU users (updated later on change)
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    })

    const script = document.createElement("script")
    script.id = "ga4-script"
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script.onload = () => {
      window.gtag("js", new Date())
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      })
      setGaLoaded(true)
    }
    document.head.appendChild(script)
  }, [shouldLoadGA, GA_MEASUREMENT_ID])

  // Track page views when pathname changes and GA is loaded
  useEffect(() => {
    if (pathname && gaLoaded && typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname, GA_MEASUREMENT_ID, gaLoaded])

  // Update consent when it changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && gaLoaded) {
      window.gtag("consent", "update", {
        analytics_storage: hasAnalyticsConsent ? "granted" : "denied",
        ad_storage: consent?.marketing ? "granted" : "denied",
        ad_user_data: consent?.marketing ? "granted" : "denied",
        ad_personalization: consent?.marketing ? "granted" : "denied",
      })
    }
  }, [consent, hasAnalyticsConsent, gaLoaded])

  return null
}
