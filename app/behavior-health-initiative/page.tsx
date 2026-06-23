import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PreEtsContent } from '@/components/pre-ets-content'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Behavior Health Initiative',
  description:
    'Konnecting the Dots Developmental Institute behavior health initiative, providing Pre Employment Transition Services (Pre ETS) for scholars ages 14 to 22.',
}

export default function BehaviorHealthPage() {
  return (
    <>
      <PageHeader
        eyebrow="Behavior Health Initiative"
        title="Behavior Health Initiative"
        description="A program designed to equip scholars with developmental, attitudinal, and ethical practices essential for fostering productive citizenship."
      />
      <PreEtsContent />
      <CtaSection />
    </>
  )
}
