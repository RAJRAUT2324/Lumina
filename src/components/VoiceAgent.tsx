'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Bot, Globe, Phone, Info, Rocket, Mic } from 'lucide-react'

export default function VoiceAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [lang, setLang] = useState<'en' | 'hi'>('hi') // Default to Hindi based on "Namaste" request
  const [displayText, setDisplayText] = useState("")

  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        
        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript
          handleVoiceInput(transcript)
          setIsListening(false)
        }

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error', event.error)
          setIsListening(false)
          setDisplayText(lang === 'en' ? "Sorry, I couldn't hear you clearly." : "Kshama karein, main sun nahi paaya.")
        }
      }
    }
  }, [lang])

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang === 'en' ? 'en-US' : 'hi-IN'
      utterance.rate = 1.0
      window.speechSynthesis.speak(utterance)
      setDisplayText(text)
    }
  }

  const handleToggle = () => {
    const newState = !isOpen
    setIsOpen(newState)
    if (newState) {
      const greeting = lang === 'en' ? "Hi, I'm your TalentRix Assistant. How can I help you today?" : "Namaste, main TalentRix Assistant hoon. Main aapki kya madad kar sakta hoon?"
      speak(greeting)
    } else {
      if (typeof window !== 'undefined') window.speechSynthesis.cancel()
    }
  }

  const handleOption = (option: string) => {
    let response = ""
    switch (option) {
      case 'why':
        response = lang === 'en' 
          ? "TalentRix is an elite software agency focused on premium 3D web experiences and intelligent AI automation."
          : "TalentRix ek elite software agency hai jo premium 3D web experiences aur intelligent AI automation banati hai."
        break
      case 'how':
        response = lang === 'en'
          ? "Browse our services, select a plan, or use the 'Start Project' button to initialize your journey with us."
          : "Hamari services dekhein, ek plan chunein, ya humare saath judne ke liye 'Start Project' button ka upyog karein."
        break
      case 'help':
        response = lang === 'en'
          ? "You can contact our team at talentrix369@gmail.com or use the direct WhatsApp numbers on our contact page."
          : "Aap hamari team se talentrix369@gmail.com par ya hamare contact page par diye gaye WhatsApp numbers se jud sakte hain."
        break
      case 'lang':
        const newLang = lang === 'en' ? 'hi' : 'en'
        setLang(newLang)
        speak(newLang === 'en' ? "Language changed to English." : "Bhasha badal kar Hindi kar di gayi hai.")
        break
    }
    speak(response)
  }

  const handleVoiceInput = (input: string) => {
    const lowerInput = input.toLowerCase()
    if (lowerInput.includes('help') || lowerInput.includes('sampark')) handleOption('help')
    else if (lowerInput.includes('why') || lowerInput.includes('kyun')) handleOption('why')
    else if (lowerInput.includes('how') || lowerInput.includes('kaise')) handleOption('how')
    else speak(lang === 'en' ? `I heard: ${input}. We are happy to help with that!` : `Maine suna: ${input}. Hum isme aapki madad karke khush honge!`)
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 font-sans">
      {/* Interaction Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glass-panel w-[320px] mb-4 p-6 rounded-[2.5rem] border border-primary/20 shadow-[0_0_50px_rgba(34,197,94,0.15)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] -mr-10 -mt-10"></div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Bot size={20} className={isListening ? 'animate-pulse' : ''} />
                </div>
                <div>
                   <h4 className="text-sm font-bold text-white leading-none">Namaste Agent</h4>
                   <span className="text-[10px] uppercase font-bold text-green-400">Voice Active</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 dark:bg-white/5 rounded-3xl p-4 mb-6 border border-white/10 min-h-[70px] flex items-center justify-center text-center px-6">
               <p className="text-sm text-gray-200 font-medium leading-relaxed italic">
                 {isListening ? (lang === 'en' ? 'Adjusting mic... Speak now' : 'Mic set kar raha hoon... Ab boliye') : (displayText || (lang === 'en' ? 'How can I assist you?' : 'Main aapki kya madad kar sakta hoon?'))}
               </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
               {[
                 { id: 'why', label: lang === 'en' ? 'Why TalentRix?' : 'TalentRix kyun?', icon: <Info size={16}/> },
                 { id: 'how', label: lang === 'en' ? 'How to use this?' : 'Isey kaise upyog karein?', icon: <Rocket size={16}/> },
                 { id: 'help', label: lang === 'en' ? 'Help / Contact' : 'Madad / Sampark', icon: <Phone size={16}/> },
                 { id: 'lang', label: lang === 'en' ? 'Switch to Hindi' : 'English mein badlein', icon: <Globe size={16}/>, special: true }
               ].map((opt) => (
                 <button 
                    key={opt.id}
                    onClick={() => handleOption(opt.id)}
                    className={`flex items-center gap-3 w-full p-4 rounded-2xl text-left text-sm font-bold transition-all border border-white/5 hover:border-primary/40 hover:bg-primary/5 ${opt.special ? 'bg-primary/10 text-primary border-primary/20' : 'text-gray-300'}`}
                 >
                   <span className={opt.special ? 'text-primary' : 'text-primary'}>{opt.icon}</span>
                   {opt.label}
                 </button>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={handleToggle}
        className="group relative flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {!isOpen && (
           <>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping z-10" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full z-10" />
           </>
        )}
        
        <div className={`glass-panel w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-red-500/20 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-green-500/20 text-green-400 hover:text-white hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]'}`}>
          {isOpen ? <X size={28} /> : <Bot size={28} />}
        </div>
      </motion.button>
    </div>
  )
}
