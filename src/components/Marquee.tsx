'use client'

import { motion } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'

const items = [
  "AI AUTOMATION",
  "NEXT.JS DEVELOPMENT",
  "UI/UX DESIGN",
  "3D INTERACTIVE",
  "VOICE AGENTS",
  "WORKFLOW OPTIMIZATION",
]

export default function Marquee() {
  return (
    <div className="w-full py-10 bg-white/[0.02] border-y border-white/5 overflow-hidden whitespace-nowrap relative z-10">

      <div className="flex animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-4xl md:text-6xl font-heading font-black mx-8 text-transparent opacity-20 hover:opacity-100 hover:text-primary transition-all duration-500 cursor-default text-black dark:text-white"
            style={{ WebkitTextStroke: '1px currentColor' }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>

    </div>
  )
}