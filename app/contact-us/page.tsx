import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Konnecting the Dots Developmental Institute in Houston, Texas. Call 281-312-9423 or email dotsk3@gmail.com.',
}

const details = [
  {
    icon: MapPin,
    label: 'Address',
    value: (
      <>
        {siteConfig.address.line1}
        <br />
        {siteConfig.address.line2}
      </>
    ),
  },
  {
    icon: Phone,
    label: 'Phone',
    value: (
      <a href={`tel:${siteConfig.phone}`} className="hover:text-brand">
        {siteConfig.phone}
      </a>
    ),
  },
  {
    icon: Mail,
    label: 'Email',
    value: (
      <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
        {siteConfig.email}
      </a>
    ),
  },
  { icon: Clock, label: 'Hours', value: siteConfig.hours },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Connect"
        description="We'd love to hear from you. Reach out with any questions about our programs and services."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Our team is here to support you, your family, or your
                organization during business hours.
              </p>
              <ul className="mt-8 space-y-4">
                {details.map(({ icon: Icon, label, value }) => (
                  <li
                    key={label}
                    className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-foreground">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
