import { Section } from '../../../shared/ui/Section/Section'
import { PortfolioCard, PortfolioTagList } from './PortfolioPrimitives'
import type { PortfolioProject } from '../types'

type ProjectsSectionProps = {
  projects: PortfolioProject[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Published app showcase"
      subtitle="A real production app example with public distribution and commercial feature integrations."
    >
      <ul className="project-grid" aria-label="Project list">
        {projects.map((project) => (
          <li key={project.id} className="project-card">
            <PortfolioCard>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <PortfolioTagList items={project.tech} ariaLabel={`${project.name} technologies`} />
              <a href={project.link.href} className="project-link" target="_blank" rel="noreferrer">
                {project.link.label}
              </a>
            </PortfolioCard>
          </li>
        ))}
      </ul>
    </Section>
  )
}
