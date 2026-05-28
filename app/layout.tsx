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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${caprasimo.variable} ${newsreader.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
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
