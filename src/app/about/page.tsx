'use client'

import { Target, Users, Settings, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-3xl text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 glow-text text-black dark:text-white">Who We Are</h1>
        <p className="text-xl text-gray-700 dark:text-gray-400 leading-relaxed">
          Four innovative minds, one unified mission. We don't just build websites; we engineer gravity-defying digital experiences.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto space-y-32">
        {/* The Team Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass-panel p-10 rounded-[3rem] border border-primary/20 shadow-[0_0_40px_rgba(0,229,255,0.05)] text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
             <Users size={64} className="mx-auto text-primary mb-6 relative z-10" />
             <h2 className="text-5xl font-heading font-bold text-black dark:text-white relative z-10">4</h2>
             <p className="text-xl text-gray-700 dark:text-gray-400 font-medium tracking-wide mt-2 relative z-10">Founding Partners</p>
          </div>
          <div>
            <h3 className="text-3xl font-heading font-bold mb-4">Born from Hackathons. Built for Scale.</h3>
            <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed mb-6">
              We started our journey as four friends pushing the limits of technology in competitive environments. What began as freelance projects rapidly evolved into a powerhouse agency capable of delivering enterprise-grade AI algorithms and stunning 3D interfaces.
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
              We combine the speed of a startup with the polish of a top-tier digital studio.
            </p>
          </div>
        </section>

        {/* Our Team */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold mb-4 glow-text text-black dark:text-white">Meet the Founders</h2>
            <p className="text-gray-700 dark:text-gray-400">The minds behind the antigravity ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Raj Raut */}
            <div className="glass-card p-6 rounded-3xl relative group overflow-hidden flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Image Container with matching UI filter */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 mb-6 relative z-10 group/img">
                <div className="absolute inset-0 bg-primary/30 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-20"></div>
                <img 
                  src="/raj-raut.jpg" 
                  alt="Raj Raut" 
                  className="w-full h-full object-cover filter dark:grayscale-[0.5] dark:contrast-[1.2] group-hover:filter-none transition-all duration-500 relative z-10"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=256&h=256&fit=crop" }}
                />
              </div>
              <h4 className="text-2xl font-bold text-black dark:text-white mb-1 relative z-10 text-center">Raj Raut</h4>
              <p className="text-primary font-medium tracking-wide text-sm mb-4 relative z-10 text-center">Full Stack Developer</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center leading-relaxed mb-6 flex-grow relative z-10">
                Architecting the bridge between creative vision and scalable reality. Focused on building high-performance, intelligent web experiences.
              </p>
              <a href="https://www.linkedin.com/in/raj-raut-0b8502351/" target="_blank" rel="noopener noreferrer" className="p-3 glass-panel rounded-full hover:bg-primary/20 transition-colors relative z-10 group/link">
                <Linkedin size={20} className="text-gray-700 dark:text-gray-300 group-hover/link:text-primary transition-colors" />
              </a>
            </div>

            {/* Friend 1 */}
            <div className="glass-card p-6 rounded-3xl relative group overflow-hidden flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 mb-6 relative z-10 group/img">
                <div className="absolute inset-0 bg-primary/30 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=256&h=256&fit=crop" 
                  alt="Team Member" 
                  className="w-full h-full object-cover filter dark:grayscale-[0.5] dark:contrast-[1.2] group-hover:filter-none transition-all duration-500 relative z-10"
                />
              </div>
              <h4 className="text-2xl font-bold text-black dark:text-white mb-1 relative z-10 text-center">Founder 2</h4>
              <p className="text-primary font-medium tracking-wide text-sm mb-4 relative z-10 text-center">AI Solutions Engineer</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center leading-relaxed mb-6 flex-grow relative z-10">
                Driving innovation through machine learning pipelines and predictive data modeling to solve complex enterprise problems.
              </p>
              <div className="p-3 glass-panel rounded-full hover:bg-primary/20 transition-colors relative z-10 cursor-not-allowed">
                <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
              </div>
            </div>

            {/* Friend 2 */}
            <div className="glass-card p-6 rounded-3xl relative group overflow-hidden flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 mb-6 relative z-10 group/img">
                <div className="absolute inset-0 bg-primary/30 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=256&h=256&fit=crop" 
                  alt="Team Member" 
                  className="w-full h-full object-cover filter dark:grayscale-[0.5] dark:contrast-[1.2] group-hover:filter-none transition-all duration-500 relative z-10"
                />
              </div>
              <h4 className="text-2xl font-bold text-black dark:text-white mb-1 relative z-10 text-center">Founder 3</h4>
              <p className="text-primary font-medium tracking-wide text-sm mb-4 relative z-10 text-center">Creative Director</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center leading-relaxed mb-6 flex-grow relative z-10">
                Crafting visual narratives and breathtaking 3D aesthetics that transform standard brands into premium interactive experiences.
              </p>
              <div className="p-3 glass-panel rounded-full hover:bg-primary/20 transition-colors relative z-10 cursor-not-allowed">
                <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
              </div>
            </div>

            {/* Friend 3 */}
            <div className="glass-card p-6 rounded-3xl relative group overflow-hidden flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 mb-6 relative z-10 group/img">
                <div className="absolute inset-0 bg-primary/30 mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1594824406967-1ca73a0eeb96?w=256&h=256&fit=crop" 
                  alt="Team Member" 
                  className="w-full h-full object-cover filter dark:grayscale-[0.5] dark:contrast-[1.2] group-hover:filter-none transition-all duration-500 relative z-10"
                />
              </div>
              <h4 className="text-2xl font-bold text-black dark:text-white mb-1 relative z-10 text-center">Founder 4</h4>
              <p className="text-primary font-medium tracking-wide text-sm mb-4 relative z-10 text-center">Operations Manager</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-center leading-relaxed mb-6 flex-grow relative z-10">
                Streamlining workflows and ensuring flawless execution from initial discovery phases to post-launch optimization.
              </p>
              <div className="p-3 glass-panel rounded-full hover:bg-primary/20 transition-colors relative z-10 cursor-not-allowed">
                <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
              </div>
            </div>

          </div>
        </section>

        {/* Our Mission */}
        <section className="text-center max-w-4xl mx-auto">
           <Target size={48} className="mx-auto text-purple-400 mb-6" />
           <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
           <p className="text-2xl text-gray-800 dark:text-gray-300 font-medium leading-normal italic glass-panel p-12 rounded-[3rem] border-black/5 dark:border-white/5 relative bg-white/50 dark:bg-transparent">
             "To democratize high-end tech. We inject AI automation into legacy workflows and bring premium 3D design to businesses of all scales, turning average digital footprints into commanding industry presences."
           </p>
        </section>

        {/* Process */}
        <section>
          <div className="text-center mb-16">
            <Settings size={40} className="mx-auto text-gray-600 dark:text-gray-400 mb-4" />
            <h2 className="text-4xl font-heading font-bold">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-3xl relative">
              <span className="text-5xl font-black text-black/5 dark:text-white/5 absolute -top-4 -right-2">01</span>
              <h4 className="text-xl font-bold mb-4 text-gradient-cyan glow-text">Discovery & Strategy</h4>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed relative z-10">We audit your current tech stack and deeply analyze your bottlenecks, mapping out where AI and modern web frameworks can deliver maximum ROI.</p>
            </div>
            <div className="glass-card p-10 rounded-3xl relative">
              <span className="text-5xl font-black text-black/5 dark:text-white/5 absolute -top-4 -right-2">02</span>
              <h4 className="text-xl font-bold mb-4 text-purple-500 dark:text-purple-400 dark:text-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Architecture & Design</h4>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed relative z-10">Our designers craft the "Antigravity" aesthetic while engineers lay the robust, scalable backend infrastructure to support complex AI workflows.</p>
            </div>
            <div className="glass-card p-10 rounded-3xl relative">
              <span className="text-5xl font-black text-black/5 dark:text-white/5 absolute -top-4 -right-2">03</span>
              <h4 className="text-xl font-bold mb-4 text-blue-500 dark:text-blue-400">Development & Launch</h4>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed relative z-10">Rapid agile development phase culminating in rigorous testing. We don't just hand over code; we ensure a seamless integration into your business reality.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
