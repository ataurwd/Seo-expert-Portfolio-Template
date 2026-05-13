"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { 
  Search, 
  Target, 
  Settings, 
  Link2, 
  BarChart3, 
  Zap 
} from "lucide-react"

const steps = [
  {
    title: "SEO Audit & Discovery",
    desc: "We analyze your current performance, technical health, and competitor landscape.",
    icon: Search,
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Strategy & Roadmap",
    desc: "Developing a custom data-driven plan tailored to your business goals.",
    icon: Target,
    color: "bg-purple-500",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "Technical Fixes",
    desc: "Implementing high-impact technical fixes to ensure perfect crawlability.",
    icon: Settings,
    color: "bg-cyan-500",
    shadow: "shadow-cyan-500/20"
  },
  {
    title: "Content Optimization",
    desc: "Aligning your content with search intent to capture high-value traffic.",
    icon: Zap,
    color: "bg-orange-500",
    shadow: "shadow-orange-500/20"
  },
  {
    title: "Authority Building",
    desc: "Strategic link building and PR to boost your search engine authority.",
    icon: Link2,
    color: "bg-pink-500",
    shadow: "shadow-pink-500/20"
  },
  {
    title: "Growth Monitoring",
    desc: "Continuous performance tracking and strategy adjustments for scaling.",
    icon: BarChart3,
    color: "bg-green-500",
    shadow: "shadow-green-500/20"
  },
]

export function Process() {
  return (
    <Section id="process" className="bg-[#F9FAFB] dark:bg-zinc-950">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Our Process</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">How We Scale Your Growth</h3>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          A proven, systematic approach to search engine optimization that delivers consistent results through every stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-zinc-900 p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
          >
            {/* Step Number */}
            <div className="absolute top-8 right-10 text-4xl font-black text-zinc-50 dark:text-zinc-800 group-hover:text-accent/10 transition-colors">
              0{index + 1}
            </div>

            <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg ${step.shadow}`}>
              <step.icon size={28} />
            </div>

            <h4 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white leading-tight">
              {step.title}
            </h4>
            
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {step.desc}
            </p>

            <div className="mt-8 pt-8 border-t border-zinc-50 dark:border-zinc-800/50">
               <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Stage {index + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
