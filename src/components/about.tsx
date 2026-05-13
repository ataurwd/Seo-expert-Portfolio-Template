"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { Award, CheckCircle2 } from "lucide-react"

const skills = [
  { name: "Strategic SEO Planning", level: 95 },
  { name: "Technical SEO Auditing", level: 98 },
  { name: "High-Authority Link Building", level: 90 },
  { name: "Data Analysis (GA4/GSC)", level: 92 },
]

export function About() {
  return (
    <Section id="about" className="bg-secondary/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-accent/20 border border-accent/20 relative">
            {/* Placeholder for Profile Image */}
            <div className="absolute inset-0 flex items-center justify-center italic text-muted-foreground">
              [Professional SEO Expert Image]
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 glass p-6 rounded-3xl border border-white/10 shadow-2xl hidden md:block max-w-[200px]">
            <Award className="text-accent mb-3" size={32} />
            <p className="font-bold text-sm">Top Rated SEO Strategist</p>
            <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1">Certified by Google & HubSpot</p>
          </div>
        </motion.div>

        <div>
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Data-Driven Growth is My Obsession</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            With over 8 years of experience in the search engine landscape, I&apos;ve helped brands from Silicon Valley startups to global ecommerce giants achieve unprecedented organic growth.
          </p>
          
          <div className="space-y-6 mb-12">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-sm uppercase tracking-wider">{skill.name}</span>
                  <span className="text-accent font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-background rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="text-accent" size={18} /> Google Search Console
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="text-accent" size={18} /> Ahrefs / SEMrush
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="text-accent" size={18} /> Screaming Frog
            </div>
            <div className="flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="text-accent" size={18} /> Data Studio / GA4
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
