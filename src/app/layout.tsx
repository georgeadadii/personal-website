import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { generatePersonJsonLd } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata = {
  metadataBase: new URL('https://www.georgeadadii.com'),
  title: 'George Adadi — Software Engineer',
  description:
    'Personal website of George Adadi, CS & Business @ TCD. Projects, experience, and contact.',
  openGraph: {
    title: 'George Adadi',
    description: 'Software engineering projects & experience.',
    url: 'https://www.georgeadadii.com',
    siteName: 'George Adadi',
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@',
    site: '@',
    title: 'George Adadi',
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generatePersonJsonLd(),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} bg-background text-foreground font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="min-h-[70dvh]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
