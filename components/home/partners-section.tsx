"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"

const partners = [
  { src: "/justice-logo-4.png", alt: "Ministry of Justice", width: 160, height: 80 },
  { src: "/lands.png", alt: "Ministry of Lands", width: 150, height: 80 },
  { src: "/land-tenure.png", alt: "Land Tenure Implementation Committee", width: 140, height: 80 },
  { src: "/housing-social.png", alt: "Ministry of National Housing", width: 150, height: 80 },
  { src: "/public-works.jpg", alt: "Ministry of Local Government and Public Works", width: 150, height: 80 },
]

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-base md:text-lg uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Trusted by Government Institutions
          </p>
          <div className="mt-4 mx-auto w-16 h-px bg-primary/30" />
        </div>

        {/* Scrolling logos */}
        <div
          className={`overflow-hidden transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-scroll-x flex items-center whitespace-nowrap gap-10">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center h-40 w-64 px-6"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width * 2}
                  height={partner.height * 2}
                  className="max-h-28 max-w-full w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
