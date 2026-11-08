import { Project } from '@/lib/types'

export const PROJECTS: Project[] = [
  {
    slug: 'sweng-tomra-ai-image-classification',
    title: 'SWENG x TOMRA | AI Image Classification Engine',
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

    overview: String.raw`This project was developed in collaboration with TOMRA as part of our Software Engineering module. 
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
    title: 'Solo AI | Chrome Extension',
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
    featured: false,

    overview: String.raw`Solo AI is a Chrome extension designed to bring a personal AI assistant directly into the browser. 
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
    title: 'DublinPad AI | Smart Accommodation Finder',
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
    featured: false,

    overview: String.raw`DublinPad AI is a smart property-finding application designed to simplify student and professional housing searches. 
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

    overview: String.raw`This lightweight Python utility was created to automate outreach emails with small personal touches 
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
  {
    slug: 'sweng-dell-realtime-user-context-engine',
    title: 'SWENG x Dell | Real-Time User Context Engine',
    year: '2026',
    description:
      'Event-driven engine for real-time user behaviour analysis and personalised recommendations.',
    highlights: [
      'Built Kafka-based pipeline for capturing live user events.',
      'Implemented persona clustering for real-time recommendations.',
      'Integrated monitoring with Prometheus and Grafana.',
    ],
    repo: 'https://github.com/georgeadadii/SWENG-x-DELL',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Kafka', 'Redis', 'PostgreSQL'],
    featured: false,

    overview: String.raw`Developed with Dell as part of our Software Engineering module, this project focused on building a real-time user context engine that transforms live interaction data into personalised user experiences.`,

    challenges: [
      'Handling high-frequency user event streams efficiently.',
      'Balancing latency with real-time processing requirements.',
    ],

    outcomes: [
      'Delivered a working real-time personalisation prototype.',
      'Improved user journey efficiency through better recommendations.',
    ],

    future: `Future developments would make this project pluggable into any e-commerce platform, with enhanced ML-driven persona clustering and expanded event types for better user context.`,
  },
  {
    slug: 'triageai-hackathon-2026',
    title: 'TriageAI | AI Patient Triage System',
    year: '2026',
    description:
      'AI-assisted triage system enabling real-time patient intake, clinician decisions, and appointment updates.',
    highlights: [
      'Built contract-driven monorepo with Next.js dashboard, Expo mobile app, and shared TypeScript packages.',
      'Implemented end-to-end triage flow from patient survey → backend analysis → clinician approval → appointment update.',
      'Designed real-time event pipeline for live dashboard updates during triage processing.',
    ],
    repo: 'https://github.com/r-m-schulz/claude_hackathon_2026',
    link: 'https://claude-hackathon-2026-web.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'WebSockets'],
    featured: false,

    overview: String.raw`TriageAI is an end-to-end AI-assisted patient triage system built for the Claude Hackathon 2026. 
  The platform connects a patient-facing mobile app with a clinician dashboard and backend services, enabling 
  real-time triage decisions based on structured patient input. The system is built as a contract-driven monorepo, 
  ensuring consistency across web, mobile, and backend layers.`,

    challenges: [
      'Maintaining strict consistency across shared contracts between web, mobile, and backend services.',
      'Implementing a database-first architecture with schema and RLS aligned to system specifications.',
    ],

    outcomes: [
      'Delivered a complete MVP demonstrating the full triage lifecycle from intake to clinician action.',
      'Enabled real-time visibility of patient triage events within the clinician dashboard.',
      'Established a scalable monorepo foundation for future expansion and production readiness.',
    ],

    future: `Future iterations will focus on refining AI decision logic, formalising API contracts, 
  and introducing observability, deployment pipelines, and production-grade infrastructure.`,
  },
  {
    slug: 'uniportal',
    title: 'UniPortal | Erasmus University Research Platform',
    year: '2026',
    link: 'https://uniportal.io/',
    description:
      'An Erasmus research and planning platform that helps students discover partner universities, evaluate academic compatibility and organise their exchange journey.',
    highlights: [
      'Co-founded and developed UniPortal as part of a five-person team with a specific full-stack role.',
      'Engineered the migration of production infrastructure from Vercel to Oracle Cloud, implementing containerised deployment, automated CI/CD pipelines, database migrations, health checks and rollback mechanisms.',
      'Established automated testing infrastructure using Vitest, Playwright and isolated PostgreSQL environments, alongside privacy-conscious product analytics and deployment monitoring.',
    ],
    overview: String.raw`UniPortal is a web platform developed to simplify the process of researching, comparing and preparing for Erasmus university exchanges.
      The project addresses the fragmentation of information across university websites, academic catalogues and international office resources. 
      By centralising university profiles, academic modules, partnership information and student experiences, UniPortal enables students to make more informed decisions about their exchange destinations.
      \n\n
      The platform supports university discovery, personalised recommendations, saved shortlists and exchange preparation tools. 
      Its recommendation system evaluates students' academic profiles against university partnership agreements, subject compatibility, teaching languages and mobility requirements to identify suitable exchange opportunities.
      \n\n
      As a co-founder and full-stack developer within a five-person team, my responsibilities span application development, relational database design, cloud infrastructure, automated testing and product analytics. 
      My contributions have included developing core university discovery features, implementing recommendation workflows and establishing the production infrastructure required to deploy and maintain the application.`,
    challenges: [
      `Modelling complex academic relationships: Designing and maintaining a relational data model capable of representing universities, faculties, academic modules, exchange partnerships and student preferences. 
      This required moving beyond basic institution records to support academic eligibility constraints, incomplete data and relationships between multiple organisational units.`,
      `Establishing reliable production infrastructure: Migrating the application from Vercel to an Oracle Cloud VM to overcome collaborative deployment restrictions. 
      This involved configuring ARM64-compatible Docker images, GitHub Container Registry, automated deployment workflows and secure server access.
      Ensuring application releases remained compatible with database migrations introduced additional complexity, particularly around health verification and rollback behaviour.`,
      `Building reproducible testing environments: Introducing comprehensive automated testing without risking modification of development or production data.
      This required isolated PostgreSQL environments, deterministic database seeding, automated Prisma migrations and integration of unit, integration and end-to-end tests into GitHub Actions.`,
    ],
    outcomes: [
      `Co-developed and launched a live Erasmus research platform, combining university discovery, academic information, personalised recommendations and exchange preparation functionality.`,
      `Implemented database-backed university search and recommendation workflows, alongside institution profile features including interactive Google Maps, structured university statistics and Supabase-backed image galleries.`,
      `Migrated production deployment to Oracle Cloud Infrastructure, establishing an automated release pipeline with container publishing, Prisma migration validation, deployment health checks and rollback safeguards.`,
      `Developed and integrated automated testing infrastructure using Vitest and Playwright, including an initial suite of 90 institution-profile tests and a dedicated PostgreSQL environment for end-to-end testing.`,
      `Contributed to privacy-conscious product telemetry using PostHog, enabling analysis of user engagement, onboarding completion, university discovery and feature adoption to inform future product decisions.`,
    ],
    future: `Future development will focus on extending UniPortal beyond university discovery into more comprehensive academic planning and exchange preparation.
      A major planned feature is an AI-assisted module matching system that evaluates academic content and learning outcomes across institutions, helping students identify potentially equivalent modules and understand ECTS credit compatibility. An initial interactive module-matching preview and ECTS calculation workflow have already been developed.
      Further improvements will include expanding verified university and Erasmus partnership data, refining personalised recommendations and developing more comprehensive exchange preparation workflows.`,
    tech: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Supabase',
      'Playwright',
      'Vitest',
      'Docker',
      'GitHub Actions',
    ],
    featured: true,
  },
  {
    slug: 'atmos',
    title: 'Atmos | Weather-Aware Travel Planner',
    year: '2026',
    repo: 'https://github.com/georgeadadii/atmos',
    link: 'https://atmos-qa74.onrender.com/',
    description:
      'An intelligent travel planning application that transforms weather forecasts, air-quality data and user preferences into personalised three-day itineraries.',
    highlights: [
      'Developed a weather-aware itinerary generation engine that evaluates and schedules user-selected activities based on forecast conditions and suitability scores.',
      'Integrated OpenWeather and Google Places APIs for weather forecasting, air-quality monitoring and destination resolution.',
      'Implemented automated testing across the Express API, forecast processing, itinerary scheduling and frontend utilities.',
    ],
    overview: String.raw`Atmos is a weather-aware travel planning application developed to simplify short-trip preparation by combining forecasting with intelligent itinerary generation. 
      Users can select their destination, choose activities and generate a personalised itinerary for the following three complete days, 
      with activities scheduled according to their suitability for the expected conditions. \n
      The project was built as part of a Software Engineering module, with a focus on backend development, API integration, and automated testing.`,
    challenges: [
      'Designing an activity-scoring and scheduling algorithm capable of allocating user-selected activities across three days according to changing weather conditions.',
      'Translating raw meteorological and air-quality data into understandable, actionable recommendations.',
    ],
    outcomes: [
      'Delivered a functional travel planning application capable of generating and regenerating personalised three-day itineraries.',
      'Developed a weather-suitability scoring system that provides users with contextual explanations for activity scheduling decisions.',
    ],
    tech: [
      'Vue 3',
      'JavaScript',
      'Node.js',
      'Express',
      'OpenWeather',
      'Google Places',
    ],
    featured: true,
  },
  {
    slug: 'ascensus',
    title: 'Ascensus | Personal Fitness Dashboard',
    year: '2026',
    repo: 'https://github.com/georgeadadii/Ascensus',
    description:
      'A full-stack fitness platform for tracking workouts, personal records, nutrition, meals, body measurements, and long-term progress.',
    highlights: [
      'Built reusable workout templates, live training sessions, weekly-volume summaries, and personal-record tracking.',
      'Implemented nutrition logging for calories, macros, hydration, meals, and configurable dietary targets.',
      'Built a full-stack architecture using Next.js, TypeScript, Prisma and PostgreSQL, with Better Auth for authentication and user-specific data management',
    ],
    overview: String.raw`Ascensus is an ongoing full-stack development project focused on creating a unified platform for personal fitness management.
      The application brings together strength training, nutrition tracking and physical progress monitoring within a single interface, reducing the need to manage workout logs, dietary records and progress metrics across multiple applications.`,
    challenges: [
      'Designing a relational database structure capable of representing exercises, workout templates, completed sessions, personal records and nutrition data without unnecessary duplication.',
      'Managing the distinction between planned workouts and completed training sessions while preserving accurate historical performance records.',
      'Implementing authentication and data ownership boundaries to ensure fitness records remain associated with the appropriate users.',
    ],
    outcomes: [
      'Implemented the foundational workout management system, including reusable templates, session logging and performance tracking.',
      'Developed nutrition logging functionality covering calorie intake, macronutrients, meals, hydration and individual targets.',
      'Created a foundation for expanding the platform with additional analytics, integrations and personalised fitness insights.',
    ],
    tech: [
      'Next.js 16',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Better Auth',
      'Recharts',
    ],
    featured: false,
  },
  {
    slug: 'redscreen',
    title: 'RedScreen | Privacy-First Screenshot Redaction for macOS',
    year: '2026',
    repo: 'https://github.com/georgeadadii/RedScreen',
    description:
      'A native macOS menu-bar application designed to detect and permanently redact sensitive information from screenshots through an entirely on-device processing pipeline.',
    highlights: [
      'Established a SwiftUI/AppKit menu-bar application and framework-independent processing core.',
      'Designed service boundaries for image import, OCR, sensitive-information detection, redaction, and export.',
      'Implemented a secure in-memory image lifecycle, privacy-safe logging, sandboxing, and automated unit and UI tests.',
    ],
    overview: String.raw`RedScreen is an ongoing native macOS development project designed to address a common security risk in software development: accidentally exposing sensitive information when sharing screenshots.
      Developers frequently capture screenshots containing environment variables, API keys, access tokens, database credentials and other confidential information. RedScreen aims to simplify the process of identifying and permanently obscuring such information before an image is copied or shared.`,
    challenges: [
      'Implementing a robust on-device OCR pipeline capable of accurately detecting text in screenshots.',
      'Designing a sensitive-information detection system that can identify various types of confidential data, including API keys, tokens, and personal identifiers.',
      'Ensuring that the redaction process is irreversible and does not compromise the integrity of the remaining image content.',
    ],
    tech: ['Swift 6', 'SwiftUI', 'AppKit', 'XCTest', 'XCUITest'],
    featured: false,
  },
]
