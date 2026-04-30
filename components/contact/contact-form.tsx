"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle, RefreshCw } from "lucide-react"


function generateCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  return { a, b, answer: a + b }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const formRef = useRef<HTMLDivElement>(null)

  // Form fields
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  // Honeypot + CAPTCHA (anti-spam)
  const [website, setWebsite] = useState("")
  const [captcha, setCaptcha] = useState(() => generateCaptcha())
  const [captchaInput, setCaptchaInput] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-left")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (website.trim() !== "") {
      // Bot caught by honeypot — silently succeed
      setIsSubmitted(true)
      return
    }

    if (parseInt(captchaInput, 10) !== captcha.answer) {
      setError("Incorrect answer to the verification question. Please try again.")
      setCaptcha(generateCaptcha())
      setCaptchaInput("")
      return
    }

    setIsSubmitting(true)

    const payload = {
      name: `${firstName} ${lastName}`.trim(),
      email,
      organization,
      _subject: `New ${service ? service : "General Inquiry"} inquiry from ${firstName} ${lastName}`.trim(),
      message,
      inquiryType: service || "General Inquiry",
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/dokumazw@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.success === "true" || data.success === true) {
        setIsSubmitted(true)
        setCaptcha(generateCaptcha())
        setCaptchaInput("")
      } else {
        setError(data.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Could not send message. Please try again later.")
    }
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div 
        ref={formRef}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center lg:p-12 animate-slide-in-left"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-foreground">Message Sent!</h3>
        <p className="mb-6 text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within 24-48 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div 
      ref={formRef}
      className="rounded-2xl border border-border bg-card p-6 opacity-0 shadow-sm lg:p-8"
    >
      <h2 className="mb-2 text-2xl font-bold text-foreground">Send Us a Message</h2>
      <p className="mb-6 text-muted-foreground">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName" 
              placeholder="John" 
              required 
              className="bg-background"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName" 
              placeholder="Doe" 
              required 
              className="bg-background"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@example.com" 
            required 
            className="bg-background"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization">Organization</Label>
          <Input 
            id="organization" 
            placeholder="Your organization name" 
            className="bg-background"
            value={organization}
            onChange={e => setOrganization(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service of Interest</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Document Digitization">Document Digitization</SelectItem>
              <SelectItem value="Land Administration Systems">Land Administration Systems</SelectItem>
              <SelectItem value="E-Government Solutions">E-Government Solutions</SelectItem>
              <SelectItem value="Cloud Infrastructure">Cloud Infrastructure</SelectItem>
              <SelectItem value="Cybersecurity Services">Cybersecurity Services</SelectItem>
              <SelectItem value="IT Consulting">IT Consulting</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us about your project or inquiry..." 
            required 
            className="min-h-[120px] bg-background"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>

        {/* Honeypot field — hidden from real users */}
        <div className="hidden" aria-hidden="true">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={e => setWebsite(e.target.value)}
          />
        </div>

        {/* Simple math CAPTCHA */}
        <div className="space-y-2">
          <Label htmlFor="captcha">
            Verification: what is {captcha.a} + {captcha.b}?
          </Label>
          <div className="flex gap-2">
            <Input
              id="captcha"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Your answer"
              required
              className="bg-background"
              value={captchaInput}
              onChange={e => setCaptchaInput(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                setCaptcha(generateCaptcha())
                setCaptchaInput("")
              }}
              aria-label="Refresh verification question"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-muted-foreground hover:text-foreground"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
