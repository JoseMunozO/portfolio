import { getProjects, getSiteSettings } from './lib/content'
import { LocaleProvider } from './i18n/LocaleContext'
import { useLocale } from './i18n/useLocale'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function PortfolioPage() {
  const { locale } = useLocale()
  const settings = getSiteSettings(locale)
  const projects = getProjects(locale)

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[1126px] flex-col border-x border-neutral-200 bg-white text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
      <Header name={settings.name} />
      <main className="flex-1">
        <Hero name={settings.name} role={settings.role} tagline={settings.tagline} />
        <Projects projects={projects} />
        <About bio={settings.bio} skills={settings.skills} />
        <Contact links={settings.contactLinks} />
      </main>
      <Footer name={settings.name} />
    </div>
  )
}

function App() {
  return (
    <LocaleProvider>
      <PortfolioPage />
    </LocaleProvider>
  )
}

export default App
