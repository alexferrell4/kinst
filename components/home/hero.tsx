import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
            Serving Houston, Texas since 2017
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] text-foreground text-balance sm:text-5xl lg:text-6xl">
            Konnecting people to{' '}
            <span className="text-brand">growth, healing,</span> and
            opportunity.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<Link href="/about-us" />}
              size="lg"
              className="bg-brand text-brand-foreground hover:bg-brand/90"
            >
              Discover Our Mission
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href={`tel:${siteConfig.phone}`} />}
              size="lg"
              variant="outline"
              className="border-brand/30 text-brand hover:bg-secondary"
            >
              <Phone className="size-4" />
              {siteConfig.phone}
            </Button>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-2xl font-bold text-brand">2017</dt>
              <dd className="mt-1 text-xs text-muted-foreground">Established</dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-brand">WBE</dt>
              <dd className="mt-1 text-xs text-muted-foreground">
                &amp; HUB Certified
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-bold text-brand">All Ages</dt>
              <dd className="mt-1 text-xs text-muted-foreground">
                Children to Seniors
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-warm/15 blur-2xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-xl">
            <Image
              src="/images/hero-community.png"
              alt="A diverse community of children, teens, and adults learning and connecting together"
              width={720}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
