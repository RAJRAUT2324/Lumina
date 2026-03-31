'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] px-6 py-4 flex items-center justify-between"
      >
        <div className="glass-panel px-6 py-3 rounded-2xl flex items-center justify-between w-full max-w-7xl mx-auto">
          <Link href="/" className="font-heading font-extrabold text-2xl tracking-tighter glow-text dark:text-white text-black" onClick={() => setIsOpen(false)}>
            TALENTRIX
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide dark:text-white text-black">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">{link.name}</Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLScBjVX_I5VgqLG_OKiB2sCqGpxIL8TIAtYz0G1-zZ7pWyAbEg/viewform?usp=publish-editor" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block glass-panel px-5 py-2 rounded-full text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-primary/30 shadow-[0_0_15px_rgba(0,229,255,0.2)] dark:text-white text-black"
            >
              Initialize Project
            </Link>
            
            {/* Mobile Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 glass-panel rounded-xl dark:text-white text-black hover:bg-primary/20 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[55] md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-24 px-6"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full"
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="block text-center text-3xl font-heading font-bold hover:text-primary transition-colors py-4 border-b border-black/5 dark:border-white/5 w-full dark:text-white text-black"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full pt-8"
              >
                <Link 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScBjVX_I5VgqLG_OKiB2sCqGpxIL8TIAtYz0G1-zZ7pWyAbEg/viewform?usp=publish-editor" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-black font-bold py-5 rounded-2xl text-xl shadow-[0_0_30px_rgba(0,229,255,0.4)]"
                >
                  Start Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
