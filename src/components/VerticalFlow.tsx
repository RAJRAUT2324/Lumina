'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "Urban Pulse",
    description: "Smart city monitoring dashboard.",
    image: "/up1.png",
    link: "https://urbanpluse.netlify.app/",
    color: "from-purple-500/20"
  },
  {
    title: "Gear Guide",
    description: "Industrial AI selection engine.",
    image: "/gearguide1.png",
    link: "https://gearguide3.netlify.app/",
    color: "from-cyan-500/20"
  },
  {
    title: "Project G1",
    description: "Advanced robotic simulation interface.",
    image: "/g1.png",
    link: "#",
    color: "from-orange-500/20"
  },
  {
    title: "Project G2",
    description: "Next-gen machine learning dashboard.",
    image: "/g2.png",
    link: "#",
    color: "from-rose-500/20"
  }
]

// Visuals for the sliding section as per user request
const slidingVisuals = projects.filter(p => p.title.includes("G1") || p.title.includes("G2"));

export default function VerticalFlow() {
  return (
    <section id="work" className="w-full py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight"
          >
            Selected <br />
            <span className="text-gradient-cyan glow-text">Work.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-md mb-12"
          >
            A curated selection of our most impactful digital experiences and AI-driven solutions.
          </motion.p>
          
          <div className="space-y-4">
            {projects.slice(0, 2).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group relative"
              >
                <Link 
                  href={project.link} 
                  target="_blank"
                  className="flex items-center justify-between p-6 rounded-2xl glass-panel border-white/5 hover:border-primary/30 transition-all"
                >
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <Link href="/projects" className="text-primary hover:text-white transition-colors border-b border-primary/30 pb-1 font-bold text-lg">
              Explore All Case Studies →
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Vertical Flowing Bar */}
        <div className="relative h-[600px] md:h-[800px] overflow-hidden rounded-[3rem] glass-panel border-white/10 group">
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-background via-transparent to-background"></div>
          
          <div className="flex flex-col animate-vertical-scroll gap-4 py-4 px-4">
            {[...slidingVisuals, ...slidingVisuals, ...slidingVisuals, ...slidingVisuals].map((project, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden relative border border-white/5 shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} to-transparent z-10`}></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h4 className="text-2xl font-bold font-heading text-white">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
    </section>
  )
}
