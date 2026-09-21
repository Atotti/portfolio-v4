import { programmingLanguages, frameworks, dataInfra, tools } from '@/data/skills'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

const categories = [
  { title: 'Languages', skills: programmingLanguages },
  { title: 'Frameworks', skills: frameworks },
  { title: 'Data & Infra', skills: dataInfra },
  { title: 'Tools', skills: tools },
]

export function SkillsSection() {
  return (
    <SectionContainer id="skills">
      <SectionTitle>Skills</SectionTitle>

      <dl className="space-y-2">
        {categories.map(({ title, skills }) => (
          <div key={title} className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-[8.5rem_1fr]">
            <dt className="text-sm text-primary sm:pt-0.5">{title}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1 rounded border border-foreground/10 bg-white/40 px-1.5 py-0.5 text-xs"
                >
                  <span className="text-primary">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </SectionContainer>
  )
}
