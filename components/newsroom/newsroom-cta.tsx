"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export default function NewsroomCTA() {
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
          Media Inquiries
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          For press inquiries, interviews, or media kits, please contact our
          communications team.
        </p>
        <Link
          href="/contact"
          className="group inline-flex px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:opacity-90 transition-all duration-200 items-center gap-2.5 shadow-lg shadow-primary/20"
        >
          Contact Media Team
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
