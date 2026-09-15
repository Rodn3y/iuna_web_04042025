import type React from "react"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/products/weld-inspector",
    locale: "en",
    title: "IUNA Weld Inspector | Turnkey AI System for Optical Weld Inspection",
    description:
      "The IUNA Weld Inspector is a turnkey AI vision system including hardware and software. Automate your weld seam inspection compliant with ISO 5817.",
  }),
  keywords: [
    "weld inspection",
    "AI weld inspection",
    "optical weld inspection",
    "ISO 5817",
    "weld seam scanner",
    "automated welding inspection",
    "visual weld inspection",
    "weld quality control",
  ],
}

export default function WeldInspectorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
