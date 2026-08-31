import { createContext } from 'react'
import type { Locale } from '../types/content'
import type { TranslationKey } from './translations'

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
