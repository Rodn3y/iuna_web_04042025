import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  path: "/products/assembly-inspector",
  locale: "de",
  title: "IUNA Assembly Inspector | KI-Vision-System für die Montageprüfung",
  description:
    "Der IUNA Assembly Inspector prüft automatisch Vollständigkeit, korrekte Position und Maße montierter Bauteile mit KI-basierter Bildverarbeitung.",
})

export default function AssemblyInspectorLayout({ children }: { children: React.ReactNode }) {
  return children
}
