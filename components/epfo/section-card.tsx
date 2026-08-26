import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SectionCard({
  title,
  children,
  className,
}: {
  title?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'rounded-sm border border-border border-l-4 border-l-epfo-navy bg-card shadow-sm',
        className,
      )}
    >
      {title && (
        <div className="border-b border-border px-4 py-2.5">
          <h2 className="text-sm font-bold text-epfo-navy sm:text-base">{title}</h2>
        </div>
      )}
      <div className="px-4 py-4">{children}</div>
    </section>
  )
}
