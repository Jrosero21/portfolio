"use client";
import  { experience }  from '../../data/portfolioData';   
import React from 'react';
import { motion } from 'framer-motion';
import {  MapPin, Calendar } from 'lucide-react';

// Experience Component
const Experience = () => {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey and the impact I&apos;ve made
            </p>
          </motion.div>
  
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {index < experience.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="flex-grow bg-white rounded-xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                        <p className="text-purple-600 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: achievement.replace(/'/g, '&apos;') }}></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Experience;    