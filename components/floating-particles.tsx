"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  delay: number
  duration: number
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      delay: i * 0.8,
      duration: 6 + Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            y: 100,
            x: Math.random() * 200 - 100,
          }}
          animate={{
            opacity: [0, 0.3, 0.3, 0],
            y: -100,
            x: Math.random() * 100 - 50,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
          }}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-50px",
          }}
        />
      ))}
    </div>
  )
}
