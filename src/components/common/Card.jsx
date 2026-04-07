import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Card = ({ title, subtitle, image, price, roast, featured, className, children, ...props }) => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn("group relative flex flex-col pt-12 border-t border-primary/5", className)}
      {...props}
    >
      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container-low mb-8 relative shadow-xl">
        <img 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
          src={image}
        />
        {featured && (
          <div className="absolute top-6 left-6 bg-secondary-container px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-on-secondary-fixed shadow-lg">
            Best Seller
          </div>
        )}
        <div className="absolute top-6 right-6 bg-surface/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg border border-primary/5">
          {roast || 'Merchandise'}
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-headline text-3xl font-black tracking-tight text-primary uppercase leading-none mb-2 underline decoration-secondary/30 decoration-2 underline-offset-8">
              {title}
            </h3>
            <p className="text-secondary/60 font-body text-xs tracking-widest font-black uppercase">
              {subtitle}
            </p>
          </div>
          <span className="font-headline text-3xl font-black text-primary">${price.toFixed(2)}</span>
        </div>
        
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
