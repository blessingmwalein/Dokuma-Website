"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
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
    title: "eGovernment Platforms",
    icon: Landmark,
    tagline: "Modernize Public Service Delivery",
    desc: "Dokuma designs integrated e-government systems that modernize public service delivery, bringing citizen-facing services online and automating government workflows end-to-end.",
    features: [
      "Citizen service portals",
      "Online licensing and registrations",
      "Digital records management",
      "Government workflow automation",
      "Inter-agency systems integration",
      "Multi-channel service delivery",
    ],
    impact:
      "These systems improve transparency, efficiency, and citizen engagement across public service delivery.",
  },
  {
    title: "Identity & Membership Systems",
    icon: Fingerprint,
    tagline: "Secure Digital Identity",
    desc: "Dokuma develops secure identity platforms used for citizen identity, membership, and access control. Our systems leverage biometric verification and cryptographic authentication to ensure security and privacy.",
    features: [
      "Digital citizen identity management",
      "Membership and association systems",
      "Employee identity management",
      "Physical and logical access control",
      "Biometric verification (fingerprint, facial)",
      "Cryptographic authentication",
    ],
    impact:
      "Robust identity systems unlock trusted digital services while protecting individuals from fraud and identity theft.",
  },
  {
    title: "Licensing, Registration & Permit Systems",
    icon: ScrollText,
    tagline: "Streamline Regulatory Processes",
    desc: "Dokuma provides digital platforms that streamline regulatory processes such as business licensing, permit issuance, and professional registrations — replacing paper-based workflows with efficient online services.",
    features: [
      "Business licensing portals",
      "Permit issuance and renewals",
      "Professional registrations",
      "Regulatory approval workflows",
      "Integrated payment and fee collection",
      "Compliance tracking and reporting",
    ],
    impact:
      "These systems reduce bureaucracy and improve efficiency for both governments and citizens.",
  },
  {
    title: "e-Procurement Systems",
    icon: ShoppingCart,
    tagline: "Transparent Digital Procurement",
    desc: "Dokuma delivers secure digital procurement platforms that automate the procurement lifecycle from tender publishing through to contract management — enhancing transparency and reducing corruption risks.",
    features: [
      "Online tender publishing",
      "Supplier registration and onboarding",
      "Digital bid submission and evaluation",
      "Contract management",
      "Procurement payment processing",
      "Audit trails and reporting",
    ],
    impact:
      "These systems enhance transparency and reduce corruption risks in public and enterprise procurement.",
  },
  {
    title: "ICT Infrastructure & Hardware",
    icon: Server,
    tagline: "Enterprise-Grade ICT Solutions",
    desc: "Dokuma provides complete ICT infrastructure solutions — from enterprise servers and storage to networking and end-user devices — with engineers ensuring every system is optimized for performance and reliability.",
    features: [
      "Enterprise servers and storage systems",
      "Networking infrastructure",
      "End-user devices and peripherals",
      "ICT systems integration",
      "Installation and commissioning",
      "Maintenance and support",
    ],
    impact:
      "Our engineers ensure all systems are optimized for performance and reliability across the organization.",
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
  {
    title: "Digital Transformation Consultancy",
    icon: Lightbulb,
    tagline: "Strategy & Implementation Expertise",
    desc: "Digital transformation requires more than technology — it requires strategy and implementation expertise. Dokuma supports organizations through every stage of their digital journey.",
    features: [
      "Digital strategy development",
      "Technology architecture design",
      "Systems integration",
      "Change management and capacity building",
      "Process re-engineering",
      "Programme and project delivery",
    ],
    impact:
      "This ensures sustainable and successful digital transformation initiatives for governments and enterprises.",
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
