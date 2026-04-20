"use client"

import { useRef, useEffect, useState, useCallback } from "react"

const metrics = [
  { value: 60, suffix: "M+", label: "Pages Digitized", description: "Converting Africa's archives into secure digital repositories" },
  { value: 500, suffix: "TB+", label: "Data Managed", description: "Enterprise-grade cloud infrastructure at scale" },
  { value: 5, suffix: "+", label: "Years Experience", description: "Building tomorrow's Africa since 2019" },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  
  const animateCounter = useCallback(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [value])
  
  useEffect(() => {
    if (isVisible) {
      const cleanup = animateCounter()
      return cleanup
    }
  }, [isVisible, animateCounter])
  
  return (
    <span className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground tracking-tight">
      {count}{suffix}
    </span>
  )
}

export default function ImpactMetrics() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 font-semibold mb-4">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground">
            Measurable Results Across Africa
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`text-center p-8 md:p-10 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} isVisible={isVisible} />
              <h3 className="text-lg font-semibold text-primary-foreground mt-4 mb-2">
                {metric.label}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
