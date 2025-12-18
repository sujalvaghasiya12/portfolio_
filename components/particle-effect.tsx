"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: string
  left: number
  delay: number
  duration: number
}

export default function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const particleCount = 20
    const newParticles: Particle[] = Array.from({ length: particleCount }).map((_, i) => ({
      id: `particle-${i}`,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 4,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle-float"
          style={{
            left: `${particle.left}%`,
            bottom: "-10px",
            animation: `particleFloat ${particle.duration}s ease-out forwards`,
            animationDelay: `${particle.delay}s`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  )
}
