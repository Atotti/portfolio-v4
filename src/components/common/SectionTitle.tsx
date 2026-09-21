import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2
      className={`flex items-center gap-3 text-xl sm:text-2xl font-semibold mb-3 after:h-px after:flex-1 after:bg-foreground/15 ${className}`}
      style={{ fontFamily: 'var(--font-varela-round)' }}
    >
      {children}
    </h2>
  )
}
