import type { PropsWithChildren } from 'react'
import { Tag } from '../../../shared/ui/Tag/Tag'

type PortfolioCardProps = PropsWithChildren<{
  className?: string
}>

export function PortfolioCard({ className, children }: PortfolioCardProps) {
  const classes = className ? `portfolio-card ${className}` : 'portfolio-card'
  return <div className={classes}>{children}</div>
}

type PortfolioTagListProps = {
  items: string[]
  ariaLabel: string
  tone?: 'neutral' | 'accent'
}

export function PortfolioTagList({ items, ariaLabel, tone = 'neutral' }: PortfolioTagListProps) {
  return (
    <div className="tag-list" aria-label={ariaLabel}>
      {items.map((item) => (
        <Tag key={item} tone={tone}>
          {item}
        </Tag>
      ))}
    </div>
  )
}
