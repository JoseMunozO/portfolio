import type { Locale, ProjectStatus } from '../types/content'

export const translations = {
  es: {
    nav_projects: 'Proyectos',
    nav_about: 'Sobre mí',
    nav_contact: 'Contacto',
    hero_cta_projects: 'Ver proyectos',
    hero_cta_contact: 'Contacto',
    projects_title: 'Proyectos',
    projects_filter_all: 'Todos',
    projects_empty: 'No hay proyectos en esta categoría todavía.',
    project_repo: 'Repositorio',
    project_demo: 'Demo',
    about_title: 'Sobre mí',
    contact_title: 'Contacto',
  },
  en: {
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_cta_projects: 'View projects',
    hero_cta_contact: 'Contact',
    projects_title: 'Projects',
    projects_filter_all: 'All',
    projects_empty: 'No projects in this category yet.',
    project_repo: 'Repository',
    project_demo: 'Demo',
    about_title: 'About',
    contact_title: 'Contact',
  },
  sv: {
    nav_projects: 'Projekt',
    nav_about: 'Om mig',
    nav_contact: 'Kontakt',
    hero_cta_projects: 'Se projekt',
    hero_cta_contact: 'Kontakt',
    projects_title: 'Projekt',
    projects_filter_all: 'Alla',
    projects_empty: 'Inga projekt i den här kategorin än.',
    project_repo: 'Repository',
    project_demo: 'Demo',
    about_title: 'Om mig',
    contact_title: 'Kontakt',
  },
} satisfies Record<Locale, Record<string, string>>

export type TranslationKey = keyof (typeof translations)['es']

export const statusLabels: Record<Locale, Record<ProjectStatus, string>> = {
  es: { listo: 'Listo', 'en-progreso': 'En progreso', futuro: 'Futuro' },
  en: { listo: 'Ready', 'en-progreso': 'In progress', futuro: 'Planned' },
  sv: { listo: 'Klar', 'en-progreso': 'Pågående', futuro: 'Framtida' },
}

export const statusFilterLabels: Record<Locale, Record<ProjectStatus, string>> = {
  es: { listo: 'Listos', 'en-progreso': 'En progreso', futuro: 'Futuros' },
  en: { listo: 'Ready', 'en-progreso': 'In progress', futuro: 'Planned' },
  sv: { listo: 'Klara', 'en-progreso': 'Pågående', futuro: 'Framtida' },
}
