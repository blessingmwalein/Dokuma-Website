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
