'use client'

import { useState } from 'react'
import { LanguageProvider } from '@/lib/epfo/i18n'
import { PortalShell } from '@/components/epfo/portal-shell'
import { AnnouncementTicker } from '@/components/epfo/announcement-ticker'
import { HomeScreen } from '@/components/epfo/home-screen'
import { PrecheckWizard } from '@/components/epfo/precheck-wizard'
import { StatusTranslator } from '@/components/epfo/status-translator'
import { GetUnstuck } from '@/components/epfo/get-unstuck'
import type { Screen } from '@/lib/epfo/types'

function EpfoAppInner() {
  const [screen, setScreen] = useState<Screen>('home')

  return (
    <PortalShell
      onHome={() => setScreen('home')}
      onBack={screen !== 'home' ? () => setScreen('home') : undefined}
      ticker={screen === 'home' ? <AnnouncementTicker /> : undefined}
    >
      {screen === 'home' && <HomeScreen onNavigate={setScreen} />}
      {screen === 'precheck' && <PrecheckWizard />}
      {screen === 'status' && <StatusTranslator onNavigate={setScreen} />}
      {screen === 'unstuck' && <GetUnstuck />}
    </PortalShell>
  )
}

export function EpfoApp() {
  return (
    <LanguageProvider>
      <EpfoAppInner />
    </LanguageProvider>
  )
}
