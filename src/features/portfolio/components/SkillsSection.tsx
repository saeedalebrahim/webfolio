import { Section } from '../../../shared/ui/Section/Section'
import { Tag } from '../../../shared/ui/Tag/Tag'
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
            <h3>{group.category}</h3>
            <div className="tag-list" aria-label={`${group.category} skills`}>
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
