'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, ArrowRight, FileText } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { SITE } from '@/data/site'

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-center"
        >
          <div className="space-y-4">
            <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-6xl">
              {SITE.name}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl md:text-2xl">
              {SITE.title}
            </p>
            <p className="text-muted-foreground text-lg">{SITE.location}</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">About Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 pt-8"
          >
            <Button variant="ghost" size="sm" asChild>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="/George-Adadi-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center"
                aria-label="Download CV"
                title="Download CV"
              >
                <FileText className="mr-2 h-5 w-5" />
                CV
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href={SITE.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
