"use client"

import { useState } from "react"
import {
  MapPin,
  ExternalLink,
  ChevronDown,
  Building2,
  Layers,
  Activity,
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

const statusColors: Record<string, string> = {
  Active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/15 dark:text-emerald-400",
  "In Progress": "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:bg-amber-500/15 dark:text-amber-400",
  "In Development": "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:bg-blue-500/15 dark:text-blue-400",
  Delivered: "bg-primary/10 text-primary border-primary/20",
  Live: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/15 dark:text-emerald-400",
}

export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group relative border border-border/60 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 bg-card flex flex-col shadow-sm hover-lift">
      <div className="p-7 md:p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium tracking-wide rounded-lg border ${
              statusColors[project.status] ||
              "bg-muted text-muted-foreground border-border"
            }`}
          >
            <Activity className="w-3 h-3" />
            {project.status}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-medium">{project.country}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Client */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{project.client}</span>
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Highlight stat */}
        <div className="flex items-center gap-4 p-4 bg-muted/40 rounded-xl mb-5 border border-border/50">
          <div className="w-10 h-10 rounded-lg bg-primary/[0.08] flex items-center justify-center flex-shrink-0">
            <Layers className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-base font-semibold text-foreground leading-tight">
              {project.highlight.value}
            </div>
            <div className="text-xs text-muted-foreground">
              {project.highlight.label}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground border border-border/60 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-medium tracking-wider text-muted-foreground">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        <div className="flex-1" />

        {/* Expandable details */}
        <div className="border-t border-border/50 pt-4 mt-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors w-full text-left"
          >
            <span>{expanded ? "Hide details" : "Read full case study"}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ${
              expanded ? "grid-rows-[1fr] mt-5" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-4 pl-4 border-l border-primary/30">
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

        {/* External link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors mt-4 pt-4 border-t border-border/50"
          >
            Visit live project <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  )
}
