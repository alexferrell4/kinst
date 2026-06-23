import { cn } from '@/lib/utils'

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border bg-brand text-brand-foreground',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent-warm/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-brand-foreground/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-warm">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-foreground/85 text-pretty sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
