import { Section } from '../../../shared/ui/Section/Section'
import type { PortfolioExperience } from '../types'

type ExperienceSectionProps = {
  experience: PortfolioExperience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Section
      id="experience"
      eyebrow="Work Experience"
      title="Production delivery across Flutter and .NET"
      subtitle="Roles and achievements based on real-world product work, freelance delivery, and cross-functional execution."
    >
      <ul className="timeline" aria-label="Work experience timeline">
        {experience.map((item) => (
          <li key={item.id} className="timeline-item">
            <div className="timeline-head">
              <h3>{item.role}</h3>
              <p>
                {item.company} | {item.location}
              </p>
              <p>{item.period}</p>
            </div>
            <ul className="timeline-highlights" aria-label={`${item.role} highlights`}>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
