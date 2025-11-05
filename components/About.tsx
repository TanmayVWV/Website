'use client';

import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code that stands the test of time.',
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Creative Solutions',
      description: 'Finding innovative approaches to solve complex problems.',
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Performance',
      description: 'Building fast and efficient applications that users love.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white dark:bg-slate-900 relative"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-gray-700 dark:text-gray-300">
                <p className="text-lg leading-relaxed mb-4">
                  I'm a passionate full-stack developer with a love for creating
                  beautiful and functional web applications. With expertise in
                  modern web technologies, I bring ideas to life through clean
                  code and intuitive design.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with
                  the developer community.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-600 dark:bg-primary-800 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg"
              >
                <div className="text-primary-600 dark:text-primary-400 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

