import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-24 md:py-64 bg-primary text-surface relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-tertiary-container/30 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-center">
        <div className="relative group">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative z-10 aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              alt="Deomali Peaks" 
              className="w-full h-full object-cover grayscale-0 group-hover:grayscale-0 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLvIQT3pAJzL1HLc34lnhN-rr57jx0Kl7hXvv5R197NwmNPqRXu1T4FQk3EqXFBYvO-CYtN125eQTbKD9-kGdrJ8wsTgwJ9laZ93f4BaKzB4s_Jq3UwJyc4dNMefSm0HRsFYbJrPDmbzrSMm_87Nx4a4bkqNDPmVJxoJbkDGT96zwOI5izAT-DJtkK_AyrphIN3kQHPGQgk6-MXnbX56Pj-vqsPLnwcamnevXIgpx-B57r796tuxvBULnSeVFyr6R7qwFKmeTNe4lB"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-transparent to-transparent"></div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-16 -right-16 w-3/4 aspect-video bg-surface/10 backdrop-blur-2xl rounded-2xl p-12 lg:p-16 border border-surface/10 hidden md:flex flex-col justify-center shadow-2xl"
          >
            <p className="font-headline text-3xl lg:text-4xl font-black text-secondary-container italic leading-[1.1] mb-4">
              "The altitude changes everything. The maturation is slower, the flavor deeper."
            </p>
            <span className="text-surface/50 font-label font-bold uppercase tracking-widest text-[10px]">Founder's Insight</span>
          </motion.div>
        </div>

        <div className="space-y-12">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-secondary-container font-headline font-black tracking-[0.5em] uppercase text-xs block">Our Origin</span>
            <h2 className="font-headline text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12 uppercase pb-12 border-b border-surface/10">Born in the <br/> Clouds.</h2>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-10 text-xl font-body text-surface-variant/80 leading-relaxed max-w-xl"
          >
            <p className="font-bold text-surface">At 1,672 meters, Deomali is the highest peak in the region. Here, the unique microclimate creates coffee cherries that are exceptionally dense and packed with aromatic complexity.</p>
            <p>Our journey began with a simple mission: to respect the peak. We work directly with small-hold farmers to ensure sustainable practices that protect the mountain while delivering the most vibrant roast possible.</p>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12"
          >
            <button className="flex items-center gap-6 group">
              <span className="font-headline font-black text-3xl text-surface uppercase group-hover:text-secondary-container transition-colors tracking-tighter">Read the Full Story</span>
              <div className="w-16 h-16 rounded-full border-2 border-surface/20 flex items-center justify-center group-hover:bg-secondary-container group-hover:border-secondary-container group-hover:translate-x-4 transition-all duration-500">
                <MoveRight size={24} className="group-hover:text-primary transition-colors" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
