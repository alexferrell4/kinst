import { Hero } from '@/components/home/hero'
import { FocusAreas } from '@/components/home/focus-areas'
import { Services } from '@/components/home/services'
import { CtaSection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-border bg-brand">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
          <p className="font-heading text-xl font-medium leading-relaxed text-brand-foreground text-balance sm:text-2xl lg:text-3xl">
            &ldquo;Konnecting the Dots Developmental Institute is devoted to
            restoring, reshaping, and restructuring the lives of individuals by
            maximizing their growth and development.&rdquo;
          </p>
        </div>
      </section>

      <FocusAreas />
      <Services />
      <CtaSection />
    </>
  )
}
