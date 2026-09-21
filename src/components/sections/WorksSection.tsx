import { works } from '@/data/works'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function WorksSection() {
  return (
    <SectionContainer id="works">
      <SectionTitle>Works</SectionTitle>

      <ul className="divide-y divide-foreground/10">
        {works.map((work) => (
          <li key={work.title} className="py-1.5 text-sm sm:text-[15px] leading-relaxed">
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              {work.title}
            </a>
            {work.description && (
              <span className="text-muted-foreground"> — {work.description}</span>
            )}
            {work.additionalLink && (
              <>
                {' '}
                [
                <a
                  href={work.additionalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {work.additionalLink.text}
                </a>
                ]
              </>
            )}
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
