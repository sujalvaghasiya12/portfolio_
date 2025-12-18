"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = ({
  activeSection,
  setActiveSection,
}: { activeSection: string; setActiveSection: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Skills", "Projects", "Resume", "Certificate", "Connect"]

  const handleNavClick = (item: string) => {
    setActiveSection(item.toLowerCase())
    setIsOpen(false)
    const element = document.getElementById(item.toLowerCase())
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(100,100,100,0.3)] border-b border-gray-700/30"
          : "bg-black/60 backdrop-blur-md border-b border-gray-700/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#606060] via-[#808080] to-[#606060] bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              S_V
              <motion.span
                className="inline-block ml-1 text-[#808080]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ·
              </motion.span>
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#606060] to-[#808080] rounded-lg blur-xl opacity-0 group-hover:opacity-40 transition-opacity"
              layoutId="navLogoGlow"
            />
          </Link>

          <div className="hidden md:flex gap-1">
            {navItems.map((item, idx) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, type: "spring", stiffness: 100 }}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group overflow-hidden ${
                  activeSection === item.toLowerCase()
                    ? "text-white bg-gradient-to-r from-[#606060] to-[#808080] shadow-[0_0_20px_rgba(100,100,100,0.5)]"
                    : "text-white hover:text-[#909090]"
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="relative z-10 block"
                >
                  {item}
                </motion.span>
                {activeSection !== item.toLowerCase() && (
                  <>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#606060] to-[#909090]"
                      initial={{ width: 0, x: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-[#606060]/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="md:hidden text-[#ff1a1a] hover:text-[#8b0000] transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-black/98 backdrop-blur-xl border-b border-gray-700/20 py-4"
          >
            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, type: "spring" }}
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ x: 5, scale: 0.95 }}
                  onClick={() => handleNavClick(item)}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-all ${
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
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
