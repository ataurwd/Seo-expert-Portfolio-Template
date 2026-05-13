"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechFlow",
    text: "Working with this SEO expert was the best decision for our growth. Our organic traffic tripled in just 4 months, and the quality of leads is incredible.",
    stars: 5,
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, LuxeStyle",
    text: "The technical SEO audit was eye-opening. They fixed issues we didn't even know existed, and our site speed and rankings have never been better.",
    stars: 5,
  },
  {
    name: "James Wilson",
    role: "Founder, GreenSpace",
    text: "Professional, data-driven, and highly effective. They don't just promise results; they deliver them with clear reporting every month.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h3>
        <p className="text-lg text-muted-foreground">
          Don't just take our word for it. Hear from the businesses we've helped scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-8 rounded-3xl border border-white/5 flex flex-col relative"
          >
            <Quote className="absolute top-6 right-8 text-accent/10" size={48} />
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg mb-8 flex-1 leading-relaxed italic text-foreground/90">
              "{t.text}"
            </p>
            <div>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          98% Client Satisfaction Rate
        </p>
      </div>
    </Section>
  )
}
