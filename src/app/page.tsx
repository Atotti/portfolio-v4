'use client'

import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div
      className="min-h-screen bg-responsive bg-cover bg-center bg-bottom md:bg-right md:bg-center bg-fixed"
    >
      {/* ハンバーガーメニューボタン（モバイルのみ） */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-white/30 backdrop-blur-sm border border-white/20"
        aria-label="メニューを開く"
      >
        <HiMenuAlt3 size={28} className="text-foreground" />
      </button>

      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className="md:ml-64 min-h-screen">
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <PublicationsSection />
        <AwardsSection />
        <CareerSection />
        <ArticlesSection />
        <ContactSection />
      </main>
    </div>
  )
}
