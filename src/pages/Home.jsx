import React from 'react';
import Hero from '../components/home/Hero';
import ProductGrid from '../components/home/ProductGrid';
import BrandStory from '../components/home/BrandStory';
import SocialFeed from '../components/home/SocialFeed';

const Home = () => {
  return (
    <main className="bg-surface relative pt-0">
      {/* Decorative Elements */}
      <div className="fixed inset-0 grain-overlay z-[100] pointer-events-none"></div>
      
      <Hero />
      <ProductGrid />
      <BrandStory />
      <SocialFeed />
    </main>
  );
};

export default Home;
