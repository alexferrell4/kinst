import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ktddi-logo.jpg"
                alt={siteConfig.name}
                width={300}
                height={90}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Devoted to restoring, reshaping, and restructuring the lives of
              individuals by maximizing their growth and development.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full bg-background text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={siteConfig.twitter}
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-full bg-background text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent-warm" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-accent-warm" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-brand"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-5 shrink-0 text-accent-warm" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-brand"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-accent-warm" />
                <span>Hours: {siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} All rights
            reserved.
          </p>
          <p>WBE &amp; HUB Certified &middot; Houston, Texas</p>
        </div>
      </div>
    </footer>
  )
}
