export type Locale = 'en' | 'sv' | 'es'

export type ProjectStatus = 'listo' | 'en-progreso' | 'futuro'

export interface Project {
  slug: string
  title: string
  status: ProjectStatus
  description: string
  stack: string[]
  image?: string
  repoUrl?: string
  demoUrl?: string
  featured: boolean
  date?: string
  body: string
}

export interface ContactLink {
  label: string
  url: string
}

export interface SiteSettings {
  name: string
  role: string
  tagline: string
  bio: string
  skills: string[]
  contactLinks: ContactLink[]
}
