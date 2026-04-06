'use client'

import { Mail, MessageCircle, MapPin, Send, Rocket, ClipboardList } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-32 relative z-10 flex flex-col items-center">
       <div className="max-w-3xl text-center mb-12 md:mb-16 px-6">
        <h2 className="text-4xl md:text-7xl font-heading font-extrabold mb-4 md:mb-6 glow-text text-black dark:text-white">Initialize Comms</h2>
        <p className="text-xl text-gray-400">Whether you need an entire AI ecosystem or a slick new Next.js interface, we're ready.</p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 relative px-6">
        {/* Contact Info Col */}
        <div className="space-y-8 md:space-y-12">
           <div className="glass-panel p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-primary/20 bg-white/5 dark:bg-black/40 relative overflow-hidden h-full flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
             
             <h3 className="text-3xl font-heading font-bold mb-10 relative z-10">Direct Lines</h3>
                          <div className="space-y-8 relative z-10">
                {/* Team Direct Lines */}
                <div className="space-y-6">
                  <p className="text-sm uppercase tracking-widest text-primary font-extrabold mb-4">Direct Team Access</p>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { name: "Raj Raut", num: "8261800389" },
                      { name: "Nilesh Bagade", num: "9834297718" },
                      { name: "Shreyas Dakhole", num: "8262922824" },
                      { name: "Bhavesh Keche", num: "9356754170" }
                    ].map((member, i) => (
                      <div key={i} className="flex items-center justify-between group/item">
                        <div>
                          <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-bold mb-1 group-hover/item:text-primary transition-colors">{member.name}</p>
                          <a href={`tel:+91${member.num}`} className="text-xl font-semibold text-black dark:text-white hover:text-primary transition-all tracking-wider">+91 {member.num}</a>
                        </div>
                        <a 
                          href={`https://wa.me/91${member.num}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-all shadow-[0_0_20px_rgba(34,197,94,0.15)] ring-1 ring-black/5 dark:ring-white/5 hover:ring-green-400/30"
                        >
                          <MessageCircle size={22} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email and Location below */}
                <div className="pt-6 border-t border-black/5 dark:border-white/5 space-y-8">

                <a href="mailto:talentrix369@gmail.com" className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                     <Mail size={28} />
                   </div>
                   <div>
                     <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                     <p className="text-xl font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">talentrix369@gmail.com</p>
                   </div>
                </a>

                <div className="flex items-center gap-6 group">
                   <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                     <MapPin size={28} />
                   </div>
                   <div>
                     <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                     <p className="text-xl font-medium text-gray-700 dark:text-gray-200">Global & Remote Native</p>
                   </div>
                </div>
             </div>
           </div>
        </div>
        </div>

        {/* Action Cards Col */}
        <div className="space-y-8">
          {/* Start Project Card */}
          <div className="glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-black/10 dark:border-white/10 hover:border-primary/30 transition-all group">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                <Rocket size={24} />
              </div>
              <h3 className="text-3xl font-heading font-bold text-black dark:text-white">Start Project</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Ready to kickstart your next big idea?<br />
              Let's collaborate to build something amazing together.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScBjVX_I5VgqLG_OKiB2sCqGpxIL8TIAtYz0G1-zZ7pWyAbEg/viewform?usp=publish-editor" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl font-bold bg-black dark:bg-white text-white dark:text-black hover:bg-primary transition-all flex items-center justify-center gap-3 text-lg"
            >
              Get Started <Send size={20} />
            </a>
          </div>

          {/* Feedback Card */}
          <div className="glass-card p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-black/10 dark:border-white/10 hover:border-purple-500/30 transition-all group">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-all">
                <ClipboardList size={24} />
              </div>
              <h3 className="text-3xl font-heading font-bold text-black dark:text-white">Feedback Form</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Your insights drive our innovation.<br />
              Tell us how we can improve your Lumina Flux experience.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeaiXKrE04caKUM7y5-w98Pwxu4Bg2lv7jRH9hGRELspO5PRw/viewform?usp=publish-editor" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl font-bold bg-transparent border border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all flex items-center justify-center gap-3 text-lg"
            >
              Give Feedback <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
