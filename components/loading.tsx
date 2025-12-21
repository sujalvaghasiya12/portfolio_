"use client"

import { motion } from "framer-motion"

export default function Loading() {
  const name = "SUJAL VAGHASIYA"
  const letters = name.split("")
  const totalDuration = 2.8

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      {/* Single line of letters with center-out reveal */}
      <div className="flex justify-center">
        {letters.map((letter, index) => {
          const centerIndex = letters.length / 2
          const distanceFromCenter = Math.abs(index - centerIndex)
          
          return (
            <motion.span
              key={index}
              className="inline-block text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white"
              initial={{ 
                opacity: 0,
                filter: "blur(10px)"
              }}
              animate={{
                opacity: [0, 1, 1],
                filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 15px rgba(255,255,255,0.5)",
                  "0 0 5px rgba(255,255,255,0.2)"
                ]
              }}
              transition={{
                opacity: {
                  duration: 0.4,
                  delay: 0.4 + (distanceFromCenter * 0.05),
                  ease: "easeOut"
                },
                filter: {
                  duration: 0.6,
                  delay: 0.4 + (distanceFromCenter * 0.05),
                  ease: "easeOut"
                },
                textShadow: {
                  duration: 1,
                  delay: 0.4 + (distanceFromCenter * 0.05),
                  ease: "easeOut"
                }
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          )
        })}
      </div>
      
      {/* Simple center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 0],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 1.5,
          delay: 0.4,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1.3
        }}
        style={{
          width: "180px",
          height: "60px",
          background: `radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 80%
          )`,
          filter: "blur(25px)"
        }}
      />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(
            ellipse at center,
            transparent 0%,
            rgba(0, 0, 0, 0.5) 100%
          )`
        }}
      />
      
      {/* "use client" indicator */}
      <div className="absolute bottom-8 right-8 opacity-10 hover:opacity-30 transition-opacity duration-300">
        <div className="text-gray-700 text-[9px] tracking-[0.5em] uppercase font-mono">
          use client
        </div>
      </div>
    </div>
  )
}