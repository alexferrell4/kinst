import type { Metadata } from 'next'
import {
  ClipboardCheck,
  CalendarRange,
  Workflow,
  Activity,
  Compass,
  Megaphone,
  CheckCircle2,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Case Management Services',
  description:
    'Case Management Services for Children and Pregnant Women is a Medicaid benefit offering health-related case management to children from birth through twenty years of age and to women with a high-risk pregnancy.',
}

const includes = [
  { label: 'Assessments', icon: ClipboardCheck },
  { label: 'Facilitation Planning', icon: CalendarRange },
  { label: 'Coordination of Care', icon: Workflow },
  { label: 'Monitoring & Evaluation', icon: Activity },
  { label: 'Resource Navigation', icon: Compass },
  { label: 'Advocacy', icon: Megaphone },
]

const medicaid = ['Traditional', 'STAR', 'STAR Kids', 'STAR Health', 'STAR+PLUS']

export default function CaseManagementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Texas Department of State Health Services · DSHS"
        title="Case Management Services"
        description="Case Management Services for Children and Pregnant Women is a Medicaid benefit offering health-related case management to children from birth through twenty years of age and for women of any age with a high-risk pregnancy."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

<div className="mb-10 flex justify-center">
  <img
    src="/images/casemanagement.png"
    alt="Accepted Medicaid Insurance"
    className="w-full max-w-md rounded-2xl object-cover"
  />
</div>

          <div className="grid gap-10 lg:grid-cols-2">
            
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Case Management Services will include:
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {includes.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                This comprehensive approach includes communication and
                accessibility resources, with a focus on best practices in
                medical, social, and educational areas.
              </p>
            </div>


            <div className="rounded-2xl border border-border bg-secondary/50 p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Accepted Medicaid Insurance:
              </h2>
              <ul className="mt-6 space-y-3">
                {medicaid.map((plan) => ( 
                  <li
                    key={plan}
                    className="flex items-center gap-3 rounded-lg bg-card px-4 py-3 shadow-sm"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-accent-warm" />
                    <span className="text-sm font-medium text-foreground">
                      {plan}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
