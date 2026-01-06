import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IUNA Weld Inspector | Schlüsselfertiges KI-System für optische Schweißnahtprüfung",
  description:
    "Der IUNA Weld Inspector ist ein schlüsselfertiges KI-Vision-System inklusive Hardware und Software. Automatisieren Sie Ihre Schweißnahtprüfung konform zu ISO 5817.",
  keywords: [
    "Schweißnahtprüfung",
    "KI Schweißnahtprüfung",
    "optische Schweißnahtprüfung",
    "ISO 5817",
    "Schweißnahtscanner",
    "automatisierte Schweißprüfung",
    "visuelle Schweißnahtprüfung",
    "Schweißqualitätskontrolle",
  ],
}

export default function WeldInspectorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
