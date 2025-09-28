import Section from '@/components/section'
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
  'Google AI Hackathon Dublin 2025 — 1st place',
  "Rotman's International Trading Competition — 7th in Ireland",
  'Entrance Exhibition Award — TCD',
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
        <Section>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate software engineer studying Computer Science and
              Business at Trinity College Dublin. I love building scalable
              applications and exploring the intersection of technology and
              business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My experience spans from backend development with Azure and
              Node.js to frontend work with React and Next.js. I'm particularly
              interested in AI/ML applications and have worked on projects
              involving image classification and LLM integration.
            </p>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <Card>
            <CardHeader>
              <CardTitle>Trinity College Dublin</CardTitle>
              <CardDescription>
                Bachelor's in Computer Science and Business <br />
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
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {achievements.map((achievement, index) => (
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
            ))}
          </div>
        </Section>

        {/* Now Section */}
        <Section title="Now">
          <Card className="from-brand-50 to-brand-100 dark:from-brand-900/20 dark:to-brand-800/20 border-brand-200 dark:border-brand-800 bg-gradient-to-br">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                Currently seeking Summer 2026 internships in software
                engineering, with particular interest in backend development,
                AI/ML applications, and fintech.
              </p>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                When I'm not coding, you can find me exploring Dublin's tech
                scene, contributing to open source projects, or working on side
                projects.
              </p>
            </CardContent>
          </Card>
        </Section>

        {/* Contact CTA */}
        <Section>
          <ContactCta />
        </Section>
      </div>
    </div>
  )
}
