"use client"

import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"

const partners = [
  { src: "/partners/ministry_of_justice.png", alt: "Ministry of Justice" },
  { src: "/partners/land_tenure.png", alt: "Land Tenure Implementation Committee" },
  { src: "/partners/Aura-Logo.svg", alt: "Aura Group" },
  { src: "/partners/kwangu.png", alt: "Kwangu" },
]

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  // Embla Carousel for mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30, // Smooth transition
  })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
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

    return () => {
      window.removeEventListener("resize", checkMobile)
      observer.disconnect()
    }
  }, [])

  // Auto-play for mobile slider
  useEffect(() => {
    if (emblaApi && isMobile) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext()
      }, 2000) // Change every 2 seconds as requested
      return () => clearInterval(intervalId)
    }
  }, [emblaApi, isMobile])

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
            Our Partners
          </p>
          <div className="mt-4 mx-auto w-16 h-px bg-primary/30" />
        </div>

        {/* Logo display */}
        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {isMobile ? (
            /* Mobile Slider */
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="flex">
                {partners.map((partner, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0 flex items-center justify-center h-48 px-12"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={320}
                      height={128}
                      className="object-contain h-24 w-auto max-w-full transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Desktop Marquee */
            <div className="overflow-hidden">
              <div className="animate-scroll-x flex items-center whitespace-nowrap gap-8">
                {[...partners, ...partners].map((partner, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-64 h-32 flex items-center justify-center px-8"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={240}
                      height={96}
                      className="object-contain h-16 w-auto max-w-full transition-all duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
