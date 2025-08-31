"use client";

import Image from "next/image";
import ResponsiveNavigation from "@/components/responsive-navigation";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <div className="min-h-screen text-black flex flex-col w-full bg-white">
      {/* Navigation */}
      <ResponsiveNavigation />

      {/* Hero Image Gallery */}
      <div className="px-4 mb-12 h-full flex flex-col justify-center items-center w-full flex-1">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Portfolio images with stagger animation */}
          {[
            { src: "/images/im1.jpeg", alt: "Portfolio Image 1" },
            { src: "/images/im2.jpeg", alt: "Portfolio Image 2" },
            { src: "/images/im3.jpeg", alt: "Portfolio Image 3" },
            { src: "/images/im4.jpeg", alt: "Portfolio Image 4" },
          ].map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={500} 
                height={500} 
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Portfolio Title */}
      <motion.div 
        className="text-center mb-12 px-4 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider mb-8 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
          PORTFOLIO
        </h1>
      </motion.div>

      {/* Business Info */}
      <motion.div 
        className="max-w-6xl mx-auto px-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Left side - Business name and location */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl md:text-2xl font-bold tracking-wide mb-2">
              SAILOR PIERCING BY EL BOUAAMRI
            </h2>
            <p className="text-gray-600 tracking-wide">
              CASABLANCA, MOROCCO
            </p>
          </motion.div>

          {/* Right side - Social media and contact */}
          <motion.div 
            className="text-right"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-lg md:text-xl font-medium tracking-wide mb-1">
              @SAILOR_PIERCING
            </p>
            <p className="text-gray-600 tracking-wide">
              +212694618601
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Arrow / Scroll Indicator */}
      <motion.div 
        className="flex justify-center px-4 md:px-8 py-8 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.button 
          className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
          onClick={() => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ 
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 300 }
          }}
        >
          <svg 
            className="w-6 h-6 transform group-hover:translate-y-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}
