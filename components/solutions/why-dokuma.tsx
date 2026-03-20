"use client"

import { useRef, useEffect, useState } from "react"

const whyStats = [
  { stat: "99.9%", label: "Uptime Guarantee" },
  { stat: "15+", label: "Government Partners" },
  { stat: "60M+", label: "Pages Digitized" },
  { stat: "24/7", label: "Support Available" },
]

export default function WhyDokuma() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-5">
              Why Choose Dokuma
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-8 tracking-tight text-balance">
              Built for Africa&apos;s Unique Challenges
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We don&apos;t just deploy technology &mdash; we understand the regulatory,
              infrastructural, and cultural context that makes African
              institutions unique. Our solutions are purpose-built for this
              reality.
            </p>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {whyStats.map((item, i) => (
                <div
                  key={i}
                  className={`p-7 bg-muted/50 rounded-xl border border-border/50 text-center hover:border-primary/20 transition-all duration-300 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <div className="text-3xl font-light text-primary mb-2 tracking-tight">
                    {item.stat}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
