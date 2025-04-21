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
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192x192.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/images/favicon-144x144.png" />
        <meta name="msapplication-config" content="/images/browserconfig.xml" />
      </head>
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
