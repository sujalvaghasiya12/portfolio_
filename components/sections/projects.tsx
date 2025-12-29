"use client"

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import WordRevealAnimation from "../word-reveal-animation"
import { useRef, useState, useEffect } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export default function Projects() {
  const swiperRef = useRef<any>(null)
  const [isHovering, setIsHovering] = useState(false)
  
  // Smooth spring for hover effect
  const hoverScale = useSpring(1, {
    stiffness: 300,
    damping: 20
  })

  // Smooth autoplay pause/resume
  useEffect(() => {
    if (isHovering && swiperRef.current) {
      swiperRef.current.autoplay.pause()
    } else if (swiperRef.current) {
      swiperRef.current.autoplay.resume()
    }
  }, [isHovering])

  return (
    <section
      id="projects"
      className="py-20 bg-black border-t border-gray-800/20 relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-gray-700/20 to-gray-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gray-800/30 to-black rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display">
            <WordRevealAnimation text="Featured Projects" className="block" />
          </h2>

          <motion.p
            className="text-gray-400 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <WordRevealAnimation
              text="Explore my latest AI/ML and data science projects showcasing innovative solutions"
              delay={0.2}
              staggerDelay={0.03}
            />
          </motion.p>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-white hover:border-gray-500 transition-all duration-200"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => swiperRef.current?.slideNext()}
                className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-white hover:border-gray-500 transition-all duration-200"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
            
            <div className="text-gray-400 text-sm font-medium hidden md:block">
              Swipe or use arrows
            </div>
          </div>

          {/* Swiper Slider */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, Mousewheel]}
              spaceBetween={20}
              slidesPerView={1}
              speed={600}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} bg-gray-600 hover:bg-gray-400 transition-colors duration-200"></span>`
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 0.5,
              }}
              loop={true}
              grabCursor={true}
              className="projects-slider pb-12"
            >
              {projects.map((project, idx) => (
                <SwiperSlide key={project.title}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -8 }}
                    className="group bg-gradient-to-br from-gray-900/40 to-black border border-gray-700/30 rounded-xl overflow-hidden hover:border-gray-500/50 transition-all duration-300 flex flex-col h-full relative backdrop-blur-sm"
                  >
                    <div className="bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50 h-32 flex items-center justify-center text-5xl border-b border-gray-700/30">
                      {project.image}
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300 line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 bg-gray-900/50 border border-gray-700/50 text-gray-400 rounded text-xs font-medium transition-colors hover:border-gray-500"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-900/50 border border-gray-700/50 text-gray-400 rounded text-xs font-medium">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-900/40 border border-gray-700/50 text-gray-400 hover:text-gray-300 hover:border-gray-500 transition-all duration-200 font-medium"
                      >
                        <Github size={16} />
                        <span>View on GitHub</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}