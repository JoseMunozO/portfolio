import { useLocale } from '../i18n/useLocale'
import { statusLabels } from '../i18n/translations'
import type { Project } from '../types/content'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, t } = useLocale()

  return (
    <article className="project-card">
      {project.image && (
        <img className="project-card__image" src={project.image} alt="" loading="lazy" />
      )}
      <div className="project-card__body">
        <div className="project-card__header">
          <h3>{project.title}</h3>
          <span className={`status-badge status-badge--${project.status}`}>
            {statusLabels[locale][project.status]}
          </span>
        </div>
        {project.description && <p>{project.description}</p>}
        {project.stack.length > 0 && (
          <ul className="tag-list">
            {project.stack.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        )}
        {(project.repoUrl || project.demoUrl) && (
          <div className="project-card__links">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                {t('project_repo')}
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                {t('project_demo')}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
