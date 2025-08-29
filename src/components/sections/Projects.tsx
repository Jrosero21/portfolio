"use client";
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import React, { useState} from 'react';
import { motion} from 'framer-motion';
import { Github,  ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
      <motion.div
        className="relative group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`w-full h-full ${project.id === 'placeholder' ? 'object-contain bg-gray-100' : 'object-cover'} transition-transform duration-500 group-hover:scale-110`}
          />
          
          {project.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
          
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-white opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          >
            <div className="text-center space-y-5">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {project.summary}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex gap-3 justify-center">
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                )}
                
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">{project.title}</h3>
            <span className="text-sm text-gray-500">{project.completedAt}</span>
          </div>
          
          <p className={`text-gray-600 text-sm mb-4 ${isExpanded ? '' : 'line-clamp-2'}`}>
            {project.description}
          </p>
          
          {isExpanded && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-2 py-1 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
              {project.category}
            </span>
            {!isExpanded ? (
              <span className="text-xs text-gray-500">
                {project.technologies.length} technologies
              </span>
            ) : (
              <span className="text-xs text-gray-500">
                All {project.technologies.length} technologies shown
              </span>
            )}
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-3 text-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded py-1"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </motion.div>
    );
  };
  
  // Projects Component
  const Projects = () => {
    const [filter, setFilter] = useState<'all' | 'featured' | 'web' | 'mobile' | 'fullstack'>('all');
    
    const filteredProjects = projects.filter(project => {
      if (filter === 'all') return true;
      if (filter === 'featured') return project.featured;
      return project.category === filter;
    });
  
    const filters = [
      { key: 'all', label: 'All Projects' },
      { key: 'featured', label: 'Featured' },
      { key: 'web', label: 'Web Apps' },
      { key: 'mobile', label: 'Mobile' },
      { key: 'fullstack', label: 'Full Stack' }
    ] as const;
  
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in frontend development, 
              full-stack applications, and mobile development.
            </p>
          </motion.div>
  
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === key
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
  
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  export default Projects;