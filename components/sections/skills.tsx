"use client"

import { motion } from "framer-motion"

const allSkills = [
  // Languages
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  
  // Frameworks & Libraries
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "Seaborn", icon: "/seaborn.jpg" },
  { name: "Scikit Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  
  // Platforms & Tools
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
  { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Power BI", icon: "/powerbi.jpg" },
  { name: "Excel", icon: "/excel-spreadsheet.png" },
  { name: "PowerPoint", icon: "/powerpoint.jpg" },
  { name: "Tableau", icon: "/tableau.jpg" },
  { name: "ChatGPT", icon: "/chatgpt-logo.png" },
  { name: "Cursor AI", icon: "/computer-cursor.png" },
  { name: "LovableAI", icon: "/lovable.jpg" },
]

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      staggerChildren: 0.08, 
      delayChildren: 0.3 
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: -80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

export default function Skills() {
  return (
    <motion.section 
      className="py-20 bg-black border-t border-gray-800/30 relative overflow-hidden font-sans min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      style={{
        transform: 'translateZ(0)',
      }}
    >
      {/* Background Animated Gray Glows - Modified for black background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, 60, -40, 0], 
            x: [0, 40, -30, 0],
            scale: [1, 1.4, 0.8, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-20 w-[500px] h-[500px] bg-gray-800/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ 
            y: [0, -50, 40, 0], 
            x: [0, -35, 25, 0],
            scale: [1, 0.8, 1.5, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1, ease: "easeInOut" }}
          className="absolute -left-32 bottom-10 w-[450px] h-[450px] bg-gray-700/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, 30, -30, 0], 
            x: [0, -20, 20, 0],
            scale: [1, 1.3, 0.9, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 3, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl font-extrabold mb-4 text-white tracking-tight"
            variants={skillVariants}
          >
            Skills &{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 7, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Expertise
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto" 
            variants={skillVariants}
          >
            My technical toolkit and areas of expertise
          </motion.p>
        </motion.div>

        {/* Single Unified Box with All Skills - Modified for black theme */}
        <motion.div
          className="bg-gradient-to-br from-gray-900/40 to-black border-2 border-gray-700/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 30px 60px rgba(100, 100, 100, 0.4)",
            borderColor: "rgba(107, 114, 128, 0.5)",
          }}
        >
          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 relative z-10"
            variants={containerVariants}
          >
            {allSkills.map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${idx}`}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                variants={skillVariants}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Icon Container */}
                <motion.div
                  className="w-14 h-14 bg-gray-800/50 border border-gray-700/50 rounded-xl flex items-center justify-center p-3 relative group-hover:border-gray-500 transition-all duration-300"
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    boxShadow: "0 10px 30px rgba(150, 150, 150, 0.4)",
                    backgroundColor: "rgba(55, 65, 81, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain relative z-10"
                    loading="lazy"
                  />
                </motion.div>

                {/* Skill Name */}
                <motion.span
                  className="text-xs font-medium text-gray-300 text-center leading-tight max-w-[80px] group-hover:text-white transition-colors duration-300"
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}