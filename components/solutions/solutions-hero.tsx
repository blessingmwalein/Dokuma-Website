"use client"

import PageBanner, { type BannerSlide } from "@/components/page-banner"

const slides: BannerSlide[] = [
  {
    id: 1,
    image: "/images/hero-bg.png",
    subtitle: "Our Solutions",
    title: "Digital Solutions for Africa",
    description:
      "Comprehensive technology platforms designed for governments and enterprises across Africa — secure, scalable, and built for lasting impact.",
  },
  {
    id: 2,
    image: "/images/slide-digitisation.jpg",
    subtitle: "Document Digitisation",
    title: "Paper to Pixels at Scale",
    description:
      "AI-powered indexing, secure storage, and instant retrieval — converting physical archives into intelligent digital assets.",
  },
  {
    id: 3,
    image: "/images/slide-cloud.jpg",
    subtitle: "Cloud Infrastructure",
    title: "Enterprise-Grade, Built for Africa",
    description:
      "Sovereign cloud solutions with military-grade encryption, keeping your data protected, compliant, and always available.",
  },
  {
    id: 4,
    image: "/images/slide-egovernment.jpg",
    subtitle: "E-Government",
    title: "Citizen-Centric Digital Services",
    description:
      "Streamlined public platforms that cut processing times, reduce costs, and rebuild trust between citizens and the state.",
  },
]

export default function SolutionsHero() {
  return <PageBanner slides={slides} ctaLabel="EXPLORE SOLUTIONS" ctaHref="#solutions-overview" />
}
