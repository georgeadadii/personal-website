'use client'

import { useState } from 'react'
import ProjectCard from '@/components/project-card'
import { Badge } from '@/components/ui/badge'
import { PROJECTS } from '@/data/projects'

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string>('All')

  // Get all unique technologies
  const allTechs = Array.from(
    new Set(PROJECTS.flatMap((project) => project.tech))
  )
  const techOptions = ['All', ...allTechs]

  // Filter projects based on selected technology
  const filteredProjects =
    selectedTech === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.tech.includes(selectedTech))

  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A collection of my work, from academic projects to professional
            experiences.
          </p>
        </div>

        {/* Tech Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {techOptions.map((tech) => (
            <Badge
              key={tech}
              variant={selectedTech === tech ? 'default' : 'outline'}
              className="hover:bg-brand-100 dark:hover:bg-brand-900 cursor-pointer transition-colors"
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              No projects found for the selected technology.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
