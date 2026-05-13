"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Globe } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-bold text-accent mb-6 border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            NOW ACCEPTING NEW CLIENTS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Rank Higher. <br />
            <span className="gradient-text">Dominate Search.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            I help high-growth brands increase organic traffic, leads, and revenue through data-driven SEO strategies and technical excellence.
          </p>

          <div className="flex flex-col sm:row gap-4">
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
              Get Free SEO Audit <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-secondary text-foreground rounded-xl font-bold border border-white/5 hover:bg-secondary/80 transition-all text-center">
              View Case Studies
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-[10px] font-bold">
                  {i === 4 ? "50+" : ""}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold">Trusted by 50+ Brands</p>
              <p className="text-muted-foreground">Across 12+ Industries</p>
            </div>
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
              <div className="bg-white/5 px-4 py-1 rounded-lg text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                Organic Traffic Analysis
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Total Impressions</p>
                <h3 className="text-2xl font-bold">4.2M</h3>
                <p className="text-[10px] text-green-400 font-bold">+124.5%</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Total Clicks</p>
                <h3 className="text-2xl font-bold">185K</h3>
                <p className="text-[10px] text-green-400 font-bold">+86.2%</p>
              </div>
            </div>

            <div className="h-48 w-full bg-white/5 rounded-2xl border border-white/5 flex items-end p-4 gap-2">
              {[40, 60, 45, 70, 55, 90, 80, 100, 85, 95, 110, 130].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: 1 + i * 0.05 }}
                  className="flex-1 bg-accent/40 rounded-t-sm" 
                />
              ))}
            </div>

            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-4 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 text-green-500 rounded-lg">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Domain Rating</p>
                  <p className="text-lg font-bold">78 <span className="text-[10px] text-green-500">+12</span></p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-10 glass p-4 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 text-accent rounded-lg">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Keywords Ranked</p>
                  <p className="text-lg font-bold">12,450</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
