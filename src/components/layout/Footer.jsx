import React from 'react';
import { Globe, Share2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Explore: [
      { name: 'Shop Roasts', path: '/shop' },
      { name: 'Brew Guides', path: '/guides' },
      { name: 'Café Locations', path: '/cafe' },
      { name: 'Wholesale', path: '/wholesale' },
    ],
    Support: [
      { name: 'Shipping Policy', path: '/shipping' },
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '/terms' },
      { name: 'Contact Us', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-primary text-surface py-16 px-8 md:px-12 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary-container/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link 
              to="/" 
              className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-surface"
            >
              Deomali Coffee
            </Link>
            <p className="text-surface/60 font-body text-sm tracking-wide max-w-sm leading-relaxed">
              Bringing the spirit of the highest peak to your daily ritual. Roasted with intention, served with pride.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-surface-variant hover:text-secondary-container transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-surface-variant hover:text-secondary-container transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="text-surface-variant hover:text-secondary-container transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="text-secondary-container font-headline font-bold text-xs uppercase tracking-widest">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-surface/60 hover:text-surface transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-surface/10 text-center">
          <p className="text-surface/40 font-headline text-[10px] md:text-xs tracking-[0.3em] uppercase">
            © 2024 DEOMALI COFFEE. BREWED FOR THE BOLD.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
