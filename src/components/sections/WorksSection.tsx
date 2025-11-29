import { works } from '@/data/works'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function WorksSection() {
  return (
    <SectionContainer id="works">
      <SectionTitle>Works</SectionTitle>

      <div className="space-y-4 max-w-4xl mx-auto">
        {works.map((work) => (
          <div key={work.title} className="p-3 sm:p-4 hover:bg-secondary/50 rounded-lg transition-colors">
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-base sm:text-lg"
            >
              {work.title}
            </a>
            {work.description && (
              <p className="text-muted-foreground mt-1">{work.description}</p>
            )}
            {work.additionalLink && (
              <a
                href={work.additionalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline block mt-2"
              >
                {work.additionalLink.text}
              </a>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
