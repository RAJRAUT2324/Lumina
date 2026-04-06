'use client'

import React from 'react'
import { Youtube, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const socials = [
    { icon: <Youtube size={20} />, href: "https://youtube.com/@nileshbagade-q6t?si=9TSsIf4ZDLl_ovcG", label: "YouTube", color: "hover:text-red-500" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/talentrix_solutions369?igsh=Mnozd21mZjJ1ODlh", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/talentrix-solutions/about/", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: <Mail size={20} />, href: "mailto:talentrix369@gmail.com", label: "Email", color: "hover:text-primary" }
  ]

  return (
    <footer className="w-full py-12 px-6 relative z-10 border-t border-black/10 dark:border-white/10 bg-white/5 dark:bg-black/40 backdrop-blur-md flex flex-col items-center gap-8">
      <div className="flex items-center gap-6">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-white/20`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-500 font-bold tracking-widest uppercase">
          © {new Date().getFullYear()} TalentRix Solutions.
        </p>
        <p className="text-[10px] text-gray-600 font-medium uppercase tracking-[0.3em]">
          Engineering High-Impact Digital Ecosystems
        </p>
      </div>
    </footer>
  )
}
