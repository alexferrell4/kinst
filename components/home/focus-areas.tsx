import Link from 'next/link'
import { ArrowUpRight, HeartHandshake, ClipboardList, Briefcase } from 'lucide-react'

const areas = [
  {
    title: 'Behavior Health Initiative',
    href: '/behavior-health-initiative',
    icon: HeartHandshake,
    description:
      'Equipping scholars with developmental, attitudinal, and ethical practices essential for fostering productive citizenship.',
  },
  {
    title: 'Case Management Services',
    href: '/case-management-services',
    icon: ClipboardList,
    description:
      'A Medicaid benefit offering health-related case management to children and to women with a high-risk pregnancy.',
  },
  {
    title: 'Pre Employment Services',
    href: '/pre-employment-services',
    icon: Briefcase,
    description:
      'Pre Employment Transition Services (Pre ETS) that prepare students ages 14 to 22 for post-secondary success.',
  },
]

export function FocusAreas() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-warm">
            How We Help
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
            Programs &amp; Services
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {areas.map(({ title, href, description, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Learn more
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
