"use client"

<<<<<<< HEAD
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import WordRevealAnimation from "../word-reveal-animation"

export default function Hero({ setActiveSection }: { setActiveSection: (section: string) => void }) {
=======
import { motion, useSpring, useTransform, useMotionValue, AnimatePresence } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import WordRevealAnimation from "../word-reveal-animation"
import { useEffect, useState, useRef } from "react"

export default function Hero({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  
  // ENHANCEMENT: Smooth spring values for interactive elements
  const hoverScale = useSpring(1, { stiffness: 400, damping: 30 })
  const buttonHoverX = useSpring(0, { stiffness: 300, damping: 25 })
  const glowIntensity = useSpring(0.3, { stiffness: 100, damping: 20 })
  
  // ENHANCEMENT: Mouse position tracking for parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // ENHANCEMENT: Scroll progress as MotionValue
  const scrollProgress = useMotionValue(0)
  
  // ENHANCEMENT: Transform values for scroll-based animations
  const nameY = useTransform(scrollProgress, [0, 1], [0, -100])
  const nameOpacity = useTransform(scrollProgress, [0, 0.5], [1, 0.3])
  const descriptionScale = useTransform(scrollProgress, [0, 1], [1, 0.95])
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    
    mouseX.set((clientX - centerX) / centerX * 0.02)
    mouseY.set((clientY - centerY) / centerY * 0.02)
    setMousePosition({ x: clientX, y: clientY })
  }
  
  // ENHANCEMENT: Track scroll progress for dynamic animations
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.5)))
        scrollProgress.set(progress)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollProgress])
  
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
  const handleGetInTouch = () => {
    setActiveSection("connect")
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
  }

