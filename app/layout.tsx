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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/favicon-57x57.png",
        sizes: "57x57",
      },
      {
        rel: "apple-touch-icon",
        url: "/favicon-60x60.png",
        sizes: "60x60",
      },
      {
        rel: "apple-touch-icon",
        url: "/favicon-72x72.png",
        sizes: "72x72",
      },
      {
        rel: "apple-touch-icon",
        url: "/favicon-76x76.png",
        sizes: "76x76",
      },
      {
        rel: "apple-touch-icon",
        url: "/favicon-114x114.png",
        sizes: "114x114",
      },
      {
        rel: "apple-touch-icon",
        url: "/favicon-120x120.png",
        sizes: "120x120",
      },
      {
        rel: "apple-touch-icon",
        url: "/favicon-144x144.png",
        sizes: "144x144",
      },
      {
        rel: "apple-touch-icon",
        url: "/favicon-152x152.png",
        sizes: "152x152",
      },
      {
        rel: "apple-touch-icon",
        url: "/favicon-180x180.png",
        sizes: "180x180",
      },
    ],
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
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
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
