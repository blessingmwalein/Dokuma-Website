"use client"

import PageBanner, { type BannerSlide } from "@/components/page-banner"

const slides: BannerSlide[] = [
  {
    id: 1,
    image: "/images/hero-bg.png",
    subtitle: "Newsroom",
    title: "Latest News & Stories",
    description:
      "Stay updated with our latest announcements, success stories, and media coverage from across Africa.",
  },
  {
    id: 2,
    image: "/images/slide-digitisation.jpg",
    subtitle: "Success Stories",
    title: "Impact That Speaks for Itself",
    description:
      "From digitised archives to transformed public services — explore the real-world outcomes of our work.",
  },
  {
    id: 3,
    image: "/images/slide-egovernment.jpg",
    subtitle: "In the Media",
    title: "Recognised Across the Continent",
    description:
      "Read how leading publications and institutions are covering Dokuma's role in Africa's digital future.",
  },
]

export default function NewsroomHero() {
  return <PageBanner slides={slides} ctaLabel="READ LATEST" ctaHref="#press-releases" />
}
