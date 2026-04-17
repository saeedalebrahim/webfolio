import type { ExternalLink } from '../../shared/types/common'

export type PortfolioProject = {
  id: string
  name: string
  summary: string
  description?: string
  features?: string[]
  capabilities?: string[]
  images?: string[]
  tech: string[]
  link: ExternalLink
}

export type PortfolioExperience = {
  id: string
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export type PortfolioSkillGroup = {
  category: string
  items: string[]
}

export type PortfolioEducation = {
  degree: string
  institution: string
  status: string
}

export type PortfolioLanguage = {
  name: string
  level: string
}

export type PortfolioProfile = {
  fullName: string
  role: string
  intro: string
  experienceStartYear: number
  location: string
  availability: string
  skills: string[]
}

export type PortfolioData = {
  profile: PortfolioProfile
  experience: PortfolioExperience[]
  skillGroups: PortfolioSkillGroup[]
  education: PortfolioEducation
  languages: PortfolioLanguage[]
  projects: PortfolioProject[]
  links: ExternalLink[]
}
