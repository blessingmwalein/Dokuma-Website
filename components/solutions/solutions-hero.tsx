"use client"

import { useEffect, useState } from "react"
import { Map, FileText, Cloud, CreditCard, Shield, Fingerprint } from "lucide-react"

const solutions = [
  { icon: Map, label: "Land Administration", accent: "bg-orange-400/20 border-orange-400/30" },
  { icon: FileText, label: "Document Digitisation", accent: "bg-white/10 border-white/15" },
  { icon: Cloud, label: "Cloud Infrastructure", accent: "bg-white/10 border-white/15" },
  { icon: CreditCard, label: "Payment Platforms", accent: "bg-white/10 border-white/15" },
  { icon: Shield, label: "Licensing Systems", accent: "bg-white/10 border-white/15" },
  { icon: Fingerprint, label: "Cybersecurity", accent: "bg-orange-400/20 border-orange-400/30" },
]

export default function SolutionsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[85vh] bg-primary overflow-hidden">
      {/* Decorative pixel elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] flex gap-1">
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/30" />
        </div>
        <div className="absolute top-32 right-[8%] flex gap-1">
          <div className="w-2 h-2 bg-white/15" />
          <div className="w-2 h-2 bg-white/25" />
        </div>
        <div className="absolute bottom-32 right-[5%] flex gap-1">
          <div className="w-2 h-2 bg-white/15" />
          <div className="w-2 h-2 bg-white/25" />
        </div>
        <div className="absolute bottom-28 right-[7%] flex gap-1">
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/10" />
        </div>
        <div className="absolute bottom-40 right-[15%] w-3 h-3 bg-orange-400/80" />
        <div className="absolute top-28 left-[20%] w-2 h-2 bg-orange-400/60" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white/70 bg-white/10 border border-white/20 rounded-full mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Our Solutions
            </span>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6 text-balance transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Digital Solutions for Africa
            </h1>
            <p
              className={`text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Comprehensive technology platforms designed for governments and
              enterprises across Africa — secure, scalable, and built for lasting impact.
            </p>

            {/* Count badge */}
            <div
              className={`inline-flex items-center gap-3 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex -space-x-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-white/20 border border-white/30" />
                ))}
              </div>
              <span className="text-sm text-white/60">6 core solution areas</span>
            </div>
          </div>

          {/* Right side – solution grid */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="grid grid-cols-2 gap-3">
              {solutions.map((sol, i) => (
                <div
                  key={sol.label}
                  className={`flex flex-col gap-3 p-4 rounded-xl border backdrop-blur-sm ${sol.accent} transition-all duration-700`}
                  style={{ transitionDelay: `${350 + i * 60}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <sol.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <p className="text-sm font-medium text-white leading-snug">{sol.label}</p>
                </div>
              ))}
            </div>

            {/* Decorative accents */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400" />
            <div className="absolute -bottom-2 -left-2 flex gap-1">
              <div className="w-2 h-2 bg-white/40" />
              <div className="w-2 h-2 bg-white/30" />
              <div className="w-2 h-2 bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom angled cut */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
          <path d="M0 96L1440 96L1440 0L0 96Z" fill="white" className="dark:fill-background" />
        </svg>
      </div>
    </section>
  )
}
