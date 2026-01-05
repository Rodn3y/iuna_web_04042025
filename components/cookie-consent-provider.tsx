"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type CookieConsent = {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

type CookieConsentContextType = {
  consent: CookieConsent | null
  hasConsented: boolean
  isLoaded: boolean
  isEU: boolean
  acceptAll: () => void
  acceptNecessary: () => void
  savePreferences: (preferences: CookieConsent) => void
  resetConsent: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType>({
  consent: null,
  hasConsented: false,
  isLoaded: false,
  isEU: true,
  acceptAll: () => {},
  acceptNecessary: () => {},
  savePreferences: () => {},
  resetConsent: () => {},
})

const COOKIE_NAME = "iuna_cookie_consent"
const COOKIE_EXPIRY_DAYS = 365

function setCookie(name: string, value: string, days: number) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null
  }
  return null
}

function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
}

function updateGoogleConsent(consent: CookieConsent) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.marketing ? "granted" : "denied",
      ad_user_data: consent.marketing ? "granted" : "denied",
      ad_personalization: consent.marketing ? "granted" : "denied",
    })
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [hasConsented, setHasConsented] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isEU, setIsEU] = useState(true)

  useEffect(() => {
    const init = async () => {
      // Check stored consent first
      const storedConsent = getCookie(COOKIE_NAME)
      if (storedConsent) {
        try {
          const parsed = JSON.parse(decodeURIComponent(storedConsent))
          setConsent(parsed)
          setHasConsented(true)
          try {
            const response = await fetch("/api/geo")
            const data = await response.json()
            setIsEU(data.isEU)
          } catch {
            setIsEU(true)
          }
          setIsLoaded(true)
          return
        } catch {
          // Invalid cookie, continue to geo check
        }
      }

      try {
        const response = await fetch("/api/geo")
        const data = await response.json()
        setIsEU(data.isEU)

        if (!data.isEU) {
          const allAccepted: CookieConsent = {
            necessary: true,
            functional: true,
            analytics: true,
            marketing: true,
          }
          setConsent(allAccepted)
          setHasConsented(true)
          setCookie(COOKIE_NAME, encodeURIComponent(JSON.stringify(allAccepted)), COOKIE_EXPIRY_DAYS)
          // Update Google Consent Mode immediately
          updateGoogleConsent(allAccepted)
        }
      } catch {
        // If geo check fails, assume EU for GDPR compliance
        setIsEU(true)
      }

      setIsLoaded(true)
    }

    init()
  }, [])

  const saveConsent = (newConsent: CookieConsent) => {
    setConsent(newConsent)
    setHasConsented(true)
    setCookie(COOKIE_NAME, encodeURIComponent(JSON.stringify(newConsent)), COOKIE_EXPIRY_DAYS)
    updateGoogleConsent(newConsent)
  }

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    })
  }

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    })
  }

  const savePreferences = (preferences: CookieConsent) => {
    saveConsent({
      ...preferences,
      necessary: true,
    })
  }

  const resetConsent = () => {
    deleteCookie(COOKIE_NAME)
    setConsent(null)
    setHasConsented(false)
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasConsented,
        isLoaded,
        isEU,
        acceptAll,
        acceptNecessary,
        savePreferences,
        resetConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  return useContext(CookieConsentContext)
}
