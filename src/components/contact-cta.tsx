'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, FileText } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SITE } from '@/data/site'

export default function ContactCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="from-brand-50 to-brand-100 dark:from-brand-900/20 dark:to-brand-800/20 border-brand-200 dark:border-brand-800 bg-gradient-to-br">
        <CardHeader className="text-center">
          <CardTitle className="text-foreground text-2xl font-bold">
            Let&apos;s Work Together
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            I&apos;m always interested in new opportunities and collaborations.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Currently seeking Summer 2026 internships
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button asChild size="lg" className="group w-full sm:w-auto">
              <a href={`mailto:${SITE.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>

            <div className="flex w-full flex-wrap justify-center gap-2 sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href="/George-Adadi-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                  aria-label="Open CV"
                  title="Open CV"
                >
                  <FileText className="h-5 w-5 shrink-0" />
                  CV
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
