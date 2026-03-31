"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions", hasDropdown: true },
  { href: "/projects", label: "Case Studies" },
  { href: "/newsroom", label: "Newsroom" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      // Check if we're still in the hero section (approximately)
      setIsHeroSection(scrollY < 100)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showWhiteText = isHeroSection && !isScrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Dokuma Logo"
              width={128}
              height={32}
              className={`w-auto h-8 ${showWhiteText ? "brightness-0 invert" : ""}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 inline-flex items-center gap-1 ${
                  pathname === link.href
                    ? showWhiteText 
                      ? "text-white bg-white/10" 
                      : "text-primary bg-primary/5"
                    : showWhiteText
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* CTA Button - Pill style like Objectivity */}
            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 font-medium text-sm rounded-full border-2 transition-all duration-300 ${
                showWhiteText
                  ? "border-white text-white hover:bg-white hover:text-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              <span>Let&apos;s talk</span>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                showWhiteText
                  ? "bg-white text-primary group-hover:bg-primary group-hover:text-white"
                  : "bg-primary text-white"
              }`}>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                showWhiteText
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-muted/50"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <div className={`flex flex-col gap-1 pt-4 border-t ${
            showWhiteText ? "border-white/20" : "border-border/50"
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? showWhiteText
                      ? "text-white bg-white/10"
                      : "text-primary bg-primary/5"
                    : showWhiteText
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mt-3 mx-4 px-4 py-3 font-medium text-sm rounded-full text-center border-2 transition-all ${
                showWhiteText
                  ? "border-white text-white hover:bg-white hover:text-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
