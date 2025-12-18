"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  delay?: number
  staggerChildren?: number
}

export default function TextReveal({ children, delay = 0, staggerChildren = 0.02 }: TextRevealProps) {
  const textVariants = {
    hidden: { opacity: 0, clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
    visible: (i: number) => ({
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: delay + i * staggerChildren,
        duration: 0.6,
        ease: [0.77, 0, 0.175, 1],
      },
    }),
  }

  return (
    <motion.div variants={textVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  )
}
