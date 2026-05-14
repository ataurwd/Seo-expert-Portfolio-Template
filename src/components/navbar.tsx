"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Results", href: "#results" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { scrollY } = useScroll()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // We keep a dark sticky background for both modes for a premium glass effect
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.95)"]
  )
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(16px)"]
  )

  const textColor = isScrolled ? "text-white" : "text-foreground"
  const itemColor = isScrolled ? "text-white/80" : "text-foreground/80"

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled ? "border-b border-white/10" : "border-b border-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className={cn("text-xl font-bold tracking-tighter transition-colors", textColor)}>
            DIPTO DAS <span className="text-primary">SEO</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                itemColor
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle className={cn(isScrolled && "text-white bg-white/10 hover:bg-white/20 border-transparent")} />
            <button className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95 shadow-[0_0_15px_rgba(99,103,255,0.3)]">
              Book Free SEO Audit
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className={cn(isScrolled && "text-white bg-white/10 hover:bg-white/20 border-transparent")} />
          <button 
            className={cn("p-2 transition-colors", textColor)}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold">
            Book Free SEO Audit
          </button>
        </motion.div>
      )}
    </motion.header>
  )
}
