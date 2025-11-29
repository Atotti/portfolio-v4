import { awards } from '@/data/awards'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function AwardsSection() {
  return (
    <SectionContainer id="awards">
      <SectionTitle>Awards</SectionTitle>

      <ul className="space-y-4 max-w-4xl mx-auto">
        {awards.map((award, index) => (
          <li key={index} className="flex items-start gap-3 p-3 hover:bg-secondary/50 rounded-lg transition-colors">
            <span className="text-primary text-2xl leading-none">•</span>
            <p className="text-muted-foreground flex-1">
              <span className="font-semibold text-foreground">{award.title}</span>. {award.award} ({award.date})
            </p>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
