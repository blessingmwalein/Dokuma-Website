"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

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
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div 
        ref={formRef}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center opacity-0 lg:p-12"
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
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName" 
              placeholder="Doe" 
              required 
              className="bg-background"
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
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization">Organization</Label>
          <Input 
            id="organization" 
            placeholder="Your organization name" 
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service of Interest</Label>
          <Select>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="digitization">Document Digitization</SelectItem>
              <SelectItem value="land">Land Administration Systems</SelectItem>
              <SelectItem value="egov">E-Government Solutions</SelectItem>
              <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
              <SelectItem value="security">Cybersecurity Services</SelectItem>
              <SelectItem value="consulting">IT Consulting</SelectItem>
              <SelectItem value="other">Other</SelectItem>
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
          />
        </div>

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
