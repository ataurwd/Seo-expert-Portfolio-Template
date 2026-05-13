"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { ArrowUpRight, TrendingUp, Users, DollarSign } from "lucide-react"

const cases = [
  {
    title: "Ecommerce Giant Scaled to 450% Traffic",
    niche: "Fashion Ecommerce",
    stats: [
      { label: "Traffic Growth", value: "+450%", icon: TrendingUp },
      { label: "Revenue Increase", value: "+320%", icon: DollarSign },
      { label: "New Users", value: "2.5M+", icon: Users },
    ],
    image: "/case1.jpg", // Placeholder path
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "SaaS Startup Dominating High-Intent Keywords",
    niche: "Fintech SaaS",
    stats: [
      { label: "Traffic Growth", value: "+280%", icon: TrendingUp },
      { label: "Lead Gen", value: "+150%", icon: Users },
      { label: "ROI", value: "12x", icon: DollarSign },
    ],
    image: "/case2.jpg", // Placeholder path
    color: "from-purple-500 to-pink-400"
  }
]

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <div className="flex flex-col md:row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Case Studies</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Real Results for Real Businesses</h3>
        </div>
        <button className="text-lg font-bold flex items-center gap-2 hover:text-accent transition-colors">
          View All Projects <ArrowUpRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cases.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative rounded-[3rem] overflow-hidden bg-secondary/20 border border-white/5"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
                  {project.niche}
                </span>
              </div>
              
              <h4 className="text-3xl font-bold mb-8 group-hover:text-accent transition-colors">
                {project.title}
              </h4>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-accent font-bold text-2xl mb-1">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden bg-background/50 border border-white/5">
                {/* Placeholder for Case Study Image/Chart */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-10`} />
                <div className="absolute inset-0 flex items-center justify-center italic text-muted-foreground text-sm">
                  Analytics Performance Chart
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="glass p-4 rounded-2xl flex items-center justify-between">
                     <p className="text-sm font-bold">Read Case Study</p>
                     <div className="p-2 bg-accent text-accent-foreground rounded-full group-hover:rotate-45 transition-transform">
                       <ArrowUpRight size={16} />
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
