import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  className?: string
}

export default function Section({
  children,
  title,
  subtitle,
  className,
}: SectionProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className="mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
