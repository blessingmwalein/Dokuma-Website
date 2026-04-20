"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useCallback } from "react"

export type BannerSlide = {
  id: number | string
  image: string
  title: string
  subtitle: string
  description: string
}

type PageBannerProps = {
  slides: BannerSlide[]
  ctaLabel?: string
  ctaHref?: string
  autoplayMs?: number
  minHeightClass?: string
}

export default function PageBanner({
  slides,
  ctaLabel = "CONTACT US",
  ctaHref = "/contact",
  autoplayMs = 6000,
  minHeightClass = "min-h-[85vh]",
}: PageBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (isPaused || slides.length < 2) return
    const interval = setInterval(nextSlide, autoplayMs)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide, autoplayMs, slides.length])

  return (
    <section
      className={`relative ${minHeightClass} bg-primary overflow-hidden`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Dim overlay, no blur, keeps image visible */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Content Area */}
      <div className={`relative z-10 ${minHeightClass} flex items-center justify-center px-4 pt-28 pb-20`}>
        <div className="w-full max-w-6xl mx-auto">
          <div className="relative border border-white/25 rounded-3xl p-8 md:p-16">
            {/* Corner accents */}
            <div className="absolute top-0 left-8 w-20 h-px bg-gradient-to-r from-transparent via-chart-1 to-transparent" />
            <div className="absolute bottom-0 right-8 w-20 h-px bg-gradient-to-r from-transparent via-chart-1 to-transparent" />

            {/* Main content */}
            <div className="text-center max-w-4xl mx-auto">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {index === currentSlide && (
                    <>
                      <p
                        className={`text-white text-sm md:text-base font-medium tracking-widest uppercase mb-4 transition-all duration-700 delay-100 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                      >
                        {slide.subtitle}
                      </p>

                      <h1
                        className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 transition-all duration-700 delay-200 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                      >
                        <span className="text-balance">{slide.title.toUpperCase()}</span>
                      </h1>

                      <p
                        className={`text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-300 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                      >
                        {slide.description}
                      </p>
                    </>
                  )}
                </div>
              ))}

              {ctaLabel && ctaHref && (
                <div
                  className={`transition-all duration-700 delay-400 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  <Link
                    href={ctaHref}
                    className="group inline-flex items-center gap-3 text-white font-medium text-lg hover:text-chart-1 transition-colors"
                  >
                    <span>{ctaLabel}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>

            {slides.length > 1 && (
              <>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-chart-1 w-8"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom dim fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10" />
    </section>
  )
}
