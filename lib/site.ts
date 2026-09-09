// Canonical production origin. iuna.ai 308-redirects to www.iuna.ai, so all
// canonical, hreflang, sitemap and Open Graph URLs must use the www host.
export const SITE_URL = "https://www.iuna.ai"

export function absoluteUrl(path: string): string {
  return path === "/" || path === "" ? SITE_URL : `${SITE_URL}${path}`
}
