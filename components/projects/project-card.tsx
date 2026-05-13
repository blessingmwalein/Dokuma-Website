"use client"

import { useState } from "react"
import {
  MapPin,
  ExternalLink,
  ChevronDown,
  Building2,
  ArrowUpRight,
} from "lucide-react"

interface Project {
  title: string
  country: string
  client: string
  status: string
  highlight: { value: string; label: string }
  summary: string
  description: string[]
  tags: string[]
  link?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
      {/* Accent gradient bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-chart-1 opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* Decorative corner orb */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

      <div className="relative p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-start">
        {/* Left side: content */}
        <div className="min-w-0">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5" />
              <span className="font-medium">{project.country}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground min-w-0">
              <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{project.client}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight tracking-tight group-hover:text-primary transition-colors text-balance">
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[11px] font-medium tracking-wide text-primary bg-primary/[0.06] border border-primary/15 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expandable details */}
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              <span>{expanded ? "Hide details" : "Read full case study"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ${
                expanded ? "grid-rows-[1fr] mt-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 pl-5 border-l-2 border-primary/30">
                  {project.description.map((para, i) => (
                    <p
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all mt-6"
            >
              Visit live project
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Right side: highlight stat */}
        <div className="md:w-56 lg:w-64 relative">
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary to-primary/85 text-primary-foreground shadow-lg shadow-primary/20 overflow-hidden">
            {/* Pattern accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
            <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-white/5" />

            <div className="relative">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-chart-1" />
                Key Impact
              </div>
              <div className="text-4xl md:text-5xl font-bold leading-none mb-2 tracking-tight">
                {project.highlight.value}
              </div>
              <p className="text-sm text-primary-foreground/80 leading-snug">
                {project.highlight.label}
              </p>

              <div className="mt-6 pt-4 border-t border-primary-foreground/15 flex items-center gap-2 text-xs text-primary-foreground/70">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>Delivered impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
