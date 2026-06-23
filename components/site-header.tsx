'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks, siteConfig } from '@/lib/site'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/images/ktddi-logo.jpg"
            alt={siteConfig.name}
            width={320}
            height={96}
            className="h-14 w-auto object-contain sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-[13px] font-medium transition-colors hover:bg-secondary hover:text-brand',
                  active ? 'bg-secondary text-brand' : 'text-foreground/80',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<a href={`tel:${siteConfig.phone}`} />}
            className="hidden bg-accent-warm font-semibold text-accent-warm-foreground hover:bg-accent-warm/90 lg:inline-flex"
          >
            <Phone className="size-4" />
            {siteConfig.phone}
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] max-w-sm p-0">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex items-center border-b border-border px-6 py-5">
                <Image
                  src="/images/ktddi-logo.jpg"
                  alt={siteConfig.name}
                  width={280}
                  height={84}
                  className="h-11 w-auto object-contain"
                />
              </div>
              <nav
                className="flex flex-col gap-1 px-4 py-4"
                aria-label="Mobile"
              >
                {navLinks.map((link) => {
                  const active = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                        active
                          ? 'bg-brand text-brand-foreground'
                          : 'text-foreground hover:bg-secondary',
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>
              <div className="px-4 pb-6">
                <Button
                  render={<a href={`tel:${siteConfig.phone}`} />}
                  className="w-full bg-accent-warm font-semibold text-accent-warm-foreground hover:bg-accent-warm/90"
                >
                  <Phone className="size-4" />
                  Call {siteConfig.phone}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
