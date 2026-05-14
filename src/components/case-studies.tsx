"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { ArrowUpRight, TrendingUp, Users, DollarSign, MapPin } from "lucide-react"

const cases = [
  {
    title: "E-Commerce SEO Success",
    desc: "For an online retail client, we increased organic traffic by 40% and improved product rankings through targeted keyword optimization and technical improvements.",
    niche: "Online Retail",
    stats: [
      { label: "Traffic Growth", value: "+40%", icon: TrendingUp },
      { label: "Rankings", value: "Page 1", icon: DollarSign },
      { label: "Timeline", value: "3 Months", icon: Users },
    ],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Local SEO for Law Firm",
    desc: "We helped a law firm achieve first-page rankings for key local keywords, driving more consultations and increasing their client base through Google My Business optimization.",
    niche: "Law Firm",
    stats: [
      { label: "Local Rankings", value: "Top 3", icon: MapPin },
      { label: "Lead Gen", value: "+150%", icon: Users },
      { label: "Visibility", value: "Maps #1", icon: TrendingUp },
    ],
    color: "from-purple-500 to-pink-400"
  }
]

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <div className="flex flex-col md:row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Case Studies</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Real Results for Real Businesses</h3>
        </div>
        <button className="text-lg font-bold flex items-center gap-2 hover:text-primary transition-colors">
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
            className="group relative rounded-[3rem] overflow-hidden bg-secondary/20 border border-border"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                  {project.niche}
                </span>
              </div>
              
              <h4 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {project.desc}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-primary font-bold text-2xl mb-1">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="relative h-64 md:h-80 w-full rounded-3xl overflow-hidden bg-background/50 border border-border">
                {/* Placeholder for Case Study Image/Chart */}
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-10`} />
                <div className="absolute inset-0 flex items-center justify-center italic text-muted-foreground text-sm">
                  Analytics Performance Snapshot
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="glass p-4 rounded-2xl flex items-center justify-between">
                     <p className="text-sm font-bold">Read Full Case Study</p>
                     <div className="p-2 bg-primary text-primary-foreground rounded-full group-hover:rotate-45 transition-transform">
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
