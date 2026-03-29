import { Section } from '../../../shared/ui/Section/Section'
import { PortfolioCard, PortfolioTagList } from './PortfolioPrimitives'
import type { PortfolioEducation, PortfolioLanguage } from '../types'

type EducationSectionProps = {
  education: PortfolioEducation
  languages: PortfolioLanguage[]
}

export function EducationSection({ education, languages }: EducationSectionProps) {
  const languageLabels = languages.map((language) => `${language.name} (${language.level})`)

  return (
    <Section
      id="education"
      eyebrow="Education & Languages"
      title="Academic track and communication"
      subtitle="Current degree progress and language proficiency for international teams."
    >
      <PortfolioCard className="education-card">
        <h3>{education.degree}</h3>
        <p>{education.institution}</p>
        <p>Status: {education.status}</p>
      </PortfolioCard>

      <PortfolioCard className="language-block">
        <h3>Languages</h3>
        <PortfolioTagList items={languageLabels} ariaLabel="Language proficiency" tone="accent" />
      </PortfolioCard>
    </Section>
  )
}
