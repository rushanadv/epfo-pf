'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import { issueTypes } from '@/lib/epfo/escalation-data'

export function IssueSelector({ onSelect }: { onSelect: (id: string) => void }) {
  const { tb } = useLanguage()

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {issueTypes.map((issue) => (
        <button
          key={issue.id}
          type="button"
          onClick={() => onSelect(issue.id)}
          className="flex items-center gap-3 rounded-sm border border-border bg-card p-4 text-left transition-colors hover:border-epfo-navy/60"
        >
          <span className="text-2xl" aria-hidden="true">
            {issue.icon}
          </span>
          <p className="text-sm font-semibold leading-relaxed">{tb(issue.title)}</p>
        </button>
      ))}
    </div>
  )
}
