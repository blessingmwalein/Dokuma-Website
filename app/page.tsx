import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dokuma | Pioneer in Digital Transformation for Africa",
  description: "Dokuma delivers cutting-edge digital solutions, from e-government platforms to secure cloud infrastructure and document digitisation, tailored for enterprises and governments across Africa.",
  keywords: ["digital transformation", "Africa tech", "e-government", "document digitisation", "cloud infrastructure", "Dokuma"],
}

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import PartnersSection from "@/components/home/partners-section"
import ServicesSection from "@/components/home/services-section"
import AboutPreview from "@/components/home/about-preview"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <AboutPreview />
      <Footer />
    </div>
  )
}
