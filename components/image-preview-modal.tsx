"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ZoomIn, ZoomOut } from "lucide-react"
import { useState } from "react"

interface ImagePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
  downloadUrl?: string
}

export default function ImagePreviewModal({ isOpen, onClose, imageUrl, title, downloadUrl }: ImagePreviewModalProps) {
  const [zoom, setZoom] = useState(1)

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement("a")
      link.href = downloadUrl
      link.download = `${title.replace(/\s+/g, "_")}.jpg`
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-red-950/50 to-black border-2 border-red-900/50 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 flex items-center justify-between z-10">
              <h3 className="text-white font-bold text-lg truncate max-w-[70%]">{title}</h3>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 0, 0, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
                  className="p-2 rounded-lg bg-red-950/50 border border-red-900/50 text-white hover:border-red-600 transition-all"
                >
                  <ZoomOut size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 0, 0, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setZoom(Math.min(3, zoom + 0.25))}
                  className="p-2 rounded-lg bg-red-950/50 border border-red-900/50 text-white hover:border-red-600 transition-all"
                >
                  <ZoomIn size={20} />
                </motion.button>
                {downloadUrl && (
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 0, 0, 0.5)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleDownload}
                    className="p-2 rounded-lg bg-red-950/50 border border-red-900/50 text-white hover:border-red-600 transition-all"
                  >
                    <Download size={20} />
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 0, 0, 0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-lg bg-red-950/50 border border-red-900/50 text-white hover:border-red-600 transition-all"
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>

            <div className="overflow-auto max-h-[90vh] flex items-center justify-center p-8 pt-20">
              <motion.img
                animate={{ scale: zoom }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                src={imageUrl}
                alt={title}
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
