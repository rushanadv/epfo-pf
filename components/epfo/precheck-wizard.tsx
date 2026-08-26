'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/epfo/i18n'
import { claimTypes, eligibilityQuestions } from '@/lib/epfo/precheck-data'
import { ClaimTypeStep } from '@/components/epfo/precheck/claim-type-step'
import { ChecklistStep } from '@/components/epfo/precheck/checklist-step'
import { EligibilityStep } from '@/components/epfo/precheck/eligibility-step'
import { ResultStep } from '@/components/epfo/precheck/result-step'
import { cn } from '@/lib/utils'

type Stage = 'select' | 'checklist' | 'eligibility' | 'result'

const stageOrder: Stage[] = ['select', 'checklist', 'eligibility', 'result']

export function PrecheckWizard() {
  const { t } = useLanguage()
  const [stage, setStage] = useState<Stage>('select')
  const [claimId, setClaimId] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<string, boolean | null>>(
    Object.fromEntries(eligibilityQuestions.map((q) => [q.id, null])),
  )

  const selectedClaim = claimTypes.find((c) => c.id === claimId) ?? null
  const stageIndex = stageOrder.indexOf(stage)

  function reset() {
    setStage('select')
    setClaimId(null)
    setAnswers(Object.fromEntries(eligibilityQuestions.map((q) => [q.id, null])))
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold text-epfo-navy sm:text-2xl">{t('precheckTitle')}</h1>
        <div className="mt-3 flex gap-1.5" aria-hidden="true">
          {stageOrder.map((s, i) => (
            <div
              key={s}
              className={cn(
                'h-1.5 flex-1 rounded-full',
                i <= stageIndex ? 'bg-epfo-navy' : 'bg-border',
              )}
            />
          ))}
        </div>
      </div>

      {stage === 'select' && (
        <ClaimTypeStep
          selectedId={claimId}
          onSelect={(id) => {
            setClaimId(id)
            setStage('checklist')
          }}
        />
      )}

      {stage === 'checklist' && selectedClaim && (
        <ChecklistStep claim={selectedClaim} onProceed={() => setStage('eligibility')} />
      )}

      {stage === 'eligibility' && (
        <EligibilityStep
          answers={answers}
          onAnswer={(id, value) => setAnswers((prev) => ({ ...prev, [id]: value }))}
          onSeeResult={() => setStage('result')}
        />
      )}

      {stage === 'result' && <ResultStep answers={answers} onStartOver={reset} />}
    </div>
  )
}
