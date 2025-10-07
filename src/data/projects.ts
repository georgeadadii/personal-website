import { Project } from '@/lib/types'

export const PROJECTS: Project[] = [
  {
    slug: 'sweng-tomra-ai-image-classification',
    title: 'SWENG x TOMRA - AI Image Classification Engine',
    year: '2025',
    description:
      'Backend lead for an image-classification web app used to refine recycling AI models.',
    highlights: [
      'Designed & implemented upload pipeline to Azure Blob Storage; converted images to signed URIs for ML ingestion.',
      'Optimised portal throughput and latency; improved labeling workflow.',
    ],
    repo: 'https://github.com/georgeadadii/SWENG-x-TOMRA',
    tech: ['TypeScript', 'Node.js', 'Azure Blob Storage', 'React'],
    featured: false,

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
    slug: 'solo-ai-chrome-extension',
    title: 'Solo AI - Chrome Extension',
    year: '2025',
    repo: 'https://github.com/georgeadadii/chrome-agent',
    description:
      'Lightweight AI Chrome Extension for summarising, explaining, and re-phrasing highlighted text directly in-browser.',
    highlights: [
      'Built custom side-panel UI with markdown-formatted AI responses.',
      'Integrated context-menu actions for summarise, tone-change, explain, and key-point extraction.',
      'Implemented local storage for chat history and preset management.',
    ],
    tech: [
      'JavaScript',
      'HTML/CSS',
      'Chrome APIs',
      'Manifest V3',
      'GPT-4o-mini',
    ],
    featured: true,

    overview: `Solo AI is a Chrome extension designed to bring a personal AI assistant directly into the browser. 
  By highlighting any text on a webpage, users can instantly trigger AI functions such as summarisation, tone adjustment, 
  explanation, or key-point extraction, all within a sleek side-panel interface, removing the need for switching tabs or apps.`,

    challenges: [
      'Navigating Chrome Manifest V3 restrictions and CSP (Content Security Policy) for dynamic script injection.',
      'Rendering markdown safely inside the extension environment without remote scripts.',
      'Ensuring a smooth UX with fade-in message animations and persistent chat history.',
    ],

    outcomes: [
      'Developed a functional AI side-panel with multiple contextual tools and markdown support.',
      'Created a clean, responsive design that integrates seamlessly with any webpage.',
      'Established a framework for future “super-agent” capabilities using the new Chrome MCP standard.',
    ],

    future: `Planned updates include support for Notion/OneNote export, more advanced summarisation presets, 
  and user authentication for multi-device sync. Long-term, the goal is to evolve Solo into a fully-fledged Chrome super-agent 
  on the Chrome Extension Store.`,
  },
  {
    slug: 'dublinpad-ai',
    title: 'DublinPad AI - Smart Accommodation Finder',
    year: '2025',
    repo: 'https://github.com/georgeadadii/DublinPadAI',
    link: 'https://dublin-pad-ai.vercel.app/',
    description:
      'Property recommendations using Gemini+Daft APIs with prompt engineering and interactive UI.',
    highlights: [
      'Secured 1st place in Google AI Hackathon Dublin 2025.',
      'Implemented data ingestion & LLM prompts for curated suggestions.',
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
  {
    slug: 'email-automation',
    title: 'Email Automation Script',
    year: '2025',
    repo: 'https://github.com/georgeadadii/email-automation',
    description:
      'Python-based tool for sending personalised bulk emails using dynamic templates and contact data sources.',
    highlights: [
      'Automated delivery of 60+ personalised emails from structured contact data.',
      'Switched from Excel to JSON input for greater flexibility and cleaner data handling.',
    ],
    tech: ['Python', 'smtplib', 'JSON', 'HTML'],
    featured: false,

    overview: `This lightweight Python utility was created to automate outreach emails with small personal touches 
  such as recipient names and university details. Initially built around Excel data sources, 
  the project later evolved to support JSON inputs for better portability and script simplicity.`,

    challenges: [
      'Ensuring each message rendered correctly from the HTML template.',
      'Managing personalisation safely while maintaining consistent formatting across recipients.',
    ],

    outcomes: [
      'Successfully sent automated batches of emails with individualised content in minutes.',
      'Reduced manual workload and improved accuracy compared to manual copy–paste workflows.',
    ],

    future: `Planned improvements include adding Tally webhook integration to trigger automatic thank-you emails 
  and a dashboard for monitoring sent messages and delivery status.`,
  },
]
