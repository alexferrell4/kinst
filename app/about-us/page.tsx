import type { Metadata } from 'next'
import { History, Target, Sparkles, BadgeCheck } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Konnecting the Dots Developmental Institute was established in 2017 in Houston, Texas. We are a WBE and HUB certified company devoted to maximizing growth and development.',
}

const blocks = [
  {
    icon: History,
    title: 'History',
    body: 'Konnecting the Dots Developmental Institute was established in 2017 in Houston, Texas. We are a WBE and HUB certified company.',
  },
  {
    icon: Target,
    title: 'Mission',
    body: 'KTDDI mission is to meet our community where they are and offer "A Real Life Approach" according to their unique learning styles to promote their success.',
  },
  {
    icon: Sparkles,
    title: 'Impact',
    body: "Konnecting the Dots is devoted to restoring, reshaping, and restructuring individual's lives by maximizing growth and development. We are dedicated to providing intentional services to children, teens, post secondary, adults, and senior citizens to enhance their way of life.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Who We Are"
        description="A Houston-based developmental institute meeting our community where they are with a Real Life Approach."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-brand">
            <BadgeCheck className="size-4 text-accent-warm" />
            WBE &amp; HUB Certified · Established 2017
          </div>

          <div className="space-y-6">
            {blocks.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 shadow-sm sm:flex-row sm:items-start"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                  <Icon className="size-7" />
                </span>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
