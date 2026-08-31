import { useLocale } from '../i18n/useLocale'

interface AboutProps {
  bio: string
  skills: string[]
}

export function About({ bio, skills }: AboutProps) {
  const { t } = useLocale()

  return (
    <section className="about-section" id="sobre-mi">
      <h2>{t('about_title')}</h2>
      {bio && <p className="about-section__bio">{bio}</p>}
      {skills.length > 0 && (
        <ul className="tag-list">
          {skills.map((skill) => (
            <li key={skill} className="tag">
              {skill}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
