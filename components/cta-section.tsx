import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

export function CtaSection({
  title = 'Ready to take the next step?',
  description = 'Reach out today to learn how Konnecting the Dots can support you, your family, or your organization.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center text-brand-foreground sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -top-10 size-56 rounded-full bg-accent-warm/25 blur-3xl"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-foreground/85 text-pretty">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              render={<a href={`tel:${siteConfig.phone}`} />}
              size="lg"
              className="bg-accent-warm font-semibold text-accent-warm-foreground hover:bg-accent-warm/90"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </Button>
            <Button
              render={<Link href="/contact-us" />}
              size="lg"
              variant="outline"
              className="border-brand-foreground/30 bg-transparent text-brand-foreground hover:bg-brand-foreground/10"
            >
              <Mail className="size-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
