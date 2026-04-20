"use client"

import { useRef, useEffect, useState } from "react"
import ProjectCard from "./project-card"

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
    <section
      ref={sectionRef}
      id="rwanda"
      className="py-24 md:py-32 px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-14 flex items-center gap-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <span className="text-2xl font-semibold">RW</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-1">
              Rwanda
            </p>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground tracking-tight">
              Projects in Rwanda
            </h2>
          </div>
        </div>

        {/* Vertical stack */}
        <div className="flex flex-col gap-8">
          {rwandaProjects.map((project, i) => (
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
