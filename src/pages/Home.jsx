import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRobot, FaCode, FaCogs, FaDownload } from "react-icons/fa";
import { assets } from "../assets/assets";

const Home = () => {
  // Hero section animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Skills section animation variants
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const skillItemVariants = {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="container mx-auto px-4 pt-24 md:pt-36 flex flex-col md:flex-row items-center justify-center"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Mechatronics Engineer
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Bridging the gap between mechanical engineering, electronics, and
            software to create innovative technological solutions.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" />
              Download CV
            </motion.a>
            <motion.button
              className="flex items-center bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">Contact Me</Link>
            </motion.button>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-80 h-80 bg-blue-100 rounded-full flex items-center justify-center shadow-lg"
          >
            <img src={assets.Profile} alt="Profile-img" className="object-cover rounded-full"/>
          </motion.div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={skillVariants}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Core Competencies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRobot />,
              title: "Robotics",
              description: "Designing and developing advanced robotic systems",
            },
            {
              icon: <FaCode />,
              title: "Software",
              description: "Proficient in programming and software development",
            },
            {
              icon: <FaCogs />,
              title: "Mechanical Design",
              description:
                "Creating innovative mechanical engineering solutions",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={skillItemVariants}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl text-blue-600 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Project {project}
                </h3>
                <p className="text-gray-600">
                  Brief description of the project
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
