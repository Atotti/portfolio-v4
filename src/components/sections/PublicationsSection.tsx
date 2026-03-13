import { publications } from '@/data/publications'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function PublicationsSection() {
  const international = publications.filter((pub) => pub.type === 'international')
  const domestic = publications.filter((pub) => pub.type === 'domestic')
  const others = publications.filter((pub) => pub.type === 'others')

  return (
    <SectionContainer id="publications">
      <SectionTitle>Publications</SectionTitle>

      <div className="space-y-8 max-w-4xl mx-auto">
        {international.length > 0 && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">International conference</h3>
            <ul className="space-y-3">
              {international.map((pub, index) => (
                <li key={index} className="p-2 sm:p-3 hover:bg-secondary/50 rounded-lg transition-colors text-muted-foreground">
                  {pub.authors}. {pub.title}, {pub.venue} ({pub.year})
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
                          ,{' '}
                          <a
                            href={pub.links.poster}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            poster
                          </a>
                        </>
                      )}
                      ]
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {domestic.length > 0 && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Domestic conference</h3>
            <ul className="space-y-3">
              {domestic.map((pub, index) => (
                <li key={index} className="p-2 sm:p-3 hover:bg-secondary/50 rounded-lg transition-colors text-muted-foreground">
                  {pub.authors}. {pub.title}, {pub.venue} ({pub.year})
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
                          ,{' '}
                          <a
                            href={pub.links.poster}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            poster
                          </a>
                        </>
                      )}
                      ]
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {others.length > 0 && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Others</h3>
            <ul className="space-y-3">
              {others.map((pub, index) => (
                <li key={index} className="p-2 sm:p-3 hover:bg-secondary/50 rounded-lg transition-colors text-muted-foreground">
                  {pub.authors}. {pub.title}, {pub.venue} ({pub.year})
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
                          ,{' '}
                          <a
                            href={pub.links.poster}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            poster
                          </a>
                        </>
                      )}
                      ]
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </SectionContainer>
  )
}
