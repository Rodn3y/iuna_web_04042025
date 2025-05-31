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

  // Create sitemap entries
  return allRoutes.map((route) => {
    // Determine priority based on route importance
    let priority = 0.5
    if (route === "" || route === "/de") {
      priority = 1.0 // Homepage gets highest priority
    } else if (route.includes("products") || route.includes("produkte")) {
      priority = 0.8 // Product pages get high priority
    } else if (route.includes("use-cases") || route.includes("news")) {
      priority = 0.7 // Use cases and news get medium-high priority
    } else if (route.includes("careers") || route.includes("contact")) {
      priority = 0.6 // Careers and contact get medium priority
    }

    // Determine change frequency
    const changeFrequency = route === "" || route === "/de" ? "weekly" : "monthly"

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: changeFrequency as "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
      priority: priority,
    }
  })
}
