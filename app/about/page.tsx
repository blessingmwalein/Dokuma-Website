import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import WhoWeAre from "@/components/about/who-we-are"
import MissionVision from "@/components/about/mission-vision"
import CoreValues from "@/components/about/core-values"
import Timeline from "@/components/about/timeline"
import TeamSection from "@/components/about/team-section"
import AboutCTA from "@/components/about/about-cta"

export const metadata = {
  title: "About Us | Dokuma",
  description:
    "Learn about Dokuma - Africa's leading provider of secure digital transformation solutions for governments and enterprises. Established in 2019.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <TeamSection />
      <AboutCTA />
      <Footer />
    </div>
  )
}
