"use client"

import { useRef, useEffect, useState } from "react"
import { Quote } from "lucide-react"

export default function CEOMessage() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Quote icon */}
          <div className="absolute -top-6 -left-4 md:-left-12">
            <Quote className="w-16 h-16 md:w-24 md:h-24 text-primary/10" strokeWidth={1} />
          </div>

          {/* Content */}
          <div className="text-center relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-8">
              CEO Message
            </p>

            <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-light mb-10 text-balance">
              At Dokuma, we are driven by a clear purpose: to enable meaningful digital transformation
              across Africa. Our Vision, Mission, and Values are not just statements — they are the
              foundation of how we think, act, and deliver impact every day.
            </blockquote>

            <div className="flex flex-col items-center">
              {/* CEO Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 border-primary/20">
                <span className="text-xl font-semibold text-primary">WM</span>
              </div>
              <p className="text-lg font-semibold text-foreground">Webster Maposa</p>
              <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 md:-right-8 flex gap-1">
            <div className="w-2 h-2 bg-chart-1/60" />
            <div className="w-2 h-2 bg-primary/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
