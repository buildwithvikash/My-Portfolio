import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaRobot, 
  FaMicrochip, 
  FaTools,
  FaDatabase,
  FaCloud
} from 'react-icons/fa';

const Skills = () => {
  // Skill categories
  const skillCategories = [
    {
      name: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'Python', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'C++', level: 80, color: 'bg-green-500' },
        { name: 'Java', level: 75, color: 'bg-red-500' },
        { name: 'MATLAB', level: 70, color: 'bg-purple-500' }
      ]
    },
    {
      name: 'Robotics & Embedded Systems',
      icon: <FaRobot />,
      skills: [
        { name: 'ROS', level: 85, color: 'bg-blue-600' },
        { name: 'Arduino', level: 80, color: 'bg-green-600' },
        { name: 'Raspberry Pi', level: 75, color: 'bg-red-600' },
        { name: 'Microcontroller Programming', level: 85, color: 'bg-purple-600' }
      ]
    },
    {
      name: 'Web & Software Development',
      icon: <FaLaptopCode />,
      skills: [
        { name: 'React', level: 85, color: 'bg-blue-500' },
        { name: 'Node.js', level: 80, color: 'bg-green-500' },
        { name: 'Express.js', level: 75, color: 'bg-gray-500' },
        { name: 'Django', level: 70, color: 'bg-green-700' }
      ]
    },
    {
      name: 'Hardware & CAD',
      icon: <FaMicrochip />,
      skills: [
        { name: 'Autodesk Fusion 360', level: 85, color: 'bg-blue-600' },
        { name: 'SolidWorks', level: 80, color: 'bg-red-600' },
        { name: 'PCB Design', level: 75, color: 'bg-green-600' },
        { name: '3D Printing', level: 70, color: 'bg-purple-600' }
      ]
    },
    {
      name: 'Tools & Frameworks',
      icon: <FaTools />,
      skills: [
        { name: 'Git', level: 85, color: 'bg-orange-500' },
        { name: 'Docker', level: 75, color: 'bg-blue-500' },
        { name: 'Kubernetes', level: 70, color: 'bg-blue-600' },
        { name: 'Jenkins', level: 65, color: 'bg-red-500' }
      ]
    },
    {
      name: 'Databases & Cloud',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', level: 80, color: 'bg-green-500' },
        { name: 'PostgreSQL', level: 75, color: 'bg-blue-600' },
        { name: 'AWS', level: 70, color: 'bg-orange-500' },
        { name: 'Firebase', level: 75, color: 'bg-yellow-500' }
      ]
    }
  ];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across various 
            domains of mechatronics, software development, and engineering.
          </p>
        </motion.div>

        {/* Skills Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Skill Categories Sidebar */}
          <div className="md:w-1/4 space-y-4">
            {skillCategories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                className={`
                  w-full flex items-center p-4 rounded-lg transition-colors duration-300
                  ${selectedCategory.name === category.name 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-blue-100'
                  }
                `}
              >
                <span className="mr-4 text-2xl">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Skills Details */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:w-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="mr-4 text-3xl text-blue-600">{selectedCategory.icon}</span>
              {selectedCategory.name}
            </h2>

            <div className="space-y-4">
              {selectedCategory.skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  variants={skillVariants}
                  className="flex items-center"
                >
                  <div className="w-1/3 text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </div>
                  <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-4 relative">
                    <div 
                      className={`absolute top-0 left-0 h-full rounded-full ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xs text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Advanced Robotics",
                issuer: "MIT xPRO",
                year: 2022
              },
              {
                name: "Machine Learning",
                issuer: "Stanford Online",
                year: 2021
              },
              {
                name: "Cloud Computing",
                issuer: "AWS Certification",
                year: 2022
              }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {cert.issuer}
                </p>
                <span className="text-sm text-blue-600">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;