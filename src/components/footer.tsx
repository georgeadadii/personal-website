import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { SITE } from '@/data/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} {SITE.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={SITE.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="h-4 w-4" />
            </Link>
            <Link
              href={`mailto:${SITE.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
