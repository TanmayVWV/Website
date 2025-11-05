'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs } from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      icons: [<SiNextdotjs />, <SiReact />, <SiNodedotjs />, <SiTailwindcss />],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and drag-and-drop functionality.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
      icons: [<SiReact />, <SiNodedotjs />],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      icons: [<SiNextdotjs />, <SiReact />, <SiTailwindcss />],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    },
    {
      title: 'Weather Dashboard',
      description:
        'An interactive weather dashboard with location-based forecasts and beautiful data visualizations.',
      technologies: ['React', 'JavaScript', 'Chart.js', 'API Integration'],
      icons: [<SiReact />],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-4 text-white text-4xl">
                    {project.icons.map((Icon, i) => (
                      <div key={i}>{Icon}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

