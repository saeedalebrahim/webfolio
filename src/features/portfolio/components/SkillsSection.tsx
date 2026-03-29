import { Section } from '../../../shared/ui/Section/Section'
import { PortfolioCard, PortfolioTagList } from './PortfolioPrimitives'
import type { PortfolioSkillGroup } from '../types'

type SkillsSectionProps = {
  skillGroups: PortfolioSkillGroup[]
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="Stack and delivery toolkit"
      subtitle="Core technologies and practices used in production mobile and backend development."
    >
      <ul className="skill-groups" aria-label="Technical skills by category">
        {skillGroups.map((group) => (
          <li key={group.category} className="skill-group-card">
            <PortfolioCard>
              <h3>{group.category}</h3>
              <PortfolioTagList items={group.items} ariaLabel={`${group.category} skills`} />
            </PortfolioCard>
          </li>
        ))}
      </ul>
    </Section>
  )
}
