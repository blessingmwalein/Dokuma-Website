"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone, Clock, Globe, Shield, MapPin } from "lucide-react"

const contactMethods = [
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our headquarters",
    value: "78 Piers Road, Borrowdale, Harare, Zimbabwe",
    href: null,
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team typically responds within 24 hours",
    value: "hello@dokuma.co.zw",
    href: "mailto:hello@dokuma.co.zw",
  },
  // {
  //   icon: Phone,
  //   title: "Call Us",
  //   description: "Mon-Fri from 8am to 5pm CAT",
  //   value: "+263 773 320 160",
  //   href: "tel:+263773320160",
  // },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Central Africa Time (CAT)",
    value: "Mon - Fri: 8:00 AM - 5:00 PM",
    href: null,
  },
]

const features = [
  {
    icon: Globe,
    title: "Pan-African Reach",
    description: "Supporting clients across Zimbabwe and beyond",
  },
  {
    icon: Shield,
    title: "Secure Communications",
    description: "All communications are encrypted and confidential",
  },
]

export function ContactInfo() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-right")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="space-y-8 opacity-0">
      <div>
        <h2 className="mb-2 text-2xl font-bold text-foreground">Contact Information</h2>
        <p className="text-muted-foreground">
          Choose your preferred way to reach us. We&apos;re always happy to help.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {contactMethods.map((method, index) => (
          <div
            key={index}
            className="group rounded-xl border border-border bg-card p-5 transition-all hover-lift hover-glow"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <method.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-1 font-semibold text-foreground">{method.title}</h3>
            <p className="mb-2 text-sm text-muted-foreground">{method.description}</p>
            {method.href ? (
              <a
                href={method.href}
                className="text-sm font-medium text-primary hover:underline"
              >
                {method.value}
              </a>
            ) : (
              <p className="text-sm font-medium text-foreground">{method.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-4 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-6">
        <h3 className="font-semibold text-foreground">Why Contact Dokuma?</h3>
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-foreground">{feature.title}</p>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
