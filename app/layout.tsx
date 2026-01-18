import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: 'Hasindu Ohasa | Developer • Designer • Creator',
  description: 'Passionate creative and tech enthusiast specializing in photography, videography, graphic design, and software development. Founder of Droplens Studios Co.',
  keywords: ['developer', 'designer', 'photographer', 'videographer', 'Sri Lanka', 'Hasindu Ohasa'],
  authors: [{ name: 'Hasindu Ohasa' }],
  icons: {
    icon: '/favicon.ico',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#1a1f2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
