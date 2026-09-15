import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  path: "/company",
  locale: "en",
  title: "About IUNA AI | AI Vision Systems from Germany",
  description:
    "IUNA AI Systems GmbH develops turnkey AI vision systems for automated quality inspection in automotive and manufacturing. Learn about our team, mission and history.",
})

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children
}
