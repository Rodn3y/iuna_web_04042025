import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GoogleAnalytics from "@/components/google-analytics"
import { headers } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IUNA AI - Advanced AI Vision Systems for Manufacturing",
  description:
    "Leading provider of AI vision systems for automotive and manufacturing industries, specializing in weld seam inspection and quality control.",
  icons: {
    icon: "/favicon512.png",
    apple: "/favicon512.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if the path starts with /de to determine language
  const headersList = headers()
  const pathname = headersList.get("x-pathname") || ""
  const isGerman = pathname.startsWith("/de")

  return (
    <html lang={isGerman ? "de" : "en"}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Google Analytics */}
          <GoogleAnalytics GA_MEASUREMENT_ID="G-YVPD5C9ZKC" />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
