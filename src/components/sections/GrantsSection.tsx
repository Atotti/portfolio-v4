import { grants } from '@/data/grants'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { DatedList, DatedItem } from '@/components/common/DatedList'
import { Grant } from '@/types'

function grantStats({ proposals, selected, amount }: Grant) {
  const stats: string[] = []
  if (proposals && selected) {
    const rate = ((selected / proposals) * 100).toFixed(1)
    stats.push(`${proposals} proposals → ${selected} selected (${rate}%)`)
  } else if (selected) {
    stats.push(`${selected} selected (acceptance rate not disclosed)`)
  }
  if (amount) stats.push(`Project funding: ¥${amount / 1_000_000}M`)
  return stats.join(' · ')
}

export function GrantsSection() {
  return (
    <SectionContainer id="funding">
      <SectionTitle>Funding</SectionTitle>

      <DatedList>
        {grants.map((grant) => (
          <DatedItem key={grant.title} date={grant.date} endDate={grant.endDate}>
            {grant.url ? (
              <a
                href={grant.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary hover:underline"
              >
                {grant.program}
              </a>
            ) : (
              <span className="font-medium">{grant.program}</span>
            )}
            <span className="block text-muted-foreground">{grant.title}</span>
            {grantStats(grant) && (
              <span className="block text-xs text-primary/80 tabular-nums">{grantStats(grant)}</span>
            )}
          </DatedItem>
        ))}
      </DatedList>
    </SectionContainer>
  )
}
