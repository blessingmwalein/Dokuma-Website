"use client"

import { useEffect, useState } from "react"

export default function SolutionsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.06] blur-[100px]" />
        <div className="absolute top-1/4 right-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="solutionsGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#solutionsGrid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/5 border border-primary/10 rounded-full mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Our Solutions
        </span>
        <h1
          className={`text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.1] tracking-tight text-foreground mb-8 text-balance transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Digital Solutions for Africa
        </h1>
        <p
          className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto text-balance transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Comprehensive technology solutions designed for governments and
          enterprises across Africa.
        </p>
      </div>
    </section>
  )
}
