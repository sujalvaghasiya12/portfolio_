"use client"

import { Github, Linkedin, Mail } from "lucide-react"

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
          </div>
        </div>
      </div>
    </footer>
  )
}