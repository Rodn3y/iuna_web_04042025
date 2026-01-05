import { type NextRequest, NextResponse } from "next/server"

// EU + EEA + UK country codes for GDPR compliance
const EU_COUNTRIES = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE", // EU
  "IS",
  "LI",
  "NO", // EEA
  "GB", // UK (GDPR still applies)
]

const NON_EU_COUNTRIES = [
  "US",
  "CA",
  "MX", // North America
  "CN",
  "JP",
  "KR",
  "IN",
  "SG",
  "HK",
  "TW",
  "TH",
  "VN",
  "MY",
  "ID",
  "PH", // Asia
  "AU",
  "NZ", // Oceania
  "BR",
  "AR",
  "CL",
  "CO", // South America
  "ZA",
  "EG",
  "NG", // Africa
  "AE",
  "SA",
  "IL", // Middle East
  "RU",
  "UA",
  "BY",
  "KZ", // Eastern Europe (non-EU)
]

export async function GET(request: NextRequest) {
  // Vercel provides geolocation headers automatically
  const country = request.headers.get("x-vercel-ip-country") || "unknown"
  const countryUpper = country.toUpperCase()

  // - If country is in EU list -> isEU = true
  // - If country is in known non-EU list -> isEU = false
  // - If country is unknown or not in either list -> isEU = true (safe default)
  let isEU: boolean

  if (EU_COUNTRIES.includes(countryUpper)) {
    isEU = true
  } else if (NON_EU_COUNTRIES.includes(countryUpper)) {
    isEU = false
  } else {
    // Unknown country or not in our lists - default to EU for GDPR compliance
    isEU = true
  }

  console.log("[v0] Geo API - country:", country, "isEU:", isEU)

  return NextResponse.json({
    country,
    isEU,
  })
}
