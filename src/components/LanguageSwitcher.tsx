import { useLocale } from '../i18n/useLocale'
import { LOCALES, LOCALE_LABEL } from '../i18n/locale'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="language-switcher" role="group" aria-label="Idioma / Language / Språk">
      {LOCALES.map((loc) => (
        <button
          key={loc}
          type="button"
          className={`language-switcher__option${loc === locale ? ' language-switcher__option--active' : ''}`}
          aria-pressed={loc === locale}
          onClick={() => setLocale(loc)}
        >
          {LOCALE_LABEL[loc]}
        </button>
      ))}
    </div>
  )
}
