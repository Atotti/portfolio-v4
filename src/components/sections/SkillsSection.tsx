'use client'

import { useEffect, useRef } from 'react'
import { programmingLanguages, frameworks, dataInfra, tools } from '@/data/skills'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function SkillsSection() {
  const categories = [
    { title: 'Programming Languages', skills: programmingLanguages },
    { title: 'Frameworks & Libraries', skills: frameworks },
    { title: 'DataStore & Infra', skills: dataInfra },
    { title: 'Tools', skills: tools },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const allSkills = categories.flatMap((cat) => cat.skills)

  const SkillItem = ({ skill, index }: { skill: typeof allSkills[0]; index: number }) => (
    <div
      key={`${skill.name}-${index}`}
      className="flex flex-col items-center gap-2"
    >
      <div className="text-4xl text-primary">{skill.icon}</div>
      <div className="text-sm font-medium text-center whitespace-nowrap">
        {skill.name}
      </div>
      <div className="w-20 bg-secondary rounded-full h-1">
        <div
          className="bg-primary h-1 rounded-full transition-all"
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  )

  return (
    <SectionContainer id="skills" blur='0px' bgOpacity={0}>
      <SectionTitle>Skills</SectionTitle>

      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="overflow-x-hidden py-8"
          style={{ scrollBehavior: 'auto' }}
        >
          <div
            className="grid grid-rows-2 gap-x-8 gap-y-6"
            style={{
              gridAutoFlow: 'column',
              gridAutoColumns: 'max-content'
            }}
          >
            {/* 2回繰り返して無限スクロールを実現 */}
            {[...allSkills, ...allSkills].map((skill, index) => (
              <SkillItem key={`${skill.name}-${index}`} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
