"use client"

import { Section } from "./section"
import { motion } from "framer-motion"
import { Send, Mail, Phone, Calendar } from "lucide-react"

export function Contact() {
  return (
    <Section id="contact" className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Start Your SEO Journey Today</h3>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Ready to boost your website&apos;s visibility? Reach out for inquiries or to discuss how we can grow your online presence together.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-secondary rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Email Me</p>
                <p className="text-xl font-bold">diptodas.work@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-secondary rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Call Me</p>
                <p className="text-xl font-bold">01961480274</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 bg-secondary rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Book a Strategy Call</p>
                <p className="text-xl font-bold underline underline-offset-4 cursor-pointer hover:text-primary transition-colors">Calendly Link</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-[3rem] border border-border shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground uppercase ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-secondary/50 border border-border rounded-2xl py-4 px-6 focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground uppercase ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full bg-secondary/50 border border-border rounded-2xl py-4 px-6 focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase ml-1">Website URL</label>
              <input 
                type="url" 
                placeholder="https://yourwebsite.com"
                className="w-full bg-secondary/50 border border-border rounded-2xl py-4 px-6 focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-muted-foreground uppercase ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your business goals..."
                className="w-full bg-secondary/50 border border-border rounded-2xl py-4 px-6 focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              />
            </div>

            <button className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(99,103,255,0.2)]">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  )
}
