"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import ProjectCard from "./project-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    link: "https://deeds.gov.zw",
  },
  {
    title: "Business Licensing for the City of Harare",
    country: "Zimbabwe",
    client: "City of Harare",
    status: "Active",
    highlight: { value: "City-Wide", label: "Licensing System" },
    summary:
      "Modernizing the business licensing process to aid economic growth through a digital licensing and enforcement platform.",
    description: [
      "This partnership between Dokuma and the City of Harare allows for streamlining of the business licensing process, in turn aiding the growth of businesses and the economy in the region. The company has been contracted to provide business licensing services for the City of Harare, as well as enforce the licensing requirements.",
      "Dokuma's technology-driven approach and expertise in digital record-keeping and license processing aids the City of Harare in improving the efficiency and effectiveness of its business licensing processes.",
    ],
    tags: [
      "Business Licensing",
      "Digital Enforcement",
      "Municipal Services",
      "Economic Growth",
    ],
  },
  {
    title: "Fleet Management System for Agricultural Tractors",
    country: "Zimbabwe",
    client: "Government of Zimbabwe",
    status: "Delivered",
    highlight: { value: "3,000+", label: "Tractors Managed" },
    summary:
      "A fleet management system tracking and managing over 3,000 tractors owned by farmers, including allocation to remote areas and farms.",
    description: [
      "Dokuma implemented a comprehensive fleet management system for the Government of Zimbabwe to manage over 3,000 tractors owned by farmers across the country. The system provides real-time tracking, allocation management, and operational oversight of the entire agricultural fleet.",
      "By digitizing the fleet management process, the system has improved transparency in tractor distribution, reduced downtime through proactive maintenance alerts, and provided government stakeholders with actionable insights.",
    ],
    tags: [
      "Fleet Management",
      "GPS Tracking",
      "Agriculture",
      "Remote Allocation",
      "Real-Time Monitoring",
    ],
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const total = zimbabweProjects.length

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleScroll = useCallback(() => {
    const slider = sliderRef.current
    if (!slider) return
    const index = Math.round(slider.scrollLeft / slider.clientWidth)
    setCurrentIndex(index)
  }, [])

  const goTo = useCallback((index: number) => {
    const slider = sliderRef.current
    if (!slider) return
    slider.scrollTo({ left: index * slider.clientWidth, behavior: "smooth" })
    setCurrentIndex(index)
  }, [])

  return (
    <section ref={sectionRef} id="zimbabwe" className="py-24 md:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <span className="text-2xl">ZW</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-1">
                Zimbabwe
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground tracking-tight">
                Zimbabwe Case Studies
              </h2>
            </div>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground tabular-nums">
              {currentIndex + 1} <span className="text-muted-foreground/40">/</span> {total}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => goTo(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => goTo(Math.min(total - 1, currentIndex + 1))}
                disabled={currentIndex === total - 1}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider track */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {zimbabweProjects.map((project, i) => (
            <div
              key={i}
              className="snap-start flex-shrink-0 w-full"
              style={{ minWidth: "100%" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {zimbabweProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
