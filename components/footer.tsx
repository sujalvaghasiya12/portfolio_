"use client"

import { Github, Linkedin, Mail } from "lucide-react"
<<<<<<< HEAD

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright text on left */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sujal Vaghasiya. All rights reserved.
            </p>
          </div>

          {/* Social links on right */}
          <div className="flex gap-4">
            <a
              href="https://github.com/sujalvaghasiya12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 border-2 border-gray-700/50 rounded-lg hover:bg-gray-900/70 hover:border-gray-500 text-white transition-all shadow-md"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sujal-vaghasiya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 border-2 border-gray-700/50 rounded-lg hover:bg-gray-900/70 hover:border-gray-500 text-white transition-all shadow-md"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sujalvaghasiya5@gmail.com"
              className="p-3 bg-gray-900/50 border-2 border-gray-700/50 rounded-lg hover:bg-gray-900/70 hover:border-gray-500 text-white transition-all shadow-md"
            >
              <Mail size={20} />
            </a>
=======
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/30 py-8 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm"
          >
            <motion.span
              animate={{
                color: ["#808080", "#ff1a1a", "#808080"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              ©
            </motion.span>{" "}
            2025 Sujal Vaghasiya. All rights reserved.
          </motion.p>

          <div className="flex gap-6">
            <motion.a
              href="https://github.com/sujalvaghasiya12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300"
              whileHover={{
                scale: 1.2,
                color: "#ff1a1a",
                filter: "drop-shadow(0 0 10px rgba(255, 26, 26, 0.6))",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300"
              whileHover={{
                scale: 1.2,
                color: "#ff1a1a",
                filter: "drop-shadow(0 0 10px rgba(255, 26, 26, 0.6))",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              href="mailto:sujalvaghasiya5@gmail.com"
              className="text-gray-400 transition-all duration-300"
              whileHover={{
                scale: 1.2,
                color: "#ff1a1a",
                filter: "drop-shadow(0 0 10px rgba(255, 26, 26, 0.6))",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={22} />
            </motion.a>
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
          </div>
        </div>
      </div>
    </footer>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
