import { career } from '@/data/career'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function CareerSection() {
  return (
    <SectionContainer id="career">
      <SectionTitle>Career</SectionTitle>

      <div className="relative max-w-4xl mx-auto">
        {/* 中央の縦線 */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

        <div className="space-y-8">
          {career.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* 円 */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -ml-[7px] md:-ml-[8px]" />

              {/* コンテンツ */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 p-4 hover:bg-secondary/50 rounded-lg transition-colors ${
                  index % 2 === 0
                    ? 'md:pr-12 md:text-right'
                    : 'md:pl-12 md:text-left'
                }`}
              >
                <div className="text-primary font-semibold mb-1">
                  {item.date}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
