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
    featured: true,

    overview: `This project was developed in collaboration with TOMRA as part of our Software Engineering module. 
    The goal was to build a robust platform that supports recycling initiatives by improving TOMRA’s image classification models. 
    My role focused on backend systems and cloud integration.`,
    challenges: [
      'Ensuring efficient and secure upload of large image datasets to the cloud.',
      'Handling scalability issues when multiple users interact with the labeling portal simultaneously.',
      'Integrating seamlessly with existing TOMRA workflows and ML pipelines.',
    ],
    outcomes: [
      'Delivered a production-ready prototype used internally by TOMRA for refining AI models.',
      'Reduced average image ingestion latency by ~30%.',
      'Improved annotation workflow speed, leading to higher dataset quality.',
    ],
    future: `In future iterations, the platform can be extended with automated quality checks for labels, 
    real-time model feedback, and integration with additional AI services for faster retraining cycles.`,
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
    featured: true,

    overview: `DublinPad AI is a smart property-finding application designed to simplify student and professional housing searches. 
    By combining Daft’s property listings with Gemini’s natural language reasoning, the system provides tailored recommendations 
    based on preferences like budget, commute, and amenities.`,
    challenges: [
      'Mapping unstructured property data into structured LLM-ready prompts.',
      'Balancing recommendation relevance with response latency.',
      'Designing a frontend that feels trustworthy for users making high-stakes rental decisions.',
    ],
    outcomes: [
      'Built an AI-powered prototype capable of filtering thousands of listings into personalised shortlists.',
      'Delivered a clean, responsive UI optimised for both desktop and mobile.',
      'Tested with mock users who reported a smoother, less overwhelming property search experience.',
    ],
    future: `Planned improvements include live integration with transport APIs to optimise by commute time, 
    and a “group search” feature for students looking to rent together.`,
  },
]
