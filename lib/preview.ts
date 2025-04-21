"use client"

import { useEffect, useState } from "react"

export function usePreviewMode() {
  const [isPreview, setIsPreview] = useState(false)

  useEffect(() => {
    // Prüfen Sie den Header, den wir in der Middleware gesetzt haben
    const previewMode = document.cookie
      .split("; ")
      .find((row) => row.startsWith("preview-mode="))
      ?.split("=")[1]

    setIsPreview(previewMode === "true")
  }, [])

  return isPreview
}
