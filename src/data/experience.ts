import { Experience } from '@/lib/types'

export const EXPERIENCE: Experience[] = [
  {
    org: 'TOMRA',
    badge: 'Returning intern',
    role: 'Software and AI Intern',
    start: '2026-06',
    end: '2026-09',
    bullets: [
      'Improved automated test reliability across a large-scale test suite of over 2,000 tests, increasing the CI pipeline pass rate from approximately 66% to 100% by investigating and resolving failures.',
      'Contributed to the development of an internal MLOps platform, implementing backend functionality and working across APIs, service logic and database integrations.',
      'Expanded and maintained automated API and integration testing using Postman, Newman, Playwright and Docker, strengthening regression coverage and development confidence.',
      'Diagnosed and resolved issues across PostgreSQL databases, test environments and CI/CD workflows, improving the consistency and reliability of automated builds.',
    ],
  },
  {
    org: 'TOMRA',
    role: 'Software and AI Intern',
    start: '2025-07',
    end: '2025-09',
    bullets: [
      'Designed and implemented an end-to-end testing framework using Playwright and Behaviour-Driven Development (BDD), creating reusable test scenarios to validate core portal functionality.',
      'Built and managed a dedicated PostgreSQL test database, automating migrations and data seeding through Docker Compose and using pgAdmin for database inspection and debugging.',
      'Containerised frontend, backend and database services using Docker, establishing consistent and reproducible environments for local development and automated testing.',
      'Integrated the automated testing framework into Azure DevOps CI/CD pipelines, enabling tests to execute automatically on frontend changes and providing continuous validation of portal functionality.',
      'Collaborated with developers to investigate test failures, troubleshoot integration issues and improve the maintainability and reliability of the testing infrastructure.',
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
