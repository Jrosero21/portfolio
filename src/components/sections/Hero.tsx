"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from '../ui/ContactModal';
import emailjs from '@emailjs/browser';
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
  Calendar,
  FileText,
} from 'lucide-react';


// Hero Component
const Hero = () => {
    const [showModal, setShowModal] = useState(false);
  
    const scrollToProjects = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };
  
    return (
      <>
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-8">
              <motion.div
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Hey, I&apos;m{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Jonny
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                A passionate <span className="font-semibold text-purple-600">frontend software engineer</span> who loves
                turning ideas into sleek, interactive web experiences using today&apos;s most modern tools!
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <motion.button
                  onClick={scrollToProjects}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  onClick={() => setShowModal(true)}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-purple-600 hover:text-white transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                  <Mail size={20} />
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="flex justify-center gap-6 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <motion.a
                  href="https://github.com/Jrosero21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/jonnyrosero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:Jnrosero@gmail.com"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <FileText size={24} />
                </motion.a>
              </motion.div>
            </div>
  
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={32} className="text-gray-400" />
            </motion.div>
          </div>
        </section>
  
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  };

  export default Hero;  