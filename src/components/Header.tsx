import { useLocale } from '../i18n/useLocale'
import { LanguageSwitcher } from './LanguageSwitcher'

interface HeaderProps {
  name: string
}

export function Header({ name }: HeaderProps) {
  const { t } = useLocale()

  const navLinks = [
    { href: '#proyectos', label: t('nav_projects') },
    { href: '#sobre-mi', label: t('nav_about') },
    { href: '#contacto', label: t('nav_contact') },
  ]

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white px-5 py-4 dark:border-neutral-800 dark:bg-neutral-900 md:px-8 md:py-5">
      <a href="#" className="text-lg font-semibold text-neutral-900 no-underline dark:text-neutral-100">
        {name}
      </a>
      <div className="flex items-center gap-6">
        <nav className="hidden gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] text-neutral-500 no-underline transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
