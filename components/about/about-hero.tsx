"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function AboutHero() {
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
        <div className="absolute top-28 right-[12%] flex gap-1">
          <div className="w-2 h-2 bg-white/20" />
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
        <div className="absolute top-1/2 right-[3%] flex flex-col gap-1">
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/15" />
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
              About Dokuma
            </span>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6 text-balance transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Building Tomorrow&apos;s Africa
            </h1>
            <p
              className={`text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Since 2019, we&apos;ve been on a mission to transform Africa&apos;s public
              institutions through innovative digital solutions.
            </p>

            {/* Stats row */}
            <div
              className={`flex flex-wrap gap-8 pt-2 border-t border-white/15 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { value: "2019", label: "Founded" },
                { value: "2+", label: "Countries" },
                { value: "10+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="text-sm text-white/55">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side – image card */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/home_hero.png"
                alt="Dokuma Digital Transformation"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle dark overlay for depth */}
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            {/* Decorative accents around the card */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400" />
            <div className="absolute -bottom-2 -left-2 flex gap-1">
              <div className="w-2 h-2 bg-white/40" />
              <div className="w-2 h-2 bg-white/30" />
              <div className="w-2 h-2 bg-white/20" />
            </div>
            {/* Floating label */}
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <p className="text-xs text-white/60 uppercase tracking-wider">Powering</p>
              <p className="text-sm font-semibold text-white">Africa&apos;s Digital Future</p>
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
