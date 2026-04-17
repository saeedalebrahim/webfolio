import { useParams, useNavigate } from 'react-router-dom'
import { usePortfolioData } from '../hooks/usePortfolioData'
import { PortfolioTagList } from './PortfolioPrimitives'
import './showcase-detail.css'

export function ShowcaseDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  const { data, loading, error } = usePortfolioData()

  if (!projectId) {
    return (
      <div className="showcase-detail">
        <div className="showcase-container">
          <p>Project ID not found</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="showcase-detail">
        <div className="showcase-container">
          <p>Loading project details...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="showcase-detail">
        <div className="showcase-container">
          <p>Error loading project</p>
        </div>
      </div>
    )
  }

  const project = data.projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="showcase-detail">
        <div className="showcase-container">
          <p>Project not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="showcase-detail">
      <div className="showcase-container">
        <button className="back-button" onClick={() => navigate('/#projects')}>
          ← Back to Portfolio
        </button>

        <article className="showcase-article">
          <header className="showcase-header">
            <h1>{project.name}</h1>
            <p className="showcase-summary">{project.summary}</p>
          </header>

          {project.description && (
            <section className="showcase-section">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section className="showcase-section">
              <h2>Features</h2>
              <ul className="features-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {project.capabilities && project.capabilities.length > 0 && (
            <section className="showcase-section">
              <h2>Capabilities</h2>
              <ul className="capabilities-list">
                {project.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="showcase-section">
            <h2>Technologies</h2>
            <PortfolioTagList items={project.tech} ariaLabel={`${project.name} technologies`} />
          </section>

          <section className="showcase-cta">
            <a href={project.link.href} className="project-cta-link" target="_blank" rel="noreferrer">
              {project.link.label}
            </a>
          </section>
        </article>
      </div>
    </div>
  )
}
