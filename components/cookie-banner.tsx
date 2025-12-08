"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useCookieConsent, type CookieConsent } from "./cookie-consent-provider"
import { Settings, Shield } from "lucide-react"

export default function CookieBanner() {
  const pathname = usePathname()
  const isGerman = pathname?.startsWith("/de")
  const { hasConsented, isLoaded, isEU, acceptAll, acceptNecessary, savePreferences } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookieConsent>({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false,
  })

  if (!isLoaded || hasConsented || !isEU) {
    return null
  }

  const content = {
    en: {
      title: "Cookie Settings",
      description:
        "We use cookies to provide you with the best possible experience. Some are necessary, others help us improve our services.",
      acceptAll: "Accept All",
      acceptNecessary: "Necessary Only",
      savePreferences: "Save Preferences",
      showDetails: "Customize",
      hideDetails: "Hide Details",
      privacyPolicy: "Privacy Policy",
      necessary: {
        title: "Necessary",
        description: "Required for basic website functionality.",
      },
      functional: {
        title: "Functional",
        description: "Enable enhanced functionality like language preferences.",
      },
      analytics: {
        title: "Analytics",
        description: "Help us understand how visitors use our website.",
      },
      marketing: {
        title: "Marketing",
        description: "Used for personalized advertisements.",
      },
    },
    de: {
      title: "Cookie-Einstellungen",
      description:
        "Wir verwenden Cookies für das bestmögliche Erlebnis. Einige sind notwendig, andere helfen uns unsere Dienste zu verbessern.",
      acceptAll: "Alle akzeptieren",
      acceptNecessary: "Nur notwendige",
      savePreferences: "Speichern",
      showDetails: "Anpassen",
      hideDetails: "Details ausblenden",
      privacyPolicy: "Datenschutzerklärung",
      necessary: {
        title: "Notwendig",
        description: "Erforderlich für grundlegende Website-Funktionen.",
      },
      functional: {
        title: "Funktional",
        description: "Ermöglichen erweiterte Funktionen wie Spracheinstellungen.",
      },
      analytics: {
        title: "Analytik",
        description: "Helfen uns zu verstehen, wie Besucher die Website nutzen.",
      },
      marketing: {
        title: "Marketing",
        description: "Für personalisierte Werbung.",
      },
    },
  }

  const t = isGerman ? content.de : content.en

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Compact Layout */}
        <div className="p-4 sm:p-5">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Icon and Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 shrink-0">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-semibold text-foreground">{t.title}</h2>
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                  {t.description}{" "}
                  <Link
                    href={isGerman ? "/de/privacy-policy" : "/privacy-policy"}
                    className="text-primary hover:underline"
                  >
                    {t.privacyPolicy}
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2 lg:shrink-0">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Settings className="w-4 h-4" />
                {t.showDetails}
              </button>
              <Button variant="outline" onClick={acceptNecessary} size="sm" className="bg-transparent">
                {t.acceptNecessary}
              </Button>
              <Button onClick={acceptAll} size="sm" className="bg-primary hover:bg-primary/90">
                {t.acceptAll}
              </Button>
            </div>
          </div>

          {/* Expandable Details */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Necessary */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{t.necessary.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{t.necessary.description}</p>
                  </div>
                  <Switch checked={true} disabled className="opacity-50 shrink-0" />
                </div>

                {/* Functional */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-foreground">{t.functional.title}</span>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{t.functional.description}</p>
                  </div>
                  <Switch
                    checked={preferences.functional}
                    onCheckedChange={(checked) => setPreferences((p) => ({ ...p, functional: checked }))}
                    className="shrink-0"
                  />
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-foreground">{t.analytics.title}</span>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{t.analytics.description}</p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => setPreferences((p) => ({ ...p, analytics: checked }))}
                    className="shrink-0"
                  />
                </div>

                {/* Marketing */}
                <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-foreground">{t.marketing.title}</span>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{t.marketing.description}</p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => setPreferences((p) => ({ ...p, marketing: checked }))}
                    className="shrink-0"
                  />
                </div>
              </div>

              {/* Save Button for Details View */}
              <div className="flex justify-end mt-4">
                <Button
                  onClick={() => savePreferences(preferences)}
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  {t.savePreferences}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
