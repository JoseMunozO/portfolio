import type { Locale } from '../types/content'

export const LOCALES: Locale[] = ['es', 'en', 'sv']
export const DEFAULT_LOCALE: Locale = 'es'

export const LOCALE_LABEL: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  sv: 'SV',
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value)
}
