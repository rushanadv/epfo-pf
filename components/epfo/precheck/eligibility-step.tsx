'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import { eligibilityQuestions } from '@/lib/epfo/precheck-data'
import { cn } from '@/lib/utils'

export function EligibilityStep({
  answers,
  onAnswer,
  onSeeResult,
}: {
  answers: Record<string, boolean | null>
  onAnswer: (id: string, value: boolean) => void
  onSeeResult: () => void
}) {
  const { t, tb } = useLanguage()

  const allAnswered = eligibilityQuestions.every((q) => answers[q.id] !== null && answers[q.id] !== undefined)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('step2of2')}</p>
      <div className="flex flex-col gap-3">
        {eligibilityQuestions.map((q, idx) => {
          const answer = answers[q.id]
          return (
            <div key={q.id} className="rounded-sm border border-border bg-card p-4">
              <p className="text-sm font-medium leading-relaxed">
                <span className="mr-1 text-muted-foreground">
                  {t('question')} {idx + 1}.
                </span>
                {tb(q.question)}
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => onAnswer(q.id, true)}
                  className={cn(
                    'rounded-sm border px-4 py-1.5 text-sm font-semibold',
                    answer === true
                      ? 'border-epfo-success bg-epfo-success text-white'
                      : 'border-border hover:border-epfo-success/60',
                  )}
                >
                  {t('yes')}
                </button>
                <button
                  type="button"
                  onClick={() => onAnswer(q.id, false)}
                  className={cn(
                    'rounded-sm border px-4 py-1.5 text-sm font-semibold',
                    answer === false
                      ? 'border-destructive bg-destructive text-white'
                      : 'border-border hover:border-destructive/60',
                  )}
                >
                  {t('no')}
                </button>
              </div>
              {answer === false && (
                <p
                  className={cn(
                    'mt-3 rounded-sm px-3 py-2 text-xs leading-relaxed',
                    q.onFail.severity === 'fail'
                      ? 'bg-destructive/10 text-destructive'
                      : 'bg-epfo-amber text-epfo-navy-dark',
                  )}
                >
                  {tb(q.onFail.message)}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <button
        type="button"
        disabled={!allAnswered}
        onClick={onSeeResult}
        className="rounded-sm bg-epfo-navy px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-epfo-navy-dark disabled:cursor-not-allowed disabled:opacity-40"
      >
        {t('next')}
      </button>
    </div>
  )
}
