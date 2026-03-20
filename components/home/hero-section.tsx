"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] bg-primary overflow-hidden">
      {/* Decorative pixel elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top right pixel cluster */}
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

        {/* Bottom left pixel cluster */}
        <div className="absolute bottom-32 left-[5%] flex gap-1">
          <div className="w-2 h-2 bg-white/15" />
          <div className="w-2 h-2 bg-white/25" />
        </div>
        <div className="absolute bottom-28 left-[7%] flex gap-1">
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/10" />
          <div className="w-2 h-2 bg-white/30" />
        </div>

        {/* Middle right pixels */}
        <div className="absolute top-1/2 right-[3%] flex flex-col gap-1">
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/15" />
        </div>

        {/* Orange accent pixels */}
        <div className="absolute bottom-40 left-[15%] w-3 h-3 bg-orange-400/80" />
        <div className="absolute top-32 right-[20%] w-2 h-2 bg-orange-400/60" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <span className="text-balance">Transforming Africa&apos;s Digital Future</span>
            </h1>

            <p
              className={`text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              Enterprise-grade solutions that empower governments and institutions with secure, scalable, and intelligent systems.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              >
                <span>Let&apos;s talk</span>
                <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 text-white/90 font-medium hover:text-white transition-colors"
              >
                <span>Explore solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right side - Africa Digital Transformation Illustration */}
          <div
            className={`relative transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
              }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/home_hero.png"
                alt="Africa Digital Transformation"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative elements around image box */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400" />
              <div className="absolute -bottom-2 -left-2 flex gap-1">
                <div className="w-2 h-2 bg-white/40" />
                <div className="w-2 h-2 bg-white/30" />
                <div className="w-2 h-2 bg-white/20" />
              </div>
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
