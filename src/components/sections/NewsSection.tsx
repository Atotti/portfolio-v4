'use client'

import { useState } from 'react'
import { news } from '@/data/news'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { HiOutlineExternalLink, HiChevronDown, HiChevronUp } from 'react-icons/hi'

// 折りたたみ時に見せる件数
const COLLAPSED_COUNT = 4

export function NewsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? news : news.slice(0, COLLAPSED_COUNT)
  const hasMore = news.length > COLLAPSED_COUNT

  return (
    <SectionContainer id="news">
      <SectionTitle>News</SectionTitle>

      <div className="max-w-4xl mx-auto">
        <ul className="divide-y divide-border/60">
          {visible.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-1 p-3 sm:flex-row sm:gap-6 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <span className="shrink-0 text-sm font-semibold text-primary tabular-nums sm:w-24 sm:pt-0.5">
                {item.date}
              </span>
              <div className="min-w-0">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors inline-flex items-baseline gap-1"
                  >
                    {item.title}
                    <HiOutlineExternalLink className="shrink-0 self-center opacity-60" size={14} />
                  </a>
                ) : (
                  <span className="font-medium">{item.title}</span>
                )}
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-3 mx-auto flex items-center gap-1 rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
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
      </div>
    </SectionContainer>
  )
}
