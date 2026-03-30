import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Sentinel AI",
      category: "AI & Data Dashboard",
      description: "A predictive maintenance platform combining real-time IoT sensory data with large language models to diagnose industrial machinery faults before they happen.",
      color: "cyan",
      delay: 0
    },
    {
      title: "OmniStore Engine",
      category: "E-Commerce",
      description: "A headless e-commerce architecture providing sub-second page loads with a stunning 3D product configurator.",
      color: "purple",
      delay: 100
    },
    {
      title: "NeuroLead Bot",
      category: "Customer Automation",
      description: "Deployed a WhatsApp AI agent that increased organic lead qualification by 300% within the first month for a B2B SaaS client.",
      color: "blue",
      delay: 200
    },
    {
      title: "Project Zero Gravity",
      category: "Internal Hackathon",
      description: "A highly experimental WebGL environment demonstrating our continuous research into fluid, physics-based UI interfaces.",
      color: "green",
      delay: 300
    }
  ]

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6">Our Portfolio</h1>
        <p className="text-xl text-gray-400">A curation of high-impact technical deployments and premium visuals.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
           <div key={index} className="glass-card rounded-[3rem] overflow-hidden group border border-white/5 hover:border-white/20 transition-all duration-500 h-[32rem] flex flex-col cursor-pointer relative">
              {/* Image Preview Area */}
              <div className="h-3/5 w-full bg-black/60 relative overflow-hidden flex items-center justify-center">
                 <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent z-10`}></div>
                 {/* Abstract geometric placeholders instead of dead images */}
                 <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-1000">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10 ${project.color === 'cyan' ? 'bg-cyan-500/10 shadow-[0_0_50px_rgba(0,229,255,0.2)]' : project.color === 'purple' ? 'bg-purple-500/10 shadow-[0_0_50px_rgba(168,85,247,0.2)]' : project.color === 'blue' ? 'bg-blue-500/10 shadow-[0_0_50px_rgba(59,130,246,0.2)]' : 'bg-green-500/10 shadow-[0_0_50px_rgba(34,197,94,0.2)]'} backdrop-blur-3xl`}></div>
                 </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 h-2/5 flex flex-col justify-between relative z-20 bg-background/50 backdrop-blur-xl border-t border-white/5 group-hover:-translate-y-4 transition-transform duration-500">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-2 text-white">{project.title}</h3>
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${project.color === 'cyan' ? 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10' : project.color === 'purple' ? 'text-purple-400 border-purple-400/30 bg-purple-400/10' : project.color === 'blue' ? 'text-blue-400 border-blue-400/30 bg-blue-400/10' : 'text-green-400 border-green-400/30 bg-green-400/10'} mb-4 inline-block`}>
                    {project.category}
                  </span>
                  <p className="text-gray-400 text-sm line-clamp-2 mt-2 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                </div>
              </div>
           </div>
        ))}
      </div>

      <div className="mt-24 text-center">
         <p className="text-gray-400 mb-6">Want to see more detailed technical case studies?</p>
         <Link href="/contact" className="text-primary hover:text-white transition-colors border-b border-primary/30 pb-1 font-medium">Request Full Case Study Deck →</Link>
      </div>
    </main>
  )
}
