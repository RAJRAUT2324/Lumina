'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: "Chetan Dakhole",
    role: "AI Research @Planto AI | Full Stack Dev",
    content: "TALENTRIX approach to collective intelligence is groundbreaking. Their integration of AI with premium design creates a benchmark for the industry.",
    image: "/review/chetan.jpg",
    rating: 5
  },
  {
    name: "Prasad Nandgaonkar",
    role: "Assistant System Engineer at TCS",
    content: "The level of engineering precision here is top-tier. Their digital ecosystems are built for scale and unmatched performance. A true technical powerhouse.",
    image: "/review/prasad.jpg",
    rating: 5
  },
  {
    name: "Hitesh Nagpure",
    role: "Machine Learning & Python Expert",
    content: "Seamlessly bridging the gap between complex ML models and user-centric frontend experiences. Highly professional and result-oriented team.",
    image: "/review/himanshu.jpg",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">What Our Partners Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Success stories from businesses we've helped scale with collective intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 rounded-[2.5rem] relative group border-white/5 hover:border-primary/20"
            >
              <div className="absolute top-8 right-8 text-primary opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote size={40} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" className="text-primary" />
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-gradient-to-tr from-primary to-purple-500 text-white font-bold text-xl">
                  {review.image ? (
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                  ) : (
                    review.name.charAt(0)
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-white leading-tight">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Blurs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full -z-10"></div>
    </section>
  )
}
