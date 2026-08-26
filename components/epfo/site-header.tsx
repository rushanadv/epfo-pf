'use client'

import { useLanguage } from '@/lib/epfo/i18n'
import { cn } from '@/lib/utils'

export function SiteHeader({
  onBack,
  onHome,
}: {
  onBack?: () => void
  onHome: () => void
}) {
  const { t, lang, setLang } = useLanguage()

  return (
    <div className="sticky top-0 z-20">
      {/* Tricolor strip */}
      <div className="flex h-1 w-full" aria-hidden="true">
        <div className="flex-1 bg-epfo-saffron" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-epfo-green" />
      </div>

      {/* Header bar */}
      <header className="bg-epfo-navy text-white">
        <div className="mx-auto flex max-w-[960px] items-center justify-between gap-3 px-4 py-2.5">
          <button
            type="button"
            onClick={onHome}
            className="flex items-center gap-2 text-left"
            aria-label={t('home')}
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              ⚜️
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-wide">EPFO</span>
              <span className="hidden text-[11px] font-normal text-white/80 sm:block">
                {t('portalSubtitle')}
              </span>
            </span>
          </button>

          <div className="flex items-center gap-2">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="rounded-sm border border-white/40 px-2.5 py-1 text-xs font-medium text-white hover:bg-white/10"
              >
                {t('back')}
              </button>
            )}
            <div className="flex overflow-hidden rounded-sm border border-white/40 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={cn(
                  'px-2.5 py-1',
                  lang === 'en' ? 'bg-white text-epfo-navy' : 'text-white hover:bg-white/10',
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={cn(
                  'px-2.5 py-1',
                  lang === 'hi' ? 'bg-white text-epfo-navy' : 'text-white hover:bg-white/10',
                )}
              >
                हि
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
