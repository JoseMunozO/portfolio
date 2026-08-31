import { getProjects, getSiteSettings } from './lib/content'
import { LocaleProvider } from './i18n/LocaleContext'
import { useLocale } from './i18n/useLocale'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function PortfolioPage() {
  const { locale } = useLocale()
  const settings = getSiteSettings(locale)
  const projects = getProjects(locale)

  return (
    <>
      <Header name={settings.name} />
      <main>
        <Hero name={settings.name} role={settings.role} tagline={settings.tagline} />
        <Projects projects={projects} />
        <About bio={settings.bio} skills={settings.skills} />
        <Contact links={settings.contactLinks} />
      </main>
      <Footer name={settings.name} />
    </>
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
