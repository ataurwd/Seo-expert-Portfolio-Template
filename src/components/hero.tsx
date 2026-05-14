"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Globe } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-highlight/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-bold text-primary mb-6 border border-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            4+ YEARS OF SEO EXPERTISE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Boost Your <br />
            <span className="gradient-text">Visibility.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Welcome to Dipto Das SEO. I specialize in boosting your website&apos;s visibility and driving organic traffic with measurable results.
          </p>

          <div className="flex flex-col sm:row gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,103,255,0.4)] transition-all">
              Get Free SEO Audit <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-secondary text-foreground rounded-xl font-bold border border-border hover:bg-secondary/80 transition-all text-center">
              View Case Studies
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Mockup Dashboard */}
          <div className="glass rounded-3xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="bg-primary/5 px-4 py-1 rounded-lg text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                Organic Traffic Analysis
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-secondary rounded-2xl border border-border">
                <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Total Impressions</p>
                <h3 className="text-2xl font-bold">4.2M</h3>
                <p className="text-[10px] text-green-500 font-bold">+124.5%</p>
              </div>
              <div className="p-4 bg-secondary rounded-2xl border border-border">
                <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Total Clicks</p>
                <h3 className="text-2xl font-bold">185K</h3>
                <p className="text-[10px] text-green-500 font-bold">+86.2%</p>
              </div>
            </div>

            <div className="h-48 w-full bg-secondary rounded-2xl border border-border flex items-end p-4 gap-2">
              {[40, 60, 45, 70, 55, 90, 80, 100, 85, 95, 110, 130].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 1 + i * 0.05 }}
                  className="flex-1 bg-primary/40 rounded-t-sm" 
                />
              ))}
            </div>

            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-4 rounded-2xl border border-border shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Domain Rating</p>
                  <p className="text-lg font-bold text-primary">78 <span className="text-[10px] text-green-500">+12</span></p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl border border-border shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 text-accent rounded-lg">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Keywords Ranked</p>
                  <p className="text-lg font-bold text-primary">12,450</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
