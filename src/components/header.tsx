'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, FileText } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import ThemeToggle from './theme-toggle'
import { SITE } from '@/data/site'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-foreground text-xl font-bold">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="group w-8 justify-start overflow-hidden px-2 transition-[width] duration-300 hover:w-18"
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
                  <span className="ml-2 whitespace-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100">
                    CV
                  </span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={SITE.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="h-4 w-4" />
                </a>
              </Button>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetContent
                side="right"
                className="flex w-[300px] flex-col p-0 sm:w-[350px]"
              >
                <nav className="flex-1 px-6 py-8">
                  <div className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-foreground hover:text-brand-500 hover:bg-brand-500/5 rounded-md px-4 py-3 text-lg font-semibold transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="border-muted/20 my-6 border-t" />

                  <div className="space-y-2">
                    <p className="text-muted-foreground mb-3 px-4 text-xs font-semibold tracking-wide uppercase">
                      Connect
                    </p>
                    <div className="flex flex-col space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:text-brand-500 hover:bg-brand-500/5 h-auto justify-start px-4 py-3 transition-all"
                      >
                        <a
                          href={SITE.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <FaGithub className="mr-3 h-5 w-5" />
                          <span className="text-base font-medium">GitHub</span>
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:text-brand-500 hover:bg-brand-500/5 h-auto justify-start px-4 py-3 transition-all"
                      >
                        <a
                          href={SITE.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin className="mr-3 h-5 w-5" />
                          <span className="text-base font-medium">
                            LinkedIn
                          </span>
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:text-brand-500 hover:bg-brand-500/5 h-auto justify-start px-4 py-3 transition-all"
                      >
                        <a
                          href={SITE.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="X (Twitter)"
                        >
                          <FaXTwitter className="mr-3 h-5 w-5" />
                          <span className="text-base font-medium">
                            X (Twitter)
                          </span>
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:text-brand-500 hover:bg-brand-500/5 h-auto justify-start px-4 py-3 transition-all"
                      >
                        <a
                          href="/George-Adadi-CV.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View CV"
                        >
                          <FileText className="mr-3 h-5 w-5" />
                          <span className="text-base font-medium">View CV</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </nav>

                <div className="border-muted/20 border-t px-6 py-4">
                  <p className="text-muted-foreground text-center text-xs">
                    © 2025 {SITE.name}
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
