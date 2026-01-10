'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B1220]/80 backdrop-blur-md border-b border-white/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center bg-brand-blue rounded-lg overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-cyan opacity-80 group-hover:opacity-100 transition-opacity" />
               <span className="relative text-white font-bold text-lg select-none">R</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-gray-100 transition-colors">
              RYZE<span className="text-brand-cyan">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'How It Works', 'Pricing', 'About'].map((item) => (
              <Link 
                key={item}
                href={item === 'About' || item === 'Pricing' ? `/${item.toLowerCase().replace(/\s+/g, '-')}` : `/#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-shadow-glow transition-all duration-200"
              >
                {item}
              </Link>
            ))}
            
            <Link 
              href="/#contact" 
              className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white transition-all duration-200 bg-brand-blue rounded-full hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(59,91,255,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-[#0B1220] border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            {['Features', 'How It Works', 'Pricing', 'About'].map((item) => (
              <Link 
                key={item}
                href={item === 'About' || item === 'Pricing' ? `/${item.toLowerCase().replace(/\s+/g, '-')}` : `/#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="block text-lg font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="/#contact" 
                className="block w-full py-3 text-center font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
