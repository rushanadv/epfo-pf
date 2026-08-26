'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import { eligibilityQuestions } from '@/lib/epfo/precheck-data'
import { CopyButton } from '@/components/epfo/copy-button'
import { cn } from '@/lib/utils'

export function ResultStep({
  answers,
  onStartOver,
}: {
  answers: Record<string, boolean | null>
  onStartOver: () => void
}) {
  const { t, tb, lang } = useLanguage()

  const failedQuestions = eligibilityQuestions.filter((q) => answers[q.id] === false)
  const isEligible = failedQuestions.length === 0

  const fixesText = failedQuestions
    .map((q, i) => `${i + 1}. ${tb(q.question)}\n   ${tb(q.onFail.message)}`)
    .join('\n\n')

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          'rounded-sm border-2 px-4 py-4 text-center',
          isEligible ? 'border-epfo-success bg-epfo-success/10' : 'border-destructive bg-destructive/10',
        )}
      >
        <p
          className={cn(
            'text-lg font-bold sm:text-xl',
            isEligible ? 'text-epfo-success' : 'text-destructive',
          )}
        >
          {isEligible ? t('resultEligible') : t('resultAction')}
        </p>
      </div>

      {!isEligible && (
        <div className="flex flex-col gap-3">
          {failedQuestions.map((q) => (
            <div key={q.id} className="rounded-sm border border-border bg-card p-4">
              <p className="text-sm font-semibold">{tb(q.question)}</p>
              <p
                className={cn(
                  'mt-2 rounded-sm px-3 py-2 text-xs leading-relaxed',
                  q.onFail.severity === 'fail'
                    ? 'bg-destructive/10 text-destructive'
                    : 'bg-epfo-amber text-epfo-navy-dark',
                )}
              >
                {tb(q.onFail.message)}
              </p>
            </div>
          ))}

          <CopyButton
            text={fixesText}
            label={t('copyAllFixes')}
            className="w-full"
          />
        </div>
      )}

      {isEligible && (
        <p className="text-center text-sm leading-relaxed text-muted-foreground">
          {lang === 'en'
            ? 'You have cleared all pre-submission checks. You may proceed to file your claim on the EPFO Member Portal.'
            : 'आपने सभी पूर्व-जाँच पूरी कर ली हैं। अब आप EPFO सदस्य पोर्टल पर अपना दावा दाखिल कर सकते हैं।'}
        </p>
      )}

      <button
        type="button"
        onClick={onStartOver}
        className="rounded-sm border border-epfo-navy px-4 py-2.5 text-sm font-semibold text-epfo-navy hover:bg-epfo-navy/5"
      >
        {t('startOver')}
      </button>
    </div>
  )
}
