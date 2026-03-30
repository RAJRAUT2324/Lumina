'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
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
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl flex flex-col items-center mt-20"
      >
        <div className="overflow-hidden mb-4">
          <motion.h1 variants={childVars} className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight pb-2 text-gradient-cyan glow-text">
            Antigravity
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1 variants={childVars} className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white">
            Digital Experiences
          </motion.h1>
        </div>
        
        <motion.p variants={childVars} className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
          Elevating brands with AI-driven automation, premium web development, and frictionless 3D design.
        </motion.p>
        
        <motion.div variants={childVars} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <Link 
            href="#projects" 
            className="glass-panel w-full sm:w-auto px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all border border-primary/40 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] text-center text-lg"
          >
            Start Project
          </Link>
          <Link 
            href="#work" 
            className="group flex gap-2 items-center justify-center w-full sm:w-auto px-8 py-4 rounded-full font-bold hover:text-primary transition-all text-center text-lg"
          >
            View Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        {/* Live Count Bar */}
        <motion.div 
          variants={childVars}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-semibold tracking-widest uppercase text-gray-500 glass-card px-8 py-4 rounded-3xl"
        >
          <span><strong className="text-white text-base">50+</strong> Projects Delivered</span>
          <span className="hidden md:inline-block w-1 h-1 bg-gray-600 rounded-full my-auto"></span>
          <span><strong className="text-white text-base">4+</strong> Expert Developers</span>
          <span className="hidden md:inline-block w-1 h-1 bg-gray-600 rounded-full my-auto"></span>
          <span><strong className="text-white text-base">24/7</strong> AI Support</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
