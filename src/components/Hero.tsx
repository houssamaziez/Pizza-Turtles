import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://parkmallsetif-dz.com/wp-content/uploads/2024/02/DSC09287-scaled.jpg"
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Pizza Turtles

</h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl"
        >
Explorez l'univers culinaire audacieux de Pizza Turtles, plaisir gourmand garanti à chaque part.

</motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4"
        >
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-amber-700 transition group">
            View Menu
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Make a Reservation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;