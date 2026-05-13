"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function Marquee({
  children,
  direction = "left",
  speed = 40,
  className,
}: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden group", className)}>
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex shrink-0 min-w-full gap-12 py-12"
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
