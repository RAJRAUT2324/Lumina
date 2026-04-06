import Hero from "@/components/Hero"
import ServiceCard from "@/components/ServiceCard"
import { Bot, Code, Paintbrush, Zap, Target, Clock, Rocket, ShieldCheck } from "lucide-react"
import Link from 'next/link'
import ContactSection from "@/components/ContactSection"
import Marquee from "@/components/Marquee"
import Testimonials from "@/components/Testimonials"
import VerticalFlow from "@/components/VerticalFlow"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      
      <Marquee />

      {/* Services Overview */}
      <section id="services" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tight">Core <br className="md:hidden" /> <span className="text-gradient-cyan glow-text">Capabilities.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">Engineering world-class solutions that bridge the gap between high-level business strategy and cutting-edge technology.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard 
            title="AI Automation" 
            description="Intelligent chatbots, autonomous workflows, and neural CRM integrations. We make your business run 24/7."
            icon={<Bot size={32} />}
            delay={0.1}
          />
          <ServiceCard 
            title="Web Engineering" 
            description="Ultra-fast Next.js applications with 3D interactivity. We build the infrastructure for the next billion users."
            icon={<Code size={32} />}
            delay={0.2}
          />
          <ServiceCard 
            title="Brand Design" 
            description="Visually magnetic identities and frictionless UI/UX. We craft the aesthetic standard of the industry."
            icon={<Paintbrush size={32} />}
            delay={0.3}
          />
        </div>
        
        <div className="text-center mt-16 md:mt-24">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-white font-black text-xl transition-all group">
            Explore Ecosystem 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full border-y border-white/5 bg-white/[0.01] py-24 md:py-32 relative z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="glass-panel p-10 rounded-[3rem] text-center border-white/5 hover:border-primary/20 transition-all">
            <Zap className="mx-auto mb-6 text-primary" size={48} />
            <h4 className="font-heading font-black text-2xl mb-3">Hyper Speed</h4>
            <p className="text-gray-400 leading-relaxed text-sm">Rapid deployment workflows without compromising on premium quality.</p>
          </div>
          <div className="glass-panel p-10 rounded-[3rem] text-center border-white/5 hover:border-purple-400/20 transition-all">
            <Target className="mx-auto mb-6 text-purple-400" size={48} />
            <h4 className="font-heading font-black text-2xl mb-3">ROI Driven</h4>
            <p className="text-gray-400 leading-relaxed text-sm">Every line of code is engineered to maximize conversion and business scale.</p>
          </div>
          <div className="glass-panel p-10 rounded-[3rem] text-center border-white/5 hover:border-blue-400/20 transition-all">
            <Rocket className="mx-auto mb-6 text-blue-400" size={48} />
            <h4 className="font-heading font-black text-2xl mb-3">Future Proof</h4>
            <p className="text-gray-400 leading-relaxed text-sm">Enterprise-grade architectures ready for the AI-first digital landscape.</p>
          </div>
          <div className="glass-panel p-10 rounded-[3rem] text-center border-primary/20 bg-primary/5">
            <ShieldCheck className="mx-auto mb-6 text-green-400" size={48} />
            <h4 className="font-heading font-black text-2xl mb-3">Total Security</h4>
            <p className="text-gray-400 leading-relaxed text-sm">Encrypted pipelines and secure data handling for peace of mind.</p>
          </div>
        </div>
      </section>

      <VerticalFlow />

      <Testimonials />

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
