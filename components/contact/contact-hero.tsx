"use client"

import { useEffect, useState } from "react"
import { MapPin, Mail, Phone, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

const offices = [
  {
    flag: "🇿🇼",
    country: "Zimbabwe",
    city: "Harare",
    address: "Harare, Zimbabwe",
    accent: "bg-orange-400/15 border-orange-400/25",
    dotColor: "bg-orange-400",
  },
  {
    flag: "🇷🇼",
    country: "Rwanda",
    city: "Kigali",
    address: "Kigali, Rwanda",
    accent: "bg-white/10 border-white/15",
    dotColor: "bg-white/40",
  },
]

const quickLinks = [
  { icon: Mail, label: "Send an email", sub: "info@dokuma.tech" },
  { icon: Phone, label: "Call us", sub: "Available weekdays" },
  { icon: MessageSquare, label: "Project enquiry", sub: "Get a proposal" },
]

export function ContactHero() {
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
              Get in Touch
            </span>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-6 text-balance transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Let&apos;s Build the Future Together
            </h1>
            <p
              className={`text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Ready to transform your organization? Our team is here to help you
              navigate your digital transformation journey.
            </p>

            {/* Quick contact links */}
            <div
              className={`flex flex-col gap-3 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {quickLinks.map((link) => (
                <div key={link.label} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <link.icon className="w-4 h-4 text-white/60" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-white/85">{link.label}</span>
                    <span className="text-xs text-white/45 ml-2">{link.sub}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-white/25 group-hover:text-white/50 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Right side – office cards */}
          <div
            className={`relative flex flex-col gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            {/* Office location cards */}
            {offices.map((office, i) => (
              <div
                key={office.country}
                className={`p-5 rounded-xl border backdrop-blur-sm ${office.accent}`}
                style={{ transitionDelay: `${350 + i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white/70" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{office.flag}</span>
                      <p className="text-sm font-semibold text-white">{office.country} Office</p>
                      <span className={`w-1.5 h-1.5 rounded-full ${office.dotColor} ml-auto`} />
                    </div>
                    <p className="text-xs text-white/50">{office.address}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Response time badge */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.05] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm text-white/70">
                  We typically respond within <span className="text-white font-medium">24 hours</span>
                </p>
              </div>
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
