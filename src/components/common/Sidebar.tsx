'use client'

import { FaTwitter, FaGithub } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'works', label: 'Works' },
  { id: 'publications', label: 'Publications' },
  { id: 'awards', label: 'Awards' },
  { id: 'career', label: 'Career' },
  { id: 'articles', label: 'Articles' },
  { id: 'contact', label: 'Contact' },
]

interface SidebarProps {
  isMobileMenuOpen: boolean
  onClose: () => void
}

export function Sidebar({ isMobileMenuOpen, onClose }: SidebarProps) {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    onClose() // モバイルメニューを閉じる
  }

  // モバイルメニュー開閉時の背景スクロール防止
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Sidebarのコンテンツ
  const sidebarContent = (
    <>
      <nav className="flex-1 overflow-y-auto px-6 pt-12">
        <ul className="space-y-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavClick(id)}
                className={`w-full text-left py-3 px-4 transition-all relative group ${
                  activeSection === id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all ${
                  activeSection === id
                    ? 'bg-primary'
                    : 'bg-transparent group-hover:bg-border'
                }`} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-8 py-10 flex items-center gap-6 border-t border-border/40">
        <a
          href="https://twitter.com/ayutaso"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-muted-foreground hover:text-primary transition-colors"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/ayutaso"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </>
  )

  return (
    <>
      {/* モバイル用オーバーレイ */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-label="メニューを閉じる"
        />
      )}

      {/* モバイル用Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 z-50 md:hidden backdrop-blur-[2px] border-r border-white/10 flex flex-col transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        {sidebarContent}
      </aside>

      {/* デスクトップ用Sidebar */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-screen w-64 backdrop-blur-[2px] border-r border-white/10 flex-col"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
