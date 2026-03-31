import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import WhoWeAre from "@/components/about/who-we-are"
import MissionVision from "@/components/about/mission-vision"
import CoreValues from "@/components/about/core-values"
import TeamSection from "@/components/about/team-section"
import AboutCTA from "@/components/about/about-cta"

export const metadata = {
  title: "About Dokuma | Innovating Africa's Digital Ecosystem",
  description: "Discover Dokuma's journey since 2019. We are a visionary team dedicated to providing secure, scalable digital transformation solutions that empower African governments and enterprises.",
  keywords: ["about Dokuma", "African innovation", "IT solutions", "tech leadership Africa", "digital ecosystem"],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <AboutCTA />
      <Footer />
    </div>
  )
}
