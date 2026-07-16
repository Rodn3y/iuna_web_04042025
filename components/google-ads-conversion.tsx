"use client"

import { useEffect } from "react"

export default function GoogleAdsConversion() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion_event_submit_lead_form", {})
    }
  }, [])

  return null
}
