import type { Metadata } from 'next'
import './globals.css'
import { Great_Vibes, Inter_Tight, Pacifico, Meow_Script } from 'next/font/google'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cursive',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

const meowScript = Meow_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-meow',
})

export const metadata: Metadata = {
  title: 'GurlLang - A toy programming language',
  description: 'A toy programming language written in TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${interTight.variable} ${pacifico.variable} ${meowScript.variable}`}>
      <body className={interTight.className}>{children}</body>
    </html>
  )
}
