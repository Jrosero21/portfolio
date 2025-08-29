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

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <a 
              href="#home"
              className="inline-block text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 hover:opacity-80 transition-opacity cursor-pointer"
            >
              Jonny
            </a>
            <p className="text-gray-400 mb-6">
              Frontend Software Engineer passionate about creating amazing web experiences.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com" className="hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:jnrosero@gmail.com" className="hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2025 Jonny. All rights reserved. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;