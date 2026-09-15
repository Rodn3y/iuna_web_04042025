import type React from "react"
import { pageMetadata } from "@/lib/seo"

// The contact page is a client component, so its metadata lives here.
// The nested thank-you page overrides these values with its own noindex metadata.
export const metadata = pageMetadata({
  path: "/contact",
  locale: "en",
  title: "Contact IUNA AI | Request a Demo or Consultation",
  description:
    "Get in touch with IUNA AI to discuss AI vision inspection for your production line. Request a demo, a quote or a technical consultation.",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
