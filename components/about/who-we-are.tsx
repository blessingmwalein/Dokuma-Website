"use client"

import { useRef, useEffect, useState } from "react"

const aboutStats = [
  { value: "2019", label: "Year Established" },
  { value: "15+", label: "Government Partners" },
  { value: "3+", label: "African Countries" },
  { value: "2M+", label: "Citizens Served" },
  { value: "60M+", label: "Pages Digitized" },
  { value: "99.9%", label: "Uptime Guarantee" },
]

export default function WhoWeAre() {
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
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 lg:px-8 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
          {/* Left content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-5">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-10 tracking-tight text-balance">
              Building Tomorrow&apos;s Africa
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Established in{" "}
                <span className="text-foreground font-semibold">2019</span>,
                Dokuma is a technology solutions provider specializing in
                digital transformation, e-government systems, ICT
                infrastructure, and secure digital platforms for governments
                and enterprises in Zimbabwe &amp; across Africa.
              </p>
              <p>
                We design, develop, and deploy integrated digital ecosystems
                that improve operational efficiency, increase transparency, and
                enable secure data management. Dokuma combines advanced
                technology, industry expertise, and strong implementation
                capability to deliver high-impact digital solutions across a
                wide range of sectors.
              </p>
            </div>
          </div>

          {/* Right stats */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-7 bg-muted/50 rounded-xl border border-border/50 text-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-light text-primary mb-1.5 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
