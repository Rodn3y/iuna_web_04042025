"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Globe } from "lucide-react"

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Determine current language and path for language switching
  const isGerman = pathname.startsWith("/de")

  // Create the target path for language switching
  let targetPath = isGerman ? pathname.replace(/^\/de/, "") || "/" : `/de${pathname}`

  // Handle special case for root path
  if (pathname === "/" && !isGerman) {
    targetPath = "/de"
  }

  return (
    <div className="relative">
      <button
        className="flex items-center text-white gap-1 hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden sm:inline">{isGerman ? "DE" : "EN"}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <Link
            href={targetPath}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            {isGerman ? "English" : "Deutsch"}
          </Link>
        </div>
      )}
    </div>
  )
}
