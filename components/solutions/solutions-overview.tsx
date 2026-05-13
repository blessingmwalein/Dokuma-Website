"use client"

import { useRef, useEffect, useState } from "react"
import {
  FileCheck,
  Database,
  Cloud,
  CreditCard,
  Lock,
  Landmark,
  Fingerprint,
  ScrollText,
  ShoppingCart,
  Server,
  Lightbulb,
} from "lucide-react"

const solutions = [
  {
    title: "Digital Land Administration Systems",
    icon: FileCheck,
    tagline: "Secure Land Ownership & Property Rights",
    desc: "Dokuma develops secure systems for securitised title deeds and digital land administration platforms that digitize land ownership records.",
  },
  {
    title: "Large Scale Document Digitisation",
    icon: Database,
    tagline: "Transform Physical Archives to Digital",
    desc: "Converting physical archives into secure digital repositories with experience digitizing over 60 million pages.",
  },
  {
    title: "Data Centre & Cloud Infrastructure",
    icon: Cloud,
    tagline: "Reliable & Scalable Infrastructure",
    desc: "Modern digital systems require reliable infrastructure. We provide data centre and cloud solutions for mission-critical systems.",
  },
  {
    title: "Digital Payment Platforms",
    icon: CreditCard,
    tagline: "Seamless Financial Transactions",
    desc: "Secure payment platforms enabling efficient financial transactions across digital services for governments and enterprises.",
  },
  {
    title: "eGovernment Platforms",
    icon: Landmark,
    tagline: "Modernize Public Service Delivery",
    desc: "Integrated e-government systems with citizen portals, online licensing, and digital records management to improve transparency and engagement.",
  },
  {
    title: "Identity & Membership Systems",
    icon: Fingerprint,
    tagline: "Secure Digital Identity",
    desc: "Secure identity platforms for citizen identity management, membership systems, and access control with biometric verification.",
  },
  {
    title: "Licensing, Registration & Permit Systems",
    icon: ScrollText,
    tagline: "Streamline Regulatory Processes",
    desc: "Digital platforms that streamline business licensing, permit issuance, professional registrations, and regulatory approvals.",
  },
  {
    title: "e-Procurement Systems",
    icon: ShoppingCart,
    tagline: "Transparent Digital Procurement",
    desc: "Secure digital procurement platforms automating tender publishing, supplier registration, bid submission, and contract management.",
  },
  {
    title: "ICT Infrastructure & Hardware",
    icon: Server,
    tagline: "Enterprise-Grade ICT Solutions",
    desc: "Complete ICT infrastructure including enterprise servers, storage, networking, end-user devices, and system integration.",
  },
  {
    title: "Cybersecurity Services",
    icon: Lock,
    tagline: "Protect Critical Digital Assets",
    desc: "Comprehensive cybersecurity solutions protecting digital systems and sensitive information in complex threat environments.",
  },
  {
    title: "Digital Transformation Consultancy",
    icon: Lightbulb,
    tagline: "Strategy & Implementation Expertise",
    desc: "Strategic guidance on digital strategy, technology architecture, systems integration, and change management for sustainable transformation.",
  },
]

export default function SolutionsOverview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 lg:px-8 border-t border-border/50 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground tracking-tight">
            Comprehensive Solutions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <a
              key={i}
              href={`#solution-${i}`}
              className={`group p-8 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover-glow hover-lift transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-5 text-primary">
                <solution.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-xs text-primary/70 font-semibold mb-3">
                {solution.tagline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {solution.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
