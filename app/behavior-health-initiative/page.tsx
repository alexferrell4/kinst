import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Palette,
  Drama,
  Music,
  Dumbbell,
  Sparkles,
  Brain,
  Heart,
  CheckCircle2,
  Lightbulb,
  Target,
  Users,
  HandHeart,
  CircleHelp,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Behavior Health Initiative',
  description:
    'Our behavioral health initiative meets individuals exactly where they are, increasing social, cognitive, intellectual, and emotional development for independence in all areas of life through the "Real Life" approach.',
}

const concepts = [
  { label: 'Social & Emotional Learning Interventions', icon: Heart },
  { label: 'Art Therapy', icon: Palette },
  { label: 'Role Play', icon: Drama },
  { label: 'Music Therapy', icon: Music },
  { label: 'Athletic Play', icon: Dumbbell },
  { label: 'Vision Board', icon: Lightbulb },
  { label: 'Mindfulness', icon: Sparkles },
]

const strategies = [
  {
    label:
      'Improving behavior interventions through interactive and hands on counseling approach',
    icon: HandHeart,
  },
  { label: 'Understanding and utilizing problem solving skills', icon: CircleHelp },
  {
    label: 'Implementing Psychosocial Rehabilitation to offset functional delays',
    icon: Brain,
  },
  {
    label:
      'Providing awareness toward Community Psychiatric Supporting Treatment inventions',
    icon: Users,
  },
  {
    label: 'Developing self-care awareness through the "Wrap Factor" technique',
    icon: Sparkles,
  },
  {
    label: 'Analyzing long-term and short-term goals toward transitioning support',
    icon: Target,
  },
  { label: 'Immersing emotional and behavioral concepts', icon: Heart },
  {
    label:
      'Advancing physical and emotional development in an individual, peer group, whole group and/or family engagement community environment',
    icon: Users,
  },
]

const insurance = [
  'Traditional Medicaid',
  'Superior',
  'Community Health Choice',
  'Amerigroup',
  'Molina',
  'Tri Care',
  'Texas Children',
]

export default function BehaviorHealthPage() {
  return (
    <>
      <PageHeader
        eyebrow="Behavior Health Initiative"
        title="Behavior Health Initiative"
        description='Originated to meet individuals exactly where they are, increasing social, cognitive, intellectual, and emotional development for independence in all areas of life through the "Real Life" approach.'
      />

      {/* Intro + imagery */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                Our Approach
              </span>
              <p className="mt-5 text-base leading-relaxed text-foreground">
                Our behavioral health initiative was originated to meet
                individuals exactly where they are. Our services increase the
                individuals social, cognitive, intellectual, and emotional
                development to provide independence in all areas of their lives.
                Maximizing growth and development will occur through the
                &ldquo;Real Life&rdquo; approach.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our services will provide behavioral therapy concepts centered
                on social and emotional learning interventions, art therapy,
                role play, music therapy, athletic play, vision board, and
                mindfulness.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="relative min-h-64 overflow-hidden rounded-2xl border border-border shadow-sm">
                <Image
                  src="/images/behavior-health.png"
                  alt="A counselor leading children and teens in an art therapy and mindfulness session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative min-h-64 overflow-hidden rounded-2xl border border-border shadow-sm">
                <Image
                  src="/images/behavior-health-2.png"
                  alt="A young person practicing mindfulness and building a vision board with a mentor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Therapy concepts */}
          <div className="mt-14">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Behavioral therapy concepts
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {concepts.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-warm-foreground">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Strategies include:
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {strategies.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insurance + referrals */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-secondary/50 p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Services are supported by:
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {insurance.map((plan) => (
                  <li
                    key={plan}
                    className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 shadow-sm"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-accent-warm" />
                    <span className="text-sm font-medium text-foreground">
                      {plan}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Referrals
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Please email us or fill out the contact us form for all
                referrals or inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
