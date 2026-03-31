"use client"

import { useEffect, useState } from "react"
import { Building2, FileArchive, Users, BarChart3 } from "lucide-react"

const projectCards = [
  {
    flag: "🇿🇼",
    country: "Zimbabwe",
    project: "Digital Land Records",
    stats: [
      { icon: Users, value: "500K+", label: "Parcels digitised" },
      { icon: Building2, value: "3", label: "Provinces covered" },
    ],
    accent: "bg-orange-400/15 border-orange-400/25",
  },
  {
    flag: "🇷🇼",
    country: "Rwanda",
    project: "Archive Digitisation",
    stats: [
      { icon: FileArchive, value: "2M+", label: "Documents archived" },
      { icon: BarChart3, value: "5+", label: "Institutions served" },
    ],
    accent: "bg-white/10 border-white/15",
  },
]

export default function ProjectsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[85vh] bg-primary overflow-hidden">
      {/* Decorative pixel elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[10%] flex gap-1">
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/30" />
          <div className="w-2 h-2 bg-white/10" />
        </div>
        <div className="absolute top-24 right-[8%] flex gap-1">
          <div className="w-2 h-2 bg-white/15" />
          <div className="w-2 h-2 bg-white/25" />
        </div>
        <div className="absolute bottom-32 left-[5%] flex gap-1">
          <div className="w-2 h-2 bg-white/15" />
          <div className="w-2 h-2 bg-white/25" />
        </div>
        <div className="absolute bottom-28 left-[7%] flex gap-1">
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/10" />
          <div className="w-2 h-2 bg-white/30" />
        </div>
        <div className="absolute bottom-40 left-[15%] w-3 h-3 bg-orange-400/80" />
        <div className="absolute top-32 right-[20%] w-2 h-2 bg-orange-400/60" />
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
              Our Projects
            </span>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6 text-balance transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Driving Real Change Across Africa
            </h1>
            <p
              className={`text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              From digitizing national archives to modernizing municipal services &mdash;
              measurable impact for governments and citizens.
            </p>

            {/* Overall project count */}
            <div
              className={`flex flex-wrap gap-8 pt-2 border-t border-white/15 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { value: "10+", label: "Projects delivered" },
                { value: "2", label: "Countries" },
                { value: "Millions", label: "Citizens impacted" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="text-sm text-white/55">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side – project cards */}
          <div
            className={`relative flex flex-col gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            {projectCards.map((card, i) => (
              <div
                key={card.country}
                className={`p-5 rounded-xl border backdrop-blur-sm ${card.accent}`}
                style={{ transitionDelay: `${350 + i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{card.flag}</span>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">{card.country}</p>
                    <p className="text-sm font-semibold text-white">{card.project}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {card.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                        <stat.icon className="w-3.5 h-3.5 text-white/70" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{stat.value}</p>
                        <p className="text-xs text-white/50">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

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
