import { useState } from 'react'
import { useLocale } from '../i18n/useLocale'
import { statusFilterLabels } from '../i18n/translations'
import type { Project, ProjectStatus } from '../types/content'
import { ProjectCard } from './ProjectCard'

const STATUS_FILTERS: ProjectStatus[] = ['listo', 'en-progreso', 'futuro']

function filterTabClass(active: boolean) {
  return `rounded-full border px-4 py-2 text-sm transition-colors ${
    active
      ? 'border-violet-600/50 bg-violet-600/10 text-violet-600 dark:border-violet-400/50 dark:bg-violet-400/15 dark:text-violet-400'
      : 'border-neutral-200 text-neutral-500 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100'
  }`
}

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  const { locale, t } = useLocale()
  const [filter, setFilter] = useState<ProjectStatus | 'todos'>('todos')

  const visible = filter === 'todos' ? projects : projects.filter((p) => p.status === filter)

  return (
    <section id="proyectos" className="border-t border-neutral-200 px-5 py-10 dark:border-neutral-800 md:px-8 md:py-16">
      <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 md:text-2xl">
        {t('projects_title')}
      </h2>
      <div role="tablist" className="mt-5 mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          role="tab"
          aria-selected={filter === 'todos'}
          className={filterTabClass(filter === 'todos')}
          onClick={() => setFilter('todos')}
        >
          {t('projects_filter_all')}
        </button>
        {STATUS_FILTERS.map((status) => (
          <button
            key={status}
            type="button"
            role="tab"
            aria-selected={filter === status}
            className={filterTabClass(filter === status)}
            onClick={() => setFilter(status)}
          >
            {statusFilterLabels[locale][status]}
          </button>
        ))}
      </div>
      {visible.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-neutral-500 dark:text-neutral-400">{t('projects_empty')}</p>
      )}
    </section>
  )
}
