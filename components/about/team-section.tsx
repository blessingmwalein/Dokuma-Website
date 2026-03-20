"use client"

import { useRef, useEffect, useState } from "react"
import { Linkedin, Users } from "lucide-react"

const teamMembers = [
  {
    name: "CEO Name",
    role: "Chief Executive Officer",
    bio: "Visionary leader with extensive experience in digital transformation across African markets.",
    initials: "CEO",
  },
  {
    name: "CFO Name",
    role: "Chief Financial Officer",
    bio: "Expert in financial strategy and sustainable business growth for technology companies.",
    initials: "CFO",
  },
  {
    name: "CTO Name",
    role: "Chief Technology Officer",
    bio: "Technology innovator driving cutting-edge solutions for government digital systems.",
    initials: "CTO",
  },
  {
    name: "Commercial Manager",
    role: "Commercial Manager",
    bio: "Strategic partnerships and business development expert with deep public sector experience.",
    initials: "CM",
  },
]

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-24 md:py-32 px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            The People Behind Dokuma
          </p>
          <h2 className="text-3xl md:text-4xl font-light leading-tight text-foreground mb-5 tracking-tight">
            Our Leadership Team
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A diverse group of technologists, strategists, and innovators united
            by a shared passion for Africa&apos;s digital future.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className={`group p-8 border border-border/50 rounded-xl hover:border-primary/30 hover-lift hover-glow transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-muted mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-lg font-semibold text-muted-foreground/60">
                  {member.initials}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {member.bio}
              </p>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Team Photo Section */}
        <div
          className={`p-10 md:p-12 bg-muted/40 rounded-2xl border border-border/50 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="text-xl font-light text-foreground mb-4 tracking-tight">
            The Dokuma Team
          </h3>
          <div className="aspect-[16/9] max-w-4xl mx-auto bg-muted rounded-xl flex items-center justify-center mb-6 overflow-hidden border border-border/50">
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-muted-foreground/50 text-sm">
                Team Group Photo
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Our talented team of developers, designers, project managers, and
            support staff work together to deliver exceptional digital solutions
            across Africa.
          </p>
        </div>
      </div>
    </section>
  )
}
