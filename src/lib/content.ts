import { load } from 'js-yaml'
import { parseFrontmatter } from './frontmatter'
import { DEFAULT_LOCALE } from '../i18n/locale'
import type { Locale, Project, SiteSettings } from '../types/content'

const LOCALE_SUFFIX = /\.(en|sv|es)\.\w+$/

function localeOf(path: string): Locale | null {
  const match = path.match(LOCALE_SUFFIX)
  return (match?.[1] as Locale | undefined) ?? null
}

// content/projects/<slug>.<locale>.md — estructura i18n "multiple_files" de Decap CMS
const projectFiles = import.meta.glob('/content/projects/*.*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function slugOf(path: string): string {
  return path.split('/').pop()!.replace(/\.(en|sv|es)\.md$/, '')
}

export function getProjects(locale: Locale): Project[] {
  const bySlug = new Map<string, Partial<Record<Locale, Project>>>()

  for (const [path, raw] of Object.entries(projectFiles)) {
    const fileLocale = localeOf(path)
    if (!fileLocale) continue
    const slug = slugOf(path)
    const { data, content } = parseFrontmatter<Project>(raw)
    const project: Project = {
      slug,
      title: data.title ?? slug,
      status: data.status ?? 'en-progreso',
      description: data.description ?? '',
      stack: data.stack ?? [],
      image: data.image,
      repoUrl: data.repoUrl,
      demoUrl: data.demoUrl,
      featured: data.featured ?? false,
      date: data.date,
      body: content,
    }
    if (!bySlug.has(slug)) bySlug.set(slug, {})
    bySlug.get(slug)![fileLocale] = project
  }

  return Array.from(bySlug.values())
    .map((byLocale) => byLocale[locale] ?? byLocale[DEFAULT_LOCALE])
    .filter((project): project is Project => Boolean(project))
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
}

// content/settings/general.<locale>.yml
const settingsFiles = import.meta.glob('/content/settings/general.*.yml', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const defaultSettings: SiteSettings = {
  name: 'Tu nombre',
  role: 'Tu rol',
  tagline: '',
  bio: '',
  skills: [],
  contactLinks: [],
}

export function getSiteSettings(locale: Locale): SiteSettings {
  const byLocale = new Map<Locale, SiteSettings>()

  for (const [path, raw] of Object.entries(settingsFiles)) {
    const fileLocale = localeOf(path)
    if (!fileLocale) continue
    const data = (load(raw) ?? {}) as Partial<SiteSettings>
    byLocale.set(fileLocale, { ...defaultSettings, ...data })
  }

  return byLocale.get(locale) ?? byLocale.get(DEFAULT_LOCALE) ?? defaultSettings
}
