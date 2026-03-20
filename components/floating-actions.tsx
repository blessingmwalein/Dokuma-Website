"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUp, MessageCircle } from "lucide-react"

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`w-11 h-11 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Chat button — link this to your preferred chat/contact platform */}
      <Link
        href="/contact"
        aria-label="Chat with us"
        className="group flex items-center gap-2 h-11 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary/90 hover:scale-105 transition-all duration-300 px-4"
      >
        <MessageCircle className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm font-semibold whitespace-nowrap pr-1">
          Chat with us
        </span>
      </Link>
    </div>
  )
}
