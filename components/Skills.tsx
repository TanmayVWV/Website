'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, color: 'text-blue-500' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 85, color: 'text-gray-800 dark:text-white' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 88, color: 'text-blue-600' },
        { name: 'JavaScript', icon: <FaJs />, level: 92, color: 'text-yellow-500' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88, color: 'text-cyan-500' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: 'text-green-600' },
        { name: 'Python', icon: <FaPython />, level: 80, color: 'text-yellow-600' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 82, color: 'text-green-700' },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, color: 'text-red-600' },
        { name: 'AWS', icon: <FaAws />, level: 75, color: 'text-orange-600' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      id="skills"
      className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                {category.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <div className={`${skill.color} text-4xl mb-4 flex justify-center`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-center font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                    <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {skill.level}%
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

