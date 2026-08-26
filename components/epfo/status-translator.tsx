'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/epfo/i18n'
import { claimStatuses } from '@/lib/epfo/status-data'
import { SectionCard } from '@/components/epfo/section-card'
import type { Screen } from '@/lib/epfo/types'
import { cn } from '@/lib/utils'

export function StatusTranslator({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const { t, tb } = useLanguage()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selected = claimStatuses.find((s) => s.id === selectedId) ?? null

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold text-epfo-navy sm:text-2xl">{t('statusTranslatorTitle')}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t('statusTranslatorSub')}</p>
      </div>

      <div className="flex flex-col gap-2">
        {claimStatuses.map((status) => (
          <button
            key={status.id}
            type="button"
            onClick={() => setSelectedId(status.id)}
            className={cn(
              'rounded-sm border px-4 py-2.5 text-left text-sm leading-relaxed transition-colors',
              selectedId === status.id
                ? 'border-epfo-navy bg-epfo-row-alt font-semibold text-epfo-navy'
                : 'border-border bg-card hover:border-epfo-navy/50',
            )}
          >
            {tb(status.label)}
          </button>
        ))}
      </div>

      {selected && (
        <SectionCard title={tb(selected.label)}>
          <div className="flex flex-col gap-3 text-sm leading-relaxed">
            <div>
              <p className="font-semibold text-epfo-navy">{t('meaningLabel')}</p>
              <p className="mt-1">{tb(selected.meaning)}</p>
            </div>
            <div>
              <p className="font-semibold text-epfo-navy">{t('actionLabel')}</p>
              <p className="mt-1">{tb(selected.action)}</p>
            </div>
            <div className="rounded-sm bg-muted/60 px-3 py-2 text-xs">
              <span className="font-semibold">{t('timelineLabel')}</span> {tb(selected.timeline)}
            </div>
            {selected.escalateAfterDays !== null && (
              <button
                type="button"
                onClick={() => onNavigate('unstuck')}
                className="rounded-sm border border-epfo-orange px-3 py-2 text-left text-sm font-semibold text-epfo-orange hover:bg-epfo-orange/5"
              >
                {t('escalateHint').replace('{days}', String(selected.escalateAfterDays))}
              </button>
            )}
          </div>
        </SectionCard>
      )}
    </div>
  )
}
