import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  // Project categories
  const categories = [
    "All",
    "Robotics",
    "Software",
    "Embedded Systems",
    "Machine Learning",
  ];

  // Project data
  const projectsData = [
    {
      id: 1,
      title: "Autonomous Robotic Arm",
      description:
        "Advanced robotic arm with machine learning capabilities for precise object manipulation.",
      image: "",
      categories: ["Robotics", "Machine Learning"],
      technologies: ["Python", "ROS", "TensorFlow", "OpenCV"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 2,
      title: "Smart Home Automation System",
      description:
        "IoT-based home automation system with real-time monitoring and control.",
      image: "",
      categories: ["Embedded Systems", "Software"],
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "React"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 3,
      title: "Gesture-Controlled Drone",
      description:
        "Drone controlled through hand gestures using computer vision.",
      image: "",
      categories: ["Robotics", "Machine Learning"],
      technologies: ["Python", "OpenCV", "Drone SDK"],
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 4,
      title: "Industrial IoT Monitoring Platform",
      description:
        "Comprehensive IoT solution for industrial equipment monitoring and predictive maintenance.",
      image: "",
      categories: ["Embedded Systems", "Software"],
      technologies: ["Node.js", "React", "Docker", "Kubernetes"],
      githubLink: "#",
      liveLink: "#",
    },
  ];

  // State for filtering projects
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on category and search term
  const filteredProjects = projectsData.filter(
    (project) =>
      (selectedCategory === "All" ||
        project.categories.includes(selectedCategory)) &&
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const projectVariants = {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-16 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of innovative projects that demonstrate my skills in
            mechatronics, robotics, and software development.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm transition-colors duration-300
                  ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-full w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FaCode className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
