import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
  blur?: string // 例: '3px', '5px', '10px' など
  bgOpacity?: number // 0-100 の範囲で背景の透明度を指定
}

export function SectionContainer({
  children,
  className = '',
  id,
  blur = '3px',
  bgOpacity = 10
}: SectionContainerProps) {
  const blurClass = `backdrop-blur-[${blur}]`
  const bgClass = `bg-white/${bgOpacity}`

  return (
    <section id={id} className={`section-container ${className}`}>
      <div className={`${blurClass} ${bgClass} rounded-lg p-8 sm:p-10 lg:p-12`}>
        {children}
      </div>
    </section>
  )
}
