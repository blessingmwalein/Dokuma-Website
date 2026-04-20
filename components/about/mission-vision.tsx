"use client"

import { useRef, useEffect, useState } from "react"
import { Eye, Target, Quote } from "lucide-react"

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
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Vision, Mission &amp; Values
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-light leading-tight text-foreground tracking-tight">
            Shaping Africa&apos;s Digital Future
          </h2>
        </div>

        {/* CEO Message */}
        <div
          className={`relative bg-background rounded-2xl border border-border/50 p-8 md:p-12 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="absolute -top-5 left-8 md:left-12 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <Quote className="w-5 h-5 text-primary-foreground" />
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-5">
            CEO Message
          </p>

          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              At Dokuma, we are driven by a clear purpose: to enable meaningful
              digital transformation across Africa. Our Vision, Mission, and Values
              are not just statements&mdash;they are the foundation of how we think,
              act, and deliver impact every day.
            </p>
            <p>
              As we grow, it is essential that every member of our team aligns with
              these principles. They guide how we serve our clients, how we
              collaborate with each other, and how we build sustainable solutions
              that make a difference.
            </p>
            <p>
              I encourage each of you to internalize these values and reflect them
              in your daily work. Together, we will build a company that not only
              succeeds commercially but also leaves a lasting legacy across the
              continent.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/[0.08] flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">WM</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Webster Maposa</p>
              <p className="text-xs text-muted-foreground">Chief Executive Officer</p>
            </div>
          </div>
        </div>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className={`p-10 md:p-12 bg-background rounded-2xl border border-border/50 hover:border-primary/25 hover-lift transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-7">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
              Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To be Africa&apos;s leading catalyst for digital transformation.
            </p>
          </div>

          <div
            className={`p-10 md:p-12 bg-background rounded-2xl border border-border/50 hover:border-primary/25 hover-lift transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-7">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
              Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We deliver software and technology solutions that reduce costs,
              accelerate service delivery, and improve decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
