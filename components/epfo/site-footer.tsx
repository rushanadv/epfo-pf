'use client'

import { useLanguage } from '@/lib/epfo/i18n'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="mt-auto bg-epfo-navy-dark text-white">
      <div className="mx-auto max-w-[960px] px-4 py-4 text-center">
        <p className="text-xs font-medium text-white/90">{t('footerLine1')}</p>
        <p className="mt-1 text-[11px] text-epfo-saffron">⚠️ {t('footerDisclaimer')}</p>
      </div>
    </footer>
  )
}
