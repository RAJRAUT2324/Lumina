'use client'

import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { ReactNode } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  delay?: number
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 15, 
        delay 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="outer-glow rounded-[2rem] transition-all duration-300 h-full"
    >
      <Tilt 
        glareEnable={true} 
        glareMaxOpacity={0.15} 
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        className="glass-card p-6 md:p-8 rounded-3xl md:rounded-[2rem] h-full flex flex-col justify-start relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -mr-10 -mt-10 transition-all duration-500 group-hover:bg-primary/40 group-hover:scale-150"></div>
        <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center mb-6 text-primary z-10 border-primary/20">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 font-heading z-10">{title}</h3>
        <p className="text-gray-400 font-medium leading-relaxed z-10">
          {description}
        </p>
      </Tilt>
    </motion.div>
  )
}
