import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingActions from '@/components/floating-actions'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Dokuma | Digital Transformation for Africa',
  description: 'Dokuma is a technology solutions provider specializing in digital transformation, e-government systems, ICT infrastructure, and secure digital platforms for governments and enterprises across Africa.',
  keywords: ['digital transformation', 'e-government', 'Africa', 'Zimbabwe', 'Rwanda', 'land administration', 'digitization', 'cloud infrastructure'],
  authors: [{ name: 'Dokuma Digital' }],
  openGraph: {
    title: 'Dokuma | Digital Transformation for Africa',
    description: 'Enterprise-grade solutions that empower governments and institutions with secure, scalable, and intelligent digital systems.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dokuma',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dokuma | Digital Transformation for Africa',
    description: 'Enterprise-grade solutions that empower governments and institutions with secure, scalable, and intelligent digital systems.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#3b82f6' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  )
}
