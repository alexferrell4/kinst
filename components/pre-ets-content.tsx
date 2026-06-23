import Image from 'next/image'
import {
  Compass,
  Megaphone,
  Briefcase,
  GraduationCap,
  Lightbulb,
} from 'lucide-react'

const categoriesEn = [
  { label: 'Career Exploration', icon: Compass },
  { label: 'Self-Advocacy', icon: Megaphone },
  { label: 'Workplace Readiness', icon: Briefcase },
  { label: 'Work Base Learning', icon: Lightbulb },
  { label: 'Counseling on Post-Secondary Opportunities', icon: GraduationCap },
]

export function PreEtsContent() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* English */}
          <article className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
              Our Program
            </span>
            <p className="mt-5 text-base leading-relaxed text-foreground">
              Konnecting the Dots Developmental Institute will provide Pre
              Employment Transition Services (Pre ETS). This evolving program
              will equip scholars with developmental, attitudinal, and ethical
              practices which are essential for fostering productive
              citizenship. Students must be 14 to 22 years of age. The Pre ETS
              curriculum is structured in three phases.
            </p>
            <h2 className="mt-7 font-heading text-lg font-semibold text-foreground">
              Categories include:
            </h2>
            <ul className="mt-4 space-y-3">
              {categoriesEn.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-warm-foreground">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* Image collage */}
          <div className="grid gap-4">
            <div className="relative min-h-64 flex-1 overflow-hidden rounded-2xl border border-border shadow-sm">
              <Image
                src="/images/preets-mentorship.png"
                alt="A student working one-on-one with a supportive mentor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative min-h-64 flex-1 overflow-hidden rounded-2xl border border-border shadow-sm">
              <Image
                src="/images/preets-teamwork.png"
                alt="A group of young scholars collaborating on a project together"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
