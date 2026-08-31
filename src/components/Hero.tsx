import { useLocale } from '../i18n/useLocale'

interface HeroProps {
  name: string
  role: string
  tagline: string
}

export function Hero({ name, role, tagline }: HeroProps) {
  const { t } = useLocale()

  return (
    <section className="hero-section" id="inicio">
      <p className="hero-section__role">{role}</p>
      <h1>{name}</h1>
      {tagline && <p className="hero-section__tagline">{tagline}</p>}
      <div className="hero-section__actions">
        <a className="button button--primary" href="#proyectos">
          {t('hero_cta_projects')}
        </a>
        <a className="button button--ghost" href="#contacto">
          {t('hero_cta_contact')}
        </a>
      </div>
    </section>
  )
}
