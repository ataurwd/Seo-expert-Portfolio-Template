"use client"

import { Section } from "./section"
import { 
  Search, 
  Settings, 
  Link2, 
  MapPin
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "On-Page SEO",
    description: "Keyword optimization, meta tags, and high-quality content improvements to ensure your pages rank for the right terms.",
    icon: Search,
  },
  {
    title: "Off-Page SEO",
    description: "Authority-boosting link-building strategies, guest blogging, and strategic outreach to grow your domain&apos;s trust.",
    icon: Link2,
  },
  {
    title: "Local SEO",
    description: "Improve your local rankings and visibility on Google Maps to attract nearby customers and grow your local presence.",
    icon: MapPin,
  },
  {
    title: "Technical SEO",
    description: "Optimizing website speed, mobile-friendliness, and crawlability to provide a perfect foundation for search engine success.",
    icon: Settings,
  }
]

export function Services() {
  return (
    <Section id="services" className="bg-secondary/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Full Spectrum SEO Services</h3>
        <p className="text-lg text-muted-foreground">
          At Dipto Das SEO, we offer services tailored to meet your business&apos;s unique needs and help you rank higher on search engines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
