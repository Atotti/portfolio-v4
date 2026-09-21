import { ReactNode } from 'react'

interface DatedListProps {
  children: ReactNode
  className?: string
}

/** 「日付 | 内容」の2列で並べるリスト。News / Grants / Awards / Career で共通 */
export function DatedList({ children, className = '' }: DatedListProps) {
  return <ul className={`divide-y divide-foreground/10 ${className}`}>{children}</ul>
}

interface DatedItemProps {
  date: string
  endDate?: string
  children: ReactNode
}

export function DatedItem({ date, endDate, children }: DatedItemProps) {
  return (
    <li className="grid grid-cols-1 gap-x-4 py-1.5 sm:grid-cols-[8.5rem_1fr]">
      <span className="text-sm text-primary tabular-nums sm:pt-px">
        {endDate ? `${date} – ${endDate === 'Present' ? '' : endDate}` : date}
      </span>
      <div className="min-w-0 text-sm sm:text-[15px] leading-relaxed">{children}</div>
    </li>
  )
}
