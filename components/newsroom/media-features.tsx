"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Calendar } from "lucide-react"

const mediaFeatures = [
  {
    title: "IT firm wins deeds tender",
    outlet: "The Herald",
    date: "2024-08-15",
    link: "https://www.heraldonline.co.zw/it-firm-wins-deeds-tender/",
    excerpt:
      "Dokuma awarded the government tender to digitise Zimbabwe's property deeds, marking a major step in the country's land administration modernisation.",
  },
  {
    title: "CTC evaluates CBZ Holdings' proposed tech firm acquisition",
    outlet: "The Herald",
    date: "2024-09-20",
    link: "https://www.heraldonline.co.zw/ctc-evaluates-cbz-holdings-proposed-tech-firm-acquisition/",
    excerpt:
      "The Competition and Tariff Commission reviews CBZ Holdings' proposed acquisition of a stake in the technology firm behind Zimbabwe's deeds digitisation programme.",
  },
  {
    title: "CBZ buys into tech firm awarded govt contract to digitise Zimbabwe's property deeds",
    outlet: "NewZwire",
    date: "2024-09-25",
    link: "https://newzwire.live/cbz-buys-into-tech-firm-awarded-govt-contract-to-digitise-zimbabwes-property-deeds/",
    excerpt:
      "CBZ Holdings strengthens its position in the digital economy by investing in the technology firm leading the country's title deeds digitisation rollout.",
  },
  {
    title: "Digital title deeds: Managing risk, building confidence",
    outlet: "The Herald",
    date: "2024-10-10",
    link: "https://www.heraldonline.co.zw/digital-title-deeds-managing-risk-building-confidence/",
    excerpt:
      "An in-depth look at how digital title deeds reduce fraud, improve transparency, and rebuild public confidence in property ownership records.",
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
