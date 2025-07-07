import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaCodepen,
} from "react-icons/fa";

const FloatingSocialBar = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/buildwithvikash",
      color: "bg-gray-800 text-white",
      hoverColor: "hover:bg-gray-700",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/vikash-kumar-46888319b/",
      color: "bg-blue-600 text-white",
      hoverColor: "hover:bg-blue-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50"
    >
      <div className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-full px-2 py-4 flex flex-col items-center space-y-4 border border-gray-200">
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${social.color} ${social.hoverColor}
              w-10 h-10 rounded-full flex items-center justify-center 
              transition-all duration-300 ease-in-out
              transform hover:scale-110 hover:rotate-6
            `}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
              },
            }}
          >
            {React.cloneElement(social.icon, {
              className: "w-5 h-5",
            })}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingSocialBar;
