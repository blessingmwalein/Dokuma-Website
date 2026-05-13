"use client"

import Link from "next/link"
import { ArrowRight, FileText, Server, Shield, Database, CreditCard, Landmark } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const solutions = [
  {
    icon: Database,
    title: "Digital Land Administration Systems",
    description: "Secure systems for digitised title deeds and land administration, ensuring tamper-proof records, transparent ownership verification, and reduced land fraud.",
    link: "/solutions#solution-0",
  },
  {
    icon: FileText,
    title: "Large Scale Document Digitisation",
    description: "Converting physical archives into secure digital repositories. With 60M+ pages digitized, we provide one of Africa's most scalable document digitization services.",
    link: "/solutions#solution-1",
  },
  {
    icon: Server,
    title: "Data Centre & Cloud Infrastructure",
    description: "Data centre design, private cloud, and hybrid cloud integration. We manage private cloud environments exceeding 500TB, scalable to 10PB for mission-critical systems.",
    link: "/solutions#solution-2",
  },
  {
    icon: CreditCard,
    title: "Digital Payment Platforms",
    description: "Secure payment platforms enabling mobile money, card, and bank transfer transactions — helping governments and enterprises improve revenue collection.",
    link: "/solutions#solution-3",
  },
  {
    icon: Landmark,
    title: "eGovernment Platforms",
    description: "Integrated e-government systems modernizing public service delivery through citizen portals, online licensing, and digital records management.",
    link: "/solutions#solution-4",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive protection via security risk assessments, penetration testing, threat monitoring, and security architecture implementation.",
    link: "/solutions#solution-9",
  },
]

export default function ServicesSection() {
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p
              className={`text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Choose your scope of expertise
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/solutions"
                className={`text-3xl md:text-4xl font-semibold text-foreground hover:text-primary transition-colors duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Solutions
              </Link>
              {/* <span
                className={`text-3xl md:text-4xl font-semibold text-muted-foreground/30 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Industries
              </span> */}
            </div>
          </div>
          <Link
            href="/solutions"
            className={`group inline-flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span>All solutions</span>
            <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300">
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <Link
              key={solution.title}
              href={solution.link}
              className={`group block transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="relative p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-primary/10 hover:-translate-y-1 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 mb-6 relative">
                  <div className="absolute inset-0 bg-primary/8 rounded-xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <solution.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  {/* Accent dot */}
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-chart-1 rounded-sm" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {solution.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Find out more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
