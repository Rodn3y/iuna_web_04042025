import type React from "react"
import type { Metadata } from "next"
import "../globals.css"
import { SiteShell } from "@/components/site-shell"
import { SITE_URL } from "@/lib/site"

// Site-wide defaults only. Every page defines its own title, description, canonical and
// hreflang via pageMetadata(), so nothing here depends on the request.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IUNA AI - AI Vision Systems for industrial Manufacturing",
  description:
    "Leading provider of AI Vision Systems for automotive and manufacturing industries, specializing in weld seam inspection and dimensional measurement.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-144.png", sizes: "144x144", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "v0.app",
}

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>
}
