"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import ProjectCard from "./project-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const rwandaProjects = [
  {
    title: "MIS Platform & Website for Rwanda Cooperation Initiative",
    country: "Rwanda",
    client: "Ministry of Finance - Rwanda Cooperation Initiative (RCI)",
    status: "Delivered",
    highlight: { value: "MIS", label: "Platform & e-Learning" },
    summary:
      "Conception, design, development, and implementation of an MIS platform and website for RCI, linked with an e-Learning platform.",
    description: [
      "Dokuma developed an MIS platform and Website for Rwanda Cooperation Initiative (RCI). Dokuma through Aegis Consult was awarded the contract for conception, design, development, and implementation of a platform-enabled website for RCI with its underlying backend for data capture, storing, analysis, and reporting linked with the e-Learning platform.",
      "The platform showcases home-grown solutions and provides an interface for integration with new functionalities. The platform is designed to be simple and accessible to all entities that want to learn more about Rwanda's home-grown solutions.",
    ],
    tags: ["MIS Platform", "Web Development", "e-Learning", "Data Analytics"],
  },
  {
    title: "Gacaca Archive Project",
    country: "Rwanda",
    client: "Government of Rwanda",
    status: "In Progress",
    highlight: { value: "60M+", label: "Pages Digitized" },
    summary:
      "Digitization of over 60 million hand-written pages of Gacaca court records for preservation and digital accessibility.",
    description: [
      "Digitization of Gacaca Archive records on behalf of Rwanda's Government - a set of over 60 million hand-written pages of documents to preserve physically and digitally.",
      "Dokuma through Aegis Consult has customized a digitization workflow web application that helped in the digitization of archives. Dokuma is now working on indexing the digitized documents to be retrieved and accessible by different stakeholders in the judiciary, education, and other interested parties via a web interface.",
    ],
    tags: [
      "Archive Digitization",
      "Document Indexing",
      "Web Application",
      "Judicial Records",
    ],
  },
  {
    title: "Genocide Archive Rwanda",
    country: "Rwanda",
    client: "Government of Rwanda",
    status: "Live",
    highlight: { value: "8,000+", label: "Items Online" },
    summary:
      "The first archive of its kind globally, with approximately 8,000 items accessible online including photographs, audio, video, and interactive maps.",
    description: [
      "It is the first of its kind in Rwanda and globally, with significant collections - approximately 8,000 items accessible online: photographs, objects, audio recordings, video recordings, documents, publications, and interactive maps.",
      "Mapping of genocide landmarks and reconciliation initiatives: mapping and documentation of genocide landmarks (memorials, sites of killings, road-blocks, etc.) and reconciliation sites across Rwanda. Dokuma executed this project in collaboration with Esri Rwanda.",
    ],
    tags: ["Digital Archive", "GIS Mapping", "Multimedia", "Cultural Preservation"],
    link: "https://www.genocidearchiverwanda.org.rw",
  },
]

export default function RwandaProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const total = rwandaProjects.length

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
    <section ref={sectionRef} id="rwanda" className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <span className="text-2xl">RW</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-1">
                Rwanda
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground tracking-tight">
                Rwanda Case Studies
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
          {rwandaProjects.map((project, i) => (
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
          {rwandaProjects.map((_, i) => (
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
