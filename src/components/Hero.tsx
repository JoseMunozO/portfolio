import { useLocale } from '../i18n/useLocale'

interface HeroProps {
  name: string
  role: string
  tagline: string
}

export function Hero({ name, role, tagline }: HeroProps) {
  const { t } = useLocale()

  return (
    <section id="inicio" className="px-5 py-12 text-center md:px-8 md:py-24">
      <p className="mb-2 font-semibold text-violet-600 dark:text-violet-400">{role}</p>
      <h1 className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 md:text-6xl">
        {name}
      </h1>
      {tagline && (
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-500 dark:text-neutral-400">{tagline}</p>
      )}
      <div className="mt-8 flex justify-center gap-3">
        <a
          href="#proyectos"
          className="inline-flex items-center rounded-lg border-2 border-transparent bg-violet-600/10 px-5 py-2.5 text-[15px] text-violet-600 no-underline transition-colors hover:border-violet-600/50 dark:bg-violet-400/15 dark:text-violet-400 dark:hover:border-violet-400/50"
        >
          {t('hero_cta_projects')}
        </a>
        <a
          href="#contacto"
          className="inline-flex items-center rounded-lg border border-neutral-200 px-5 py-2.5 text-[15px] text-neutral-900 no-underline transition-shadow hover:shadow-lg dark:border-neutral-800 dark:text-neutral-100"
        >
          {t('hero_cta_contact')}
        </a>
      </div>
    </section>
  )
}
