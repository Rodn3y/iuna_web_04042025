import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  path: "/careers",
  locale: "en",
  title: "Careers | Join the IUNA AI Team",
  description:
    "Shape the future of industrial AI vision. Explore open positions at IUNA AI in software, machine learning, hardware and sales in Untergruppenbach near Heilbronn.",
})

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
