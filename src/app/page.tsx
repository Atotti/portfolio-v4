'use client'

import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Sidebar } from '@/components/common/Sidebar'
import { AboutSection } from '@/components/sections/AboutSection'
import { NewsSection } from '@/components/sections/NewsSection'
import { PublicationsSection } from '@/components/sections/PublicationsSection'
import { AwardsSection } from '@/components/sections/AwardsSection'
import { CareerSection } from '@/components/sections/CareerSection'
import { WorksSection } from '@/components/sections/WorksSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ArticlesSection } from '@/components/sections/ArticlesSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/*
        背景画像。background-attachment: fixed は iOS Safari で拡大・ズレが起きるため、
        画面全体に固定した専用レイヤーとして敷く。
        モバイルは縦長画像の下部（キャラクター）に合わせ、md 以上は中央基準。
      */}
      <div className="fixed inset-0 -z-10 bg-responsive bg-cover bg-bottom bg-no-repeat md:bg-center" />

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
        <NewsSection />
        <PublicationsSection />
        <CareerSection />
        <SkillsSection />
        <WorksSection />
        <AwardsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
    </div>
  )
}
