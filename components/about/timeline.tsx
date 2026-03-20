"use client"

import { useRef, useEffect, useState } from "react"

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    desc: "Dokuma was established in Zimbabwe with a clear mission: to digitize and modernize Africa's public institutions through scalable technology.",
    stat: null,
  },
  {
    year: "2020",
    title: "First Government Contract",
    desc: "Secured our first major partnership with the Zimbabwe Deeds Department, beginning the national digitization of property records across Harare and Bulawayo.",
    stat: "2 Offices",
  },
  {
    year: "2021",
    title: "Presidential Title Deed Program",
    desc: "Joined the national task force to address informal settlements, developing systems for the efficient issuance of title deeds and providing securitised printing paper.",
    stat: "National Scale",
  },
  {
    year: "2022",
    title: "Rwanda Expansion",
    desc: "Expanded operations into Rwanda through partnership with Aegis Consult, launching the Gacaca Archive Project - digitizing over 60 million handwritten pages of judicial records.",
    stat: "60M+ Pages",
  },
  {
    year: "2023",
    title: "City of Harare Partnership",
    desc: "Contracted by the City of Harare to modernize business licensing and enforcement through a comprehensive digital platform, driving economic growth in the capital.",
    stat: "City-Wide",
  },
  {
    year: "2024",
    title: "Continental Growth",
    desc: "Reached 15+ government partners across 3+ African countries, serving over 2 million citizens with enterprise-grade digital platforms.",
    stat: "2M+ Citizens",
  },
  {
    year: "2025",
    title: "Fleet & Connectivity Solutions",
    desc: "Delivered a fleet management system for 3,000+ agricultural tractors and launched the Starlink billing platform for AuraGRP, managing 10,000+ kits in real time.",
    stat: "13,000+ Assets",
  },
]

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-5 tracking-tight">
            Key Milestones
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
            From a startup in Harare to a continental force &mdash; every year brings
            new impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pb-8">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-primary/30 md:-translate-x-px" />

          <div className="space-y-0">
            {milestones.map((milestone, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`relative group transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-[5px] md:-translate-x-[5.5px] top-10 z-10 ring-[5px] ring-background group-hover:scale-125 transition-transform" />

                  {/* Connector line */}
                  <div
                    className={`hidden md:block absolute top-[43px] h-px bg-border/80 w-8 ${
                      isEven ? "right-1/2 mr-[6px]" : "left-1/2 ml-[6px]"
                    }`}
                  />

                  <div
                    className={`flex ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`ml-14 md:ml-0 md:w-1/2 ${
                        isEven ? "md:pr-14" : "md:pl-14"
                      } pb-12`}
                    >
                      <div className="p-6 md:p-8 bg-background border border-border/50 rounded-2xl hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.03] transition-all duration-300">
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/[0.08] rounded-lg">
                            <span className="text-sm font-bold text-primary tracking-wide">
                              {milestone.year}
                            </span>
                          </span>
                          {milestone.stat && (
                            <span className="text-xs font-semibold text-primary/70 bg-primary/5 px-2.5 py-1 rounded-full">
                              {milestone.stat}
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2.5 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.desc}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* End dot */}
          <div className="absolute left-6 md:left-1/2 bottom-0 w-5 h-5 rounded-full bg-primary/20 -translate-x-[8.5px] md:-translate-x-[9px] flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
