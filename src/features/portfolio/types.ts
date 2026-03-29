import type { ExternalLink } from '../../shared/types/common'

export type PortfolioProject = {
  id: string
  name: string
  summary: string
  tech: string[]
  link: ExternalLink
}

export type PortfolioProfile = {
  fullName: string
  role: string
  intro: string
  experienceStartYear: number
  location: string
  skills: string[]
}

export type PortfolioData = {
  profile: PortfolioProfile
  projects: PortfolioProject[]
  links: ExternalLink[]
}
