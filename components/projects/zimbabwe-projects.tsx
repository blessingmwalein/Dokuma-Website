"use client"

import { useRef, useEffect, useState } from "react"
import ProjectCard from "./project-card"

const zimbabweProjects = [
  {
    title: "Digitisation of the Deeds Office in Zimbabwe",
    country: "Zimbabwe",
    client: "Deeds Registry - Ministry of Justice, Legal and Parliamentary Affairs",
    status: "In Progress",
    highlight: { value: "National", label: "Digital Land Platform" },
    summary:
      "Modernising Zimbabwe's land administration system by creating a comprehensive Digital Land Administration Platform (DLAP).",
    description: [
      "We are currently modernising Zimbabwe's land administration system at the Deeds Registry by creating a comprehensive Digital Land Administration Platform (DLAP). This platform enables online registration, validation, searching of Title Deeds and other related processes, thereby doing away with the paper-based system that was susceptible to vulnerabilities including loss, damage and fraudulent tampering.",
      "The DLAP system therefore seeks to improve security of tenure through scanning, verifying and storing land records in a secure electronic database, enabling faster retrieval, improved security and transparency in property transactions.",
    ],
    tags: [
      "Digital Land Administration",
      "OCR",
      "Secure Database",
      "Online Platform",
      "Property Rights",
    ],
    // link: "https://deeds.gov.zw",
  },
  {
    title: "Toruka Data Centre",
    country: "Zimbabwe",
    client: "Dokuma / Private Sector",
    status: "Active",
    highlight: { value: "500TB+", label: "Scalable to 10PB" },
    summary:
      "Private cloud infrastructure providing secure hosting environments for mission-critical government and enterprise systems.",
    description: [
      "Dokuma manages the Toruka Data Centre, a state-of-the-art private cloud infrastructure facility designed to support mission-critical digital systems for government and enterprise clients.",
      "The data centre currently manages private cloud environments exceeding 500TB, with scalability to 10PB, ensuring resilience and reliability for large-scale digital platforms.",
    ],
    tags: [
      "Data Centre",
      "Cloud Infrastructure",
      "Secure Hosting",
      "Disaster Recovery",
      "Scalability",
    ],
  },
  {
    title: "Starlink Billing Platform for AuraGRP",
    country: "Zimbabwe",
    client: "AuraGRP",
    status: "Active",
    highlight: { value: "10,000+", label: "Starlink Kits Live" },
    summary:
      "A full-service billing and customer management platform managing over 2,000 customers and 10,000+ Starlink kits in real time.",
    description: [
      "Dokuma developed a comprehensive billing platform for AuraGRP to manage their Starlink internet service operations. The platform supports over 2,000 customers with individual online accounts, enabling them to view usage, manage subscriptions, and make payments seamlessly.",
      "A key feature of the platform is real-time monitoring of over 10,000 Starlink kits, providing AuraGRP with live visibility into kit status, deployment locations, and connectivity performance.",
    ],
    tags: [
      "Billing Platform",
      "Customer Portal",
      "Online Payments",
      "Real-Time Monitoring",
      "Starlink",
    ],
  },
]

export default function ZimbabweProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="zimbabwe" className="py-24 md:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-14 flex items-center gap-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <span className="text-2xl font-semibold">ZW</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-1">
              Zimbabwe
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground tracking-tight">
              Projects in Zimbabwe
            </h2>
          </div>
        </div>

        {/* Vertical stack */}
        <div className="flex flex-col gap-8">
          {zimbabweProjects.map((project, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
