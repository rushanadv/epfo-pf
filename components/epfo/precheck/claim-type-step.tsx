'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import { claimTypes } from '@/lib/epfo/precheck-data'
import { cn } from '@/lib/utils'

export function ClaimTypeStep({
  selectedId,
  onSelect,
}: {
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  const { t, tb } = useLanguage()

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-base font-bold text-epfo-navy">{t('step1Title')}</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {claimTypes.map((claim) => (
          <button
            key={claim.id}
            type="button"
            onClick={() => onSelect(claim.id)}
            className={cn(
              'flex items-start gap-3 rounded-sm border bg-card p-3 text-left transition-colors',
              selectedId === claim.id
                ? 'border-epfo-navy ring-1 ring-epfo-navy'
                : 'border-border hover:border-epfo-navy/50',
            )}
          >
            <span className="text-2xl" aria-hidden="true">
              {claim.icon}
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{tb(claim.title)}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{claim.forms.join(' + ')}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
