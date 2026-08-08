'use client'

import { useState } from 'react'
import { publications } from '@/data/publications'
import { Publication } from '@/types'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { PosterViewer, PosterItem } from '@/components/common/PosterViewer'

const GROUPS = [
  { type: 'international', heading: 'International conference' },
  { type: 'domestic', heading: 'Domestic conference' },
  { type: 'others', heading: 'Others' },
] as const

// 著者一覧の中の自分の名前（表記ゆれを吸収するため空白を除いて比較する）
const SELF_NAMES = ['ayutotsutsumi', '堤歩斗']

const normalize = (name: string) => name.replace(/\s+/g, '').toLowerCase()

function Authors({ authors }: { authors: string }) {
  const names = authors.split(',')
  return (
    <>
      {names.map((name, index) => {
        const trimmed = name.trim()
        const separator = index < names.length - 1 ? ', ' : ''
        return SELF_NAMES.includes(normalize(trimmed)) ? (
          <span key={index}>
            <strong className="font-bold text-foreground">{trimmed}</strong>
            {separator}
          </span>
        ) : (
          <span key={index}>
            {trimmed}
            {separator}
          </span>
        )
      })}
    </>
  )
}

export function PublicationsSection() {
  const [posterIndex, setPosterIndex] = useState<number | null>(null)

  const posters: PosterItem[] = publications
    .filter((pub) => pub.links?.poster)
    .map((pub) => ({ src: pub.links!.poster!, title: pub.title, venue: pub.venue }))

  const posterIndexOf = (pub: Publication) =>
    posters.findIndex((poster) => poster.src === pub.links?.poster)

  return (
    <SectionContainer id="publications">
      <SectionTitle>Publications</SectionTitle>

      <div className="space-y-8 max-w-4xl mx-auto">
        {GROUPS.map(({ type, heading }) => {
          const items = publications.filter((pub) => pub.type === type)
          if (items.length === 0) return null

          return (
            <div key={type}>
              <h3 className="text-lg sm:text-xl font-bold mb-4">{heading}</h3>
              <ul className="space-y-3">
                {items.map((pub, index) => (
                  <li
                    key={index}
                    className="p-2 sm:p-3 hover:bg-secondary/50 rounded-lg transition-colors text-muted-foreground"
                  >
                    <Authors authors={pub.authors} />. {pub.title}, {pub.venue} ({pub.year})
                    {pub.links && (
                      <span className="ml-2">
                        [
                        {pub.links.paper && (
                          <a
                            href={pub.links.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            paper
                          </a>
                        )}
                        {pub.links.poster && (
                          <>
                            {pub.links.paper && ', '}
                            <button
                              type="button"
                              onClick={() => setPosterIndex(posterIndexOf(pub))}
                              className="text-primary hover:underline"
                            >
                              poster
                            </button>
                          </>
                        )}
                        ]
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {posterIndex !== null && (
        <PosterViewer
          key={posters[posterIndex].src}
          posters={posters}
          index={posterIndex}
          onIndexChange={setPosterIndex}
          onClose={() => setPosterIndex(null)}
        />
      )}
    </SectionContainer>
  )
}
