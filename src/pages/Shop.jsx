import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { Filter, X, ChevronDown, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
    className="group relative flex flex-col pt-12 border-t border-primary/5"
  >
    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container-low mb-8 relative shadow-xl">
      <img 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
        src={product.image}
      />
      {product.featured && (
        <div className="absolute top-6 left-6 bg-secondary-container px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-on-secondary-fixed shadow-lg">
          Best Seller
        </div>
      )}
      <div className="absolute top-6 right-6 bg-surface/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg border border-primary/5">
        {product.roast || 'Merchandise'}
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-headline text-3xl font-black tracking-tight text-primary uppercase leading-none mb-2 underline decoration-secondary/30 decoration-2 underline-offset-8">
            {product.name}
          </h3>
          <p className="text-secondary/60 font-body text-xs tracking-widest font-black uppercase">
            {product.notes?.join(' • ') || 'Premium Quality'}
          </p>
        </div>
        <span className="font-headline text-3xl font-black text-primary">${product.price.toFixed(2)}</span>
      </div>
      
      <button className="w-full bg-primary text-surface font-headline font-black py-6 rounded-full hover:bg-secondary transition-all duration-500 uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 shadow-2xl">
        Add to Cart <ShoppingBag size={14} />
      </button>
    </div>
  </motion.div>
);

const FilterSection = ({ title, options, selected, onSelect }) => (
  <div className="space-y-6 pt-12 border-t border-primary/10">
    <h4 className="font-headline font-black text-[12px] uppercase tracking-[0.3em] text-primary">{title}</h4>
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`px-6 py-3 rounded-full font-label font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border-2 ${
            selected.includes(opt) 
              ? 'bg-primary border-primary text-surface' 
              : 'bg-transparent border-primary/10 text-primary hover:border-primary/30'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

const Shop = () => {
  const [selectedRoasts, setSelectedRoasts] = useState([]);
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [priceRange, setPriceRange] = useState(50);

  const roasts = ['Light Roast', 'Medium Roast', 'Dark Roast'];
  const profiles = ['Fruity', 'Nutty', 'Chocolate', 'Citrus', 'Caramel', 'Floral'];

  const toggleFilter = (set, value) => {
    set(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchRoast = selectedRoasts.length === 0 || selectedRoasts.includes(p.roast);
      const matchPrice = p.price <= priceRange;
      return matchRoast && matchPrice;
    });
  }, [selectedRoasts, priceRange]);

  return (
    <main className="bg-surface relative pt-32 pb-48">
      <div className="fixed inset-0 grain-overlay z-[100] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-32 space-y-8">
          <h1 className="font-headline text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase text-primary">
            Provisions <br/> <span className="text-secondary italic">For the Bold</span>
          </h1>
          <p className="text-secondary/60 text-xl font-body max-w-xl leading-relaxed">
            Sustainably sourced, meticulously roasted. From the peak of Deomali to your daily ritual.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-16">
            <div className="sticky top-40 space-y-16">
              <div className="flex justify-between items-center">
                <h3 className="font-headline font-black text-2xl tracking-tighter text-primary">FILTERS</h3>
                <button 
                  onClick={() => { setSelectedRoasts([]); setSelectedProfiles([]); setPriceRange(50); }}
                  className="text-[10px] font-black uppercase tracking-widest text-secondary hover:opacity-100 opacity-60 transition-opacity border-b-2 border-secondary/20"
                >
                  Clear All
                </button>
              </div>

              <FilterSection 
                title="Roast Level" 
                options={roasts} 
                selected={selectedRoasts} 
                onSelect={(val) => toggleFilter(setSelectedRoasts, val)} 
              />

              <FilterSection 
                title="Flavor Profiles" 
                options={profiles} 
                selected={selectedProfiles} 
                onSelect={(val) => toggleFilter(setSelectedProfiles, val)} 
              />

              <div className="space-y-8 pt-12 border-t border-primary/10">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline font-black text-[12px] uppercase tracking-[0.3em] text-primary">Price Range</h4>
                  <span className="font-headline font-black text-primary">${priceRange}</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="50" 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-primary/10 rounded-full appearance-none cursor-pointer accent-secondary transition-all hover:accent-primary"
                />
                <div className="flex justify-between text-[10px] font-black text-primary/40 tracking-[0.2em]">
                  <span>$10</span>
                  <span>$50+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Listing */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="py-48 text-center space-y-8">
                <h3 className="font-headline text-5xl font-black text-primary opacity-20">NO PRODUCTS FOUND</h3>
                <p className="text-secondary/40 font-body">Try clearing your filters or exploring another roast.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Subscription Banner */}
      <section className="mt-64 max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-primary-container rounded-[2.5rem] overflow-hidden relative shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80" 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
            alt="Never run dry"
          />
          
          <div className="relative z-20 p-16 md:p-32 flex flex-col justify-center max-w-2xl space-y-12">
             <h2 className="font-headline text-7xl md:text-9xl font-black text-surface tracking-tighter leading-[0.8] uppercase">
                Never Run <br/> <span className="text-secondary-container">Dry Again</span>
             </h2>
             <p className="text-surface/60 text-xl font-body max-w-md">Save 15% on every bag and get exclusive access to small-batch micro-lots when you subscribe.</p>
             <button className="bg-secondary-container text-on-secondary-fixed font-headline font-black px-16 py-8 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-lg w-fit shadow-2xl">
                Build Your Subscription
             </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
