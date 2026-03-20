"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Calendar } from "lucide-react"

const mediaFeatures = [
  {
    title: "Zimbabwe's Digital Land Revolution",
    outlet: "The Herald",
    date: "2024-03-10",
    link: "#",
    excerpt:
      "How Dokuma is transforming property rights and land administration in Zimbabwe through innovative digital solutions.",
  },
  {
    title: "Tech Innovation Driving Government Efficiency",
    outlet: "TechZim",
    date: "2024-02-15",
    link: "#",
    excerpt:
      "Profile of Dokuma's role in modernizing public sector services across Africa with enterprise-grade digital platforms.",
  },
  {
    title: "Securing Land Rights Through Technology",
    outlet: "African Business Magazine",
    date: "2024-01-20",
    link: "#",
    excerpt:
      "Feature on digital land administration systems and their economic impact on communities across the continent.",
  },
  {
    title: "Rwanda's Digital Archive Preservation Efforts",
    outlet: "Rwanda Today",
    date: "2023-12-08",
    link: "#",
    excerpt:
      "Coverage of the Gacaca Archive Project and its significance in preserving Rwanda's judicial history.",
  },
  {
    title: "The Future of E-Government in Africa",
    outlet: "IT News Africa",
    date: "2023-11-15",
    link: "#",
    excerpt:
      "Analysis of how companies like Dokuma are leading the charge in digital transformation across the continent.",
  },
]

function getOutletInitials(outlet: string) {
  return outlet
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function MediaFeatures() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="space-y-4">
      {mediaFeatures.map((feature, i) => (
        <a
          key={i}
          href={feature.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-start gap-5 p-6 border border-border/60 rounded-xl hover:border-primary/30 hover:shadow-sm hover:-translate-y-0.5 bg-card transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          {/* Outlet avatar */}
          <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 border border-primary/10 group-hover:bg-primary/12 transition-colors">
            <span className="text-xs font-bold text-primary">
              {getOutletInitials(feature.outlet)}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <span className="text-sm font-semibold text-primary">
                {feature.outlet}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {new Date(feature.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {feature.excerpt}
            </p>
          </div>

          {/* External link icon */}
          <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all duration-200">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>
      ))}
    </div>
  )
}
