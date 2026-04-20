"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export default function FinalCTA() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Let&apos;s build Africa&apos;s digital future together
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Partner with us to transform your organization with enterprise-grade digital solutions
            that drive efficiency, transparency, and growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              <span>Let&apos;s talk</span>
              <span className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-primary-foreground/30 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span>Explore solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Decorative pixels */}
        <div className="relative mt-16">
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-primary/20" />
            <div className="w-2 h-2 bg-chart-1/60" />
            <div className="w-2 h-2 bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
