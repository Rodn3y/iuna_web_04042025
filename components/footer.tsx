"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {
  // Client component to get the pathname
  return <FooterContent />
}

// Client component to access usePathname
function FooterContent() {
  const pathname = usePathname()
  const isGerman = pathname.startsWith("/de")

  // Helper function to get the correct path based on language
  const getLocalizedPath = (path: string) => {
    return isGerman ? `/de${path}` : path
  }

  return (
    <footer className="bg-black text-white">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href={isGerman ? "/de" : "/"} className="inline-block">
              <Image src="/images/logo.png" alt="IUNA AI" width={140} height={40} className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-gray-400">
              {isGerman
                ? "AI Vision Systeme für die Automobil- und Fertigungsindustrie."
                : "AI vision systems for automotive and manufacturing industries."}
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.linkedin.com/company/iuna-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={isGerman ? "Folgen Sie uns auf LinkedIn" : "Follow us on LinkedIn"}
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/iunaai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={isGerman ? "Folgen Sie uns auf X (Twitter)" : "Follow us on X (Twitter)"}
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a
                href="https://www.youtube.com/@iunaai2860"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={isGerman ? "Abonnieren Sie unseren YouTube-Kanal" : "Subscribe to our YouTube channel"}
              >
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{isGerman ? "Produkte" : "Products"}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={getLocalizedPath("/products/assembly-inspector")}
                  className="text-gray-400 hover:text-white"
                >
                  {isGerman ? "Assembly Inspector" : "Assembly Inspector"}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath("/products/weld-inspector")} className="text-gray-400 hover:text-white">
                  {isGerman ? "Weld Inspector" : "Weld Inspector"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{isGerman ? "Schnelllinks" : "Quick Links"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={getLocalizedPath("/company")} className="text-gray-400 hover:text-white">
                  {isGerman ? "Unternehmen" : "Company"}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath("/careers")} className="text-gray-400 hover:text-white">
                  {isGerman ? "Karriere" : "Careers"}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath("/news")} className="text-gray-400 hover:text-white">
                  {isGerman ? "Neuigkeiten" : "News"}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath("/contact")} className="text-gray-400 hover:text-white">
                  {isGerman ? "Kontakt" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{isGerman ? "Kontakt" : "Contact"}</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>sales@iuna.ai</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+49 152 5538 6189</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Humboldtstr. 14, 74199 Untergruppenbach</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} IUNA AI. {isGerman ? "Alle Rechte vorbehalten." : "All rights reserved."}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href={getLocalizedPath("/privacy-policy")} className="hover:text-white">
                {isGerman ? "Datenschutzerklärung" : "Privacy Policy"}
              </Link>
              <Link href={getLocalizedPath("/gtc")} className="hover:text-white">
                {isGerman ? "AGB" : "GTC"}
              </Link>
              <Link href={getLocalizedPath("/imprint")} className="hover:text-white">
                {isGerman ? "Impressum" : "Imprint"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
