import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  path: "/products/assembly-inspector",
  locale: "en",
  title: "IUNA Assembly Inspector | AI Vision System for Assembly Inspection",
  description:
    "The IUNA Assembly Inspector automatically verifies completeness, correct positioning and dimensions of assembled components with AI-based image processing.",
})

export default function AssemblyInspectorLayout({ children }: { children: React.ReactNode }) {
  return children
}
