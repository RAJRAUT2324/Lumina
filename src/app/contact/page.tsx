import { Mail, MessageCircle, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative z-10 flex flex-col items-center">
      <div className="max-w-3xl text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 glow-text text-white">Initialize Comms</h1>
        <p className="text-xl text-gray-400">Whether you need an entire AI ecosystem or a slick new Next.js interface, we're ready.</p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        {/* Contact Info Col */}
        <div className="space-y-12">
           <div className="glass-panel p-10 rounded-[3rem] border border-primary/20 bg-black/40 relative overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
             
             <h3 className="text-3xl font-heading font-bold mb-10 relative z-10">Direct Lines</h3>
             
             <div className="space-y-8 relative z-10">
                <a href="https://wa.me/something" className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                     <MessageCircle size={28} />
                   </div>
                   <div>
                     <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">WhatsApp</p>
                     <p className="text-xl font-medium text-gray-200 group-hover:text-green-400 transition-colors">Chat Instantly</p>
                   </div>
                </a>

                <a href="mailto:hello@luminaflux.com" className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                     <Mail size={28} />
                   </div>
                   <div>
                     <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                     <p className="text-xl font-medium text-gray-200 group-hover:text-primary transition-colors">hello@luminaflux.com</p>
                   </div>
                </a>

                <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                     <MapPin size={28} />
                   </div>
                   <div>
                     <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                     <p className="text-xl font-medium text-gray-200">Global & Remote Native</p>
                   </div>
                </div>
             </div>
           </div>
        </div>

        {/* Form Col */}
        <div className="glass-card p-10 md:p-12 rounded-[3rem] border border-white/10 relative">
          <form className="space-y-6 relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-2">Name</label>
                  <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-2">Email</label>
                  <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="john@company.com" />
                </div>
             </div>
             
             <div className="space-y-2">
               <label htmlFor="service" className="text-sm font-medium text-gray-400 ml-2">Interested Service</label>
               <select id="service" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 appearance-none">
                 <option value="ai">AI Automation & Chatbots</option>
                 <option value="web">Web Development (Website/App)</option>
                 <option value="design">Design & Content Creation</option>
                 <option value="student">Student / Hackathon Project</option>
               </select>
             </div>

             <div className="space-y-2">
               <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-2">Project Details</label>
               <textarea id="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about what you want to build..."></textarea>
             </div>

             <button type="button" className="w-full py-5 rounded-2xl font-bold bg-white text-black hover:bg-white/90 transition-colors flex items-center justify-center gap-3 text-lg mt-4">
               Transmit Message <Send size={20} />
             </button>
          </form>
        </div>
      </div>
    </main>
  )
}
