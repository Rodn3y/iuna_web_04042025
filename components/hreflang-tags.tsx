import { headers } from "next/headers"

interface HreflangTagsProps {
  currentPath?: string
}

export default function HreflangTags({ currentPath }: HreflangTagsProps) {
  const headersList = headers()
  const pathname = currentPath || headersList.get("x-pathname") || ""
  const baseUrl = "https://iuna.ai"

  const isGerman = pathname.startsWith("/de")

  let englishPath: string
  let germanPath: string

  if (isGerman) {
    englishPath = pathname.replace("/de", "") || "/"
    germanPath = pathname
  } else {
    englishPath = pathname
    germanPath = `/de${pathname === "/" ? "" : pathname}`
  }

  return (
    <>
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${englishPath}`} />
      <link rel="alternate" hrefLang="de" href={`${baseUrl}${germanPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${englishPath}`} />
      <link rel="canonical" href={`${baseUrl}${pathname}`} />
    </>
  )
}
