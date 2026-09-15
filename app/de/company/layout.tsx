import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  path: "/company",
  locale: "de",
  title: "Über IUNA AI | KI-Bildverarbeitungssysteme aus Deutschland",
  description:
    "Die IUNA AI Systems GmbH entwickelt schlüsselfertige KI-Vision-Systeme für die automatisierte Qualitätsprüfung in Automobil- und Fertigungsindustrie. Team, Mission und Geschichte.",
})

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children
}
