import type { Metadata } from "next"
import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { OfficeLocations } from "@/components/contact/office-locations"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | Dokuma",
  description: "Get in touch with Dokuma. We're here to help with your digital transformation journey. Contact our offices in Zimbabwe and Rwanda.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactHero />
      <div className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
