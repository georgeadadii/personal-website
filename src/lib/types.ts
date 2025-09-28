export type Project = {
  slug: string
  title: string
  description: string
  year: string
  highlights: string[]
  tech: string[]
  repo?: string
  link?: string
  image?: string
  featured?: boolean
}

export type Experience = {
  org: string
  role: string
  start: string // "2025-06"
  end?: string // "present" | "2025-09"
  bullets: string[]
}

export type Volunteering = {
  org: string
  role: string
  start: string // "2025-06"
  end?: string // "present" | "2025-09"
  bullets: string[]
}

export type Skill = {
  name: string
  group:
    | 'Frontend'
    | 'Backend'
    | 'Cloud'
    | 'DevOps'
    | 'Languages'
    | 'Databases'
    | 'Other'
}
