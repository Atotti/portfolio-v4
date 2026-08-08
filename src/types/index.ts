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
  type: 'international' | 'domestic' | 'others'
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
  /** 開始時期 */
  date: string
  /** 終了時期。継続中は 'Present'、単発の出来事は省略 */
  endDate?: string
  title: string
  description: string
}

export interface News {
  date: string
  title: string
  description?: string
  url?: string
}

export interface Article {
  title: string
  url: string
}
