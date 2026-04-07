import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: 'bg-primary text-surface hover:bg-secondary',
    secondary: 'bg-secondary-container text-on-secondary-fixed hover:scale-105',
    outline: 'border-2 border-surface text-surface hover:bg-surface hover:text-primary',
    ghost: 'text-primary hover:text-secondary border-b-2 border-secondary/20 hover:border-secondary',
  };

  return (
    <button
      className={cn(
        'px-10 py-5 rounded-full font-headline font-black text-lg text-center transition-all duration-500 uppercase tracking-widest shadow-xl active:scale-95',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
