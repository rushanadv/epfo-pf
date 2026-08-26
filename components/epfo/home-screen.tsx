'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import type { Screen } from '@/lib/epfo/types'

export function HomeScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const { t } = useLanguage()

  const cards: { screen: Screen; icon: string; titleKey: 'card1Title' | 'card2Title' | 'card3Title'; descKey: 'card1Desc' | 'card2Desc' | 'card3Desc'; btnKey: 'card1Btn' | 'card2Btn' | 'card3Btn' }[] = [
    { screen: 'precheck', icon: '✅', titleKey: 'card1Title', descKey: 'card1Desc', btnKey: 'card1Btn' },
    { screen: 'status', icon: '🔍', titleKey: 'card2Title', descKey: 'card2Desc', btnKey: 'card2Btn' },
    { screen: 'unstuck', icon: '🆘', titleKey: 'card3Title', descKey: 'card3Desc', btnKey: 'card3Btn' },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-sm border border-epfo-saffron/30 bg-epfo-amber px-4 py-2.5 text-center text-xs font-semibold text-epfo-navy-dark sm:text-sm">
        {t('statsBar')}
      </div>

      <div className="text-center">
        <h1 className="text-balance text-2xl font-bold text-epfo-navy sm:text-3xl">{t('appName')}</h1>
        <p className="mt-2 text-pretty text-sm text-muted-foreground">{t('portalSubtitle')}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <button
            key={card.screen}
            type="button"
            onClick={() => onNavigate(card.screen)}
            className="flex flex-col items-start gap-3 rounded-sm border border-border border-t-4 border-t-epfo-navy bg-card p-5 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="text-3xl" aria-hidden="true">
              {card.icon}
            </span>
            <div>
              <h2 className="text-base font-bold text-epfo-navy">{t(card.titleKey)}</h2>
              <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {t(card.descKey)}
              </p>
            </div>
            <span className="mt-auto text-sm font-semibold text-epfo-orange">{t(card.btnKey)}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
