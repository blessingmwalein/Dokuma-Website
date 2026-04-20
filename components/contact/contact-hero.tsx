"use client"

import PageBanner, { type BannerSlide } from "@/components/page-banner"

const slides: BannerSlide[] = [
  {
    id: 1,
    image: "/images/hero-bg.jpg",
    subtitle: "Get in Touch",
    title: "Let's Build the Future Together",
    description:
      "Ready to transform your organization? Our team is here to help you navigate your digital transformation journey.",
  },
  {
    id: 2,
    image: "/images/slide-egovernment.jpg",
    subtitle: "Partner With Us",
    title: "Two Countries, One Mission",
    description:
      "With offices in Harare and Kigali, we're positioned to serve governments and enterprises across the continent.",
  },
  {
    id: 3,
    image: "/images/slide-digitisation.jpg",
    subtitle: "Talk to an Expert",
    title: "Start Your Digital Journey",
    description:
      "Share your challenge — our solutions team will get back to you with a tailored proposal within 24 hours.",
  },
]

export function ContactHero() {
  return <PageBanner slides={slides} ctaLabel="SEND A MESSAGE" ctaHref="#contact-form" />
}
