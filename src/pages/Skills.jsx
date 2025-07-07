import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaDatabase,
  FaPython,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDocker,
  FaAws,
  FaCalculator,
} from "react-icons/fa";

import { DiMongodb, DiPostgresql } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { SiExpress, SiKubernetes, SiHtml5 } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "Python", icon: <FaPython />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
        { name: "C#", icon: <TbBrandCSharp />, color: "text-green-500" },
        { name: "Java", icon: <FaJava />, color: "text-red-500" },
        { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
      ],
    },
    {
      name: "Web & Software Development",
      icon: <FaLaptopCode />,
      skills: [
        { name: "React", icon: <FaReact />, color: "text-blue-500" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-gray-500" },
      ],
    },
    {
      name: "Tools & Frameworks",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <FaGit />, color: "text-orange-500" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
        { name: "Kubernetes", icon: <SiKubernetes />, color: "text-blue-600" },
      ],
    },
    {
      name: "Databases & Cloud",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <DiMongodb />, color: "text-green-500" },
        { name: "PostgreSQL", icon: <DiPostgresql />, color: "text-blue-600" },
        { name: "MYSQL", icon: <FaAws />, color: "text-orange-500" },
      ],
    },
  ];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20 px-4">
      <div className="container mx-auto">
        {/* Page Header */}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Skills
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A detailed summary of my technical expertise spanning mechatronics,
            software development, and engineering, with a focus on modern
            technologies and full-stack development using the MERN stack.
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

                  ${
                    selectedCategory.name === category.name
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 hover:bg-blue-100"
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
            className="md:w-3/4 bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <span className="mr-4 text-3xl text-blue-600">
                {selectedCategory.icon}
              </span>

              {selectedCategory.name}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {selectedCategory.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  className="p-4 group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div
                      className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <div className="text-center">
                      <h3 className="font-medium text-gray-800 group-hover:text-gray-900">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-x-0 bottom-0 h-1 ${skill.color.replace(
                      "text",
                      "bg"
                    )} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg`}
                  />
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
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Certifications
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Advanced Robotics",

                issuer: "MIT xPRO",

                year: 2022,
              },

              {
                name: "Machine Learning",

                issuer: "Stanford Online",

                year: 2021,
              },

              {
                name: "Cloud Computing",

                issuer: "AWS Certification",

                year: 2022,
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {cert.name}
                </h3>

                <p className="text-gray-600 mb-1">{cert.issuer}</p>

                <span className="text-sm text-blue-600">{cert.year}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;
