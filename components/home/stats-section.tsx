"use client"

import { useRef, useEffect, useState } from "react"

const stats = [
  { value: "15+", label: "Government Partners" },
  { value: "3+", label: "African Countries" },
  { value: "2M+", label: "Citizens Served" },
  { value: "99.9%", label: "Uptime Guarantee" },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border/50">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center lg:px-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-3 tracking-tight">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
