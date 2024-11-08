import React from 'react';
import { motion } from 'framer-motion';
import './ContactUs.css'; // Importing custom CSS for cloud shape

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <motion.div
        className="cloud-bg relative p-8 shadow-lg max-w-md text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Need Help? We’re Here for You!
        </h1>
        <p className="text-gray-600 mb-6">
          If you have any questions or need assistance, feel free to reach out to us. 
          We’re committed to providing you with the best support possible!
        </p>
        <motion.div
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <a href="mailto:shobhitranjan07@gmail.com">Email Us: shobhitranjan07@gmail.com</a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
