"use client"

import { useState, useEffect, useCallback, useRef, useMemo } from "react"
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

  // Optimized scroll handler with throttling
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (Math.abs(currentY - lastScrollY.current) > 5) {
        setScrolled(currentY > 50)
        lastScrollY.current = currentY
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Memoized nav items
  const navItems = useMemo(
    () => ["Home", "About", "Skills", "Projects", "Resume", "Certificate", "Connect"],
    []
  )

  const handleNavClick = useCallback((item: string) => {
    setActiveSection(item.toLowerCase())
    setIsOpen(false)
    const element = document.getElementById(item.toLowerCase())
    if (element) {
      element.style.willChange = "transform"
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setTimeout(() => (element.style.willChange = "auto"), 1000)
    }
  }, [setActiveSection])

  const navVariants = useMemo(() => ({
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
  }), [shouldReduceMotion])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: shouldReduceMotion ? 300 : 100, damping: shouldReduceMotion ? 30 : 15 }
    })
  }), [shouldReduceMotion])

  const mobileMenuVariants = useMemo(() => ({
    hidden: { opacity: 0, scaleY: 0, transformOrigin: "top" },
    visible: { opacity: 1, scaleY: 1, transformOrigin: "top" }
  }), [])

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(100,100,100,0.3)] border-b border-gray-700/30"
          : "bg-black/60 backdrop-blur-md border-b border-gray-700/10"
      }`}
      style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="relative group rounded-lg">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-[#606060] via-[#808080] to-[#606060] bg-clip-text text-transparent animate-gradient-move"
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
          </Link>

          {/* Desktop nav */}
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
              >
                <span className="relative z-10">{item}</span>
                {activeSection === item.toLowerCase() && !shouldReduceMotion && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#606060] to-[#909090]" />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 90 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.85 }}
            className="md:hidden text-[#ff1a1a] hover:text-[#8b0000] transition-all duration-200 rounded-lg p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={mobileMenuVariants}
          className="md:hidden overflow-hidden bg-black/98 backdrop-blur-xl border-b border-gray-700/20"
        >
          <div className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item, idx) => (
              <motion.button
                key={item}
                custom={idx}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { x: 10, scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { x: 5, scale: 0.95 }}
                onClick={() => handleNavClick(item)}
                className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.toLowerCase()
                    ? "text-white bg-gradient-to-r from-[#606060] to-[#808080] shadow-[0_0_15px_rgba(100,100,100,0.5)]"
                    : "text-white hover:text-[#909090] hover:bg-white/5"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
