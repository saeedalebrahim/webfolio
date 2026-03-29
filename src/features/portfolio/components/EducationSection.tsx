import { Section } from '../../../shared/ui/Section/Section'
import { Tag } from '../../../shared/ui/Tag/Tag'
import type { PortfolioEducation, PortfolioLanguage } from '../types'

type EducationSectionProps = {
  education: PortfolioEducation
  languages: PortfolioLanguage[]
}

export function EducationSection({ education, languages }: EducationSectionProps) {
  return (
    <Section
      id="education"
      eyebrow="Education & Languages"
      title="Academic track and communication"
      subtitle="Current degree progress and language proficiency for international teams."
    >
      <div className="education-card">
        <h3>{education.degree}</h3>
        <p>{education.institution}</p>
        <p>Status: {education.status}</p>
      </div>

      <div className="language-block" aria-label="Languages">
        <h3>Languages</h3>
        <div className="tag-list">
          {languages.map((language) => (
            <Tag key={language.name} tone="accent">
              {language.name} ({language.level})
            </Tag>
          ))}
        </div>
      </div>
    </Section>
  )
}
