"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import WordRevealAnimation from "../word-reveal-animation"
import { useRef, useState, useEffect, useCallback } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const projects = [
  {
    title: "AI-Resume-Analyzer",
    description: "Interactive AI-powered Resume Analyzer built with Streamlit that evaluates resumes for skills, job role fit, and ATS score.",
    tech: ["Python", "Streamlit", "spaCy", "TF-IDF"],
    github: "https://github.com/sujalvaghasiya12/AI-Resume-Analyzer",
    image: "🧠",
  },
  {
    title: "AI Financial Data Assistant",
    description: "Semantic financial-data assistant using sentence-transformer embeddings and FAISS for vector search.",
    tech: ["FastAPI", "FAISS", "Embeddings", "Vector Search"],
    github: "https://github.com/sujalvaghasiya12/AI-Powered_Financial_Data_Assistant",
    image: "📊",
  },
  {
    title: "Sleep Quality Predictor",
    description: "Machine learning model predicting sleep quality based on lifestyle factors.",
    tech: ["Python", "Streamlit", "Random Forest", "ML"],
    github: "https://github.com/sujalvaghasiya12/Sleep_Quality_Predictor",
    image: "😴",
  },
  {
    title: "Pizza Sales Dashboard",
    description: "Comprehensive analytics dashboard for pizza sales data visualization.",
    tech: ["Power BI", "Data Analytics", "Excel"],
    github: "https://github.com/sujalvaghasiya12/Pizza-Sales-Dashboard",
    image: "🍕",
  },
  {
    title: "Vachharaj Shop",
    description: "Modern e-commerce web application with TypeScript.",
    tech: ["TypeScript", "React", "Next.js", "E-commerce"],
    github: "https://github.com/sujalvaghasiya12/vachharaj_shop",
    image: "🛒",
  },
  {
    title: "Quantum Random Number Generator",
    description: "Quantum random number generator using single qubit measurements.",
    tech: ["Python", "Quantum", "Qiskit"],
    github: "https://github.com/sujalvaghasiya12/Quantum-random-number-generator",
    image: "⚛️",
  },
  {
    title: "Titanic Survival Prediction",
    description: "Classification model trained on Titanic dataset.",
    tech: ["Python", "Pandas", "Scikit-learn", "EDA"],
    github: "https://github.com/sujalvaghasiya12/Titanic-Survival-Prediction",
    image: "🚢",
  },
  {
    title: "House Price Prediction",
    description: "Regression model using Linear Regression to predict house prices.",
    tech: ["Python", "Linear Regression", "NumPy"],
    github: "https://github.com/sujalvaghasiya12/House-Price-Prediction-using-Linear-Regression",
    image: "🏠",
  },
  {
    title: "Indian Health & Wellness",
    description: "Web application focused on Indian health and wellness.",
    tech: ["TypeScript", "React", "Health Tech"],
    github: "https://github.com/sujalvaghasiya12/-INDIAN-HEALTH-WELLNESS-AND-PSYCHOLOGY-",
    image: "🏥",
  },
  {
    title: "DocuChat",
    description: "AI-powered document chat system using natural language queries.",
    tech: ["Python", "LangChain", "RAG", "NLP"],
    github: "https://github.com/sujalvaghasiya12/docuchat",
    image: "📄",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
}

export default function Projects() {
  const swiperRef = useRef<any>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Optimized autoplay control
  useEffect(() => {
    if (!swiperRef.current) return
    
    if (isHovering) {
      swiperRef.current.autoplay.pause()
    } else {
      swiperRef.current.autoplay.resume()
    }
  }, [isHovering])

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }, [])

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-black relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Simplified static background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-gray-700/10 to-gray-800/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-gray-800/5 to-black rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <WordRevealAnimation 
              text="Featured Projects" 
              className="block"
              reducedMotion={false}
            />
          </h2>

          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explore my latest AI/ML and data science projects
          </motion.p>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-gray-900/80 border border-gray-700 text-white hover:border-gray-500 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-gray-900/80 border border-gray-700 text-white hover:border-gray-500 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Swiper Slider */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
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
                  spaceBetween: 24,
                },
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} bg-gray-600"></span>`
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              grabCursor={true}
              className="pb-12"
              style={{
                transform: 'translate3d(0,0,0)',
                willChange: 'transform',
              }}
            >
              {projects.map((project, idx) => (
                <SwiperSlide key={project.title}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{
                      y: -8,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                    className="group bg-gray-900/30 border border-gray-700/30 rounded-xl overflow-hidden flex flex-col h-full hover:border-gray-500/30 transition-all"
                    style={{
                      willChange: 'transform',
                    }}
                  >
                    <div className="h-32 flex items-center justify-center text-4xl bg-gradient-to-br from-gray-800/20 to-black border-b border-gray-700/30">
                      {project.image}
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 bg-gray-800/50 border border-gray-700/50 text-gray-300 rounded text-xs font-medium"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800/50 border border-gray-700/50 text-gray-300 rounded text-xs font-medium">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all text-sm font-medium"
                      >
                        <Github size={16} />
                        <span>View on GitHub</span>
                        <ExternalLink size={14} />
                      </a>
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