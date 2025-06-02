import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { path: "/skills", icon: <FaCode />, label: "Skills" },
    { path: "/experience", icon: <FaBriefcase />, label: "Experience" },
    { path: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  // Mobile menu variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Individual item variants
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-600 flex items-center"
            >
              <FaCode className="mr-2" />
              Vikash Kumar
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-600 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded-md flex items-center transition-colors duration-300"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-600 focus:outline-none cursor-pointer"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Framer Motion Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="flex flex-col h-full pt-16 px-6 space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    className="flex items-center text-xl text-gray-800 hover:text-blue-600 transition-colors duration-300 py-3"
                  >
                    {item.icon}
                    <span className="ml-4">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              <FaTimes className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