<<<<<<< HEAD
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-gray-700/25 to-gray-800/15 rounded-full blur-3xl animate-liquid-morph"
          animate={{ x: [0, 60, 0], y: [0, -60, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-gray-800/15 to-gray-700/25 rounded-full blur-3xl animate-liquid-morph"
          animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-gray-700/10 to-transparent rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
=======
  // ENHANCEMENT: Floating particles for depth
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }))

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-20 bg-black relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ENHANCEMENT: Animated particles system */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-[1px] h-[1px] bg-white/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(particle.id) * 50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
        ))}
      </AnimatePresence>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* ENHANCEMENT: Parallax background layers */}
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-gray-700/25 to-gray-800/15 rounded-full blur-3xl"
          style={{
            x: useTransform(mouseX, [-0.02, 0.02], [-30, 30]),
            y: useTransform(mouseY, [-0.02, 0.02], [-30, 30]),
          }}
          animate={{ 
            x: [0, 60, 0], 
            y: [0, -60, 0], 
            scale: [1, 1.3, 1],
            rotate: 360 
          }}
          transition={{ 
            rotate: {
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            },
            x: {
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            },
            y: {
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            },
            scale: {
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-gray-800/15 to-gray-700/25 rounded-full blur-3xl"
          style={{
            x: useTransform(mouseX, [-0.02, 0.02], [30, -30]),
            y: useTransform(mouseY, [-0.02, 0.02], [30, -30]),
          }}
          animate={{ 
            x: [0, -60, 0], 
            y: [0, 60, 0], 
            scale: [1, 1.4, 1],
            rotate: -360 
          }}
          transition={{ 
            rotate: {
              duration: 35,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            },
            x: {
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            },
            y: {
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            },
            scale: {
              duration: 22,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* ENHANCEMENT: Pulsing center orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.12, 0.05]
          }}
          transition={{ 
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-600/5 via-transparent to-transparent blur-3xl" />
        </motion.div>
        
        {/* ENHANCEMENT: Animated grid with parallax */}
        <motion.div
          style={{
            x: useTransform(mouseX, [-0.02, 0.02], [-10, 10]),
            y: useTransform(mouseY, [-0.02, 0.02], [-10, 10]),
          }}
          animate={{ opacity: [0.03, 0.1, 0.03] }}
          transition={{ 
            duration: 6, 
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,128,128,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
<<<<<<< HEAD
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="px-5 py-2 rounded-full border-2 bg-gray-900/30 backdrop-blur-sm"
              animate={{
                borderColor: ["rgba(100, 100, 100, 0.5)", "rgba(144, 144, 144, 0.5)", "rgba(100, 100, 100, 0.5)"],
                boxShadow: [
                  "0 0 20px rgba(100, 100, 100, 0.3)",
                  "0 0 20px rgba(144, 144, 144, 0.3)",
                  "0 0 20px rgba(100, 100, 100, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-sm font-semibold flex items-center gap-2">
                <motion.div
                  animate={{
                    color: ["#808080", "#b0b0b0", "#808080"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
=======
          transition={{ 
            duration: 1.5, 
            ease: [0.22, 0.61, 0.36, 1], // Smoother cubic-bezier
            type: "spring",
            stiffness: 50,
            damping: 20
          }}
        >
          {/* ENHANCEMENT: Premium welcome badge */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 40, filter: "blur(15px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)", scale: 1 }}
            transition={{ 
              delay: 0.2, 
              duration: 1.4, 
              ease: [0.22, 0.61, 0.36, 1],
              scale: {
                type: "spring",
                stiffness: 200,
                damping: 25
              }
            }}
            onHoverStart={() => glowIntensity.set(0.8)}
            onHoverEnd={() => glowIntensity.set(0.3)}
          >
            <motion.div
              className="px-6 py-3 rounded-full border-2 bg-gray-900/40 backdrop-blur-lg relative overflow-hidden group/badge"
              style={{
                borderColor: useTransform(glowIntensity, [0.3, 0.8], ["rgba(100, 100, 100, 0.4)", "rgba(180, 180, 180, 0.6)"]),
                boxShadow: useTransform(glowIntensity, [0.3, 0.8], [
                  "0 0 20px rgba(100, 100, 100, 0.2)",
                  "0 0 40px rgba(180, 180, 180, 0.4)"
                ])
              }}
              animate={{
                scale: [1, 1.02, 1],
                rotateY: [0, 5, 0, -5, 0]
              }}
              transition={{
                scale: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                },
                rotateY: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent opacity-0 group-hover/badge:opacity-100"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ 
                  duration: 2, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear"
                }}
              />
              
              <span className="text-sm font-semibold flex items-center gap-2 relative z-10">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear"
                    },
                    scale: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    }
                  }}
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                <motion.span
                  animate={{
<<<<<<< HEAD
                    color: ["#808080", "#b0b0b0", "#808080"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
=======
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear"
                  }}
                  className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% 200%" }}
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
                >
                  Welcome to my portfolio
                </motion.span>
              </span>
            </motion.div>
          </motion.div>

<<<<<<< HEAD
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-display text-white inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <WordRevealAnimation text="Sujal Vaghasiya" delay={0.8} staggerDelay={0.15} />
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-400 font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <WordRevealAnimation
              text="AI/ML Developer • Data Analytics Specialist • Python Enthusiast"
              delay={1.8}
              staggerDelay={0.08}
            />
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 2.2, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <WordRevealAnimation
              text="Building intelligent, data-driven solutions that solve real-world problems. Passionate about AI, Machine Learning, and creating elegant systems that make a difference."
              delay={2.5}
              staggerDelay={0.04}
            />
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.button
              onClick={handleGetInTouch}
              className="relative px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#606060] to-[#808080] overflow-hidden group"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 25px 70px rgba(100, 100, 100, 0.7), 0 0 50px rgba(144, 144, 144, 0.5)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <motion.span className="relative z-10">Get In Touch</motion.span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, borderRadius: "100%" }}
                whileHover={{ scale: 6 }}
                transition={{ duration: 0.9 }}
              />
            </motion.button>

=======
          {/* FIXED: Use motion.div for scroll-based transforms */}
          <motion.div
            className="relative mb-6"
            style={{
              y: nameY,
              opacity: nameOpacity
            }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight font-display text-white inline-block"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ 
                delay: 0.8, 
                duration: 1.2, 
                ease: [0.22, 0.61, 0.36, 1],
                type: "spring",
                stiffness: 100,
                damping: 25
              }}
            >
              <WordRevealAnimation 
                text="Sujal Vaghasiya" 
                delay={0.8} 
                staggerDelay={0.15} 
                className="relative"
              />
              {/* Glow effect behind name */}
              <motion.div
                className="absolute inset-0 blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
                style={{
                  background: "radial-gradient(circle at center, rgba(180,180,180,0.3) 0%, transparent 70%)"
                }}
              />
            </motion.h1>
            
            {/* FIXED: Combined animate props */}
            <motion.p
              className="text-xl sm:text-2xl text-gray-400 font-semibold mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -8, 0] // Combined initial and floating animation
              }}
              transition={{ 
                delay: 1.5, 
                duration: 1, 
                ease: [0.22, 0.61, 0.36, 1],
                type: "spring",
                stiffness: 80,
                damping: 20,
                y: {
                  delay: 2,
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }
              }}
            >
              <WordRevealAnimation
                text="AI/ML Developer • Data Analytics Specialist • Python Enthusiast"
                delay={1.8}
                staggerDelay={0.08}
              />
            </motion.p>
          </motion.div>

          {/* FIXED: Use motion.div for scroll-based scale */}
          <motion.div
            className="relative mb-12 max-w-2xl mx-auto"
            style={{
              scale: descriptionScale
            }}
          >
            <motion.p
              className="text-base sm:text-lg text-gray-300 leading-relaxed relative z-10"
              initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ 
                delay: 2.2, 
                duration: 1.4, 
                ease: [0.22, 0.61, 0.36, 1],
                filter: {
                  duration: 0.8,
                  ease: "easeOut"
                }
              }}
            >
              <WordRevealAnimation
                text="Building intelligent, data-driven solutions that solve real-world problems. Passionate about AI, Machine Learning, and creating elegant systems that make a difference."
                delay={2.5}
                staggerDelay={0.04}
              />
            </motion.p>
            
            {/* ENHANCEMENT: Underline animation */}
            <motion.div
              className="h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 3.2, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* ENHANCEMENT: Premium buttons with advanced interactions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 3, 
              duration: 1.2, 
              ease: [0.22, 0.61, 0.36, 1],
              type: "spring",
              stiffness: 60,
              damping: 20
            }}
          >
            {/* Primary Button - Enhanced */}
            <motion.button
              onClick={handleGetInTouch}
              className="relative px-12 py-5 rounded-xl font-semibold text-white overflow-hidden group/primary"
              style={{ scale: hoverScale }}
              whileHover={{
                scale: 1.12,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }
              }}
              whileTap={{ 
                scale: 0.92,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }
              }}
              onHoverStart={() => {
                hoverScale.set(1.12)
                buttonHoverX.set(10)
              }}
              onHoverEnd={() => {
                hoverScale.set(1)
                buttonHoverX.set(0)
              }}
            >
              {/* Background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#505050] via-[#606060] to-[#707070]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-2xl opacity-0 group-hover/primary:opacity-70"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                style={{
                  background: "radial-gradient(circle at center, rgba(200,200,200,0.4) 0%, transparent 70%)"
                }}
              />
              
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/primary:opacity-100"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear"
                }}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ x: buttonHoverX }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </motion.button>

            {/* Secondary Button - Enhanced */}
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
            <motion.button
              onClick={() => {
                setActiveSection("projects")
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
<<<<<<< HEAD
              className="relative px-10 py-4 rounded-xl font-semibold text-white border-2 border-[#606060] overflow-hidden group hover:bg-gray-900/20"
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0 0 50px rgba(100, 100, 100, 0.5), inset 0 0 40px rgba(100, 100, 100, 0.15), 0 25px 50px rgba(0, 0, 0, 0.6)",
                borderColor: "rgba(144, 144, 144, 0.9)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <motion.span className="relative z-10">View My Work</motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#606060]/30 to-[#808080]/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
=======
              className="relative px-12 py-5 rounded-xl font-semibold text-white border-2 overflow-hidden group/secondary"
              style={{ 
                scale: hoverScale,
                borderColor: "#505050"
              }}
              whileHover={{
                scale: 1.12,
                borderColor: "rgba(180, 180, 180, 0.8)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }
              }}
              whileTap={{ 
                scale: 0.92,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }
              }}
            >
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  border: ["2px solid rgba(80,80,80,0.3)", "2px solid rgba(180,180,180,0.6)", "2px solid rgba(80,80,80,0.3)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              />
              
              {/* Background slide */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#303030]/20 via-[#404040]/30 to-[#303030]/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeOut"
                }}
              />
              
              {/* Sparkle particles */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover/secondary:opacity-100"
                initial={false}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-[1px] h-[1px] bg-white/50 rounded-full"
                    style={{
                      left: `${12.5 * i}%`,
                      top: "50%",
                    }}
                    animate={{
                      scale: [0, 1.5, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
              
              <span className="relative z-10">View My Work</span>
            </motion.button>
          </motion.div>

          {/* FIXED: Combined animate props for scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, 10, 0]
            }}
            transition={{ 
              delay: 4, 
              duration: 1,
              y: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-gray-500/50 rounded-full flex items-center justify-center"
              animate={{
                borderColor: ["rgba(100,100,100,0.3)", "rgba(150,150,150,0.6)", "rgba(100,100,100,0.3)"]
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full"
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
        </motion.div>
      </div>
    </section>
  )
}