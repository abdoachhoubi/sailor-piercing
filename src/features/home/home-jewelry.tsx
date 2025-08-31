"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeJewelry() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="jewelry" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              CUSTOM JEWELRY
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are excited to launch our exclusive Sailor Piercing Custom Jewelry Line, 
              a carefully curated collection of luxurious and unique pieces designed 
              specifically for body piercings.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <motion.div 
                className="space-y-6 text-gray-600 leading-relaxed"
                variants={containerVariants}
              >
                <motion.p 
                  className="text-base md:text-lg"
                  variants={itemVariants}
                >
                  Our custom jewelry will feature high-quality, hypoallergenic materials 
                  such as 14k/18k gold, titanium, and implant-grade steel, ensuring both 
                  beauty and safety for all our clients.
                </motion.p>
                
                <motion.p 
                  className="text-base md:text-lg"
                  variants={itemVariants}
                >
                  Each piece will be crafted to elevate your personal style, whether 
                  you're looking for a minimalist look or a bold statement.
                </motion.p>
                
                <motion.p 
                  className="text-base md:text-lg"
                  variants={itemVariants}
                >
                  Stay tuned for our upcoming limited-edition collections and bespoke 
                  designs, where you can even customize your jewelry with engravings or 
                  special features to make your piercing experience truly one-of-a-kind.
                </motion.p>
                
                <motion.p 
                  className="text-base md:text-lg font-medium text-gray-800"
                  variants={itemVariants}
                >
                  Our goal is to provide pieces that are not just jewelry, but expressions 
                  of individuality and artistry.
                </motion.p>
              </motion.div>

              {/* Features */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {[
                  "14k/18k Gold",
                  "Titanium Quality",
                  "Implant-Grade Steel",
                  "Hypoallergenic"
                ].map((feature, index) => (
                  <motion.div 
                    key={feature}
                    className="flex items-center space-x-3 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-200"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, backgroundColor: "#fafafa" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-black to-gray-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Signature */}
              <motion.div 
                className="pt-8"
                variants={itemVariants}
              >
                <p className="text-right text-2xl md:text-3xl font-light tracking-widest text-gray-800">
                  EL BOUAAMRI
                </p>
              </motion.div>
            </motion.div>

            {/* Right Images Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 h-full"
              variants={containerVariants}
            >
              {/* Image 1 */}
              <motion.div 
                className="space-y-4"
                variants={imageVariants}
              >
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full h-full"
                  >
                    <Image 
                      src="/images/im1.jpeg" 
                      alt="Custom Jewelry Collection 1" 
                      width={300} 
                      height={400} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full h-full"
                  >
                    <Image 
                      src="/images/im2.jpeg" 
                      alt="Custom Jewelry Collection 2" 
                      width={300} 
                      height={300} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Image 2 */}
              <motion.div 
                className="space-y-4 pt-8"
                variants={imageVariants}
              >
                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full h-full"
                  >
                    <Image 
                      src="/images/im3.jpeg" 
                      alt="Custom Jewelry Collection 3" 
                      width={300} 
                      height={300} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full h-full"
                  >
                    <Image 
                      src="/images/im4.jpeg" 
                      alt="Custom Jewelry Collection 4" 
                      width={300} 
                      height={400} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
