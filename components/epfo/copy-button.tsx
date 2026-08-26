'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/epfo/i18n'
import { cn } from '@/lib/utils'

export function CopyButton({
  text,
  label,
  className,
}: {
  text: string
  label: string
  className?: string
}) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-sm border border-epfo-navy bg-epfo-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-epfo-navy-dark',
        className,
      )}
    >
      {copied ? `✓ ${t('copied')}` : label}
    </button>
  )
}
