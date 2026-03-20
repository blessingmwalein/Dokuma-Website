"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export default function AboutPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Who We Are
            </h2>

            {/* Company intro */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Established in 2019, Dokuma is a technology solutions provider specializing in
              digital transformation, e-government systems, ICT infrastructure, and secure digital
              platforms for governments and enterprises across Zimbabwe and Africa.
            </p>

            {/* Vision + Mission */}
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-1 h-14 bg-orange-400 flex-shrink-0 mt-0.5 rounded-full" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1.5">Vision</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To become Africa&apos;s leading provider of secure digital transformation solutions for governments and enterprises.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-1 h-14 bg-primary/35 flex-shrink-0 mt-0.5 rounded-full" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1.5">Mission</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To deliver innovative digital systems and infrastructure that enable efficient governance, secure information management, and sustainable economic development.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all duration-300"
            >
              <span>About us</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>

          {/* Right side */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main heading */}
              <div className="mb-10">
                <span className="text-6xl md:text-7xl lg:text-8xl font-semibold text-primary">5+</span>
                <span className="text-3xl md:text-4xl font-semibold text-foreground ml-2">years of growth</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
                We&apos;re an independent digital solutions company, set up in 2019, operating across
                Africa with highly qualified people delivering for our clients every day.
              </p>

              {/* CTA + Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <span>Let&apos;s talk</span>
                  <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-semibold text-primary">60M+</span>
                  <span className="text-sm text-muted-foreground leading-tight">Pages<br />Digitized</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-3xl font-semibold text-primary">500TB+</span>
                  <span className="text-sm text-muted-foreground leading-tight">Data<br />Managed</span>
                </div>
              </div>

              {/* Core values badges */}
              <div className="flex flex-wrap gap-2">
                {["Innovation", "Integrity", "Security", "Excellence", "Partnership"].map((value) => (
                  <span
                    key={value}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15"
                  >
                    {value}
                  </span>
                ))}
              </div>

              {/* Decorative pixels */}
              <div className="absolute -top-4 right-0 flex gap-1">
                <div className="w-2 h-2 bg-primary/30" />
                <div className="w-2 h-2 bg-primary/20" />
              </div>
              <div className="absolute bottom-0 -left-4 flex flex-col gap-1">
                <div className="w-2 h-2 bg-orange-400/60" />
                <div className="w-2 h-2 bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
