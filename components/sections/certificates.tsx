"use client"

<<<<<<< HEAD
import { motion } from "framer-motion"
import { Download, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect, useCallback } from "react"
import ImagePreviewModal from "../image-preview-modal"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
=======
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion"
import { Download, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import ImagePreviewModal from "../image-preview-modal"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38

const certificates = [
  {
    title: "Machine Learning Using Python",
    issuer: "SimpliLearn",
    icon: "🐍",
    imageUrl: "/images/1.jpg",
    downloadLink: "/images/1.jpg",
  },
  {
    title: "Gemini API by Google",
    issuer: "Udacity",
    icon: "🤖",
    imageUrl: "/images/2.jpg",
    downloadLink: "/images/2.jpg",
  },
  {
<<<<<<< HEAD
    title: "Fundamentals of AI and ML",
=======
    title: "Fundamentals of Artificial Intelligence and Machine Learning",
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
    issuer: "Amazon Web Services",
    icon: "🤖",
    imageUrl: "/images/fundamental-20of-20machine-20learning-20and-20artificial-20intelligence.jpg",
    downloadLink: "/images/fundamental-20of-20machine-20learning-20and-20artificial-20intelligence.jpg",
  },
  {
    title: "Foundation of Prompt Engineering",
    issuer: "Amazon Web Services",
    icon: "🎯",
    imageUrl: "/images/foundations-20of-20prompt-20engineering.jpg",
    downloadLink: "/images/foundations-20of-20prompt-20engineering.jpg",
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud & SimpliLearn",
    icon: "🌐",
    imageUrl: "/images/introduction-20to-20generative-20ai-20studio.jpg",
    downloadLink: "/images/introduction-20to-20generative-20ai-20studio.jpg",
  },
  {
<<<<<<< HEAD
    title: "Observing LLM Agents",
=======
    title: "Observing LLM Agents and their Tool Calls",
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
    issuer: "ACM India Council",
    icon: "🧠",
    imageUrl: "/images/observing-20llm-20agents.jpg",
    downloadLink: "/images/observing-20llm-20agents.jpg",
  },
  {
    title: "Python for Beginners",
    issuer: "SimpliLearn",
    icon: "🐍",
    imageUrl: "/images/python-20for-20beginners.jpg",
    downloadLink: "/images/python-20for-20beginners.jpg",
  },
]

export default function Certificates() {
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string; downloadUrl?: string } | null>(null)
  const swiperRef = useRef<any>(null)
  const [isHovering, setIsHovering] = useState(false)
<<<<<<< HEAD
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
=======
  
  // ENHANCEMENT: Spring physics for navigation buttons
  const navScale = useSpring(1, {
    stiffness: 400,
    damping: 30
  })
  
  // ENHANCEMENT: Parallax effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    
    mouseX.set((clientX - centerX) / centerX * 0.03)
    mouseY.set((clientY - centerY) / centerY * 0.03)
  }
  
  // ENHANCEMENT: Smooth autoplay pause/resume
  useEffect(() => {
    if (isHovering && swiperRef.current) {
      swiperRef.current.autoplay.pause()
    } else if (swiperRef.current) {
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
      swiperRef.current.autoplay.resume()
    }
  }, [isHovering])

<<<<<<< HEAD
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

  const handleDownloadCertificate = useCallback((url: string, title: string) => {
=======
  const handleDownloadCertificate = (url: string, title: string) => {
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
    const link = document.createElement("a")
    link.href = url
    link.download = `${title.replace(/\s+/g, "_")}_Certificate.jpg`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
<<<<<<< HEAD
  }, [])

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      },
    },
