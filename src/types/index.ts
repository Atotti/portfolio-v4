export interface Skill {
  name: string
  icon: React.ReactNode
  percentage: number
}

export interface Work {
  title: string
  url: string
  description: string
  additionalLink?: {
    url: string
    text: string
  }
}

export interface Publication {
  type: 'international' | 'domestic' | 'book'
  authors: string
  title: string
  venue: string
  year: string
  links?: {
    paper?: string
    poster?: string
    slides?: string
  }
}

export interface Award {
  title: string
  award: string
  date: string
}

export interface Career {
  date: string
  title: string
  description: string
}

export interface Article {
  title: string
  url: string
}
