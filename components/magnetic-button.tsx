"use client"

import type React from "react"

import { motion } from "framer-motion"
import { type ReactNode, useRef, useState } from "react"

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export const MagneticButton = ({ children, onClick, className }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = (clientX - centerX) * 0.2
    const distanceY = (clientY - centerY) * 0.2

    setX(distanceX)
    setY(distanceY)
  }

  const handleMouseLeave = () => {
    setX(0)
    setY(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
