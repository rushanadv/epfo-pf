'use client'

import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/epfo/site-header'
import { SiteFooter } from '@/components/epfo/site-footer'

export function PortalShell({
  children,
  onBack,
  onHome,
  ticker,
}: {
  children: ReactNode
  onBack?: () => void
  onHome: () => void
  ticker?: ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader onBack={onBack} onHome={onHome} />
      {ticker}
      <main className="mx-auto w-full max-w-[480px] flex-1 px-4 py-4 sm:max-w-[960px] sm:px-6 sm:py-6">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
