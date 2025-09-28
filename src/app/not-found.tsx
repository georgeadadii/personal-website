import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Home, FolderOpen } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70dvh] items-center justify-center">
      <div className="mx-auto max-w-md px-4">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-foreground mb-2 text-4xl font-bold">
              404
            </CardTitle>
            <CardDescription className="text-lg">
              Page not found
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  <FolderOpen className="mr-2 h-4 w-4" />
                  View Projects
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
