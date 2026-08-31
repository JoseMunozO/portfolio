import { useLocale } from '../i18n/useLocale'
import type { ContactLink } from '../types/content'

interface ContactProps {
  links: ContactLink[]
}

export function Contact({ links }: ContactProps) {
  const { t } = useLocale()

  return (
    <section className="contact-section" id="contacto">
      <h2>{t('contact_title')}</h2>
      {links.length > 0 && (
        <ul className="contact-section__links">
          {links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
