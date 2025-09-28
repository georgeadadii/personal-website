'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Skill } from '@/lib/types'

interface SkillsCloudProps {
  skills: Skill[]
}

const groupColors = {
  Languages: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Frontend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Backend:
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  Cloud:
    'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  DevOps: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  Databases:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Other: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
}

export default function SkillsCloud({ skills }: SkillsCloudProps) {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.group]) {
        acc[skill.group] = []
      }
      acc[skill.group].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>
  )

  return (
    <div className="space-y-8">
      {Object.entries(groupedSkills).map(([group, groupSkills], groupIndex) => (
        <motion.div
          key={group}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-foreground text-lg font-semibold">{group}</h3>
          <div className="flex flex-wrap gap-2">
            {groupSkills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className={`${groupColors[group as keyof typeof groupColors]} cursor-default transition-transform hover:scale-105`}
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
