"use client"

import { useEffect, useState } from "react"
import { Play, Clock, Film } from "lucide-react"

const successStories = [
  {
    title: "From Paper to Digital: A Family's Journey to Secure Land Ownership",
    type: "Documentary",
    duration: "8:45",
    description:
      "Follow the Moyo family as they receive their digitized title deed after decades of uncertainty.",
    featured: true,
  },
  {
    title: "Transforming Harare: Business Owners Share Their Experience",
    type: "Video Interview",
    duration: "5:20",
    description:
      "Local entrepreneurs discuss how the new digital licensing system has streamlined their operations.",
    featured: false,
  },
  {
    title: "Deeds Registry Officials on Digital Transformation",
    type: "Interview",
    duration: "12:30",
    description:
      "Senior officials from the Deeds Registry explain the impact of digitization on service delivery.",
    featured: false,
  },
  {
    title: "A New Chapter: Title Deed Recipients Tell Their Stories",
    type: "Documentary",
    duration: "15:00",
    description:
      "Heartfelt testimonials from citizens who have received their first ever official property documents.",
    featured: false,
  },
  {
    title: "Behind the Scenes: Digitizing 60 Million Pages",
    type: "Documentary",
    duration: "10:15",
    description:
      "An inside look at the massive operation to digitize the Gacaca Archive in Rwanda.",
    featured: false,
  },
]

const typeColors: Record<string, string> = {
  Documentary: "bg-primary/8 text-primary",
  "Video Interview": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Interview: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Case Study": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
}

function VideoThumbnail({
  duration,
  featured = false,
}: {
  duration: string
  featured?: boolean
}) {
  return (
    <div
      className={`relative bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center overflow-hidden group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 ${
        featured ? "aspect-[16/7]" : "aspect-video"
      }`}
    >
      {/* Grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 200 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="vGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="200" height="100" fill="url(#vGrid)" />
      </svg>

      {/* Play button */}
      <div className="relative z-10 w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
        <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
      </div>

      {/* Duration badge */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 text-white text-xs font-medium rounded backdrop-blur-sm">
        <Clock className="w-3 h-3" />
        {duration}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featured = successStories.find((s) => s.featured)
  const rest = successStories.filter((s) => !s.featured)

  return (
    <div className="space-y-6">
      {/* Featured story */}
      {featured && (
        <div
          className={`group border border-border/60 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md bg-card transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <VideoThumbnail duration={featured.duration} featured />
          <div className="p-7 md:p-8 flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide rounded-lg ${typeColors[featured.type] || "bg-muted text-muted-foreground"}`}>
                  <Film className="w-3 h-3" />
                  {featured.type}
                </span>
                <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-lg uppercase tracking-wide">
                  Featured
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {featured.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Grid of stories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((story, i) => (
          <div
            key={i}
            className={`group border border-border/60 rounded-xl overflow-hidden hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-md bg-card transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${(i + 1) * 70}ms` }}
          >
            <VideoThumbnail duration={story.duration} />
            <div className="p-5">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md mb-3 ${typeColors[story.type] || "bg-muted text-muted-foreground"}`}>
                {story.type}
              </span>
              <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {story.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {story.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
