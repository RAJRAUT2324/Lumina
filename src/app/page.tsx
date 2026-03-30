import Hero from "@/components/Hero"
import ServiceCard from "@/components/ServiceCard"
import { Bot, Code, Paintbrush, Zap, Target, Clock, Rocket, ShieldCheck } from "lucide-react"
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />

      {/* Services Overview */}
      <section id="services" className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 glow-text">Core Capabilities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Engineering solutions that bridge business and technology with unmatched polish.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="AI Automation" 
            description="We build intelligent chatbots, workflow automations, and CRM integrations that operate 24/7. Turn your WhatsApp or Instagram into an Always-On sales engine."
            icon={<Bot size={32} />}
            delay={0.1}
          />
          <ServiceCard 
            title="Web Development" 
            description="From high-converting landing pages to complex custom web applications. We utilize Next.js and robust architectures for max performance."
            icon={<Code size={32} />}
            delay={0.2}
          />
          <ServiceCard 
            title="Design & Content" 
            description="Frictionless UX/UI, 3D interactive assets, branding, and video editing. We make your digital presence visually magnetic."
            icon={<Paintbrush size={32} />}
            delay={0.3}
          />
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="inline-block text-primary hover:text-white font-semibold transition-colors border-b border-primary/30 hover:border-white pb-1">
            View All Services →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full border-y border-white/5 bg-white/[0.02] py-24 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-panel p-8 rounded-3xl text-center">
            <Zap className="mx-auto mb-4 text-primary" size={40} />
            <h4 className="font-bold text-xl mb-2">Fast Delivery</h4>
            <p className="text-sm text-gray-400">Rapid shipping without sacrificing the premium antigravity feel.</p>
          </div>
          <div className="glass-panel p-8 rounded-3xl text-center">
            <Target className="mx-auto mb-4 text-purple-400" size={40} />
            <h4 className="font-bold text-xl mb-2">Result Driven</h4>
            <p className="text-sm text-gray-400">Everything is engineered for conversions and measurable ROI.</p>
          </div>
          <div className="glass-panel p-8 rounded-3xl text-center">
            <Rocket className="mx-auto mb-4 text-blue-400" size={40} />
            <h4 className="font-bold text-xl mb-2">Affordable Scale</h4>
            <p className="text-sm text-gray-400">Enterprise-grade technology adapted for modern growing businesses.</p>
          </div>
          <div className="glass-panel p-8 rounded-3xl text-center border-primary/20 bg-primary/5">
            <ShieldCheck className="mx-auto mb-4 text-green-400" size={40} />
            <h4 className="font-bold text-xl mb-2">Student Focus</h4>
            <p className="text-sm text-gray-400">Dedicated pipelines for Hackathons and academic projects.</p>
          </div>
        </div>
      </section>

      {/* Portfolio & Packages Preview */}
      <section id="work" className="w-full max-w-7xl mx-auto px-6 py-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-heading font-bold mb-8">Selected Work</h2>
          <div className="space-y-6">
            <div className="glass-card rounded-[2rem] h-64 overflow-hidden relative group cursor-pointer border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl font-bold">Sentinel AI</h3>
                <p className="text-gray-300 text-sm">Predictive Maintenance Dashboard</p>
              </div>
              <div className="w-full h-full bg-[#0a0a0a] group-hover:scale-105 transition-transform duration-700"></div>
            </div>
            <div className="glass-card rounded-[2rem] h-64 overflow-hidden relative group cursor-pointer border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl font-bold">E-Commerce Flow</h3>
                <p className="text-gray-300 text-sm">High-Conversion Storefront</p>
              </div>
              <div className="w-full h-full bg-[#0a0a0a] group-hover:scale-105 transition-transform duration-700"></div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/projects" className="text-primary hover:text-white transition-colors border-b border-primary/30 pb-1 font-medium">Explore All Case Studies →</Link>
          </div>
        </div>

        <div>
           <h2 className="text-4xl font-heading font-bold mb-8">Packages Preview</h2>
           <div className="space-y-4">
              <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 border border-gray-600 px-3 py-1 rounded-full">Website + Basic Bot</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Perfect for individuals and small setups.</p>
              </div>
              <div className="glass-panel p-8 rounded-3xl border border-primary/40 shadow-[0_0_20px_rgba(0,229,255,0.1)] relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-primary/20 blur-[50px]"></div>
                <div className="flex justify-between items-center mb-2 relative z-10">
                  <h3 className="text-xl font-bold text-gradient-cyan glow-text">Growth </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary border border-primary bg-primary/10 px-3 py-1 rounded-full animate-pulse">Most Popular</span>
                </div>
                <p className="text-sm text-gray-300 mb-4 relative z-10">Website + Custom AI Chatbot + Lead Engine.</p>
              </div>
              <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-200">Scale</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">Enterprise</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Full Automation + CRM + Marketing Dashboard.</p>
              </div>
           </div>
           <div className="mt-8">
            <Link href="/pricing" className="text-purple-400 hover:text-white transition-colors border-b border-purple-400/30 pb-1 font-medium">View Detailed Pricing →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-8">Let's Grow Your Business</h2>
          <p className="text-xl text-gray-400 mb-12">Step into the next generation of the web with Antigravity AI and design.</p>
          <Link href="/contact" className="glass-card text-2xl px-12 py-5 rounded-full font-bold hover:bg-white/10 transition-all border border-primary/50 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.8)] glow-text inline-block">
            Initialize Now
          </Link>
        </div>
      </section>
    </main>
  )
}
