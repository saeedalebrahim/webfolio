import type { PortfolioData } from '../types'

const portfolioData: PortfolioData = {
  profile: {
    fullName: 'Alex Carter',
    role: 'Frontend Engineer',
    intro:
      'I design and build fast, accessible interfaces with a focus on product clarity, measurable performance, and maintainable systems.',
    experienceStartYear: 2021,
    location: 'Remote, UTC+8',
    skills: ['React', 'TypeScript', 'Vite', 'Accessibility', 'Design Systems'],
  },
  projects: [
    {
      id: 'atlas-ui',
      name: 'Atlas UI Kit',
      summary:
        'Component library and docs portal with tokens, visual regression checks, and release automation for three product teams.',
      tech: ['React', 'Storybook', 'TypeScript'],
      link: { label: 'View case study', href: '#' },
    },
    {
      id: 'pulse-analytics',
      name: 'Pulse Analytics',
      summary:
        'Dashboard for campaign monitoring with custom charts, keyboard-first filters, and caching to keep interactions responsive.',
      tech: ['React', 'D3', 'TanStack Query'],
      link: { label: 'Read project notes', href: '#' },
    },
    {
      id: 'quiet-forms',
      name: 'Quiet Forms',
      summary:
        'Conversion-focused form platform using schema-driven validation and runtime analytics to improve completion rate.',
      tech: ['React Hook Form', 'Zod', 'Node API'],
      link: { label: 'See live preview', href: '#' },
    },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Email', href: 'mailto:hello@example.dev' },
  ],
}

export async function getPortfolioData(): Promise<PortfolioData> {
  // Simulate network latency to model real data loading states.
  await new Promise((resolve) => {
    setTimeout(resolve, 200)
  })

  return portfolioData
}
