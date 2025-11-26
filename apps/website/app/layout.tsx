import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'One Page Website',
  description: 'A beautiful one-page scrollable website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
