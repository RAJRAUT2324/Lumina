import { Check } from "lucide-react"
import Link from 'next/link'

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6">Simple Pricing</h1>
        <p className="text-xl text-gray-400">Transparent packages engineered to scale with your ambition.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12">
        {/* Starter */}
        <div className="glass-card rounded-[3rem] p-10 flex flex-col relative group hover:-translate-y-2 transition-transform duration-500">
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-heading mb-2 text-gray-300">Starter</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Foundational</p>
          </div>
          <p className="text-4xl font-bold mb-8">$X,XXX</p>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <Check className="text-gray-500" size={20} /> Basic Website Deployment
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <Check className="text-gray-500" size={20} /> Static Landing Page
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <Check className="text-gray-500" size={20} /> Basic Chatbot Setup
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <Check className="text-gray-500" size={20} /> 1 Month Free Hosting
            </li>
          </ul>
          <Link href="/contact" className="w-full text-center glass-panel py-4 rounded-full font-bold hover:bg-white/5 transition-colors text-white">
            Choose Starter
          </Link>
        </div>

        {/* Growth */}
        <div className="glass-card rounded-[3rem] p-10 flex flex-col relative transform md:-translate-y-8 border-primary/30 shadow-[0_0_50px_rgba(0,229,255,0.1)] hover:shadow-[0_0_60px_rgba(0,229,255,0.2)] transition-shadow">
          <div className="absolute top-0 right-0 -m-4 -mr-4 bg-primary text-black font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full transform rotate-12 shadow-lg animate-pulse">
            Most Popular
          </div>
          <div className="mb-8 relative z-10">
            <h3 className="text-3xl font-bold font-heading mb-2 text-transparent bg-clip-text text-gradient-cyan glow-text">Growth</h3>
            <p className="text-sm text-primary uppercase tracking-widest font-semibold">Acceleration</p>
          </div>
          <p className="text-5xl font-bold mb-8">$X,XXX</p>
          <ul className="space-y-4 mb-10 flex-grow relative z-10">
            <li className="flex items-center gap-3 text-white font-medium">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-primary" size={14} />
              </div> 
              Custom Website (Multi-Page)
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-primary" size={14} />
              </div> 
              Custom AI Chatbot Integration
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-primary" size={14} />
              </div> 
              Lead Generation System
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-primary" size={14} />
              </div> 
              Basic Analytics Setup
            </li>
            <li className="flex items-center gap-3 text-white font-medium">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-primary" size={14} />
              </div> 
              Premium Animations
            </li>
          </ul>
          <Link href="/contact" className="w-full text-center bg-primary text-black py-4 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]">
            Choose Growth
          </Link>
          <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none rounded-[3rem]"></div>
        </div>

        {/* Scale */}
        <div className="glass-card rounded-[3rem] p-10 flex flex-col border-purple-500/20 hover:-translate-y-2 transition-transform duration-500">
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-heading mb-2 text-purple-400">Scale</h3>
            <p className="text-sm text-purple-500/70 uppercase tracking-widest font-semibold">Enterprise</p>
          </div>
          <p className="text-4xl font-bold mb-8">Custom</p>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <Check className="text-purple-400" size={20} /> Full Automation Suite
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <Check className="text-purple-400" size={20} /> Deep CRM Integrations
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <Check className="text-purple-400" size={20} /> Marketing Funnel Engineering
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <Check className="text-purple-400" size={20} /> Custom Dashboard & Analytics
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-medium">
              <Check className="text-purple-400" size={20} /> Complex Web Application
            </li>
          </ul>
          <Link href="/contact" className="w-full text-center glass-panel border-purple-500/30 text-white hover:bg-purple-500/10 py-4 rounded-full font-bold transition-colors">
            Book a Architecture Call
          </Link>
        </div>
      </div>
    </main>
  )
}
