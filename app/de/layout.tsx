import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IUNA AI - Fortschrittliche KI-Sichtsysteme für die Fertigung",
  description:
    "Führender Anbieter von KI-Sichtsystemen für die Automobil- und Fertigungsindustrie, spezialisiert auf Schweißnahtinspektion und Qualitätskontrolle.",
  icons: {
    icon: "/favicon512.png",
    apple: "/favicon512.png",
  },
}

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
