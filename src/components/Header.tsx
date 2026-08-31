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
    <header className="site-header">
      <a className="site-header__name" href="#">
        {name}
      </a>
      <div className="site-header__right">
        <nav className="site-header__nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
