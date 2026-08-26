'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import { escalationLevels } from '@/lib/epfo/escalation-data'
import { SectionCard } from '@/components/epfo/section-card'
import { CopyButton } from '@/components/epfo/copy-button'

export function ExitDateGuide() {
  const { tb, lang } = useLanguage()
  const level1 = escalationLevels[0]

  const steps =
    lang === 'en'
      ? [
          'If it has been under 2 months since your last salary — ask HR directly and give a written deadline.',
          'If it has been 2+ months since your last salary, you can self-mark your exit date: UAN Portal → Manage → Mark Exit.',
          'If HR remains unresponsive after 7 days, escalate using the EPFO Helpline and Grievance option in the Get Unstuck guide.',
        ]
      : [
          'यदि पिछली सैलरी के 2 महीने से कम हुए हैं — HR से सीधे बात करें और लिखित डेडलाइन दें।',
          'यदि पिछली सैलरी के 2+ महीने हो गए हैं, तो आप स्वयं निकास तिथि दर्ज कर सकते हैं: UAN पोर्टल → Manage → Mark Exit।',
          '7 दिनों बाद भी HR से जवाब न मिले तो "Get Unstuck" गाइड में EPFO हेल्पलाइन और शिकायत विकल्प का उपयोग करें।',
        ]

  return (
    <div className="flex flex-col gap-4">
      <SectionCard title={lang === 'en' ? 'Employer Not Updating Exit Date' : 'नियोक्ता निकास तिथि अपडेट नहीं कर रहा'}>
        <ol className="flex flex-col gap-2.5 text-sm leading-relaxed">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-2">
              <span className="font-bold text-epfo-navy">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </SectionCard>

      {level1.template && (
        <SectionCard title={lang === 'en' ? 'Email Template for HR' : 'HR के लिए ईमेल टेम्पलेट'}>
          <pre className="whitespace-pre-wrap rounded-sm bg-muted/60 p-3 text-xs leading-relaxed">
            {level1.template}
          </pre>
          <CopyButton text={level1.template} label={tb(level1.templateLabel!)} className="mt-3 w-full" />
        </SectionCard>
      )}
    </div>
  )
}
