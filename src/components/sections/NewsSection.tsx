'use client'

import { useState } from 'react'
import { news } from '@/data/news'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { DatedList, DatedItem } from '@/components/common/DatedList'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

// 折りたたみ時に見せる件数
const COLLAPSED_COUNT = 5

export function NewsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? news : news.slice(0, COLLAPSED_COUNT)
  const hasMore = news.length > COLLAPSED_COUNT

  return (
    <SectionContainer id="news">
      <SectionTitle>News</SectionTitle>

      <DatedList>
        {visible.map((item) => (
          <DatedItem key={`${item.date}-${item.title}`} date={item.date}>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary hover:underline"
              >
                {item.title}
              </a>
            ) : (
              <span className="font-medium">{item.title}</span>
            )}
            {item.description && (
              <span className="text-muted-foreground"> — {item.description}</span>
            )}
          </DatedItem>
        ))}
      </DatedList>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-1 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              表示を減らす
              <HiChevronUp size={16} />
            </>
          ) : (
            <>
              すべて表示（全 {news.length} 件）
              <HiChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </SectionContainer>
  )
}
