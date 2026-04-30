"use client"

import { FileText, Video, Newspaper } from "lucide-react"

const tabs = [
  // { id: "press", label: "Press Releases", icon: FileText },
  // { id: "stories", label: "Success Stories", icon: Video },
  { id: "media", label: "In the Media", icon: Newspaper },
]

interface NewsroomTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function NewsroomTabs({ activeTab, setActiveTab }: NewsroomTabsProps) {
  return (
    <section className="sticky top-20 z-30 border-b border-border/60 bg-background/95 backdrop-blur-sm px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const active = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
