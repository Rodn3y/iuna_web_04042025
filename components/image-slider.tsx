"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageSliderProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
  aspectRatio?: "square" | "video" | "wide" | "auto"
  showAttribution?: boolean
  attribution?: string
}

export function ImageSlider({
  images,
  className,
  aspectRatio = "auto",
  showAttribution = false,
  attribution,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  const aspectRatioClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "video"
        ? "aspect-video"
        : aspectRatio === "wide"
          ? "aspect-[16/9]"
          : "aspect-auto"

  return (
    <div className={cn("relative", className)}>
      <div className={cn("relative overflow-hidden rounded-lg", aspectRatioClass)}>
        <div className="absolute inset-0">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-all duration-500"
          />
          {showAttribution && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-xs text-white text-center">
              {attribution}
            </div>
          )}
        </div>

        {/* Left Arrow */}
        <div
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 rounded-full cursor-pointer transition-opacity z-10"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </div>

        {/* Right Arrow */}
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 rounded-full cursor-pointer transition-opacity z-10"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          {images.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                slideIndex === currentIndex ? "bg-primary" : "bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
