'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(cardRef, {
    amount: 0.2,
    margin: '0px 0px -10% 0px',
  })
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          ref={cardRef}
          className="relative overflow-hidden rounded-xl p-[2px]"
          style={{
            backgroundImage:
              'conic-gradient(from 0deg, #06b6d4, transparent, transparent, #06b6d4)',
          }}
          initial={false}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 16,
            backgroundImage: isHovered
              ? [
                  'conic-gradient(from 0deg, #06b6d4, transparent, transparent, #06b6d4)',
                  'conic-gradient(from 90deg, #06b6d4, transparent, transparent, #06b6d4)',
                  'conic-gradient(from 180deg, #06b6d4, transparent, transparent, #06b6d4)',
                  'conic-gradient(from 270deg, #06b6d4, transparent, transparent, #06b6d4)',
                  'conic-gradient(from 360deg, #06b6d4, transparent, transparent, #06b6d4)',
                ]
              : 'conic-gradient(from 0deg, #06b6d4, transparent, transparent, #06b6d4)',
          }}
          transition={{
            opacity: { duration: 0.5, ease: 'easeOut' },
            y: { duration: 0.5, ease: 'easeOut' },
            backgroundImage: {
              repeat: isHovered ? Infinity : 0,
              duration: 1.5,
              ease: 'linear',
            },
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
                  {project.highlights.slice(0, 2).map((highlight) => (
                    <li
                      key={highlight}
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
                        <FaGithub className="mr-2 h-4 w-4" />
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
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="pr-8 text-2xl font-bold">
              {project.title}
            </DialogTitle>
            {project.featured}
          </div>
          <DialogDescription className="pt-2 text-base leading-relaxed">
            {project.year}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {project.overview && (
            <div>
              <p className="text-muted-foreground leading-7">
                {project.overview}
              </p>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold">Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start text-sm"
                  >
                    <span className="text-brand-500 mt-1 mr-2">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.outcomes && project.outcomes.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold">Outcomes</h3>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start text-sm"
                  >
                    <span className="text-brand-500 mt-1 mr-2">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.future && (
            <div>
              <h3 className="mb-3 text-sm font-semibold">Future Work</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.future}
              </p>
            </div>
          )}

          <div>
            <h3 className="mb-3 text-sm font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {(project.repo || project.link) && (
          <DialogFooter className="flex-col gap-2 pt-6 sm:flex-row">
            {project.repo && (
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {project.link && (
              <Button asChild className="w-full sm:w-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
