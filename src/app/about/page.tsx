'use client'

import Section from '@/components/section'
import { motion } from 'framer-motion'
import ContactCta from '@/components/contact-cta'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const achievements = [
  'Google AI Hackathon Dublin 2025: 1st place',
  "Rotman's International Trading Competition: 7th in Ireland",
  'Entrance Exhibition Award TCD',
  'Student of the Year ×6 with €2000 bonus',
  'S2S mentor (CS & Business) at TCD',
]

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl space-y-16 px-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg">
            Software Engineer • CS & Business @ TCD
          </p>
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-left"
        >
          <Section>
            <div className="text-muted-foreground mx-auto max-w-2xl space-y-10 text-lg leading-8">
              <p className="text-foreground text-xl leading-relaxed sm:text-2xl">
                I&apos;m a final-year Computer Science and Business student at
                Trinity College Dublin, with a strong interest in software
                engineering, artificial intelligence and entrepreneurship.
              </p>
              <div className="space-y-6">
                <h2 className="text-foreground text-xl font-semibold tracking-tight">
                  What I’m building
                </h2>
                <p>
                  I&apos;m a co-founder of{' '}
                  <strong className="text-foreground font-semibold">
                    UniPortal
                  </strong>
                  , a platform helping Erasmus students discover, compare and
                  plan their university exchanges. I&apos;ve also completed two
                  Software and AI internships at{' '}
                  <strong className="text-foreground font-semibold">
                    TOMRA
                  </strong>
                  , gaining experience across backend development, automated
                  testing and MLOps.
                </p>
                <p>
                  Beyond my professional experience, I enjoy turning ideas into
                  working products. I was part of the team that won the{' '}
                  <strong className="text-foreground font-semibold">
                    2025 Google AI Hackathon in Dublin
                  </strong>{' '}
                  with DublinPad AI, and I&apos;m continually exploring new
                  opportunities to build technology that solves real-world
                  problems.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-foreground text-xl font-semibold tracking-tight">
                  Outside of work
                </h2>
                <p>
                  Outside of technology, I&apos;m passionate about fitness and
                  enjoy spending time in the gym, constantly challenging myself
                  and working towards new goals. I&apos;m also a keen car
                  enthusiast, with an interest in everything from automotive
                  engineering to performance cars. I enjoy travelling,
                  discovering new places and experiences, and finding
                  opportunities to learn something new along the way.
                </p>
              </div>
            </div>
          </Section>
        </motion.div>

        {/* Education */}
        <Section title="Education">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-left"
          >
            <Card>
              <CardHeader>
                <CardTitle>Trinity College Dublin</CardTitle>
                <CardDescription>
                  Bachelor&apos;s in Computer Science and Business <br />
                  2023-2027 | Grade: 1.1
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Currently pursuing a dual degree combining technical computer
                  science fundamentals with business strategy and management
                  principles.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card key={index} className="h-24">
                    <CardContent className="flex h-full items-center justify-center">
                      <div className="flex h-full items-center space-x-2">
                        <Badge variant="secondary" className="h-8 text-xs">
                          Award
                        </Badge>
                        <p className="text-sm font-medium">{achievement}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact CTA */}
        <Section>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed">
            Currently seeking Summer 2027 internships in software engineering,
            with particular interest in full-stack development, AI/ML
            applications, and fintech.
          </p>
          <ContactCta />
        </Section>
      </div>
    </div>
  )
}
