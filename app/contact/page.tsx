import type { Metadata } from "next"
import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { OfficeLocations } from "@/components/contact/office-locations"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Get in Touch | Contact Dokuma",
  description: "Partner with Dokuma to accelerate your digital transformation. Reach out to our dedicated teams in Zimbabwe and Rwanda for innovative technical solutions and IT consultancy.",
  keywords: ["contact Dokuma", "IT consultancy Africa", "tech partnership", "Dokuma offices", "Zimbabwe tech", "Rwanda tech"],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactHero />
      <div id="contact-form" className="scroll-mt-24 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <OfficeLocations />
      <Footer />
    </main>
  )
}
