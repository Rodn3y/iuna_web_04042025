import type React from "react"
import { pageMetadata } from "@/lib/seo"

// The contact page is a client component, so its metadata lives here.
// The nested thank-you page overrides these values with its own noindex metadata.
export const metadata = pageMetadata({
  path: "/contact",
  locale: "de",
  title: "Kontakt IUNA AI | Demo oder Beratung anfragen",
  description:
    "Nehmen Sie Kontakt mit IUNA AI auf, um KI-Bildverarbeitung für Ihre Produktionslinie zu besprechen. Demo, Angebot oder technische Beratung anfragen.",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
