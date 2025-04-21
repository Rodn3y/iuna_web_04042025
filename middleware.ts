import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname from the URL
  const pathname = request.nextUrl.pathname

  // Create a new response
  const response = NextResponse.next()

  // Add the pathname as a header
  response.headers.set("x-pathname", pathname)

  // Check if preview mode is enabled
  const isPreviewMode = request.cookies.get("preview-mode")?.value === "true"
  response.headers.set("x-preview-mode", isPreviewMode ? "true" : "false")

  return response
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - API routes (/api/*)
     * - Static files (_next/static, _next/image, favicon.ico, etc.)
     */
    "/((?!api/enable-preview|_next/static|_next/image|favicon.ico).*)",
  ],
}
