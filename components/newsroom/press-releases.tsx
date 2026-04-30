"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Calendar, Tag } from "lucide-react"

const pressReleases = [
  {
    title: "Dokuma Completes Phase 1 of Deeds Office Digitization",
    date: "2024-03-15",
    excerpt:
      "Major milestone achieved in transforming Zimbabwe's land administration system with over 1 million documents digitized.",
    category: "Project Update",
    featured: true,
  },
  {
    title: "Partnership Announcement: City of Harare Business Licensing Platform",
    date: "2024-02-20",
    excerpt:
      "Dokuma partners with City of Harare to modernize business licensing and enforcement systems.",
    category: "Partnership",
    featured: false,
  },
  {
    title: "Dokuma Expands Operations Across Southern Africa",
    date: "2024-01-10",
    excerpt:
      "Company announces strategic expansion plans to bring digital transformation solutions to more African nations.",
    category: "Company News",
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  "Project Update": "bg-primary/8 text-primary",
  "Partnership": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "Company News": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function PressReleases() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featured = pressReleases.find((r) => r.featured)
  const rest = pressReleases.filter((r) => !r.featured)

  return (
    <div className="space-y-6">
      {/* Featured release */}
      {featured && (
        <div
          className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-700 hover:border-primary/30 hover:shadow-md ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Orange accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-orange-400" />
          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide rounded-lg ${categoryColors[featured.category] || "bg-muted text-muted-foreground"}`}>
                <Tag className="w-3 h-3" />
                {featured.category}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-orange-400/10 text-orange-600 dark:text-orange-400 rounded-lg">
                Featured
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground ml-auto">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(featured.date)}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
              {featured.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl text-base">
              {featured.excerpt}
            </p>
            <button className="group/btn inline-flex items-center gap-2.5 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-300">
              Read full release
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white/30 transition-colors">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Rest of releases */}
      <div className="grid md:grid-cols-2 gap-5">
        {rest.map((release, i) => (
          <div
            key={i}
            className={`group p-7 border border-border/60 rounded-xl hover:border-primary/25 hover:shadow-sm hover:-translate-y-0.5 bg-card transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${(i + 1) * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide rounded-lg ${categoryColors[release.category] || "bg-muted text-muted-foreground"}`}>
                {release.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                <Calendar className="w-3 h-3" />
                {formatDate(release.date)}
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
              {release.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {release.excerpt}
            </p>
            <button className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-75 transition-opacity">
              Read release
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
