import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import React from "react";
import { 
    Github, 
    Linkedin, 
    Mail, 
    ExternalLink, 
    Menu, 
    X, 
    ChevronDown,
    Code,
    Palette,
    Database,
    Smartphone,
    ArrowRight,
    MapPin,
    Calendar
  } from 'lucide-react';

 const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const navItems = [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
      { href: '#contact', label: 'Contact' }
    ];
  
    return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
            >
              Jonny
            </motion.a>
  
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
  
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
  
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    );
  };

  export default Navigation;