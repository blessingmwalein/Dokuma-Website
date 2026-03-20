"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import {
  FileCheck,
  Database,
  Cloud,
  CreditCard,
  Shield,
  Lock,
  ArrowRight,
  Check,
} from "lucide-react"

const solutions = [
  {
    title: "Digital Land Administration Systems",
    icon: FileCheck,
    tagline: "Secure Land Ownership & Property Rights",
    desc: "Dokuma develops secure systems for securitised title deeds and digital land administration. These platforms digitize and secure land ownership records, ensuring tamper-proof records, transparent ownership verification, and reduced land fraud.",
    features: [
      "Tamper-proof land records with advanced encryption",
      "Transparent ownership verification systems",
      "Reduced land fraud and disputes",
      "Faster property transfers and transactions",
      "Centralized national land databases",
      "Online title deed registration and validation",
    ],
    impact:
      "Such systems empower governments to unlock the economic value of land assets while giving citizens confidence in secure property ownership.",
  },
  {
    title: "Large Scale Document Digitisation",
    icon: Database,
    tagline: "Transform Physical Archives to Digital",
    desc: "Dokuma specializes in converting physical archives into secure digital repositories. With experience digitizing over 60 million pages, we provide one of the most scalable document digitization services in the region.",
    features: [
      "High-volume document scanning infrastructure",
      "Digital indexing and classification systems",
      "Intelligent document search capabilities",
      "Secure digital storage with redundancy",
      "OCR and metadata extraction",
      "Quality assurance and verification workflows",
    ],
    impact:
      "Our digitization services preserve critical records, improve accessibility, and enable efficient information retrieval for governments and institutions.",
  },
  {
    title: "Data Centre & Cloud Infrastructure",
    icon: Cloud,
    tagline: "Reliable & Scalable Infrastructure",
    desc: "Modern digital systems require reliable and scalable infrastructure. Dokuma provides comprehensive data centre and cloud solutions to support mission-critical government and enterprise systems.",
    features: [
      "Data centre design and deployment",
      "Private cloud infrastructure management",
      "Hybrid and public cloud integration",
      "Secure hosting environments with 99.9% uptime",
      "Disaster recovery and backup solutions",
      "Scalable storage from 500TB to 10PB+",
    ],
    impact:
      "The company manages private cloud environments exceeding 500TB, scalable to 10PB, ensuring resilience for mission-critical systems.",
  },
  {
    title: "Digital Payment Platforms",
    icon: CreditCard,
    tagline: "Seamless Financial Transactions",
    desc: "Dokuma builds secure payment platforms that enable efficient financial transactions across digital services. These systems improve revenue collection and enable seamless digital transactions for governments and enterprises.",
    features: [
      "Mobile money integration",
      "Credit and debit card processing",
      "Bank transfer capabilities",
      "Real-time payment reconciliation",
      "Multi-currency support",
      "Automated invoicing and billing",
    ],
    impact:
      "These systems enable governments and enterprises to improve revenue collection and enable seamless digital transactions.",
  },
  {
    title: "Licensing, Registration & Permit Systems",
    icon: Shield,
    tagline: "Streamline Regulatory Processes",
    desc: "Dokuma provides digital platforms that streamline regulatory processes, reducing bureaucracy and improving efficiency for both governments and citizens.",
    features: [
      "Business licensing and renewals",
      "Permit issuance and tracking",
      "Professional registrations",
      "Regulatory approvals workflow",
      "Digital enforcement systems",
      "Compliance monitoring and reporting",
    ],
    impact:
      "These systems reduce bureaucracy and improve efficiency for both governments and citizens, enabling faster service delivery.",
  },
  {
    title: "Cybersecurity Services",
    icon: Lock,
    tagline: "Protect Critical Digital Assets",
    desc: "Dokuma protects digital systems and sensitive information through comprehensive cybersecurity solutions, ensuring organizations remain protected in an increasingly complex cyber threat environment.",
    features: [
      "Security risk assessments and audits",
      "Penetration testing and vulnerability scanning",
      "Threat monitoring and incident response",
      "Security architecture implementation",
      "Data encryption and access control",
      "Compliance with international standards",
    ],
    impact:
      "This ensures organizations remain protected in an increasingly complex cyber threat environment.",
  },
]

export default function SolutionDetails() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          )
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {solutions.map((solution, i) => (
        <section
          key={i}
          id={`solution-${i}`}
          ref={(el) => {
            sectionRefs.current[i] = el
          }}
          data-index={i}
          className={`py-24 md:py-32 px-6 lg:px-8 ${
            i % 2 === 0 ? "" : "bg-muted/30"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                i % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`${
                  i % 2 !== 0 ? "lg:col-start-2" : ""
                } transition-all duration-700 ${
                  visibleSections.has(i)
                    ? "opacity-100 translate-x-0"
                    : i % 2 === 0
                    ? "opacity-0 -translate-x-8"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/[0.08] flex items-center justify-center mb-6 text-primary">
                  <solution.icon className="w-6 h-6" />
                </div>
                <p className="text-xs text-primary font-semibold uppercase tracking-[0.25em] mb-4">
                  {solution.tagline}
                </p>
                <h2 className="text-2xl md:text-3xl font-light leading-tight text-foreground mb-6 tracking-tight">
                  {solution.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {solution.desc}
                </p>
                <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl mb-8">
                  <p className="text-sm text-foreground leading-relaxed italic">
                    {solution.impact}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  Discuss this solution
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Features */}
              <div
                className={`${
                  i % 2 !== 0 ? "lg:col-start-1" : ""
                } transition-all duration-700 delay-200 ${
                  visibleSections.has(i)
                    ? "opacity-100 translate-x-0"
                    : i % 2 === 0
                    ? "opacity-0 translate-x-8"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="p-8 md:p-10 bg-muted/50 rounded-2xl border border-border/50">
                  <h4 className="text-xs font-semibold text-foreground mb-6 uppercase tracking-[0.2em]">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-4">
                    {solution.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
