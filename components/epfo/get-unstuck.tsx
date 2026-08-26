'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/epfo/i18n'
import { issueTypes } from '@/lib/epfo/escalation-data'
import { IssueSelector } from '@/components/epfo/unstuck/issue-selector'
import { ExitDateGuide } from '@/components/epfo/unstuck/exit-date-guide'
import { LoginGuide } from '@/components/epfo/unstuck/login-guide'
import { TransferGuide } from '@/components/epfo/unstuck/transfer-guide'
import { EscalationGuide } from '@/components/epfo/unstuck/escalation-guide'

export function GetUnstuck() {
  const { t, tb } = useLanguage()
  const [issueId, setIssueId] = useState<string | null>(null)

  const selectedIssue = issueTypes.find((i) => i.id === issueId) ?? null

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold text-epfo-navy sm:text-2xl">{t('unstuckTitle')}</h1>
        {selectedIssue && (
          <p className="mt-1 text-sm text-muted-foreground">{tb(selectedIssue.title)}</p>
        )}
      </div>

      {!issueId && <IssueSelector onSelect={setIssueId} />}

      {issueId === 'exit-date' && <ExitDateGuide />}
      {issueId === 'login' && <LoginGuide />}
      {issueId === 'transfer' && <TransferGuide />}
      {issueId === 'escalation' && <EscalationGuide />}

      {issueId && (
        <button
          type="button"
          onClick={() => setIssueId(null)}
          className="self-start rounded-sm border border-epfo-navy px-3 py-2 text-xs font-semibold text-epfo-navy hover:bg-epfo-navy/5"
        >
          {t('back')}
        </button>
      )}
    </div>
  )
}
