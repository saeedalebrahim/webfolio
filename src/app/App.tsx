import { AppRoutes } from './routes/routes'
import { useAppSettings } from './providers/providers'
import './app.css'

function App() {
  const settings = useAppSettings()

  return (
    <div className="app-shell">
      <header className="app-header">
        <p className="brand">Webfolio</p>
        <nav aria-label="Primary">
          <a href="#intro">Intro</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="app-main">
        <AppRoutes />
      </main>

      <footer className="app-footer">
        <span>{settings.buildLabel}</span>
        <span className={settings.availableForWork ? 'status-open' : 'status-closed'}>
          {settings.availableForWork ? 'Open to opportunities' : 'Unavailable'}
        </span>
      </footer>
    </div>
  )
}

export default App
