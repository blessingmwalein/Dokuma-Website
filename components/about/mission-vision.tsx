"use client"

import { useRef, useEffect, useState } from "react"
import { Eye, Target } from "lucide-react"

const cards = [
  {
    title: "Our Vision",
    desc: "To become Africa's leading provider of secure digital transformation solutions for governments and enterprises.",
    icon: Eye,
  },
  {
    title: "Our Mission",
    desc: "To deliver innovative digital systems and infrastructure that enable efficient governance, secure information management, and sustainable economic development.",
    icon: Target,
  },
]

export default function MissionVision() {
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
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`p-10 md:p-12 bg-background rounded-2xl border border-border/50 hover:border-primary/20 hover-lift transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-7">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-light text-foreground mb-4 tracking-tight">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
