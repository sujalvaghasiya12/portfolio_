"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Award, Zap, Code, Brain } from "lucide-react"

const easeSmooth = [0.4, 0, 0.2, 1] // premium easing

export default function About() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // smoother parallax (less aggressive)
  const yParallax = useTransform(scrollYProgress, [0, 1], [60, -60])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
        ease: easeSmooth,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: easeSmooth, // smoother than bounce
      },
    },
  }

  return (
    <section
      ref={ref}
      className="py-20 bg-black border-t border-gray-700/20 relative overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute top-0 right-0 w-96 h-96 bg-gray-700/10 rounded-full blur-3xl animate-liquid-morph"
      />

      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gray-600/10 rounded-full blur-3xl animate-liquid-morph"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeSmooth }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: easeSmooth }}
            viewport={{ once: true }}
          >
            About{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500"
              animate={{ backgroundPosition: ["0%", "200%", "0%"] }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Me
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: easeSmooth }}
            viewport={{ once: true }}
          >
            Passionate AI & ML Developer transforming ideas into intelligent solutions
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="max-w-3xl mx-auto mb-16 space-y-8">
          {[
            {
              title: "Who I Am",
              text: `I'm Sujal Vaghasiya, an AI & ML developer pursuing B Tech in Information Technology at Uka Tarsadia University with a CGPA of 8.46/10.`,
            },
            {
              title: "What I Do",
              text: `I specialize in Python, Machine Learning, and NLP to build practical AI projects.`,
            },
            {
              title: "My Passion",
              text: `I continuously push boundaries with AI and Machine Learning to solve real-world problems.`,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.9,
                ease: easeSmooth,
              }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-gray-900/20 to-black border border-gray-700/30 rounded-2xl animate-border-glow"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { icon: Code, label: "Languages", value: "5+", color: "#808080" },
            { icon: Brain, label: "ML Models", value: "10+", color: "#606060" },
            { icon: Award, label: "Certifications", value: "7", color: "#808080" },
            { icon: Zap, label: "Projects", value: "10+", color: "#606060" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.35, ease: easeSmooth },
              }}
              className="p-6 bg-gradient-to-br from-gray-900/30 to-black border border-gray-700/40 rounded-2xl text-center animate-soft-glow"
            >
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.15, 1] }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="flex justify-center mb-4"
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </motion.div>
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
