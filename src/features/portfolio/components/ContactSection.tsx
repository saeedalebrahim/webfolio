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
      title="Open to product and platform roles"
      subtitle="If your team values accessibility, performance, and clear engineering practices, let us connect."
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
