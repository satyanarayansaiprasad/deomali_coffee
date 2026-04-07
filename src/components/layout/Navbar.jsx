import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Café', path: '/cafe' },
    { name: 'Subscription', path: '/subscription' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-surface/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(44,27,24,0.08)] py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
        <Link 
          to="/" 
          className={cn(
            "text-2xl font-black tracking-tighter uppercase transition-colors duration-300",
            (isScrolled || !isHome) ? "text-primary" : "text-surface"
          )}
        >
          Deomali Coffee
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 font-headline font-bold tracking-tight text-sm uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "relative pb-1 transition-all duration-300 hover:opacity-80",
                (isScrolled || !isHome) ? "text-primary" : "text-surface",
                location.pathname === link.path && "text-secondary border-b-2 border-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className={cn(
            "scale-95 active:scale-90 transition-transform hover:opacity-80",
            (isScrolled || !isHome) ? "text-primary" : "text-surface"
          )}>
            <ShoppingBag size={24} />
          </button>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className={(isScrolled || !isHome) ? "text-primary" : "text-surface"} /> : <Menu size={24} className={(isScrolled || !isHome) ? "text-primary" : "text-surface"} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-headline font-bold text-primary hover:text-secondary uppercase tracking-tighter"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
