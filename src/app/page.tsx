import { Sidebar } from '@/components/common/Sidebar'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { WorksSection } from '@/components/sections/WorksSection'
import { PublicationsSection } from '@/components/sections/PublicationsSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import { CareerSection } from '@/components/sections/CareerSection'
import { ArticlesSection } from '@/components/sections/ArticlesSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <PublicationsSection />
        <AwardsSection />
        <CareerSection />
        <ArticlesSection />
        <ContactSection />
      </main>
    </>
  )
}
