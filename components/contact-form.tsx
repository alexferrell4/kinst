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

  

  return (
    <iframe
  src="https://form.jotform.com/261743672157058"
  width="100%"
  height="800"

  style={{ border: "none" }}
  title="Jotform"
/>
  )
}
