import { NextResponse } from "next/server"

const BASE_URL = "https://iuna.ai"

// Paths that exist in BOTH English and German. Each produces an en + de entry
// with reciprocal hreflang alternates.
const bilingualPaths = [
  "/",
  "/company",
  "/use-cases",
  "/news",
  "/careers",
  "/contact",
  "/contact/thank-you",
  "/imprint",
  "/privacy-policy",
  "/gtc",
  "/products/weld-inspector",
  "/products/assembly-inspector",
]

// English-only routes (no German equivalent exists).
const englishOnlyPaths = ["/solutions/automotive", "/solutions/manufacturing"]

// German-only routes (no English equivalent exists).
const germanOnlyPaths = ["/de/kontakt", "/de/kontakt/danke"]

interface Entry {
  loc: string
  alternates: { hreflang: string; href: string }[]
}

function buildEntries(): Entry[] {
  const entries: Entry[] = []

  for (const path of bilingualPaths) {
    const enUrl = `${BASE_URL}${path === "/" ? "" : path}`
    const deUrl = `${BASE_URL}/de${path === "/" ? "" : path}`
    const alternates = [
      { hreflang: "en", href: enUrl },
      { hreflang: "de", href: deUrl },
      { hreflang: "x-default", href: enUrl },
    ]
    entries.push({ loc: enUrl, alternates })
    entries.push({ loc: deUrl, alternates })
  }

  for (const path of englishOnlyPaths) {
    const enUrl = `${BASE_URL}${path}`
    entries.push({ loc: enUrl, alternates: [{ hreflang: "x-default", href: enUrl }] })
  }

  for (const path of germanOnlyPaths) {
    entries.push({ loc: `${BASE_URL}${path}`, alternates: [] })
  }

  return entries
}

export async function GET() {
  const today = new Date().toISOString().split("T")[0]
  const entries = buildEntries()

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${entries
    .map((entry) => {
      const alternatesXml = entry.alternates
        .map((alt) => `<xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>`)
        .join("\n    ")
      return `
  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${today}</lastmod>
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
