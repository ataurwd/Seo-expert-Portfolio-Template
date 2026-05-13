"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

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
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  )
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  )

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0 px-6"
    >
      <div className="max-w-[1200px] mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            SEO<span className="text-primary">EXPERT</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:scale-105 transition-transform active:scale-95">
              Book Free SEO Audit
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
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
