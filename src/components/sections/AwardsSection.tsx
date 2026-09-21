import { awards } from '@/data/awards'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { DatedList, DatedItem } from '@/components/common/DatedList'

export function AwardsSection() {
  return (
    <SectionContainer id="awards">
      <SectionTitle>Awards</SectionTitle>

      <DatedList>
        {awards.map((award) => (
          <DatedItem key={award.title} date={award.date}>
            <span className="font-medium">{award.award}</span>
            <span className="text-muted-foreground"> — {award.title}</span>
          </DatedItem>
        ))}
      </DatedList>
    </SectionContainer>
  )
}
