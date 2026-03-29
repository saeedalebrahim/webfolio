import { formatYearRange, toSentenceList } from '../../../shared/lib/format'
import { Section } from '../../../shared/ui/Section/Section'
import { Tag } from '../../../shared/ui/Tag/Tag'
import type { PortfolioProfile } from '../types'
import './portfolio.css'

type HeroSectionProps = {
  profile: PortfolioProfile
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <Section
      id="intro"
      eyebrow="Profile"
      title={`${profile.fullName} - ${profile.role}`}
      subtitle={`${profile.intro} Based in ${profile.location}.`}
    >
      <div className="hero-meta">
        <p>
          Experience: <strong>{formatYearRange(profile.experienceStartYear)}</strong>
        </p>
        <p>
          Focus: <strong>{toSentenceList(profile.skills.slice(0, 3))}</strong>
        </p>
      </div>
      <div className="tag-list" aria-label="Skills">
        {profile.skills.map((skill) => (
          <Tag key={skill} tone="accent">
            {skill}
          </Tag>
        ))}
      </div>
    </Section>
  )
}
