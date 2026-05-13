"use client"

import { Section } from "./section"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import * as React from "react"

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "Typically, you can expect to see noticeable improvements within 3 to 6 months. SEO is a long-term investment, but the compounding effects of organic growth provide the highest ROI over time.",
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No reputable SEO expert can guarantee #1 rankings as search algorithms are constantly changing. However, we guarantee best-in-class strategies, data-driven execution, and a proven track record of significant traffic growth.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have extensive experience in Ecommerce, SaaS, Fintech, and High-Ticket Service businesses. Our data-driven methodology is adaptable to almost any competitive niche.",
  },
  {
    question: "How do you measure SEO success?",
    answer: "We focus on the metrics that matter most to your business: organic conversions, revenue growth, high-intent keyword rankings, and organic traffic quality.",
  },
  {
    question: "What tools do you use for SEO?",
    answer: "We use a premium stack including Ahrefs, SEMrush, Google Search Console, Screaming Frog, and custom internal tools for data analysis and reporting.",
  },
]

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="border-b border-border py-6">
      <button 
        className="w-full flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold group-hover:text-primary transition-colors">{question}</span>
        <div className={`p-2 rounded-full ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary'} transition-colors`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-muted-foreground leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Common Questions</h3>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </Section>
  )
}
