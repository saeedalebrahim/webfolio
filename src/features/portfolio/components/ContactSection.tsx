import { Section } from '../../../shared/ui/Section/Section'
import type { ExternalLink } from '../../../shared/types/common'

type ContactSectionProps = {
  links: ExternalLink[]
}

export function ContactSection({ links }: ContactSectionProps) {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to Senior Flutter opportunities"
      subtitle="Based in Turin and available for EU remote roles. Reach out for mobile, backend, or full product delivery collaboration."
    >
      <ul className="contact-list" aria-label="Contact links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="contact-link" target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
