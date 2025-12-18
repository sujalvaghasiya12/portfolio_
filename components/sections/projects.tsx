"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import WordRevealAnimation from "../word-reveal-animation"

const projects = [
  {
    title: "AI-Resume-Analyzer",
    description:
      "Interactive AI-powered Resume Analyzer built with Streamlit that evaluates resumes for skills, job role fit, and ATS (Applicant Tracking System) score.",
    tech: ["Python", "Streamlit", "spaCy", "TF-IDF", "Rapidfuzz"],
    github: "https://github.com/sujalvaghasiya12/AI-Resume-Analyzer",
    image: "🧠",
    color: "from-red-900/20 to-red-950/20",
  },
  {
    title: "AI Financial Data Assistant",
    description:
      "Semantic financial-data assistant using sentence-transformer embeddings and FAISS for vector search with FastAPI endpoints.",
    tech: ["FastAPI", "FAISS", "Embeddings", "Vector Search", "Python"],
    github: "https://github.com/sujalvaghasiya12/AI-Powered_Financial_Data_Assistant",
    image: "📊",
    color: "from-red-800/20 to-red-900/20",
  },
  {
    title: "Sleep Quality Predictor",
    description:
      "Machine learning model predicting sleep quality based on lifestyle factors using Random Forest and Streamlit.",
    tech: ["Python", "Streamlit", "Random Forest", "Scikit-learn", "ML"],
    github: "https://github.com/sujalvaghasiya12/Sleep_Quality_Predictor",
    image: "😴",
    color: "from-red-950/20 to-black",
  },
  {
    title: "Pizza Sales Dashboard",
    description:
      "Comprehensive analytics dashboard for pizza sales data visualization with insights on revenue, orders, and popular items.",
    tech: ["Power BI", "Data Analytics", "Excel", "Visualization"],
    github: "https://github.com/sujalvaghasiya12/Pizza-Sales-Dashboard",
    image: "🍕",
    color: "from-red-900/20 to-red-950/20",
  },
  {
    title: "Vachharaj Shop",
    description:
      "Modern e-commerce web application with TypeScript, featuring product management, cart functionality, and responsive design.",
    tech: ["TypeScript", "React", "Next.js", "E-commerce", "Web Dev"],
    github: "https://github.com/sujalvaghasiya12/vachharaj_shop",
    image: "🛒",
    color: "from-red-800/20 to-red-900/20",
  },
  {
    title: "Quantum Random Number Generator",
    description:
      "Quantum random number generator implementation using single qubit measurements and quantum computing principles.",
    tech: ["Python", "Quantum Computing", "Qiskit", "Physics"],
    github: "https://github.com/sujalvaghasiya12/Quantum-random-number-generator",
    image: "⚛️",
    color: "from-red-950/20 to-black",
  },
  {
    title: "Titanic Survival Prediction",
    description:
      "Classification model trained on Titanic dataset with data preprocessing, feature engineering, and multiple ML algorithms.",
    tech: ["Python", "Pandas", "Scikit-learn", "EDA", "Classification"],
    github: "https://github.com/sujalvaghasiya12/Titanic-Survival-Prediction",
    image: "🚢",
    color: "from-red-900/20 to-red-950/20",
  },
  {
    title: "House Price Prediction",
    description:
      "Regression model using Linear Regression to predict house prices with data analysis and visualization.",
    tech: ["Python", "Linear Regression", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/sujalvaghasiya12/House-Price-Prediction-using-Linear-Regression",
    image: "🏠",
    color: "from-red-800/20 to-red-900/20",
  },
  {
    title: "Indian Health & Wellness",
    description:
      "Web application focused on Indian health and wellness with psychology integration using modern technologies.",
    tech: ["TypeScript", "React", "Web Development", "Health Tech"],
    github: "https://github.com/sujalvaghasiya12/-INDIAN-HEALTH-WELLNESS-AND-PSYCHOLOGY-",
    image: "🏥",
    color: "from-gray-900/20 to-black",
  },
  {
    title: "DocuChat",
    description:
      "AI-powered document chat system allowing users to interact with their documents through natural language queries using advanced NLP and RAG techniques.",
    tech: ["Python", "LangChain", "RAG", "NLP", "AI"],
    github: "https://github.com/sujalvaghasiya12/docuchat",
    image: "📄",
    color: "from-gray-800/20 to-gray-900/20",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -15, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black border-t border-gray-800/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.4, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gray-700/30 to-gray-800/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-800/40 to-black rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white font-display">
            <WordRevealAnimation text="Featured Projects" className="block" />
          </h2>

          <motion.p
            className="text-gray-400 text-lg mb-12"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <WordRevealAnimation
              text="Explore my latest AI/ML and data science projects showcasing innovative solutions"
              delay={0.5}
              staggerDelay={0.05}
            />
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{
                  y: -18,
                  boxShadow: "0 35px 90px rgba(100, 100, 100, 0.7), 0 0 70px rgba(128, 128, 128, 0.5)",
                  scale: 1.06,
                }}
                whileTap={{ scale: 0.97 }}
                className={`group bg-gradient-to-br from-gray-900/30 to-black border-2 border-gray-700/30 rounded-2xl overflow-hidden hover:border-gray-500 transition-all duration-700 flex flex-col h-full relative backdrop-blur-sm`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.div
                  className="bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50 h-40 flex items-center justify-center text-6xl relative overflow-hidden border-b border-gray-700/30"
                  whileHover={{ scale: 1.25, rotate: 15 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <motion.div animate={{ rotateY: 360 }} transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}>
                    {project.image}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gray-600/20 blur-2xl"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <motion.h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.4 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{
                          scale: 1.18,
                          backgroundColor: "rgba(100, 100, 100, 0.6)",
                          boxShadow: "0 0 25px rgba(128, 128, 128, 0.7)",
                        }}
                        whileTap={{ scale: 0.88 }}
                        className="px-3 py-1 bg-gray-900/50 border border-gray-700/50 text-gray-400 rounded-lg text-xs font-semibold transition-all cursor-pointer hover:border-gray-500 hover:shadow-lg"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, gap: "14px" }}
                    whileTap={{ scale: 0.94 }}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-all font-semibold group/link"
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ExternalLink size={16} />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
