import { useLocale } from '../i18n/useLocale'
import { statusLabels } from '../i18n/translations'
import type { Project, ProjectStatus } from '../types/content'

const STATUS_STYLES: Record<ProjectStatus, string> = {
  listo: 'bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400',
  'en-progreso': 'bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400',
  futuro: 'bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400',
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, t } = useLocale()

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 transition-shadow hover:shadow-lg dark:border-neutral-800">
      {project.image && (
        <img className="h-40 w-full object-cover" src={project.image} alt="" loading="lazy" />
      )}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{project.title}</h3>
          <span
            className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[project.status]}`}
          >
            {statusLabels[locale][project.status]}
          </span>
        </div>
        {project.description && <p className="text-neutral-500 dark:text-neutral-400">{project.description}</p>}
        {project.stack.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
        {(project.repoUrl || project.demoUrl) && (
          <div className="flex gap-4">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-violet-600 hover:underline dark:text-violet-400"
              >
                {t('project_repo')}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-violet-600 hover:underline dark:text-violet-400"
              >
                {t('project_demo')}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
