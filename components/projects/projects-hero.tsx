"use client"

import PageBanner, { type BannerSlide } from "@/components/page-banner"

const slides: BannerSlide[] = [
  {
    id: 1,
    image: "/images/hero-bg.png",
    subtitle: "Our Projects",
    title: "Driving Real Change Across Africa",
    description:
      "From digitising national archives to modernising municipal services — measurable impact for governments and citizens.",
  },
  {
    id: 2,
    image: "/images/slide-digitisation.jpg",
    subtitle: "Zimbabwe",
    title: "Digital Land Records at Scale",
    description:
      "Over 500,000 parcels digitised across multiple provinces, bringing transparency and efficiency to land administration.",
  },
  {
    id: 3,
    image: "/images/slide-cloud.jpg",
    subtitle: "Rwanda",
    title: "Archive Digitisation Delivered",
    description:
      "Millions of documents preserved, indexed, and made searchable for institutions shaping Rwanda's digital future.",
  },
]

export default function ProjectsHero() {
  return <PageBanner slides={slides} ctaLabel="VIEW CASE STUDIES" ctaHref="#projects-stats" />
}
