"use client"

import PageBanner, { type BannerSlide } from "@/components/page-banner"

const slides: BannerSlide[] = [
  {
    id: 1,
    image: "/images/hero-bg.png",
    subtitle: "About Dokuma",
    title: "Building Tomorrow's Africa",
    description:
      "Since 2019, we've been on a mission to transform Africa's public institutions through innovative digital solutions.",
  },
  {
    id: 2,
    image: "/images/slide-egovernment.jpg",
    subtitle: "Our Story",
    title: "A Vision for Digital Africa",
    description:
      "From Harare, we partner with governments and enterprises to build secure, scalable systems that serve millions.",
  },
  {
    id: 3,
    image: "/images/slide-cloud.jpg",
    subtitle: "Our People",
    title: "A Team That Delivers",
    description:
      "Engineers, strategists, and domain experts united by a commitment to measurable impact across the continent.",
  },
]

export default function AboutHero() {
  return <PageBanner slides={slides} />
}
