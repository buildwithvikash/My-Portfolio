import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/yourusername",
      color: "text-gray-800 hover:text-gray-600",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/yourusername",
      color: "text-blue-600 hover:text-blue-800",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:your.email@example.com",
      color: "text-red-500 hover:text-red-700",
    },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Skills", path: "/skills" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <FaCode className="text-blue-600 text-3xl mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Vikash Kumar</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Mechatronics Engineer passionate about building innovative
            technological solutions that bridge hardware and software.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-2xl transition-colors duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Email:</strong> your.email@example.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>Location:</strong> Your City, Country
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link
            to="/privacy"
            className="text-gray-500 hover:text-blue-600 text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-gray-500 hover:text-blue-600 text-sm"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
