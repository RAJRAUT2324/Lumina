import { Bot, Code, Paintbrush, ArrowRight } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-12 md:mb-20 px-6">
        <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-4 md:mb-6 glow-text text-gradient-cyan">Our Services</h1>
        <p className="text-lg md:text-xl text-gray-400">Transforming visions into high-performance digital reality.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto space-y-32">
        {/* AI Automation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 rounded-3xl glass-panel flex items-center justify-center text-primary mb-6">
              <Bot size={36} />
            </div>
            <h2 className="text-4xl font-heading font-bold mb-6">AI Automation</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We engineer intelligent systems designed to save you time and maximize conversions. Stop manually replying to basic queries and let AI qualify leads for you.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-primary" size={20} /> Intelligent Chatbots (WhatsApp, IG, Website)
              </li>
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-primary" size={20} /> Customer Support Automation
              </li>
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-primary" size={20} /> Lead Generation & CRM Workflows
              </li>
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-primary" size={20} /> Zero-Touch Appointment Booking
              </li>
            </ul>
          </div>
          <div className="h-64 md:h-96 rounded-[2.5rem] md:rounded-[3rem] glass-card border border-primary/20 bg-black flex items-center justify-center overflow-hidden">
             {/* Placeholder for 3D Asset or Graphic */}
             <div className="w-64 h-64 border border-primary/40 rounded-full animate-spin [animation-duration:10s] flex items-center justify-center relative">
               <div className="w-32 h-32 bg-primary/20 blur-[30px] rounded-full absolute"></div>
               <Bot size={64} className="text-primary/70 animate-pulse relative z-10" />
             </div>
          </div>
        </section>

        {/* Web Development */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-last lg:order-first h-64 md:h-96 rounded-[2.5rem] md:rounded-[3rem] glass-card border border-purple-500/20 bg-black flex items-center justify-center overflow-hidden">
             <div className="w-64 h-64 border border-purple-500/40 rounded-full animate-spin [animation-duration:15s] flex items-center justify-center relative direction-reverse">
               <div className="w-32 h-32 bg-purple-500/20 blur-[30px] rounded-full absolute"></div>
               <Code size={64} className="text-purple-400/70 animate-pulse relative z-10" />
             </div>
          </div>
          <div>
            <div className="w-16 h-16 rounded-3xl glass-panel flex items-center justify-center text-purple-400 mb-6">
              <Code size={36} />
            </div>
            <h2 className="text-4xl font-heading font-bold mb-6">Web Development</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Fast, SEC-optimized, and impeccably designed. We build experiences that don't just exist on the web, but command attention.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-purple-400" size={20} /> Premium Business Portfolios
              </li>
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-purple-400" size={20} /> High-Conversion Landing Pages
              </li>
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-purple-400" size={20} /> High-Performance E-commerce Architectures
              </li>
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-purple-400" size={20} /> Fully Custom Web Applications
              </li>
            </ul>
          </div>
        </section>

        {/* Content & Design Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 rounded-3xl glass-panel flex items-center justify-center text-red-400 mb-6">
              <Paintbrush size={36} />
            </div>
            <h2 className="text-4xl font-heading font-bold mb-6">Design & Content</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We craft brand identities and multimedia content that resonates with the modern digital consumer.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-red-400" size={20} /> Video Editing (Reels / YouTube / Ads)
              </li>
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-red-400" size={20} /> Click-Worthy Thumbnail Design
              </li>
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-red-400" size={20} /> Logo & Corporate Branding
              </li>
              <li className="flex items-center gap-4 text-gray-300 font-medium">
                <ArrowRight className="text-red-400" size={20} /> High-Engagement Social Media Posts
              </li>
            </ul>
          </div>
          <div className="h-64 md:h-96 rounded-[2.5rem] md:rounded-[3rem] glass-card border border-red-500/20 bg-black flex items-center justify-center overflow-hidden">
             <div className="w-64 h-64 border border-red-500/40 rounded-full animate-spin [animation-duration:12s] flex items-center justify-center relative">
               <div className="w-32 h-32 bg-red-500/20 blur-[30px] rounded-full absolute"></div>
               <Paintbrush size={64} className="text-red-400/70 animate-pulse relative z-10" />
             </div>
          </div>
        </section>

      </div>

      <div className="mt-20 md:mt-32 max-w-2xl text-center">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLScBjVX_I5VgqLG_OKiB2sCqGpxIL8TIAtYz0G1-zZ7pWyAbEg/viewform?usp=publish-editor" 
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel text-lg px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all border border-primary/50 text-white inline-flex items-center gap-4 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
        >
          Start Your Project <ArrowRight size={20} />
        </a>
      </div>
    </main>
  )
}
