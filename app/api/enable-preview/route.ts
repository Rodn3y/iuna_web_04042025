import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get("secret")

  // Prüfen Sie ein einfaches Geheimnis (für Entwicklungszwecke)
  if (secret !== "your-development-secret") {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 })
  }

  // Setzen Sie ein Cookie, das wir später überprüfen können
  cookies().set("preview-mode", "true", {
    maxAge: 60 * 60, // 1 Stunde
    path: "/",
  })

  // Umleitung zur Startseite oder einer bestimmten Seite
  const redirectUrl = searchParams.get("redirect") || "/"
  return NextResponse.redirect(new URL(redirectUrl, request.url))
}
