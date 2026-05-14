"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import * as React from "react"

const stats = [
  { label: "Traffic Growth", value: "40%+", sub: "In just 3 months" },
  { label: "Projects Completed", value: "100+", sub: "Proven track record" },
  { label: "Rankings", value: "#1", sub: "For local keywords" },
  { label: "Bounce Rate", value: "-25%", sub: "Improved UX performance" },
]

// Fixed values to avoid Math.random() in render for purity
const chartHeights = [
  40, 60, 45, 70, 55, 90, 80, 100, 85, 95, 110, 130, 
  50, 75, 60, 85, 70, 105, 95, 115, 100, 120, 105, 125
];

export function Stats() {
  return (
    <Section id="results" className="bg-background relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Results</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Transparency & Measurable Success</h3>
        <p className="text-lg text-muted-foreground">
          Over the years, we&apos;ve delivered significant improvements in website rankings, traffic, and conversions for our clients.
        </p>
      </div>

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
            <h4 className="text-4xl md:text-6xl font-extrabold text-primary mb-2 tracking-tighter">
              {stat.value}
            </h4>
            <p className="text-lg font-bold mb-1">{stat.label}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Mini Chart Visualization */}
      <div className="mt-24 p-8 glass rounded-[2.5rem] border border-border relative overflow-hidden">
        <div className="flex flex-col md:row items-center justify-between mb-12 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Proven SEO Performance</h3>
            <p className="text-muted-foreground">Consistently delivering ROI through strategic search engine dominance and technical excellence.</p>
          </div>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-all">
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
              className="flex-1 bg-linear-to-t from-primary/40 to-primary rounded-t-lg"
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
      </div>
    </Section>
  )
}
