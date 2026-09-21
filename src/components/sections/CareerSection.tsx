import { career } from '@/data/career'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { DatedList, DatedItem } from '@/components/common/DatedList'

export function CareerSection() {
  return (
    <SectionContainer id="career">
      <SectionTitle>Career</SectionTitle>

      <DatedList>
        {career.map((item) => (
          <DatedItem key={`${item.date}-${item.organization}`} date={item.date} endDate={item.endDate}>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-semibold">{item.organization}</span>
              <span className="rounded bg-primary/10 px-1.5 text-xs text-primary">{item.role}</span>
            </div>
            <p className="text-[13px] text-muted-foreground">{item.description}</p>
          </DatedItem>
        ))}
      </DatedList>
    </SectionContainer>
  )
}
