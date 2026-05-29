import type { Metadata } from 'next'
import { Caprasimo, Newsreader, Caveat, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const caprasimo = Caprasimo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const newsreader = Newsreader({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const caveat = Caveat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-hand',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Stoop — Free daily browser games. Tiny puzzles, big habit.',
  description:
    'Stoop is a small collection of free daily browser games. Play DailyGuessr, FlagGuessr and CocktailGuessr — quick daily puzzle games you can play in your browser. No account, no download.',
  metadataBase: new URL('https://stoop.games'),
  alternates: {
    canonical: 'https://stoop.games',
  },
  openGraph: {
    title: 'Stoop — Free daily browser games',
    description:
      'Daily puzzle games you can play in your browser. No account, no download.',
    url: 'https://stoop.games',
    siteName: 'Stoop',
    images: [
      {
        url: '/og-image.jpg', // TODO: replace og-image-TODO.txt with 1200×630 screenshot
        width: 1200,
        height: 630,
        alt: 'Stoop — Free daily browser games',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stoop — Free daily browser games',
    description:
      'Daily puzzle games you can play in your browser. No account, no download.',
    images: ['/og-image.jpg'],
  },
  // verification: { google: 'PASTE_GSC_CODE_HERE' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Stoop',
  url: 'https://stoop.games',
  description: 'A collection of free daily browser games. No account, no download.',
  publisher: {
    '@type': 'Person',
    name: 'Sebastian Raclawski',
    email: 'hello@stoop.games',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://stoop.games',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${caprasimo.variable} ${newsreader.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://analytics.stoop.games/script.js"
          data-website-id="9f95d725-d2f6-46b4-b016-0a3fc5cb973f"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
