import { NextResponse } from "next/server"

const BASE_URL = "https://iuna.ai" // Ihre Domain

// Definieren Sie hier Ihre Routen. Fügen Sie dynamische Routen hinzu, falls erforderlich.
const staticPaths = [
  "/",
  "/company",
  "/use-cases",
  "/news",
  "/imprint",
  "/privacy-policy",
  "/contact",
  "/careers",
  "/products/ai-scanner",
  "/products/ai-weld-inspector",
  "/contact/thank-you",
]

// Beispiel für dynamische Routen (z.B. Lösungsseiten)
// In einer echten Anwendung würden Sie diese Slugs dynamisch abrufen (z.B. aus einem CMS oder einer Datenbank)
const solutionSlugs = [
  "automotive-quality-control",
  "manufacturing-defect-detection",
  "weld-seam-inspection-automation", // Beispiel-Slug
  "surface-inspection", // Beispiel-Slug
  "ocr-applications", // Beispiel-Slug
]

const dynamicPaths = solutionSlugs.map((slug) => `/solutions/${slug}`)

const allRelativePaths = [...staticPaths, ...dynamicPaths]

export async function GET() {
  const today = new Date().toISOString().split("T")[0]

  const sitemapEntries = allRelativePaths.flatMap((relativePath) => {
    const enUrl = `${BASE_URL}${relativePath === "/" ? "" : relativePath}`
    const deUrl = `${BASE_URL}/de${relativePath}`
    const xDefaultUrl = enUrl // Englisch als x-default

    return [
      {
        loc: enUrl,
        lastmod: today,
        alternates: [
          { hreflang: "en", href: enUrl },
          { hreflang: "de", href: deUrl },
          { hreflang: "x-default", href: xDefaultUrl },
        ],
      },
      {
        loc: deUrl,
        lastmod: today,
        alternates: [
          { hreflang: "en", href: enUrl },
          { hreflang: "de", href: deUrl },
          { hreflang: "x-default", href: xDefaultUrl },
        ],
      },
    ]
  })

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${sitemapEntries
    .map((entry) => {
      const alternatesXml = entry.alternates
        .map((alt) => `<xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>`)
        .join("\n    ")
      return `
  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    ${alternatesXml}
  </url>`
    })
    .join("")}
</urlset>`

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
