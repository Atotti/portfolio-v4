import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
  blur?: string // 例: '0px', '1px', '2px', '3px', '5px', '10px' など
  bgOpacity?: number // 0-100 の範囲で背景の透明度を指定
}

export function SectionContainer({
  children,
  className = '',
  id,
  blur = '5px',
  bgOpacity = 5
}: SectionContainerProps) {
  // Tailwind CSSの制限により、事前定義されたマッピングを使用
  const blurMap: Record<string, string> = {
    '0px': 'backdrop-blur-[0px]',
    '1px': 'backdrop-blur-[1px]',
    '2px': 'backdrop-blur-[2px]',
    '3px': 'backdrop-blur-[3px]',
    '4px': 'backdrop-blur-[4px]',
    '5px': 'backdrop-blur-[5px]',
    '10px': 'backdrop-blur-[10px]',
  }

  const bgMap: Record<number, string> = {
    0: 'bg-white/0',
    5: 'bg-white/5',
    10: 'bg-white/10',
    15: 'bg-white/15',
    20: 'bg-white/20',
    30: 'bg-white/30',
    40: 'bg-white/40',
    50: 'bg-white/50',
  }

  const blurClass = blurMap[blur] || blurMap['3px']
  const bgClass = bgMap[bgOpacity] || bgMap[10]

  return (
    <section id={id} className={`section-container ${className}`}>
      <div className={`${blurClass} ${bgClass} rounded-lg p-8 sm:p-10 lg:p-12`}>
        {children}
      </div>
    </section>
  )
}
