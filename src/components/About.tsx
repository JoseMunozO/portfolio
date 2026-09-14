import { useLocale } from '../i18n/useLocale'

interface AboutProps {
  bio: string
  skills: string[]
}

export function About({ bio, skills }: AboutProps) {
  const { t } = useLocale()

  return (
    <section
      id="sobre-mi"
      className="border-t border-neutral-200 px-5 py-10 text-center dark:border-neutral-800 md:px-8 md:py-16"
    >
      <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 md:text-2xl">
        {t('about_title')}
      </h2>
      {bio && <p className="mt-2 text-neutral-500 dark:text-neutral-400">{bio}</p>}
      {skills.length > 0 && (
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
