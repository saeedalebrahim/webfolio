import type { PropsWithChildren, ReactNode } from 'react'
import './Section.css'

type SectionProps = PropsWithChildren<{
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  actions?: ReactNode
}>

export function Section({ id, eyebrow, title, subtitle, actions, children }: SectionProps) {
  return (
    <section id={id} className="section-block" aria-labelledby={id ? `${id}-title` : undefined}>
      <header className="section-head">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        {actions ? <div className="section-actions">{actions}</div> : null}
      </header>
      {children}
    </section>
  )
}
