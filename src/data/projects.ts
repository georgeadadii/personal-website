import { Project } from '@/lib/types'

export const PROJECTS: Project[] = [
  {
    slug: 'sweng-tomra-ai-image-classification',
    title: 'SWENG x TOMRA — AI Image Classification Engine',
    year: '2025',
    description:
      'Backend lead for an image-classification web app used to refine recycling AI models.',
    highlights: [
      'Designed & implemented upload pipeline to Azure Blob Storage; converted images to signed URIs for ML ingestion.',
      'Optimised portal throughput and latency; improved labeling workflow.',
    ],
    tech: ['TypeScript', 'Node.js', 'Azure Blob Storage', 'React'],
    repo: '', // add later if public
    link: '', // add demo if available
    featured: true,
  },
  {
    slug: 'dublinpad-ai',
    title: 'DublinPad AI — Smart Accommodation Finder',
    year: '2025',
    description:
      'Property recommendations using Gemini+Daft APIs with prompt engineering and interactive UI.',
    highlights: [
      'Implemented data ingestion & LLM prompts for curated suggestions.',
      'Built interactive frontend in React/Next.js with emphasis on reliability & UX.',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'LLM (Gemini)'],
    repo: '',
    link: '',
    featured: true,
  },
]
