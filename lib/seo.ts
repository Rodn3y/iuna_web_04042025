import type { Metadata } from "next"
import { SITE_URL, absoluteUrl } from "./site"

export type Locale = "en" | "de"

interface PageMetadataInput {
  /** Language-neutral path, e.g. "/company" or "/". The German URL is derived by prefixing "/de". */
  path: string
  locale: Locale
  title: string
  description: string
  noIndex?: boolean
}

function localizedPath(path: string, locale: Locale): string {
  if (locale === "en") return path
  return path === "/" ? "/de" : `/de${path}`
}

/**
 * Builds complete, self-contained page metadata: title, description, self-referencing
 * canonical, reciprocal en/de hreflang alternates and Open Graph data. Every indexable page
 * calls this so nothing depends on request headers and pages can be statically rendered.
 */
export function pageMetadata({ path, locale, title, description, noIndex = false }: PageMetadataInput): Metadata {
  const englishUrl = absoluteUrl(localizedPath(path, "en"))
  const germanUrl = absoluteUrl(localizedPath(path, "de"))
  const canonical = locale === "de" ? germanUrl : englishUrl

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: englishUrl,
        de: germanUrl,
        "x-default": englishUrl,
      },
    },
    openGraph: {
      type: "website",
      siteName: "IUNA AI",
      locale: locale === "de" ? "de_DE" : "en_US",
      url: canonical,
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}
