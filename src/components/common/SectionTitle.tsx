import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  className?: string
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2
      className={`text-3xl lg:text-4xl font-semibold mb-8 text-center border-primary pb-2 inline-block w-auto mx-auto block ${className}`}
      style={{ fontFamily: 'var(--font-varela-round)' }}
    >
      {children}
    </h2>
  )
}
