import type { Metadata } from 'next'
import './globals.css'
import { Great_Vibes } from 'next/font/google'

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cursive',
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
    <html lang="en" className={greatVibes.variable}>
      <body>{children}</body>
    </html>
  )
}
