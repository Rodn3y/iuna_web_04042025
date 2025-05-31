import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.iuna.ai"

  // Define all routes in English
  const englishRoutes = [
    "",
    "/company",
    "/products/ai-scanner",
    "/products/weld-seam-scanner",
    "/use-cases",
    "/news",
    "/careers",
    "/contact",
    "/imprint",
    "/privacy-policy",
  ]

  // Define all routes in German
  const germanRoutes = englishRoutes.map((route) => `/de${route}`)

  // Combine all routes
  const allRoutes = [...englishRoutes, ...germanRoutes]

  // Current date for lastModified
  const date = new Date()

  // Generate sitemap entries
  return allRoutes.map((route) => {
    return {
      url: `${baseUrl}${route}`,
      lastModified: date,
      changeFrequency: route === "" || route === "/de" ? "weekly" : "monthly",
      priority: getPriority(route),
    }
  })
}

// Helper function to determine priority based on route importance
function getPriority(route: string): number {
  if (route === "" || route === "/de") {
    return 1.0 // Homepage gets highest priority
  } else if (route.includes("/products/") || route === "/company" || route === "/de/company") {
    return 0.8 // Product pages and company page get high priority
  } else if (route.includes("/use-cases") || route.includes("/news")) {
    return 0.7 // Use cases and news get medium-high priority
  } else if (route.includes("/careers") || route.includes("/contact")) {
    return 0.6 // Careers and contact get medium priority
  } else {
    return 0.5 // All other pages get standard priority
  }
}
