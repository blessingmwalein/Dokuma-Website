"use client"

import { useRef, useEffect, useState } from "react"
import { Linkedin, Users } from "lucide-react"


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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
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
            by a shared passion for Africa&apos;s digital future.
          </p>
        </div>

        {/* Team Photo Section */}
        <div
          className={`p-10 md:p-12 bg-muted/40 rounded-2xl border border-border/50 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="aspect-[16/9] max-w-4xl mx-auto bg-muted rounded-xl flex items-center justify-center mb-6 overflow-hidden border border-border/50">
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground/50 text-sm">
                Team Group Photo
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our talented team of developers, designers, project managers, and
            support staff work together to deliver exceptional digital solutions
            across Africa.
          </p>
        </div>
      </div>
    </section>
  )
}
