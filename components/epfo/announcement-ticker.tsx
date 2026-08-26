'use client'

import { useLanguage } from '@/lib/epfo/i18n'

export function AnnouncementTicker() {
  const { t } = useLanguage()

  return (
    <div className="border-b border-epfo-saffron/40 bg-epfo-amber">
      <div className="mx-auto max-w-[960px] overflow-hidden px-4 py-2">
        <p className="truncate text-xs font-medium text-epfo-navy-dark sm:text-sm">{t('ticker')}</p>
      </div>
    </div>
  )
}
