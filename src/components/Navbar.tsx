'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
    >
      <div className="glass-panel px-6 py-3 rounded-2xl flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link href="/" className="font-heading font-extrabold text-2xl tracking-tighter glow-text dark:text-white text-black">
          TALENTRIX
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide dark:text-white text-black">
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/projects" className="hover:text-primary transition-colors">Work</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link 
            href="#contact" 
            className="glass-panel px-5 py-2 rounded-full text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-primary/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] dark:text-white text-black"
          >
            Initialize Project
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
