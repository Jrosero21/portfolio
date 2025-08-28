"use client";
import  { skills }  from '../../data/portfolioData';   
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '@/utils/emailService';
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
} from 'lucide-react';

const Skills = () => {
    const skillCategories = {
      frontend: skills.filter(s => s.category === 'frontend'),
      backend: skills.filter(s => s.category === 'backend'),
      tools: skills.filter(s => s.category === 'tools'),
      languages: skills.filter(s => s.category === 'languages')
    };
  
    const getTechIcon = (skillName: string) => {
      const iconMap: { [key: string]: string } = {
        'React': '⚛️',
        'TypeScript': '🔷',
        'Next.js': '▲',
        'Tailwind CSS': '🎨',
        'Vue.js': '💚',
        'Node.js': '🟢',
        'PostgreSQL': '🐘',
        'MongoDB': '🍃',
        'Express.js': '🚂',
        'Git': '📚',
        'Docker': '🐳',
        'AWS': '☁️',
        'Figma': '🎨',
        'JavaScript': '🟨',
        'Python': '🐍',
        'Java': '☕',
        'SQL': '🗃️'
      };
      return iconMap[skillName] || '⚡';
    };
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 capitalize">{category}</h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <motion.div 
                      key={skill.name} 
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-2xl">{getTechIcon(skill.name)}</div>
                      <span className="font-medium text-gray-700 flex-grow">{skill.name}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < skill.proficiency 
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;