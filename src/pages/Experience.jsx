import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaCalendarAlt 
} from 'react-icons/fa';

const Experience = () => {
  // Experience and Education Data
  const experienceData = [
    {
      type: 'work',
      title: 'Senior Mechatronics Engineer',
      company: 'TechInnovate Solutions',
      location: 'San Francisco, CA',
      date: 'Jan 2022 - Present',
      description: [
        'Led development of advanced robotics systems for industrial automation',
        'Designed and implemented IoT-enabled smart manufacturing solutions',
        'Developed machine learning algorithms for predictive maintenance',
        'Collaborated with cross-functional teams to deliver cutting-edge technological innovations'
      ],
      technologies: ['ROS', 'Python', 'Machine Learning', 'IoT', 'Docker']
    },
    {
      type: 'work',
      title: 'Robotics Engineer',
      company: 'RoboTech Innovations',
      location: 'Seattle, WA',
      date: 'Jun 2019 - Dec 2021',
      description: [
        'Developed autonomous robotic systems for precision manufacturing',
        'Implemented computer vision solutions for quality control',
        'Designed and prototyped embedded systems for robotic applications',
        'Optimized existing robotic processes to improve efficiency by 40%'
      ],
      technologies: ['OpenCV', 'Arduino', 'C++', 'Raspberry Pi', 'TensorFlow']
    },
    {
      type: 'education',
      title: 'Master of Science in Mechatronics Engineering',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      date: 'Sep 2017 - May 2019',
      description: [
        'Specialized in Robotics and Intelligent Systems',
        'Completed advanced projects in machine learning and robotic control',
        'Research focus on human-robot interaction and adaptive robotics'
      ],
      technologies: ['MATLAB', 'ROS', 'Machine Learning', 'Control Systems']
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering in Mechanical Engineering',
      institution: 'MIT',
      location: 'Cambridge, MA',
      date: 'Sep 2013 - May 2017',
      description: [
        'Minor in Computer Science',
        'Senior design project: Autonomous drone navigation system',
        'Active member of Robotics and Innovation Club'
      ],
      technologies: ['CAD', 'Python', 'Embedded Systems']
    }
  ];

  // State for filtering
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter experiences
  const filteredExperience = activeFilter === 'all' 
    ? experienceData 
    : experienceData.filter(item => item.type === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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
            Professional Journey
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my professional experience and 
            academic background in mechatronics and engineering.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          {['all', 'work', 'education'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                capitalize px-6 py-2 rounded-full transition-colors duration-300
                ${activeFilter === filter 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:w-0.5 before:h-full before:bg-gray-300 dark:before:bg-gray-700"
        >
          {filteredExperience.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`
                relative mb-8 w-full 
                ${index % 2 === 0 ? 'md:pr-12 md:pl-0 pl-12' : 'md:pl-12 md:pr-0 pr-12'}
              `}
            >
              {/* Timeline Marker */}
              <div className={`
                absolute top-0 ${index % 2 === 0 ? 'left-0 md:right-[-50px]' : 'right-0 md:left-[-50px]'}
                w-10 h-10 rounded-full flex items-center justify-center
                ${item.type === 'work' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-green-600 text-white'
                }
              `}>
                {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>

              {/* Experience Card */}
              <div className={`
                bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md
                ${index % 2 === 0 
                  ? 'md:ml-12 md:text-left text-right' 
                  : 'md:mr-12 md:text-right text-left'
                }
              `}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {item.type === 'work' ? item.company : item.institution}
                </p>

                {/* Location and Date */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {item.location}
                  </div>
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {item.date}
                  </div>
                </div>

                {/* Description */}
                <ul className={`
                  list-disc list-inside text-gray-700 dark:text-gray-300 mb-4
                  ${index % 2 === 0 ? 'md:text-left text-right' : 'md:text-right text-left'}
                `}>
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex} className="mb-2">{desc}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Experience Message */}
        {filteredExperience.length === 0 && (
          <div className="text-center py-12">
            <FaBriefcase className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300">
              No experiences found in the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;