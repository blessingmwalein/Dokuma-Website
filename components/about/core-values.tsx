"use client"

import { useRef, useEffect, useState } from "react"

const values = [
  {
    title: "Innovation",
    desc: "Continuously developing advanced technologies that solve real-world challenges.",
  },
  {
    title: "Integrity",
    desc: "Maintaining transparency, accountability, and ethical conduct in all operations.",
  },
  {
    title: "Security",
    desc: "Ensuring the protection of data, infrastructure, and digital identities.",
  },
  {
    title: "Excellence",
    desc: "Delivering high-quality solutions aligned with global best practices.",
  },
  {
    title: "Partnership",
    desc: "Collaborating closely with clients and stakeholders to achieve lasting impact.",
  },
]

export default function CoreValues() {
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
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            What Drives Us
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground tracking-tight">
            Our Core Values
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className={`p-8 border border-border/50 rounded-xl hover:border-primary/30 hover-lift hover-glow transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/[0.08] flex items-center justify-center mb-5">
                <span className="text-primary font-semibold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
