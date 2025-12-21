"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

const Navbar = ({
  activeSection,
  setActiveSection,
}: { activeSection: string; setActiveSection: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const rafRef = useRef<number | null>(null)
  const lastScrollY = useRef(0)

  // Optimized scroll handler with debouncing and RAF
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        setScrolled(currentScrollY > 50)
        lastScrollY.current = currentScrollY
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Optimize navigation items with useMemo
  const navItems = ["Home", "About", "Skills", "Projects", "Resume", "Certificate", "Connect"]

  const handleNavClick = useCallback((item: string) => {
    setActiveSection(item.toLowerCase())
    setIsOpen(false)
    
    // Use native smooth scroll with optimization
    const element = document.getElementById(item.toLowerCase())
    if (element) {
      // Use will-change for GPU acceleration
      element.style.willChange = "transform"
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      })
      
      // Reset will-change after animation
      setTimeout(() => {
        element.style.willChange = "auto"
      }, 1000)
    }
  }, [setActiveSection])

  // Optimize animations for reduced motion preferences
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: shouldReduceMotion ? 300 : 100,
        damping: shouldReduceMotion ? 30 : 15,
        mass: shouldReduceMotion ? 2 : 1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: shouldReduceMotion ? 300 : 100,
        damping: shouldReduceMotion ? 30 : 15
      }
    })
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        type: "spring",
        stiffness: shouldReduceMotion ? 400 : 300,
        damping: shouldReduceMotion ? 40 : 30
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        type: "spring",
        stiffness: shouldReduceMotion ? 400 : 300,
        damping: shouldReduceMotion ? 40 : 30
      }
    }
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 will-change-transform ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(100,100,100,0.3)] border-b border-gray-700/30"
          : "bg-black/60 backdrop-blur-md border-b border-gray-700/10"
      }`}
      style={{
        // Force GPU acceleration
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="relative group focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#606060] via-[#808080] to-[#606060] bg-clip-text text-transparent"
              style={{ 
                backgroundSize: "200% 200%",
                willChange: 'transform, background-position'
              }}
              animate={shouldReduceMotion ? {} : { backgroundPosition: ["0%", "100%", "0%"] }}
              transition={shouldReduceMotion ? {} : { duration: 4, repeat: Infinity, ease: "linear" }}
            >
              S_V
              <motion.span
                className="inline-block ml-1 text-[#808080]"
                animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
                transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ·
              </motion.span>
            </motion.div>
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#606060] to-[#808080] rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                layoutId="navLogoGlow"
              />
            )}
          </Link>

          <div className="hidden md:flex gap-1">
            {navItems.map((item, idx) => (
              <motion.button
                key={item}
                custom={idx}
                variants={itemVariants}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-black ${
                  activeSection === item.toLowerCase()
                    ? "text-white bg-gradient-to-r from-[#606060] to-[#808080] shadow-[0_0_20px_rgba(100,100,100,0.5)]"
                    : "text-white hover:text-[#909090]"
                }`}
                style={{ willChange: 'transform' }}
              >
                <motion.span
                  whileHover={shouldReduceMotion ? {} : { scale: 1.12, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
                  transition={shouldReduceMotion ? {} : { type: "spring", stiffness: 500 }}
                  className="relative z-10 block"
                >
                  {item}
                </motion.span>
                {activeSection !== item.toLowerCase() && !shouldReduceMotion && (
                  <>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#606060] to-[#909090]"
                      initial={{ width: 0, x: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-[#606060]/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </>
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 90 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.85 }}
            transition={shouldReduceMotion ? {} : { type: "spring", stiffness: 400 }}
            className="md:hidden text-[#ff1a1a] hover:text-[#8b0000] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-1"
            onClick={() => setIsOpen(!isOpen)}
            style={{ willChange: 'transform' }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <motion.div
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={mobileMenuVariants}
          className="md:hidden overflow-hidden"
          style={{ willChange: 'height, opacity' }}
        >
          <div className="bg-black/98 backdrop-blur-xl border-b border-gray-700/20 py-4">
            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  custom={idx}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { x: 10, scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { x: 5, scale: 0.95 }}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-black ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-gradient-to-r from-[#606060] to-[#808080] shadow-[0_0_15px_rgba(100,100,100,0.5)]"
                      : "text-white hover:text-[#909090] hover:bg-white/5"
                  }`}
                  style={{ willChange: 'transform' }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar