import { useState } from 'react'
import { useLocale } from '../i18n/useLocale'
import { statusFilterLabels } from '../i18n/translations'
import type { Project, ProjectStatus } from '../types/content'
import { ProjectCard } from './ProjectCard'

const STATUS_FILTERS: ProjectStatus[] = ['listo', 'en-progreso', 'futuro']

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  const { locale, t } = useLocale()
  const [filter, setFilter] = useState<ProjectStatus | 'todos'>('todos')

  const visible = filter === 'todos' ? projects : projects.filter((p) => p.status === filter)

  return (
    <section className="projects-section" id="proyectos">
      <h2>{t('projects_title')}</h2>
      <div className="projects-section__filters" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={filter === 'todos'}
          className={`filter-tab${filter === 'todos' ? ' filter-tab--active' : ''}`}
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
            className={`filter-tab${filter === status ? ' filter-tab--active' : ''}`}
            onClick={() => setFilter(status)}
          >
            {statusFilterLabels[locale][status]}
          </button>
        ))}
      </div>
      {visible.length > 0 ? (
        <div className="projects-section__grid">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="projects-section__empty">{t('projects_empty')}</p>
      )}
    </section>
  )
}
