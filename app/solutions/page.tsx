import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SolutionsHero from "@/components/solutions/solutions-hero"
import SolutionsOverview from "@/components/solutions/solutions-overview"
import SolutionDetails from "@/components/solutions/solution-details"
import ProcessSection from "@/components/solutions/process-section"
import WhyDokuma from "@/components/solutions/why-dokuma"
import SolutionsCTA from "@/components/solutions/solutions-cta"

export const metadata = {
  title: "Our Solutions | Dokuma Digital Offerings",
  description: "Explore Dokuma's comprehensive digital solutions: Digital Land Administration, Document Digitisation, Cloud Infrastructure, Payment Platforms, Licensing Systems, and Advanced Cybersecurity.",
  keywords: ["digital land administration", "document digitisation", "secure payment platforms", "cloud infrastructure", "cybersecurity Africa", "tech solutions"],
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SolutionsHero />
      <SolutionsOverview />
      <SolutionDetails />
      <ProcessSection />
      <WhyDokuma />
      <SolutionsCTA />
      <Footer />
    </div>
  )
}
