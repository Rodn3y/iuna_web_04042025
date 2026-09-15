import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found | IUNA AI",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
          Back to homepage
        </Link>
        <Link href="/de" className="text-sm font-medium underline-offset-4 hover:underline">
          Zur deutschen Startseite
        </Link>
      </div>
    </main>
  )
}