=======
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
  }

  return (
    <section 
<<<<<<< HEAD
      ref={sectionRef}
      className="py-16 bg-black relative overflow-hidden"
      style={{
        transform: 'translateZ(0)',
      }}
    >
      {/* Static background only */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-700/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800/10 rounded-full blur-2xl" />
      </div>
=======
      className="py-20 bg-black border-t border-gray-700/20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ENHANCEMENT: Fixed background animations with proper keyframes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"
        style={{
          x: useTransform(mouseX, [-0.03, 0.03], [-15, 15]),
          y: useTransform(mouseY, [-0.03, 0.03], [-15, 15]),
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          scale: {
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gray-800/30 rounded-full blur-3xl"
        style={{
          x: useTransform(mouseX, [-0.03, 0.03], [15, -15]),
          y: useTransform(mouseY, [-0.03, 0.03], [15, -15]),
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          scale: {
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1
          }
        }}
      />
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Certifications & Achievements
          </h2>

          {/* Simple navigation */}
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-900/80 border border-gray-700 text-white hover:border-gray-500 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-900/80 border border-gray-700 text-white hover:border-gray-500 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Swiper Slider */}
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="pb-10"
          >
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              speed={500}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
=======
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.32, 0.72, 0, 1] // Smoother cubic-bezier
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Certifications &{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Achievements
            </motion.span>
          </h2>

          {/* ENHANCEMENT: Premium navigation with spring physics */}
          <div className="flex justify-end gap-4 mb-6">
            <motion.button
              style={{ scale: navScale }}
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(100, 100, 100, 0.3)",
                borderColor: "rgba(150, 150, 150, 0.8)"
              }}
              whileTap={{ 
                scale: 0.92,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }
              }}
              onClick={() => swiperRef.current?.slidePrev()}
              onHoverStart={() => navScale.set(1.15)}
              onHoverEnd={() => navScale.set(1)}
              className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-white hover:border-gray-500 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              style={{ scale: navScale }}
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "rgba(100, 100, 100, 0.3)",
                borderColor: "rgba(150, 150, 150, 0.8)"
              }}
              whileTap={{ 
                scale: 0.92,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }
              }}
              onClick={() => swiperRef.current?.slideNext()}
              onHoverStart={() => navScale.set(1.15)}
              onHoverEnd={() => navScale.set(1)}
              className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-white hover:border-gray-500 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* ENHANCEMENT: Premium Swiper with smooth coverflow */}
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={1}
              speed={700} // Smoother transition speed
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                renderBullet: (index, className) => {
<<<<<<< HEAD
                  return `<span class="${className} bg-gray-600"></span>`
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              grabCursor={true}
              style={{
                transform: 'translate3d(0,0,0)',
                willChange: 'transform',
=======
                  // ENHANCEMENT: Animated pagination bullets
                  return `<span class="${className} bg-gray-600 hover:bg-gray-400 transition-all duration-300 hover:scale-125"></span>`
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true, // Smoother autoplay
              }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 8, // Enhanced rotation for better 3D effect
                stretch: 0,
                depth: 120, // Increased depth
                modifier: 2.8,
                slideShadows: true, // Enable shadows for depth
              }}
              loop={true}
              grabCursor={true}
              resistance={true}
              resistanceRatio={0.85}
              touchRatio={0.6}
              slideToClickedSlide={true}
              className="certificates-slider pb-12"
              style={{
                // GPU acceleration
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden',
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
              }}
            >
              {certificates.map((cert, idx) => (
                <SwiperSlide key={cert.title}>
<<<<<<< HEAD
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.2 }
                    }}
                    className="group bg-gray-900/30 border border-gray-700/30 rounded-xl overflow-hidden hover:border-gray-500/30 transition-all h-full flex flex-col"
                    style={{
                      willChange: 'transform',
                    }}
                  >
                    <div
                      className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900/20 to-black cursor-pointer flex-shrink-0"
                      onClick={() =>
                        setPreviewImage({ 
                          url: cert.imageUrl, 
                          title: cert.title, 
                          downloadUrl: cert.downloadLink 
                        })
                      }
                    >
                      <img
                        src={cert.imageUrl || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <div className="text-4xl mb-3">{cert.icon}</div>
                      
                      <h3 className="text-white font-bold mb-2 text-sm leading-snug line-clamp-2">
                        {cert.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xs font-medium mb-4">
                        {cert.issuer}
                      </p>

                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDownloadCertificate(cert.downloadLink, cert.title)
                        }}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-all text-sm font-medium rounded-lg mt-auto"
                      >
                        <Download size={14} />
                        <span>Download</span>
                      </button>
                    </div>
