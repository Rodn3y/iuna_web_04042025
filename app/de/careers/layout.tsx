import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  path: "/careers",
  locale: "de",
  title: "Karriere | Werde Teil des IUNA AI Teams",
  description:
    "Gestalte die Zukunft der industriellen KI-Bildverarbeitung. Offene Stellen bei IUNA AI in Software, Machine Learning, Hardware und Vertrieb in Untergruppenbach bei Heilbronn.",
})

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
