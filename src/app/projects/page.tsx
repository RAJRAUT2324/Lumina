'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'

interface Project {
  title: string
  category: string
  description: string
  color: string
  image: string
  hoverImage?: string
  link: string
}

const projects: Project[] = [
  {
    title: "Gear Guide",
    category: "AI Industrial Platform",
    description: "An AI-powered selection engine for industrial gears and mechanical components, featuring a neural search interface.",
    color: "cyan",
    image: "/gearguide1.png",
    hoverImage: "/gearguide2.png",
    link: "https://gearguide3.netlify.app/"
  },
  {
    title: "Urban Pulse",
    category: "Smart City Dashboard",
    description: "Real-time urban data visualization and planning tool for modern city management and infrastructure tracking.",
    color: "purple",
    image: "/up1.png",
    hoverImage: "/up2.png",
    link: "https://urbanpluse.netlify.app/"
  },
  {
    title: "Grocify",
    category: "E-Commerce / Logistics",
    description: "Full-stack smart grocery management system with predictive inventory and zero-friction checkout flow.",
    color: "blue",
    image: "/grocify.png",
    link: "https://nilgrocifymart.netlify.app/"
  },
  {
    title: "Quick Mart",
    category: "Retail Technology",
    description: "A high-performance retail storefront optimized for sub-second conversions and intelligent product discovery.",
    color: "green",
    image: "/quick mart.png",
    link: "https://nilesh-bagade-quickmart.netlify.app"
  },
  {
    title: "T&P Cell",
    category: "Education Technology",
    description: "Comprehensive training and placement automation portal for institutional career management.",
    color: "cyan",
    image: "/t&p cell1.jpeg",
    link: "https://tandp.netlify.app/"
  },
  {
    title: "Placement AI",
    category: "Predictive Analytics",
    description: "An AI-driven placement simulation and student performance tracking dashboard using predictive data models.",
    color: "purple",
    image: "/placement ai.png",
    link: "https://placementai" // Dummy link as requested
  }
]

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="glass-card rounded-[2.5rem] overflow-hidden group border border-white/5 hover:border-primary/40 transition-all duration-500 h-[34rem] flex flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Preview Area */}
      <div className="h-[60%] w-full bg-black/60 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60"></div>
        
        {/* Base Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-all duration-1000 ${isHovered && project.hoverImage ? 'scale-110 opacity-0' : 'scale-100 opacity-80 group-hover:scale-105'}`} 
        />

        {/* Hover Image (Transition) */}
        {project.hoverImage && (
          <img 
            src={project.hoverImage} 
            alt={`${project.title} Hover`} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} 
          />
        )}

        {/* Floating Category Tag */}
        <div className="absolute top-6 right-6 z-20">
          <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border backdrop-blur-xl ${project.color === 'cyan' ? 'text-primary border-primary/30 bg-primary/10' : project.color === 'purple' ? 'text-purple-400 border-purple-400/30 bg-purple-400/10' : 'text-blue-400 border-blue-400/30 bg-blue-400/10'}`}>
            {project.category}
          </span>
        </div>
        
        {/* Hover Link Icon */}
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black shadow-[0_0_30px_rgba(0,229,255,0.6)]">
             <ExternalLink size={24} />
           </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-8 h-[40%] flex flex-col justify-between relative z-20 bg-[#0a0a0a] backdrop-blur-xl border-t border-white/5 transition-transform duration-500">
        <div>
          <h3 className="text-3xl font-bold font-heading mb-3 text-white glow-text group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
            {project.description}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mt-4 group/btn">
          View Live Deployment <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
        </div>
      </div>
    </a>
  )
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-heading font-extrabold mb-8 glow-text tracking-tighter">Our Showcase</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore our portfolio of high-performance applications, AI-driven solutions, and premium digital experiences delivered at the speed of the modern web.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="mt-32 glass-panel p-16 rounded-[4rem] text-center max-w-4xl w-full border border-primary/20 shadow-[0_0_50px_rgba(0,229,255,0.05)]">
         <h2 className="text-4xl font-heading font-bold mb-6">Have a specific project in mind?</h2>
         <p className="text-gray-400 mb-10 text-lg">We specialize in turning complex ideas into scalable, high-impact digital products.</p>
         <Link href="https://docs.google.com/forms/d/e/1FAIpQLScBjVX_I5VgqLG_OKiB2sCqGpxIL8TIAtYz0G1-zZ7pWyAbEg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="glass-card px-12 py-5 rounded-full font-bold bg-white text-black hover:bg-primary hover:text-black transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-primary/50">
            Let's Initialize Your Vision
         </Link>
      </div>
    </main>
  )
}
