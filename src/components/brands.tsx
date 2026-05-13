"use client"

import { Marquee } from "./marquee"

const brands = [
  "NEXTJS", "TAILWIND", "AHREFS", "SEMRUSH", "GOOGLE", "SHOPIFY", "HUBSPOT", "ADOBE"
]

export function Brands() {
  return (
    <div className="bg-background py-12 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <Marquee speed={30} className="opacity-50 hover:opacity-100 transition-opacity">
        {brands.map((brand) => (
          <div 
            key={brand} 
            className="text-3xl md:text-4xl font-black tracking-tighter text-foreground grayscale hover:grayscale-0 transition-all cursor-default"
          >
            {brand}
          </div>
        ))}
      </Marquee>
    </div>
  )
}
