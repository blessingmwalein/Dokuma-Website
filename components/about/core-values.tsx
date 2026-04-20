"use client"

import { useRef, useEffect, useState } from "react"
import {
  ShieldCheck,
  Zap,
  Handshake,
  Lightbulb,
  Sparkles,
  Check,
} from "lucide-react"

const values = [
  {
    title: "Integrity",
    icon: ShieldCheck,
    desc: "We uphold the highest ethical standards, ensuring transparency and honesty in all our interactions.",
    bullets: [
      "We do the right thing even when no one is watching.",
      "We communicate openly and honestly.",
      "We take accountability for our actions.",
    ],
  },
  {
    title: "Agility",
    icon: Zap,
    desc: "We adapt quickly to changing needs and deliver solutions with speed and precision.",
    bullets: [
      "We embrace change and respond proactively.",
      "We deliver with speed without compromising quality.",
      "We continuously improve our processes.",
    ],
  },
  {
    title: "Partnership",
    icon: Handshake,
    desc: "We collaborate closely with our clients, building long-term relationships based on trust and shared success.",
    bullets: [
      "We listen to our clients and understand their needs.",
      "We work as one team internally and externally.",
      "We build relationships based on trust.",
    ],
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    desc: "We continuously explore new technologies and creative solutions to solve Africa's unique challenges.",
    bullets: [
      "We encourage new ideas and creativity.",
      "We challenge the status quo.",
      "We invest in learning and growth.",
    ],
  },
  {
    title: "Impact",
    icon: Sparkles,
    desc: "We are driven by a desire to create a lasting positive impact on the communities we serve.",
    bullets: [
      "We focus on meaningful outcomes.",
      "We measure success by impact, not just output.",
      "We contribute to community development.",
    ],
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
      { threshold: 0.1 }
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
            Core Values &amp; What This Means For Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div
              key={value.title}
              className={`group relative p-8 bg-background border border-border/50 rounded-2xl hover:border-primary/30 hover-lift transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold text-primary/70 tracking-[0.2em] uppercase mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground leading-none">
                    {value.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {value.desc}
              </p>

              <ul className="space-y-2.5 pt-5 border-t border-border/50">
                {value.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-primary/[0.12] flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
