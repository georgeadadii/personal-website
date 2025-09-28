'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group h-full cursor-pointer transition-shadow duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="group-hover:text-brand-500 text-xl transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm">
                {project.year}
              </CardDescription>
            </div>
            {project.featured && (
              <Badge variant="secondary" className="ml-2">
                Featured
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {project.highlights.length > 0 && (
            <ul className="space-y-2">
              {project.highlights.slice(0, 2).map((highlight, index) => (
                <li
                  key={index}
                  className="text-muted-foreground flex items-start text-sm"
                >
                  <span className="text-brand-500 mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {(project.repo || project.link) && (
            <div className="flex gap-2 pt-2">
              {project.repo && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
              {project.link && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
