"use client"

import { useRef, useEffect, useState } from "react"

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We deeply understand your institution, its challenges, existing systems, and strategic goals.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "We design a tailored roadmap with clear milestones, timelines, and measurable outcomes.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Our engineering team develops and rigorously tests your solution using agile best practices.",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "We handle full technical deployment, data migration, integration, and team training.",
  },
  {
    step: "05",
    title: "Evolve",
    desc: "Post-launch, we provide ongoing support, monitoring, and iterative improvements.",
  },
]

export default function ProcessSection() {
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
      className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30 border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-5 tracking-tight">
            Our Process
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A proven, structured approach that ensures every project delivers
            measurable results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-xl border border-border/50 bg-background hover:border-primary/30 hover-glow transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
