import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-primary">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          alt="Brewed at the Peak of Deomali" 
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAyDmu1Y5QPfuQGg_davURhu_3UYRsjz9lFcZOxP-TOwdzT-h2qJsrr_rzQgI2oq5LL7NU7wpqlzaRzAU_XRCMyhO7rH9kIkVYKVVCOTjP5ZF3hexxy5lM2KCD0kVwafLTSeGJ0XJSPRow7P_6A7KjZjXK_N0bldTgNTqjq9dk7xsKw00cYFGbMDHjq-gWm_Br8WgDVdkKLa8ohMTsRmae9cSM6FDJa-maSEer1xN4t3epXOW-M4ttzO6O2wXrdbs0M-KWcqJaqjsI"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-headline text-7xl md:text-[8rem] font-black text-surface leading-[0.8] tracking-tighter mb-10"
          >
            Brewed at the Peak of <span className="text-secondary-container">Deomali</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl text-surface-variant/80 font-body max-w-xl leading-relaxed mb-16"
          >
            Ethically sourced high-altitude beans roasted for those who seek the extraordinary in every morning cup.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="px-12 py-6 bg-secondary-container text-on-secondary-fixed rounded-full font-headline font-black text-lg text-center hover:scale-105 active:scale-95 transition-transform shadow-xl">
              Shop Now
            </button>
            <button className="px-12 py-6 border-2 border-surface/30 text-surface rounded-full font-headline font-black text-lg text-center backdrop-blur-md hover:bg-surface hover:text-primary transition-all duration-300">
              Visit Café
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-surface-variant text-[10px] uppercase tracking-[0.4em] font-black">Scroll</span>
        <motion.div 
          animate={{ height: [0, 48, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1.5px] bg-gradient-to-b from-secondary-container to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
