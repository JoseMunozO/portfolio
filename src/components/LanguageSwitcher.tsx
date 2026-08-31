import { useLocale } from '../i18n/useLocale'
import { LOCALES, LOCALE_LABEL } from '../i18n/locale'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div
      className="flex gap-1 rounded-full border border-neutral-200 p-0.5 dark:border-neutral-800"
      role="group"
      aria-label="Idioma / Language / Språk"
    >
      {LOCALES.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-pressed={loc === locale}
          onClick={() => setLocale(loc)}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            loc === locale
              ? 'bg-violet-600/10 text-violet-600 dark:bg-violet-400/15 dark:text-violet-400'
              : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
          }`}
        >
          {LOCALE_LABEL[loc]}
        </button>
      ))}
    </div>
  )
}
