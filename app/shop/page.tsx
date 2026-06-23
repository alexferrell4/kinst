import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop Milestones My Way journals and social-emotional learning curricula from Konnecting the Dots Developmental Institute.",
}

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="Milestones My Way"
        description="Tools and curricula designed to enrich, encourage, and inspire growth and development for every learner."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 sm:gap-16">
            {products.map((product, index) => (
              <Card
                key={product.slug}
                className="overflow-hidden border-border/70 p-0 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`grid items-stretch gap-0 md:grid-cols-2 ${
                    index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full bg-muted md:aspect-auto md:min-h-[22rem]">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="flex flex-col gap-4 p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col gap-2">
                      <h2 className="font-heading text-2xl font-semibold text-foreground text-balance">
                        {product.name}
                      </h2>
                      <p className="font-heading text-xl font-bold text-brand">{product.price}</p>
                    </div>

                    <p className="leading-relaxed text-muted-foreground">{product.description}</p>

                    {product.kit && (
                      <div className="rounded-xl bg-secondary/60 p-5">
                        <p className="mb-3 font-medium text-secondary-foreground">{product.kitTitle}</p>
                        <ul className="flex flex-col gap-2">
                          {product.kit.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.note && <p className="text-sm italic text-muted-foreground">{product.note}</p>}

                    <div className="mt-auto pt-2">
                      <Button
                        nativeButton={false}
                        render={<Link href="/contact-us" />}
                        size="lg"
                        className="w-full sm:w-auto"
                      >
                        To inquire about purchasing please contact us
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Questions about our products?"
        description="Reach out and we'll help you find the right resources for your family, classroom, or organization."
      />
    </>
  )
}
