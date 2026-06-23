import {
  BookOpen,
  Briefcase,
  ShieldCheck,
  Palette,
  HeartPulse,
  Leaf,
  Megaphone,
  Users,
  Brain,
  GraduationCap,
  Lightbulb,
  HandHeart,
  Sparkles,
  Dumbbell,
  Compass,
} from 'lucide-react'

const services = [
  { label: 'Literacy', icon: BookOpen },
  { label: 'Vocational Training', icon: Briefcase },
  { label: 'Diversion Awareness', icon: ShieldCheck },
  { label: 'Fine Arts', icon: Palette },
  { label: 'Mental Health', icon: Brain },
  { label: 'Healthy Living', icon: Leaf },
  { label: 'Advocacy', icon: Megaphone },
  { label: 'Consulting', icon: Users },
  { label: 'Social Concepts', icon: HeartPulse },
  { label: 'Pre-career Training', icon: GraduationCap },
]

const strategies = [
  {
    icon: Lightbulb,
    text: 'Understanding and utilizing problem solving and critical thinking skills',
  },
  {
    icon: HandHeart,
    text: 'Developing self care and awareness skills through wrap around services',
  },
  {
    icon: GraduationCap,
    text: 'Maximizing pre-career/vocational concepts for Post-Secondary education and work force training',
  },
  {
    icon: Sparkles,
    text: 'Immersing in selected fine arts through mindfulness concepts',
  },
  {
    icon: Dumbbell,
    text: 'Advancing physical development through activities in martial arts, cheer, dance, yoga and physical fitness.',
  },
  {
    icon: Compass,
    text: 'Improving behavior intervention techniques through a multisystemic counseling theory approach.',
  },
]

export function Services() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-warm">
            What We Offer
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
            Our Services
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {services.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-brand">
                <Icon className="size-6" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-warm">
              Strategies
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              The Building Blocks Toward Literacy
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our approach meets each individual where they are, blending
              proven strategies that nurture the whole person from mind to
              body.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {strategies.map(({ text, icon: Icon }) => (
              <li
                key={text}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-warm-foreground">
                  <Icon className="size-5" />
                </span>
                <p className="text-sm leading-relaxed text-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
