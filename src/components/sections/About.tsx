"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '@/utils/emailService';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Code,
  Palette,
  Database,
  Smartphone,

} from 'lucide-react';

// About Component
const About = () => {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here&apos;s a bit more about me and what I bring to the table
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I&apos;m a frontend software engineer who loves to design and build innovative web 
                  applications using various technologies. My journey started as an analyst woring with developers on 
                  various projects and my curiosity quickly became a passion for creating digital experiences 
                  that make a difference.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a classic film with my &quot;calm&quot; dogs.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating user experiences that 
                  are both beautiful and functional. Let&apos;s build something amazing together!
                </p>
              </div>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Code, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
                { icon: Palette, title: 'UI/UX Design', desc: 'Creating beautiful interfaces' },
                { icon: Database, title: 'Full Stack', desc: 'Frontend and backend development' },
                { icon: Smartphone, title: 'Responsive', desc: 'Mobile-first approach' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;