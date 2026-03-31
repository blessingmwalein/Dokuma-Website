"use client"

import { useEffect, useState } from "react"
import { Newspaper, Star, Mic, TrendingUp, Globe, Award } from "lucide-react"

const mediaCards = [
  {
    icon: Newspaper,
    category: "Press Releases",
    headline: "Dokuma expands digital land records across Zimbabwe provinces",
    tag: "Latest",
    tagColor: "bg-orange-400/20 text-orange-300",
  },
  {
    icon: Star,
    category: "Success Stories",
    headline: "Rwanda national archives fully digitised ahead of schedule",
    tag: "Featured",
    tagColor: "bg-white/15 text-white/70",
  },
  {
    icon: Mic,
    category: "Media Features",
    headline: "Dokuma named among top GovTech innovators in Africa",
    tag: "Media",
    tagColor: "bg-white/15 text-white/70",
  },
]

const counts = [
  { icon: Newspaper, value: "12+", label: "Press Releases" },
  { icon: Globe, value: "20+", label: "Media Mentions" },
  { icon: Award, value: "8+", label: "Success Stories" },
]

export default function NewsroomHero() {
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
              Newsroom
            </span>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6 text-balance transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Latest News &amp; Stories
            </h1>
            <p
              className={`text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Stay updated with our latest announcements, success stories, and media
              coverage from across Africa.
            </p>

            {/* Quick count strip */}
            <div
              className={`flex flex-wrap gap-6 pt-2 border-t border-white/15 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {counts.map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center">
                    <c.icon className="w-3.5 h-3.5 text-white/60" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white leading-none">{c.value}</p>
                    <p className="text-xs text-white/50">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side – article preview cards */}
          <div
            className={`relative flex flex-col gap-3 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            {mediaCards.map((card, i) => (
              <div
                key={card.category}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/15 bg-white/[0.07] backdrop-blur-sm"
                style={{ transitionDelay: `${350 + i * 70}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <card.icon className="w-5 h-5 text-white/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-white/50">{card.category}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${card.tagColor}`}>
                      {card.tag}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white leading-snug line-clamp-2">{card.headline}</p>
                </div>
                <TrendingUp className="w-4 h-4 text-white/25 flex-shrink-0 mt-1" />
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
