'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import { transferSteps } from '@/lib/epfo/escalation-data'
import { SectionCard } from '@/components/epfo/section-card'

export function TransferGuide() {
  const { tb, lang } = useLanguage()

  return (
    <SectionCard title={lang === 'en' ? 'Transfer PF After Job Change' : 'नौकरी बदलने के बाद PF ट्रांसफर'}>
      <ol className="flex flex-col gap-2.5 text-sm leading-relaxed">
        {transferSteps.map((step, i) => (
          <li key={i} className="flex gap-2">
            <span className="font-bold text-epfo-navy">{i + 1}.</span>
            <span>{tb(step)}</span>
          </li>
        ))}
      </ol>
    </SectionCard>
  )
}
