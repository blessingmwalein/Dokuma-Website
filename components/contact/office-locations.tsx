"use client"

import { useEffect, useRef } from "react"
import { MapPin, Building2 } from "lucide-react"

const offices: Array<{
  country: string
  city: string
  address: string
  building: string
  postal: string
  description: string
  isPrimary: boolean
}> = [
  {
    country: "Zimbabwe",
    city: "Harare",
    address: "78 Piers Road",
    building: "Borrowdale",
    postal: "Harare, Zimbabwe",
    description:
      "Our head office and engineering hub — home to the teams delivering digital transformation projects across the continent.",
    isPrimary: true,
  },
]

export function OfficeLocations() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="border-t border-border bg-muted/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <p className="animate-on-scroll mb-3 text-sm font-semibold uppercase tracking-wider text-primary opacity-0">
            Our Offices
          </p>
          <h2 className="animate-on-scroll mb-4 text-3xl font-bold tracking-tight text-foreground opacity-0 sm:text-4xl [animation-delay:100ms]">
            Visit Us
          </h2>
          <p className="animate-on-scroll text-lg text-muted-foreground opacity-0 [animation-delay:200ms]">
            Headquartered in Harare, we&apos;re strategically positioned to serve
            clients across the African continent.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl gap-6 lg:gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`animate-on-scroll group relative overflow-hidden rounded-2xl border opacity-0 transition-all hover-lift ${
                office.isPrimary 
                  ? "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent" 
                  : "border-border bg-card"
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {office.isPrimary && (
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Headquarters
                </div>
              )}
              
              <div className="p-6 lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{office.city}</h3>
                    <p className="text-sm text-muted-foreground">{office.country}</p>
                  </div>
                </div>
                
                <p className="mb-4 text-muted-foreground">{office.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-foreground">{office.address}</p>
                      <p className="text-muted-foreground">{office.building}</p>
                      <p className="text-muted-foreground">{office.postal}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
