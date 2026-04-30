"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"

const partners = [
  { src: "/justice-logo-4.png", alt: "Ministry of Justice" },
  { src: "/lands.png", alt: "Ministry of Lands" },
  { src: "/land-tenure.png", alt: "Land Tenure Implementation Committee" },
  { src: "/housing-social.png", alt: "Ministry of National Housing" },
  { src: "/public-works.jpg", alt: "Ministry of Local Government and Public Works" },
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
          <div className="animate-scroll-x flex items-center whitespace-nowrap gap-8">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 h-32 w-56 flex items-center justify-center px-4"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  sizes="224px"
                  className="object-contain p-3 transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
