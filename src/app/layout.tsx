import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper'
import SceneWrapper from '@/components/SceneWrapper'
import VoiceAgent from '@/components/VoiceAgent'
import { ThemeProvider } from '@/components/ThemeProvider'

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-plus-jakarta' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'TalentRix | Collective AI & Development',
  description: 'Premium software development and AI automation agency. Transforming digital presence with high-impact collective intelligence.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${outfit.variable} font-sans antialiased text-black dark:text-white bg-white dark:bg-background selection:bg-primary selection:text-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScrollWrapper>
            <SceneWrapper />
            <Navbar />
            {children}
            <Footer />
            <VoiceAgent />
          </SmoothScrollWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

