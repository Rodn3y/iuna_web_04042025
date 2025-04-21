import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IUNA AI - Fortschrittliche AI Vision Systeme für die Fertigung",
  description:
    "Führender Anbieter von AI Vision Systemen für die Automobil- und Fertigungsindustrie, spezialisiert auf Schweißnahtinspektion und Qualitätskontrolle.",
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
