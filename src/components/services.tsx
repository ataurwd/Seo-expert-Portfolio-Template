"use client"

import { Section } from "./section"
import { 
  Search, 
  Code, 
  Link2, 
  MapPin, 
  ShoppingBag, 
  FileText, 
  Target, 
  BarChart,
  Video
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Technical SEO",
    description: "Deep-dive audits and fixes for crawlability, indexing, and site speed optimization.",
    icon: Code,
  },
  {
    title: "On-Page SEO",
    description: "Semantic content optimization, keyword mapping, and perfect heading hierarchy.",
    icon: Search,
  },
  {
    title: "Off-Page SEO",
    description: "High-authority link building and digital PR to boost your domain authority.",
    icon: Link2,
  },
  {
    title: "Local SEO",
    description: "Dominate local map packs and attract nearby customers with localized strategies.",
    icon: MapPin,
  },
  {
    title: "Ecommerce SEO",
    description: "Specialized strategies for Shopify, Magento, and WooCommerce stores to drive sales.",
    icon: ShoppingBag,
  },
  {
    title: "Content Strategy",
    description: "Data-backed content roadmaps designed to capture high-intent organic traffic.",
    icon: FileText,
  },
  {
    title: "Keyword Research",
    description: "Identifying high-volume, low-competition keywords your competitors missed.",
    icon: Target,
  },
  {
    title: "SEO Audits",
    description: "Comprehensive 150+ point checkup of your website's search engine health.",
    icon: BarChart,
  },
  {
    title: "YouTube SEO",
    description: "Optimizing video content to rank in both YouTube and Google search results.",
    icon: Video,
  },
]

export function Services() {
  return (
    <Section id="services" className="bg-secondary/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive SEO Solutions</h3>
        <p className="text-lg text-muted-foreground">
          We provide a full suite of SEO services designed to scale your organic presence and outperform the competition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(99,103,255,0.1)] transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform" />
            
            <div className="p-3 bg-secondary rounded-2xl w-fit mb-6 text-primary group-hover:scale-110 transition-transform">
              <service.icon size={28} />
            </div>
            
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>
            
            <button className="text-sm font-bold flex items-center gap-2 text-primary group/btn">
              Learn More <div className="w-0 group-hover/btn:w-4 overflow-hidden transition-all duration-300">→</div>
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
