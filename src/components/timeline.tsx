'use client'

import { motion } from 'framer-motion'
import { Experience } from '@/lib/types'

interface TimelineProps {
  items: Experience[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={`${item.org}-${index}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="border-muted relative border-l-2 pl-8"
        >
          <div className="bg-brand-500 border-background absolute top-0 -left-2 h-4 w-4 rounded-full border-2"></div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-foreground text-lg font-semibold">
                {item.role}
              </h3>
              <span className="text-muted-foreground text-sm">
                {item.start} - {item.end || 'Present'}
              </span>
            </div>

            <p className="text-brand-500 font-medium">{item.org}</p>

            <ul className="mt-3 space-y-1">
              {item.bullets.map((bullet, bulletIndex) => (
                <li
                  key={bulletIndex}
                  className="text-muted-foreground flex items-start text-sm"
                >
                  <span className="text-brand-500 mt-1 mr-2">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
