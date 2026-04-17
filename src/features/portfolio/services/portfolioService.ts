import type { PortfolioData } from '../types'

const portfolioData: PortfolioData = {
  profile: {
    fullName: 'Saeed Alebrahim',
    role: 'Senior Flutter Developer',
    intro:
      'Senior Flutter Developer with 5 years of production mobile experience, 10,000+ app downloads, and a full-stack background across Flutter and .NET backends.',
    experienceStartYear: 2019,
    location: 'Turin, Italy',
    availability: 'EU resident, available for remote roles in the EU.',
    skills: ['Flutter/Dart', 'BLoC', 'Riverpod', '.NET Core', 'REST APIs', 'Firebase'],
  },
  experience: [
    {
      id: 'goljaam',
      role: 'Senior Flutter Developer & Founder',
      company: 'GOLJAAM',
      location: 'Remote',
      period: 'August 2021 - Present',
      highlights: [
        'Published apps with 10K+ downloads, Google Play Billing integration, and gamification features.',
        'Architected Flutter apps with clean architecture, BLoC pattern, and offline-first capabilities.',
        'Built .NET Core backends with REST APIs and real-time data synchronization.',
        'Led development team delivery and established CI/CD pipelines.',
      ],
    },
    {
      id: 'goljaam-instructor',
      role: 'Mobile Development Instructor (Flutter)',
      company: 'GOLJAAM',
      location: 'Remote',
      period: '2023 - 2025',
      highlights: [
        'Instructed and mentored students in cross-platform app development with Flutter and Dart from foundations to advanced topics.',
        'Reviewed student code, provided debugging guidance, and coached app publishing workflows.',
      ],
    },
    {
      id: 'flutter-freelance',
      role: 'Flutter Developer',
      company: 'Freelancer',
      location: 'Remote',
      period: 'January 2021 - August 2021',
      highlights: [
        'Built custom Flutter apps for international clients.',
        'Integrated payment systems, Firebase services, and third-party APIs.',
      ],
    },
    {
      id: 'fullstack-freelance',
      role: 'Full-Stack Developer',
      company: 'Freelancer',
      location: 'Remote',
      period: 'January 2019 - December 2020',
      highlights: [
        'Developed web applications with JavaScript and .NET Core.',
        'Created RESTful APIs with ASP.NET Core MVC.',
      ],
    },
    {
      id: 'ux-freelance',
      role: 'UI/UX Designer',
      company: 'Freelancer',
      location: 'Remote',
      period: 'October 2019 - October 2021',
      highlights: [
        'Designed mobile and web interfaces with Figma and Adobe XD.',
      ],
    },
    {
      id: 'seminars-sponsorships',
      role: 'Seminars and Sponsorships',
      company: 'Academic and Professional Events',
      location: 'Iran',
      period: 'Selected engagements',
      highlights: [
        'Official IT sponsor for the 5th National Student Fluid Mechanics Competition at Shiraz University.',
        'Provided technical support and secure authentication infrastructure for the International Congress of the Iranian Academy of Periodontology.',
      ],
    },
  ],
  skillGroups: [
    {
      category: 'Mobile',
      items: [
        'Flutter/Dart (5 years)',
        'BLoC',
        'Riverpod',
        'Provider',
        'Google Play Billing',
        'Firebase',
        'SQLite',
        'Hive',
        'Dio',
      ],
    },
    {
      category: 'Backend',
      items: ['.NET Core', 'ASP.NET MVC', 'REST APIs'],
    },
    {
      category: 'Web',
      items: ['JavaScript', 'TypeScript'],
    },
    {
      category: 'Tools',
      items: ['Git', 'CI/CD', 'Figma', 'Agile/Scrum'],
    },
  ],
  education: {
    degree: 'Bachelor of Computer Engineering',
    institution: 'Polytechnic of Turin',
    status: 'In Progress',
  },
  languages: [
    { name: 'English', level: 'C1' },
    { name: 'Persian', level: 'Native' },
  ],
  projects: [
    {
      id: 'bilgimizde-app',
      name: 'Bilgimizde (Google Play)',
      summary:
        'Published production app with 10K+ downloads, mobile-first UX, and commercial feature integrations.',
      description:
        'Bilgimizde is a production Flutter app distributed on Google Play with a focus on engagement, reliability, and monetization-ready architecture.',
      features: [
        'Gamification-driven user journeys for stronger retention.',
        'Google Play Billing integration for commercial flows.',
        'Offline-aware data handling for resilient usage patterns.',
        'Production release management and iterative feature delivery.',
      ],
      capabilities: [
        'Clean architecture with scalable code organization.',
        'State management with BLoC and Riverpod patterns.',
        'Firebase-backed analytics and service integrations.',
        'CI/CD-oriented mobile delivery workflow.',
      ],
      tech: ['Flutter', 'Google Play Billing', 'Firebase', 'Gamification'],
      link: {
        label: 'View on Play Store',
        href: 'https://play.google.com/store/apps/details?id=com.bilgimizde.bilgimizde_app',
      },
    },
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saeedalebrahim' },
    { label: 'GitHub', href: 'https://github.com/saeedalebrahim' },
    { label: 'Portfolio', href: 'https://saeedalebrahim.github.io/webfolio' },
    { label: 'Email', href: 'mailto:saeedalebrahiim@gmail.com' },
  ],
}

export async function getPortfolioData(): Promise<PortfolioData> {
  // Simulate network latency to model real data loading states.
  await new Promise((resolve) => {
    setTimeout(resolve, 200)
  })

  return portfolioData
}
