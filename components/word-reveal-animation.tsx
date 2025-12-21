"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface WordRevealProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export default function WordRevealAnimation({ text, className = "", delay = 0, staggerDelay = 0.08 }: WordRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const words = text.split(" ")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span key={`${word}-${index}`} variants={wordVariants} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
