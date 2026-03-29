import type { PropsWithChildren } from 'react'
import './Tag.css'

type TagProps = PropsWithChildren<{
  tone?: 'neutral' | 'accent'
}>

export function Tag({ tone = 'neutral', children }: TagProps) {
  return <span className={`tag tag-${tone}`}>{children}</span>
}
