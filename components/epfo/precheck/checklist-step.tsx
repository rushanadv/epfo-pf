'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import { SectionCard } from '@/components/epfo/section-card'
import type { ClaimType } from '@/lib/epfo/precheck-data'

export function ChecklistStep({ claim, onProceed }: { claim: ClaimType; onProceed: () => void }) {
  const { t, tb } = useLanguage()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden="true">
          {claim.icon}
        </span>
        <div>
          <h2 className="text-base font-bold text-epfo-navy sm:text-lg">{tb(claim.title)}</h2>
          <p className="text-xs text-muted-foreground">
            {t('formsRequired')}: {claim.forms.join(' + ')}
          </p>
        </div>
      </div>

      <SectionCard title={t('documentChecklist')}>
        <ul className="flex flex-col gap-2.5">
          {claim.checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
              <span className="mt-0.5 text-epfo-success" aria-hidden="true">
                ☑
              </span>
              <span>{tb(item)}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      <div className="flex flex-col gap-2 rounded-sm border border-border bg-muted/60 px-4 py-3 text-sm">
        <p className="font-semibold text-epfo-navy">{t('processingTime')}</p>
        <p>{tb(claim.processingTime)}</p>
      </div>

      <div className="rounded-sm border border-epfo-saffron/40 bg-epfo-amber px-4 py-3 text-sm leading-relaxed text-epfo-navy-dark">
        ℹ️ {tb(claim.note)}
      </div>

      <button
        type="button"
        onClick={onProceed}
        className="rounded-sm bg-epfo-orange px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-epfo-orange/90"
      >
        {t('proceed')}
      </button>
    </div>
  )
}
