"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { useState } from "react"
import ImagePreviewModal from "../image-preview-modal"

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
    title: "Fundamentals of Artificial Intelligence and Machine Learning",
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
    title: "Observing LLM Agents and their Tool Calls",
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

  const handleDownloadCertificate = (url, title) => {
    const link = document.createElement("a")
    link.href = url
    link.download = `${title.replace(/\s+/g, "_")}_Certificate.jpg`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 bg-black border-t border-gray-700/20 relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gray-800/30 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -25, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Certifications &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700">
              Achievements
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  boxShadow: "0 30px 60px rgba(100, 100, 100, 0.5), 0 0 50px rgba(144, 144, 144, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-br from-gray-900/40 to-black border-2 border-gray-700/30 rounded-2xl overflow-hidden hover:border-gray-500 transition-all shadow-lg hover:shadow-2xl hover:shadow-gray-800/50 cursor-pointer backdrop-blur-sm"
              >
                <div
                  className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-900/30 to-black mb-6 cursor-pointer"
                  onClick={() =>
                    setPreviewImage({ url: cert.imageUrl, title: cert.title, downloadUrl: cert.downloadLink })
                  }
                >
                  <motion.img
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    src={cert.imageUrl || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:brightness-110"
                  />
                </div>

                <div className="p-6">
                  <motion.div
                    className="text-5xl mb-4 group-hover:scale-150 transition-transform duration-300 inline-block"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {cert.icon}
                  </motion.div>
                  <h3 className="text-white font-bold mb-2 text-base leading-snug">{cert.title}</h3>
                  <p className="text-gray-400 text-sm font-bold mb-5">{cert.issuer}</p>

                  <motion.button
                    onClick={() => handleDownloadCertificate(cert.downloadLink, cert.title)}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 10px 25px rgba(100, 100, 100, 0.5), 0 0 30px rgba(144, 144, 144, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white rounded-lg transition-all text-sm font-bold group-hover:gap-3 shadow-md border-2 border-gray-700"
                  >
                    <motion.span
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Download size={16} />
                    </motion.span>
                    Download
                  </motion.button>
                </div>
              </motion.div>
            ))}
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
