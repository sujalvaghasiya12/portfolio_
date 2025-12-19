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
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80, 
    rotateX: -15, 
    filter: "blur(10px)",
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.32, 0.72, 0, 1],
      scale: {
        type: "spring",
        stiffness: 260,
        damping: 25
      }
    },
  },
}

export default function Projects() {
  const swiperRef = useRef<any>(null)
  const [isHovering, setIsHovering] = useState(false)
  
  // Smooth spring-based hover state
  const hoverScale = useSpring(1, {
    stiffness: 400,
    damping: 30
  })

  // Parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    
    mouseX.set((clientX - centerX) / centerX * 0.05)
    mouseY.set((clientY - centerY) / centerY * 0.05)
  }

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
      className="py-24 bg-black border-t border-gray-800/20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{
            x: useTransform(mouseX, [-0.05, 0.05], [-10, 10]),
            y: useTransform(mouseY, [-0.05, 0.05], [-10, 10]),
          }}
          animate={{ 
            rotate: 360,
            scale: [1, 1.4, 1], 
          }}
          transition={{ 
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gray-700/30 to-gray-800/40 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(mouseX, [-0.05, 0.05], [10, -10]),
            y: useTransform(mouseY, [-0.05, 0.05], [10, -10]),
          }}
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1], 
          }}
          transition={{ 
            rotate: {
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-800/40 to-black rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: useTransform(mouseX, [-0.05, 0.05], [-5, 5]),
            y: useTransform(mouseY, [-0.05, 0.05], [-5, 5]),
          }}
          animate={{ opacity: [0.05, 0.15] }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[linear-gradient(rgba(128,128,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.25, 0.1, 0.25, 1],
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white font-display">
            <WordRevealAnimation text="Featured Projects" className="block" />
          </h2>

          <motion.p
            className="text-gray-400 text-lg mb-12"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ 
              delay: 0.3, 
              duration: 0.8, 
              ease: [0.25, 0.1, 0.25, 1],
              filter: {
                duration: 0.6,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <WordRevealAnimation
              text="Explore my latest AI/ML and data science projects showcasing innovative solutions"
              delay={0.5}
              staggerDelay={0.05}
            />
          </motion.p>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <motion.button
                style={{ scale: hoverScale }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(100, 100, 100, 0.3)",
                  borderColor: "rgba(150, 150, 150, 0.8)"
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }
                }}
                onClick={() => swiperRef.current?.slidePrev()}
                onHoverStart={() => hoverScale.set(1.1)}
                onHoverEnd={() => hoverScale.set(1)}
                className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-white hover:border-gray-500 transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                style={{ scale: hoverScale }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(100, 100, 100, 0.3)",
                  borderColor: "rgba(150, 150, 150, 0.8)"
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }
                }}
                onClick={() => swiperRef.current?.slideNext()}
                onHoverStart={() => hoverScale.set(1.1)}
                onHoverEnd={() => hoverScale.set(1)}
                className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-white hover:border-gray-500 transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
            
            <div className="text-gray-400 text-sm font-medium hidden md:block">
              <motion.span 
                className="text-white inline-block"
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Swipe
              </motion.span> or use <motion.span 
                className="text-white inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ← →
              </motion.span> arrows
            </div>
          </div>

          {/* Swiper Slider */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, Mousewheel]}
              spaceBetween={30}
              slidesPerView={1}
              speed={800}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} bg-gray-600 hover:bg-gray-400 transition-all duration-300 hover:scale-125"></span>`
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 0.7,
                eventsTarget: 'container',
                releaseOnEdges: true,
              }}
              loop={true}
              grabCursor={true}
              resistance={true}
              resistanceRatio={0.85}
              touchRatio={0.6}
              slideToClickedSlide={true}
              className="projects-slider pb-16"
              style={{
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden',
              }}
            >
              {projects.map((project, idx) => (
                <SwiperSlide key={project.title}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{
                      y: -18,
                      scale: 1.06,
                      rotateY: 2,
                      rotateX: -1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        mass: 0.8
                      }
                    }}
                    whileTap={{ 
                      scale: 0.97,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                      }
                    }}
                    className={`group bg-gradient-to-br from-gray-900/30 to-black border-2 border-gray-700/30 rounded-2xl overflow-hidden hover:border-gray-500/50 transition-all duration-500 flex flex-col h-full relative backdrop-blur-sm`}
                    style={{
                      transformStyle: 'preserve-3d',
                      willChange: 'transform'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/10 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ 
                        duration: 2.5, 
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                      }}
                    />

                    <motion.div
                      className="bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50 h-40 flex items-center justify-center text-6xl relative overflow-hidden border-b border-gray-700/30"
                      whileHover={{ 
                        scale: 1.25, 
                        rotate: 15,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 20
                        }
                      }}
                    >
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ 
                          duration: 20, 
                          repeat: Number.POSITIVE_INFINITY, 
                          ease: "linear"
                        }}
                      >
                        {project.image}
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gray-600/20 blur-2xl"
                        animate={{ 
                          scale: [1, 1.6, 1], 
                          opacity: [0.3, 0.7, 0.3] 
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    <div className="p-6 flex flex-col flex-grow relative z-10">
                      <motion.h3
                        className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors duration-300 line-clamp-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ 
                          delay: idx * 0.1 + 0.4,
                          ease: "easeOut"
                        }}
                      >
                        {project.title}
                      </motion.h3>

                      <motion.p 
                        className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed line-clamp-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.5 }}
                      >
                        {project.description}
                      </motion.p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 3).map((t) => (
                          <motion.span
                            key={t}
                            whileHover={{
                              scale: 1.18,
                              y: -2,
                              backgroundColor: "rgba(100, 100, 100, 0.6)",
                              boxShadow: "0 8px 25px rgba(128, 128, 128, 0.4)",
                              transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 25
                              }
                            }}
                            whileTap={{ 
                              scale: 0.88,
                              transition: {
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                              }
                            }}
                            className="px-3 py-1 bg-gray-900/50 border border-gray-700/50 text-gray-400 rounded-lg text-xs font-semibold transition-all cursor-pointer hover:border-gray-500 hover:shadow-lg backdrop-blur-sm"
                          >
                            {t}
                          </motion.span>
                        ))}
                        {project.tech.length > 3 && (
                          <motion.span 
                            className="px-3 py-1 bg-gray-900/50 border border-gray-700/50 text-gray-400 rounded-lg text-xs font-semibold"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            +{project.tech.length - 3}
                          </motion.span>
                        )}
                      </div>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          x: 10, 
                          gap: "14px",
                          backgroundColor: "rgba(30, 30, 30, 0.8)",
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }
                        }}
                        whileTap={{ 
                          scale: 0.94,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/30 border border-gray-700/50 text-gray-400 hover:text-gray-300 transition-all font-semibold group/link"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ 
                            duration: 20, 
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear"
                          }}
                        >
                          <Github size={18} />
                        </motion.div>
                        <span>View on GitHub</span>
                        <motion.span
                          animate={{ x: [0, 6, 0] }}
                          transition={{ 
                            duration: 1.8, 
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                          }}
                        >
                          <ExternalLink size={16} />
                        </motion.span>
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