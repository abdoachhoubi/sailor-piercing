"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      },
    },
  };

  return (
    <section id="mission" className="min-h-screen bg-gray-50 text-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vision Section */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={itemVariants}
          >
            {/* Vision Image */}
            <motion.div 
              className="order-1 lg:order-1"
              variants={imageVariants}
            >
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                <motion.div 
                  className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/images/im1.jpeg" 
                    alt="Sailor Piercing - Professional nose piercing" 
                    width={600} 
                    height={450} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Vision Content */}
            <motion.div 
              className="order-2 lg:order-2 space-y-6"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                VISION
              </h2>
              
              <motion.p 
                className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg"
                variants={itemVariants}
              >
                At Sailor Piercing, our vision is to redefine body piercing as an elegant 
                and empowering form of self-expression. We aim to be the leading 
                piercing studio in Casablanca and beyond, known for our dedication to 
                safety, aesthetics, and innovation. By combining expert craftsmanship with 
                high-quality, feminine jewelry, we strive to create a space where every 
                client feels confident, beautiful, and valued.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={itemVariants}
          >
            {/* Mission Content */}
            <motion.div 
              className="order-2 lg:order-1 space-y-6"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                MISSION
              </h2>
              
              <motion.p 
                className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg mb-6"
                variants={itemVariants}
              >
                Our mission is to provide a safe, luxurious, and professional piercing 
                experience that prioritizes hygiene, aesthetics, and client comfort. We use 
                single-use sterile needles, offer high-quality jewelry, and ensure that every 
                client feels confident and cared for. Our goal is to blend artistry with 
                precision, helping each person express their individuality with elegance 
                and style.
              </motion.p>

              {/* Signature */}
              <motion.div 
                className="text-right pt-4"
                variants={itemVariants}
              >
                <p className="text-lg md:text-xl font-bold tracking-wider text-black">
                  EL BOUAAMRI
                </p>
              </motion.div>
            </motion.div>

            {/* Mission Image */}
            <motion.div 
              className="order-1 lg:order-2"
              variants={imageVariants}
            >
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                <motion.div 
                  className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/images/im2.jpeg" 
                    alt="Sailor Piercing - Professional ear piercing setup" 
                    width={600} 
                    height={450} 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            className="text-center space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-wider text-black">
              OUR CORE VALUES
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "SAFETY FIRST",
                  description: "Single-use sterile needles and highest hygiene standards"
                },
                {
                  title: "ARTISTIC EXCELLENCE",
                  description: "Expert craftsmanship and attention to detail"
                },
                {
                  title: "CLIENT EMPOWERMENT",
                  description: "Creating confidence through elegant self-expression"
                }
              ].map((value, index) => (
                <motion.div 
                  key={value.title}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="text-lg font-bold tracking-wide mb-3 text-black">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
