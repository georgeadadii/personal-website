import Hero from '@/components/hero'
import Section from '@/components/section'
import ProjectCard from '@/components/project-card'
import Timeline from '@/components/timeline'
import SkillsCloud from '@/components/skills-cloud'
import ContactCta from '@/components/contact-cta'
import { PROJECTS } from '@/data/projects'
import { EXPERIENCE } from '@/data/experience'
import { SKILLS } from '@/data/skills'

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((project) => project.featured)
  const recentExperience = EXPERIENCE.slice(0, 2)

  return (
    <>
      <Hero />

      <Section
        title="Featured Projects"
        subtitle="Some of my recent work and side projects"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        title="Experience"
        subtitle="Professional experience and internships"
      >
        <Timeline items={recentExperience} />
      </Section>

      <Section title="Skills" subtitle="Technologies and tools I work with">
        <SkillsCloud skills={SKILLS} />
      </Section>

      <Section>
        <ContactCta />
      </Section>
    </>
  )
}
