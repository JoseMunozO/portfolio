import { useLocale } from '../i18n/useLocale'
import type { ContactLink } from '../types/content'

interface ContactProps {
  links: ContactLink[]
}

export function Contact({ links }: ContactProps) {
  const { t } = useLocale()

  return (
    <section
      id="contacto"
      className="border-t border-neutral-200 px-5 py-10 text-center dark:border-neutral-800 md:px-8 md:py-16"
    >
      <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 md:text-2xl">
        {t('contact_title')}
      </h2>
      {links.length > 0 && (
        <ul className="mt-5 flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-lg border border-neutral-200 px-5 py-2.5 text-neutral-900 no-underline transition-shadow hover:shadow-lg dark:border-neutral-800 dark:text-neutral-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
