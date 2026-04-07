import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  const isOdd = index % 2 !== 0;
  
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative flex flex-col ${isOdd ? 'md:translate-y-24' : ''}`}
    >
      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container-low mb-8 relative shadow-xl">
        <img 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
          src={product.image}
        />
        <div className="absolute top-6 right-6 bg-surface/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg border border-primary/5">
          {product.roast || 'Merchandise'}
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-headline text-3xl md:text-4xl font-black tracking-tight text-primary uppercase leading-none">
          {product.name}
        </h3>
        <p className="text-secondary/60 font-body text-sm tracking-wide uppercase font-bold">
          {product.notes?.join(' • ') || 'Premium Quality'}
        </p>
        <div className="flex justify-between items-end pt-4 border-t border-primary/10">
          <span className="font-headline text-3xl font-black text-primary">${product.price.toFixed(2)}</span>
          <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
            Quick Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  const featured = products.filter(p => p.featured);

  return (
    <section className="py-24 md:py-48 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-headline font-black tracking-[0.4em] uppercase text-xs block mb-6">The Collection</span>
            <h2 className="font-headline text-7xl md:text-9xl font-black tracking-tighter text-primary leading-[0.8]">Current Roasts</h2>
          </div>
          <Link 
            to="/shop" 
            className="font-headline text-sm font-black uppercase tracking-[0.2em] border-b-4 border-secondary pb-2 text-primary hover:text-secondary transition-all duration-300"
          >
            View All Roasts
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
