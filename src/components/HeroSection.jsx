import React from 'react';
import { Download, ChevronDown, BarChart3, Database, FileSpreadsheet } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const skills = [
    { icon: FileSpreadsheet, name: 'Excel', color: 'text-green-500' },
    { icon: Database, name: 'SQL', color: 'text-blue-500' },
    { icon: BarChart3, name: 'Power BI', color: 'text-yellow-500' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 relative overflow-hidden flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg rotate-12 animate-spin-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Youssef Nasr
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl mb-8 text-cyan-100"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-semibold">Junior Data Analyst</span>
              <span className="mx-4">|</span>
              <span className="text-cyan-300">Turning Data into Insights</span>
            </motion.div>

            {/* Skills Icons */}
            <motion.div 
              className="flex justify-center items-center gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className={`p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300 ${skill.color}`}>
                    <skill.icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm mt-2 text-cyan-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-cyan-200"
              >
                <span className="text-sm mb-2">Scroll Down</span>
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for slow spin */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

