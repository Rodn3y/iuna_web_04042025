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

export async function GET(request: NextRequest) {
  // Vercel provides geolocation headers automatically
  const country = request.headers.get("x-vercel-ip-country") || "unknown"
  const isEU = EU_COUNTRIES.includes(country.toUpperCase())

  return NextResponse.json({
    country,
    isEU,
  })
}
