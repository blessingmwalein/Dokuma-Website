"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import NewsroomHero from "@/components/newsroom/newsroom-hero"
import NewsroomTabs from "@/components/newsroom/newsroom-tabs"
import PressReleases from "@/components/newsroom/press-releases"
import SuccessStories from "@/components/newsroom/success-stories"
import MediaFeatures from "@/components/newsroom/media-features"
import NewsroomCTA from "@/components/newsroom/newsroom-cta"

export default function NewsroomPage() {
  const [activeTab, setActiveTab] = useState("media")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <NewsroomHero />
      <NewsroomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* {activeTab === "press" && <PressReleases />}
          {activeTab === "stories" && <SuccessStories />} */}
          {activeTab === "media" && <MediaFeatures />}
        </div>
      </section>
      <NewsroomCTA />
      <Footer />
    </div>
  )
}
// 