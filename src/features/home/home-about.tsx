"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeAbout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className=" bg-white text-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side - Image */}
          <motion.div 
            className="order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <motion.div 
                className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Replace with actual image */}
                <Image 
                  src="/images/avatar.jpeg" 
                  alt="El Bouaamri - Sailor Piercing Professional" 
                  width={400} 
                  height={533} 
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            variants={itemVariants}
          >
            {/* Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                ABOUT ME
              </h2>
              <h3 className="text-xl md:text-2xl font-medium tracking-wide text-gray-700 mb-8">
                INTRODUCTION
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="space-y-6 text-gray-600 leading-relaxed"
              variants={containerVariants}
            >
              <motion.p 
                className="text-sm md:text-base"
                variants={itemVariants}
              >
                Welcome to Sailor Piercing, Casablanca's leading professional piercing 
                studio, renowned for our expertise, precision, and commitment to safety 
                and aesthetics. With over 8 years of experience, we specialize in feminine 
                body piercings, offering a refined and elegant touch to body jewelry.
              </motion.p>
              
              <motion.p 
                className="text-sm md:text-base"
                variants={itemVariants}
              >
                At Sailor Piercing, we prioritize hygiene and client safety, following the 
                highest industry standards. We use only single-use, sterilized needles, 
                ensuring a safe and comfortable experience for every client. Our jewelry 
                selection is carefully curated, featuring high-quality materials designed for 
                both beauty and biocompatibility.
              </motion.p>
              
              <motion.p 
                className="text-sm md:text-base"
                variants={itemVariants}
              >
                Our reputation speaks for itself—our clients' satisfaction and trust have 
                earned us top-rated reviews on Google Maps, making us a go-to 
                destination for those seeking a professional and stylish piercing experience 
                in Casablanca.
              </motion.p>
            </motion.div>

            {/* Additional Info or CTA */}
            <motion.div 
              className="pt-6"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {[
                  "8+ Years Experience",
                  "Professional Certified", 
                  "Top-Rated Studio"
                ].map((text, index) => (
                  <motion.div 
                    key={text}
                    className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200"
                    whileHover={{ scale: 1.05, backgroundColor: "#f8f9fa" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
