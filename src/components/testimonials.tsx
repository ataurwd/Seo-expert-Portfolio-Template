"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marketing Director",
    role: "E-commerce Business",
    text: "Dipto Das SEO completely transformed our online presence. We saw a significant increase in organic traffic and improved search rankings within just a few months.",
    stars: 5,
  },
  {
    name: "Senior Partner",
    role: "Law Firm",
    text: "We&apos;re now ranking at the top for our local services. Their local SEO strategy was exactly what we needed to grow our client base.",
    stars: 5,
  },
  {
    name: "Founder",
    role: "SaaS Startup",
    text: "The technical SEO fixes alone saved our organic performance. I highly recommend Dipto for any business looking for measurable digital growth.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h3>
        <p className="text-lg text-muted-foreground">
          Don&apos;t just take our word for it. Hear from the businesses we&apos;ve helped scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name + index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-8 rounded-3xl border border-border flex flex-col relative"
          >
            <Quote className="absolute top-6 right-8 text-primary/10" size={48} />
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg mb-8 flex-1 leading-relaxed italic text-foreground/90">
              &quot;{t.text}&quot;
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
          Delivering long-term results through expert SEO strategy.
        </p>
      </div>
    </Section>
  )
}
