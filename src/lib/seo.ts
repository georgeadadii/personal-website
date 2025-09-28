import { SITE } from '@/data/site'

export function generatePersonJsonLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: 'https://www.georgeadadii.com',
    sameAs: [SITE.github, SITE.linkedin],
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Trinity College Dublin',
    },
  })
}
