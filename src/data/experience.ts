import { Experience } from '@/lib/types'

export const EXPERIENCE: Experience[] = [
  {
    org: 'TOMRA',
    role: 'Software and AI Intern',
    start: '2025-07',
    end: '2025-09',
    bullets: [
      'Designed and implemented a Playwright BDD testing framework with full portal coverage, using a dedicated Postgres test database (migrations, seeding, Docker Compose, pgAdmin) to ensure reliability.',
      'Containerised frontend, backend and database with reproducible Docker images, and integrated automated testing into Azure DevOps CI/CD pipelines triggered on portal changes.',
    ],
  },
  {
    org: 'Outlier AI',
    role: 'Freelance AI Prompt Engineer',
    start: '2025-05',
    end: '2025-07',
    bullets: [
      'Evaluated, ranked and refined AI-generated responses across diverse prompts, ensuring clarity, accuracy and strong user experience through fact-checking and research.',
      'Identified edge cases, inconsistencies and bias in outputs, while leveraging Java, Python and C++ knowledge to assess coding-related responses and guide model improvements.',
    ],
  },
]
