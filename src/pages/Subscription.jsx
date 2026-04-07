import React from 'react';
import Hero from '../components/home/Hero';
import SocialFeed from '../components/home/SocialFeed';

const Subscription = () => {
  return (
    <main className="bg-surface relative pt-32 pb-48">
      <div className="fixed inset-0 grain-overlay z-[100] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
        <h1 className="font-headline text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase text-primary">
          Join the <span className="text-secondary">Peak Society</span>
        </h1>
        <p className="text-secondary/60 text-2xl font-body max-w-2xl mx-auto leading-relaxed">
          The world's most exclusive coffee subscription. Rare mountain micro-lots delivered to your door every month.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
          {['The Casual', 'The Enthusiast', 'The Peak Society'].map((plan, idx) => (
            <div key={idx} className="p-12 bg-primary text-surface rounded-3xl space-y-8 flex flex-col items-center shadow-2xl relative group overflow-hidden border border-surface/5">
              {idx === 2 && <div className="absolute top-10 -right-10 bg-secondary-container text-on-secondary-fixed py-2 px-10 rotate-45 text-[10px] font-black uppercase tracking-widest shadow-xl">Best Value</div>}
              <h3 className="font-headline text-4xl font-black uppercase tracking-tighter">{plan}</h3>
              <div className="text-6xl font-headline font-black text-secondary-container">${[19, 39, 79][idx]}</div>
              <ul className="space-y-4 text-surface/60 font-body text-sm text-center">
                <li>{idx + 1} Bags per Month</li>
                <li>Free Shipping</li>
                <li>Exclusive Access</li>
                {idx > 0 && <li>Tasting Notes</li>}
                {idx > 1 && <li>Brewing Equipment</li>}
              </ul>
              <button className="w-full bg-secondary-container text-on-secondary-fixed py-6 rounded-full font-headline font-black uppercase tracking-[0.2em] text-[10px] group-hover:scale-105 transition-all duration-300">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Subscription;
