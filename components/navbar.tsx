"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import LanguageSelector from "./language-selector"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Check if we're on a German page
  const isGerman = pathname.startsWith("/de")

  // Helper function to get the correct path based on language
  const getLocalizedPath = (path: string) => {
    return isGerman ? `/de${path}` : path
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      <div className="container flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - larger */}
        <Link href={isGerman ? "/de" : "/"} className="flex items-center">
          <Image src="/images/logo.png" alt="IUNA AI" width={200} height={60} className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-10 lg:flex">
          <div className="group relative">
            <button className={`flex items-center text-lg font-medium text-white hover:text-primary`}>
              {isGerman ? "Produkte" : "Products"} <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {/* Invisible area to maintain hover state */}
            <div className="absolute left-0 top-full h-2 w-full"></div>
            <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-56 rounded-md bg-white p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <Link
                href={getLocalizedPath("/products/weld-seam-scanner")}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {isGerman ? "Schweißnahtscanner" : "Weld Seam Scanner"}
              </Link>
              <Link
                href={getLocalizedPath("/products/ai-scanner")}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {isGerman ? "AI Scanner" : "AI Scanner"}
              </Link>
            </div>
          </div>

          <Link href={getLocalizedPath("/use-cases")} className={`text-lg font-medium text-white hover:text-primary`}>
            {isGerman ? "Anwendungsfälle" : "Use Cases"}
          </Link>

          <Link href={getLocalizedPath("/company")} className={`text-lg font-medium text-white hover:text-primary`}>
            {isGerman ? "Unternehmen" : "Company"}
          </Link>

          <Link href={getLocalizedPath("/careers")} className={`text-lg font-medium text-white hover:text-primary`}>
            {isGerman ? "Karriere" : "Careers"}
          </Link>

          <Link href={getLocalizedPath("/news")} className={`text-lg font-medium text-white hover:text-primary`}>
            {isGerman ? "News" : "News"}
          </Link>
        </nav>

        <div className="hidden items-center space-x-4 lg:flex">
          {/* Language Selector */}
          <LanguageSelector />

          <Link href={getLocalizedPath("/contact")}>
            <Button className="text-base">{isGerman ? "Vertrieb kontaktieren" : "Contact Sales"}</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container lg:hidden">
          <div className="divide-y divide-gray-700 rounded-b-lg bg-black px-4 py-2 shadow-lg">
            <div className="py-3">
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {isGerman ? "Produkte" : "Products"}
              </div>
              <Link
                href={getLocalizedPath("/products/weld-seam-scanner")}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {isGerman ? "Schweißnahtscanner" : "Weld Seam Scanner"}
              </Link>
              <Link
                href={getLocalizedPath("/products/ai-scanner")}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {isGerman ? "AI Scanner" : "AI Scanner"}
              </Link>
            </div>

            <div className="py-3">
              <Link
                href={getLocalizedPath("/use-cases")}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {isGerman ? "Anwendungsfälle" : "Use Cases"}
              </Link>
              <Link
                href={getLocalizedPath("/news")}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {isGerman ? "News" : "News"}
              </Link>
            </div>

            <div className="py-3">
              <Link
                href={getLocalizedPath("/company")}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {isGerman ? "Unternehmen" : "Company"}
              </Link>
              <Link
                href={getLocalizedPath("/careers")}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {isGerman ? "Karriere" : "Careers"}
              </Link>
            </div>

            <div className="py-3">
              {/* Language Selector in Mobile Menu */}
              <div className="block rounded-md px-3 py-2 text-base font-medium text-white">
                <Link
                  href={isGerman ? pathname.replace(/^\/de/, "") || "/" : `/de${pathname}`}
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Globe className="h-5 w-5" />
                  {isGerman ? "English" : "Deutsch"}
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-3 py-4">
              <Link href={getLocalizedPath("/contact")}>
                <Button className="w-full">{isGerman ? "Vertrieb kontaktieren" : "Contact Sales"}</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
