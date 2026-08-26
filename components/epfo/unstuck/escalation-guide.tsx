'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/epfo/i18n'
import { durationOptions, escalationLevels, consumerCourtNote } from '@/lib/epfo/escalation-data'
import { SectionCard } from '@/components/epfo/section-card'
import { CopyButton } from '@/components/epfo/copy-button'
import { cn } from '@/lib/utils'

export function EscalationGuide() {
  const { t, tb, lang } = useLanguage()
  const [durationId, setDurationId] = useState<string | null>(null)

  const durationDays = durationOptions.find((d) => d.id === durationId)?.days ?? null
  const activeLevel =
    durationDays === null
      ? null
      : escalationLevels.find((lvl) => durationDays >= lvl.minDays && durationDays <= lvl.maxDays) ?? null

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm font-semibold text-epfo-navy">
          {lang === 'en' ? 'How long has your claim been stuck?' : 'आपका दावा कब से फँसा है?'}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {durationOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setDurationId(opt.id)}
              className={cn(
                'rounded-sm border px-3 py-1.5 text-sm font-medium',
                durationId === opt.id
                  ? 'border-epfo-navy bg-epfo-navy text-white'
                  : 'border-border bg-card hover:border-epfo-navy/50',
              )}
            >
              {tb(opt.label)}
            </button>
          ))}
        </div>
      </div>

      {/* Escalation ladder */}
      <div className="flex flex-col gap-2">
        {escalationLevels.map((lvl) => {
          const isActive = activeLevel?.level === lvl.level
          return (
            <div
              key={lvl.level}
              className={cn(
                'rounded-sm border px-3 py-2.5',
                isActive ? 'border-epfo-orange bg-epfo-amber' : 'border-border bg-card',
              )}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">
                  {lvl.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold">
                    {lvl.level}. {tb(lvl.title)}
                  </p>
                  <p className="text-xs text-muted-foreground">{tb(lvl.durationLabel)}</p>
                </div>
                {isActive && (
                  <span className="ml-auto rounded-sm bg-epfo-orange px-2 py-0.5 text-[10px] font-bold text-white">
                    {t('badgeActionNeeded')}
                  </span>
                )}
              </div>

              {isActive && (
                <div className="mt-3 flex flex-col gap-3 border-t border-epfo-orange/30 pt-3">
                  {lvl.site && (
                    <p className="text-sm">
                      🌐 <span className="font-semibold">{lvl.site}</span>
                    </p>
                  )}
                  {lvl.steps && (
                    <ol className="flex flex-col gap-1.5 text-sm leading-relaxed">
                      {lvl.steps.map((step, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="font-bold text-epfo-navy">{i + 1}.</span>
                          <span>{tb(step)}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {lvl.template && lvl.templateLabel && (
                    <>
                      <pre className="whitespace-pre-wrap rounded-sm bg-white/70 p-3 text-xs leading-relaxed">
                        {lvl.template}
                      </pre>
                      <CopyButton text={lvl.template} label={tb(lvl.templateLabel)} className="w-full" />
                    </>
                  )}
                  {lvl.level === 5 && (
                    <p className="rounded-sm bg-white/70 px-3 py-2 text-xs leading-relaxed">
                      {tb(consumerCourtNote)}
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {activeLevel && (
        <SectionCard>
          <p className="text-center text-xs text-muted-foreground">
            {lang === 'en'
              ? 'If this step does not resolve your issue within the stated timeframe, move to the next level in the ladder above.'
              : 'यदि यह चरण बताई गई समय-सीमा में समस्या हल नहीं करता, तो ऊपर दी गई सूची में अगले स्तर पर जाएं।'}
          </p>
        </SectionCard>
      )}
    </div>
  )
}
