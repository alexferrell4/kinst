import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PreEtsContent } from '@/components/pre-ets-content'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Pre Employment Services',
  description:
    'Pre Employment Transition Services (Pre ETS) equip scholars ages 14 to 22 with developmental, attitudinal, and ethical practices essential for fostering productive citizenship.',
}

export default function PreEmploymentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pre ETS"
        title="Pre Employment Transition Services"
        description="Equipping scholars ages 14 to 22 with the developmental, attitudinal, and ethical practices essential for fostering productive citizenship."
      />
      <PreEtsContent />
      <CtaSection />
    </>
  )
}
