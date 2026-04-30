"use client"

import { useRef, useEffect, useState } from "react"

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-24 md:py-32 px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            The People Behind Dokuma
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-5 tracking-tight">
            Our Team
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A diverse group of technologists, strategists, and innovators united
            by a shared passion for Africa&apos;s digital future — delivering
            secure, scalable solutions across the continent.
          </p>
        </div>
      </div>
    </section>
  )
}
