'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/lib/site'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const phone = String(data.get('phone') || '')
    const message = String(data.get('message') || '')

    const subject = encodeURIComponent(`Website inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(000) 000-0000"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about what you're looking for..."
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-brand text-brand-foreground hover:bg-brand/90 sm:w-auto"
      >
        <Send className="size-4" />
        Send Message
      </Button>
      {submitted ? (
        <p className="text-sm text-muted-foreground">
          Your email app should now be open with your message ready to send. If
          not, please email us directly at{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-brand underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  )
}
