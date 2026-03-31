import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsStats from "@/components/projects/projects-stats"
import ZimbabweProjects from "@/components/projects/zimbabwe-projects"
import RwandaProjects from "@/components/projects/rwanda-projects"
import ProjectsCTA from "@/components/projects/projects-cta"

export const metadata = {
  title: "Impactful Projects & Case Studies | Dokuma",
  description: "Discover the impactful digital transformation projects Dokuma is powering across Africa. Highlighted initiatives include digital land records in Zimbabwe and strategic archive digitisation in Rwanda.",
  keywords: ["Dokuma projects", "case studies", "transformative IT projects", "Zimbabwe land digitisation", "Rwanda digital archives"],
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
