import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans, GeistMono } from 'geist/font'
import NavBar from '@/components/NavBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nadia Gincoff ⬥ Web Developer',
  description: 'Generated by Nadia Gincoff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={inter.className}>
        <header id="header-ng" className='flex flex-row items-center justify-center w-full sticky z-50 top-0'>
          <NavBar />
        </header>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
