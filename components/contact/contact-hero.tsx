"use client"

import { useEffect, useRef } from "react"

export function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-on-scroll mb-4 text-sm font-semibold uppercase tracking-wider text-primary opacity-0">
            Get in Touch
          </p>
          <h1 className="animate-on-scroll mb-6 text-4xl font-bold tracking-tight text-foreground opacity-0 sm:text-5xl lg:text-6xl [animation-delay:100ms]">
            <span className="text-balance">Let&apos;s Build the Future </span>
            <span className="gradient-text">Together</span>
          </h1>
          <p className="animate-on-scroll text-lg text-muted-foreground opacity-0 sm:text-xl [animation-delay:200ms]">
            Ready to transform your organization? Our team is here to help you navigate 
            your digital transformation journey. Reach out today.
          </p>
        </div>
      </div>
    </section>
  )
}
