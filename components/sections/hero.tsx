"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import WordRevealAnimation from "../word-reveal-animation"

export default function Hero({ setActiveSection }: { setActiveSection: (section: string) => void }) {
  const handleGetInTouch = () => {
    setActiveSection("connect")
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
  }

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
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                <motion.span
                  animate={{
                    color: ["#808080", "#b0b0b0", "#808080"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  Welcome to my portfolio
                </motion.span>
              </span>
            </motion.div>
          </motion.div>

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

            <motion.button
              onClick={() => {
                setActiveSection("projects")
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
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
        </motion.div>
      </div>
    </section>
  )
}