=======
                  {/* ENHANCEMENT: Enhanced card with spring physics */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 30, rotateY: -10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.08, 
                      ease: [0.34, 1.56, 0.64, 1],
                      rotateY: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25
                      }
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      y: -12,
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: -2,
                      boxShadow: "0 35px 70px rgba(100, 100, 100, 0.6), 0 0 60px rgba(144, 144, 144, 0.4)",
                      transition: {
                        type: "spring",
                        stiffness: 280,
                        damping: 23,
                        mass: 0.7
                      }
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                      }
                    }}
                    className="group bg-gradient-to-br from-gray-900/40 to-black border-2 border-gray-700/30 rounded-2xl overflow-hidden hover:border-gray-500/60 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-gray-800/60 cursor-pointer backdrop-blur-sm h-full"
                    style={{
                      // GPU optimization
                      transformStyle: 'preserve-3d',
                      willChange: 'transform'
                    }}
                  >
                    {/* ENHANCEMENT: Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/15 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ 
                        duration: 2.2, 
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                      }}
                    />
                    
                    <div
                      className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-900/30 to-black mb-6 cursor-pointer"
                      onClick={() =>
                        setPreviewImage({ url: cert.imageUrl, title: cert.title, downloadUrl: cert.downloadLink })
                      }
                    >
                      {/* ENHANCEMENT: Enhanced image hover with spring */}
                      <motion.img
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 2,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                          }
                        }}
                        src={cert.imageUrl || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                        style={{
                          // GPU acceleration
                          transform: 'translateZ(0)'
                        }}
                      />
                      
                      {/* ENHANCEMENT: Overlay gradient */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="p-6">
                      {/* ENHANCEMENT: Fixed icon animation */}
                      <motion.div
                        className="text-5xl mb-4 inline-block"
                        whileHover={{ 
                          scale: 1.5,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 15
                          }
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 8, 
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                          repeatDelay: 2
                        }}
                      >
                        {cert.icon}
                      </motion.div>
                      
                      <motion.h3 
                        className="text-white font-bold mb-2 text-base leading-snug line-clamp-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                      >
                        {cert.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-400 text-sm font-bold mb-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                      >
                        {cert.issuer}
                      </motion.p>

                      {/* ENHANCEMENT: Premium download button with spring */}
                      <motion.button
                        onClick={() => handleDownloadCertificate(cert.downloadLink, cert.title)}
                        whileHover={{
                          scale: 1.08,
                          gap: "12px",
                          boxShadow: "0 12px 30px rgba(100, 100, 100, 0.6), 0 0 35px rgba(144, 144, 144, 0.5)",
                          backgroundColor: "rgba(80, 80, 80, 0.3)",
                          transition: {
                            type: "spring",
                            stiffness: 350,
                            damping: 22
                          }
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          transition: {
                            type: "spring",
                            stiffness: 450,
                            damping: 30
                          }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-600/80 to-gray-800/80 hover:from-gray-500/90 hover:to-gray-700/90 text-white rounded-lg transition-all text-sm font-bold shadow-md border-2 border-gray-700/50 backdrop-blur-sm relative overflow-hidden group/btn"
                      >
                        {/* ENHANCEMENT: Animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent opacity-0 group-hover/btn:opacity-100"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ 
                            duration: 1.8, 
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear"
                          }}
                        />
                        
                        <motion.span
                          animate={{ y: [0, -3, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut"
                          }}
                        >
                          <Download size={16} />
                        </motion.span>
                        <span>Download</span>
                      </motion.button>
                    </div>
                    
                    {/* ENHANCEMENT: Corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-500/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gray-500/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
>>>>>>> 7a4dd2eedea85a1a545becc6105a72ba21736a38
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>

      <ImagePreviewModal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        imageUrl={previewImage?.url || ""}
        title={previewImage?.title || ""}
        downloadUrl={previewImage?.downloadUrl}
      />
    </section>
  )
}