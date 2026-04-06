'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { ThemeToggle } from './ThemeToggle'

export default function Hero() {
  const { theme } = useTheme()

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const childVars = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl flex flex-col items-center mt-20"
      >
        <div className="overflow-visible mb-4 md:mb-6">
          <motion.h1
            variants={childVars}
            className="font-heading font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter pb-2 text-gradient-cyan glow-text leading-[1] uppercase"
          >
            Collective
          </motion.h1>
        </div>

        <div className="overflow-visible mb-8 md:mb-10 text-center">
          <motion.h1
            variants={childVars}
            className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1] uppercase text-black dark:text-white"
          >
            Intelligence.
          </motion.h1>
        </div>

        <motion.p
          variants={childVars}
          className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed"
        >
          Elevating high-growth brands with <span className="text-white">AI-first automation</span>, premium engineering, and frictionless digital ecosystems.
        </motion.p>

        <motion.div
          variants={childVars}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScBjVX_I5VgqLG_OKiB2sCqGpxIL8TIAtYz0G1-zZ7pWyAbEg/viewform?usp=publish-editor"
            target="_blank"
            className="glass-panel w-full sm:w-auto px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all border border-primary/40 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] text-center text-lg"
          >
            Start Project
          </Link>

          <Link
            href="#work"
            className="group flex gap-2 items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full font-bold hover:text-primary transition-all text-lg"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}