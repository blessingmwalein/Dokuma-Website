"use client"

import { useRef, useEffect, useState } from "react"
import { Eye, Target, Compass } from "lucide-react"

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
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32 px-6 lg:px-8 bg-muted/30"
    >
      {/* Decorative background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -left-32 top-32 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-32 -z-10 h-72 w-72 rounded-full bg-chart-1/10 blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Vision &amp; Mission
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-light leading-tight text-foreground tracking-tight">
            Shaping Africa&apos;s Digital Future
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision card */}
          <div
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-700 delay-200 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bg-white/20" />
            <div className="absolute right-6 top-6 text-7xl font-bold text-white/10 leading-none select-none">
              01
            </div>

            <div className="relative p-10 md:p-12">
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold mb-3">
                Our Vision
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-5 tracking-tight text-balance">
                To be Africa’s leading catalyst for digital transformation.
              </h3>
              {/* <p className="text-white/80 leading-relaxed">
                Building a continent where technology empowers every government,
                enterprise, and citizen to thrive in the digital age.
              </p> */}
            </div>
          </div>

          {/* Mission card */}
          <div
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-chart-2 to-chart-3 text-white shadow-xl shadow-chart-2/20 transition-all duration-700 delay-300 hover:-translate-y-1 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bg-white/20" />
            <div className="absolute right-6 top-6 text-7xl font-bold text-white/10 leading-none select-none">
              02
            </div>

            <div className="relative p-10 md:p-12">
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <Target className="h-6 w-6 text-white" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold mb-3">
                Our Mission
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-5 tracking-tight text-balance">
                We deliver software and technology solutions that reduce costs, accelerate service
                delivery, and improve decision-making.

              </h3>
              {/* <p className="text-white/80 leading-relaxed">
                We deliver solutions that reduce costs, accelerate service
                delivery, and improve decision-making — at scale, across the
                continent.
              </p> */}
            </div>
          </div>
        </div>

        {/* Bridge to Values */}
        <div
          className={`mt-16 md:mt-20 flex flex-col items-center text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border/60 shadow-sm">
            <Compass className="h-5 w-5 text-primary" />
          </div>
          <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
            Anchored by a set of values that guide every decision we make.
          </p>
        </div>
      </div>
    </section>
  )
}
