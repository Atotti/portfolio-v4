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

export function Sidebar() {
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

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-background border-r border-border/40 flex flex-col">
      <nav className="flex-1 overflow-y-auto px-6 pt-12">
        <ul className="space-y-1">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollToSection(id)}
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
    </aside>
  )
}
