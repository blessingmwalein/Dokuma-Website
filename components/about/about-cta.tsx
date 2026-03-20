"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export default function AboutCTA() {
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
      className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30 border-t border-border/50"
    >
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-[2.75rem] font-light leading-tight text-foreground mb-6 tracking-tight text-balance">
          Want to Work With Us?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Whether you&apos;re looking to partner, join our team, or learn more about
          what we do &mdash; we&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-200 inline-flex items-center gap-2.5 shadow-lg shadow-primary/20"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 border border-border text-foreground font-semibold text-sm rounded-xl hover:bg-muted/50 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
