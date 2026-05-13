"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import * as React from "react"

const stats = [
  { label: "Traffic Growth", value: "300%", sub: "Average for clients" },
  { label: "Projects Completed", value: "120+", sub: "Successful deliveries" },
  { label: "Clients Ranked", value: "50+", sub: "Top 3 positions" },
  { label: "Organic Impressions", value: "10M+", sub: "Generated monthly" },
]

// Fixed values to avoid Math.random() in render for purity
const chartHeights = [
  40, 60, 45, 70, 55, 90, 80, 100, 85, 95, 110, 130, 
  50, 75, 60, 85, 70, 105, 95, 115, 100, 120, 105, 125
];

export function Stats() {
  return (
    <Section id="results" className="bg-background relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <h4 className="text-4xl md:text-6xl font-extrabold text-accent mb-2 tracking-tighter">
              {stat.value}
            </h4>
            <p className="text-lg font-bold mb-1">{stat.label}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Mini Chart Visualization */}
      <div className="mt-24 p-8 glass rounded-[2.5rem] border border-white/5 relative overflow-hidden">
        <div className="flex flex-col md:row items-center justify-between mb-12 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Proven Performance Track Record</h3>
            <p className="text-muted-foreground">Consistently delivering ROI through strategic search engine dominance.</p>
          </div>
          <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-white/90 transition-all">
            Download Case Studies
          </button>
        </div>

        <div className="h-64 w-full flex items-end gap-1 md:gap-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${chartHeights[i] % 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.05 }}
              className="flex-1 bg-linear-to-t from-accent/40 to-accent rounded-t-lg"
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
      </div>
    </Section>
  )
}
