"use client"

import Image from "next/image"

type Logo = {
  src: string
  alt: string
  width: number
  height: number
  className: string
}

const logos: Logo[] = [
  {
    src: "/images/logo_vw.png",
    alt: "VW logo",
    width: 70,
    height: 70,
    className: "h-[50px] sm:h-[70px] w-auto object-contain brightness-0 invert",
  },
  {
    src: "/images/logo_audi.png",
    alt: "Audi logo",
    width: 90,
    height: 90,
    className: "h-[60px] sm:h-[90px] w-auto object-contain brightness-0 invert",
  },
  {
    src: "/images/logo_awl.png",
    alt: "AWL logo",
    width: 120,
    height: 40,
    className: "h-[30px] sm:h-[40px] w-auto object-contain brightness-0 invert",
  },
  {
    src: "/images/logo_ehr.png",
    alt: "EHR logo",
    width: 70,
    height: 35,
    className: "h-[25px] sm:h-[35px] w-auto object-contain brightness-0 invert",
  },
  {
    src: "/images/logo_heidelberg.png",
    alt: "Heidelberger Druckmaschinen logo",
    width: 120,
    height: 60,
    className: "h-[40px] sm:h-[60px] w-auto object-contain brightness-0 invert",
  },
  {
    src: "/images/logo_schedl.png",
    alt: "Schedl Automotive logo",
    width: 100,
    height: 100,
    className: "h-[70px] sm:h-[100px] w-auto object-contain brightness-0 invert",
  },
  {
    src: "/images/logo_pwo.png",
    alt: "PWO logo",
    width: 140,
    height: 70,
    className: "h-[50px] sm:h-[70px] w-auto object-contain brightness-0 invert",
  },
  {
    src: "/images/logo_michael.png",
    alt: "Michael Kunststofftechnik logo",
    width: 160,
    height: 70,
    className: "h-[38px] sm:h-[48px] w-auto object-contain brightness-0 invert",
  },
]

export default function LogoCarousel() {
  // Duplicate the list so the marquee can loop seamlessly.
  const items = [...logos, ...logos]

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <ul className="flex w-max animate-logo-marquee items-center group-hover:[animation-play-state:paused]">
        {items.map((logo, index) => (
          <li
            key={`${logo.src}-${index}`}
            className="flex shrink-0 items-center justify-center px-6 sm:px-10 md:px-12"
            aria-hidden={index >= logos.length}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={index >= logos.length ? "" : logo.alt}
              width={logo.width}
              height={logo.height}
              className={logo.className}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
