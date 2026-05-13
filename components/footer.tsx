import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Linkedin, Facebook, ArrowRight } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Projects", href: "/projects" },
    // { label: "Newsroom", href: "/newsroom" },
  ],
  solutions: [
    { label: "Digital Land Administration", href: "/solutions#solution-0" },
    { label: "Document Digitisation", href: "/solutions#solution-1" },
    { label: "Cloud Infrastructure", href: "/solutions#solution-2" },
    { label: "Digital Payment Platforms", href: "/solutions#solution-3" },
    { label: "Cybersecurity", href: "/solutions#solution-4" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100065642673121", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/dokuma-digital/posts/?feedView=all", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Dokuma Logo"
                width={128}
                height={32}
                className="w-auto h-8 brightness-0 invert"
              />
            </Link>
            <p className="text-white text-base font-semibold leading-snug mb-6 max-w-sm">
              Shaping Africa&apos;s Digital Future.
            </p>
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-primary transition-all duration-300 mb-8"
            >
              <span>Let&apos;s talk</span>
              <span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <div className="space-y-3">
              <a
                href="mailto:hello@dokuma.co.zw"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@dokuma.co.zw
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  78 Piers Road, Borrowdale, Harare, Zimbabwe
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Dokuma. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative pixels */}
      <div className="relative">
        <div className="absolute bottom-4 right-8 flex gap-1">
          <div className="w-2 h-2 bg-white/20" />
          <div className="w-2 h-2 bg-white/10" />
        </div>
        <div className="absolute bottom-8 right-4 flex gap-1">
          <div className="w-2 h-2 bg-orange-400/60" />
        </div>
      </div>
    </footer>
  )
}
