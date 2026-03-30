'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/something" // Replace with real number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    >
      <div className="relative">
        {/* Ping effect */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping z-10" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full z-10" />
        
        <div className="glass-panel w-14 h-14 rounded-full flex items-center justify-center bg-green-500/20 text-green-400 hover:text-white hover:bg-green-500 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]">
          <MessageCircle size={28} />
        </div>
      </div>
    </motion.a>
  )
}
