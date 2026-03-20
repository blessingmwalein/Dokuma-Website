import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsStats from "@/components/projects/projects-stats"
import ZimbabweProjects from "@/components/projects/zimbabwe-projects"
import RwandaProjects from "@/components/projects/rwanda-projects"
import ProjectsCTA from "@/components/projects/projects-cta"

export const metadata = {
  title: "Our Projects | Dokuma",
  description:
    "Explore Dokuma's digital transformation projects across Africa - from land digitization in Zimbabwe to archive preservation in Rwanda.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProjectsHero />
      <ProjectsStats />
      <ZimbabweProjects />
      <RwandaProjects />
      <ProjectsCTA />
      <Footer />
    </div>
  )
}
