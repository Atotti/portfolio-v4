import { articles } from '@/data/articles'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function ArticlesSection() {
  return (
    <SectionContainer id="articles">
      <SectionTitle>Articles</SectionTitle>

      <ul className="divide-y divide-foreground/10">
        {articles.map((article) => (
          <li key={article.url} className="py-1.5 text-sm sm:text-[15px]">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
