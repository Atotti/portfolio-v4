import { articles } from '@/data/articles'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function ArticlesSection() {
  return (
    <SectionContainer id="articles">
      <SectionTitle>Articles</SectionTitle>

      <div className="space-y-4 max-w-4xl mx-auto">
        {articles.map((article) => (
          <div key={article.url} className="p-3 sm:p-4 hover:bg-secondary/50 rounded-lg transition-colors">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-base sm:text-lg"
            >
              {article.title}
            </a>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
