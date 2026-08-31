import { useMemo, useState, type ReactNode } from 'react'
import type { Locale } from '../types/content'
import { DEFAULT_LOCALE, isLocale } from './locale'
import { translations } from './translations'
import { LocaleContext, type LocaleContextValue } from './context'

const STORAGE_KEY = 'portfolio-locale'

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && isLocale(stored)) return stored
  } catch {
    // localStorage no disponible (modo privado, etc.)
  }
  return DEFAULT_LOCALE
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignorar si localStorage no está disponible
    }
  }

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => translations[locale][key],
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
