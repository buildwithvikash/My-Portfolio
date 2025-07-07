import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Form validation state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // TODO: Implement actual form submission logic
      console.log("Form submitted", formData);

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Optional: Show success message
      alert("Message sent successfully!");
    }
  };

  // Social links
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vikash-kumar-46888319b/",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/buildwithvikash",
      color: "text-gray-800 hover:text-gray-700",
    },
  ];

  // Animation variants
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
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-16 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Me
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to
            discussing innovative technological solutions and exciting
            opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="mr-4 text-blue-600 text-2xl" />
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-800 hover:text-blue-600"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaPhone className="mr-4 text-blue-600 text-2xl" />
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-800 hover:text-blue-600"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-4 text-blue-600 text-2xl" />
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-800">San Francisco, CA, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Connect Online
              </h2>
              <div className="flex space-x-6 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      text-3xl ${social.color} 
                      transition-transform duration-300 
                      hover:scale-110
                    `}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Me a Message
              </h2>

              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-2 border rounded-lg 
                    focus:outline-none focus:ring-2 
                    ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }
                  `}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-2 border rounded-lg 
                    focus:outline-none focus:ring-2 
                    ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }
                  `}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Subject Input */}
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`
                    w-full px-4 py-2 border rounded-lg 
                    focus:outline-none focus:ring-2 
                    ${
                      errors.subject
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }
                  `}
                  placeholder="Enter the subject of your message"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`
                    w-full px-4 py-2 border rounded-lg 
                    focus:outline-none focus:ring-2 
                    ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }
                  `}
                  placeholder="Write your message here"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full bg-blue-600 text-white py-3 rounded-lg 
                  hover:bg-blue-700 transition-colors duration-300
                  flex items-center justify-center
                "
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
