// src/components/Footer.js (Symphonic: Hook-Form Newsletter, Icon Grid, Infinite Reveal - Fixed Imports)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form'; // npm i react-hook-form
import { FiMail, FiTwitter, FiFacebook, FiHome, FiShoppingBag, FiShield, FiFileText, FiArrowRight } from 'react-icons/fi'; // npm i react-icons

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    // Netlify form handling – submit to / (data-netlify="true")
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data),
    }).then(() => {
      reset();
      // Optional: Trigger success animation
    });
  };

  const columnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16 overflow-hidden"
      variants={columnVariants}
      animate="visible"
    >
      {/* Animated BG Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-yellow-500 to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Navigation */}
          <motion.div variants={columnVariants} className="space-y-6">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold tracking-tight flex items-center gap-2"
            >
              <FiHome className="text-red-500" /> Navigate
            </motion.h3>
            <nav className="space-y-3">
              <motion.div variants={itemVariants}>
                <Link to="/" className="block text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <FiHome className="text-sm opacity-70" /> Home
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link to="/shop" className="block text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2">
                  <FiShoppingBag className="text-sm opacity-70" /> Shop
                </Link>
              </motion.div>
            </nav>
          </motion.div>

          {/* Column 2: Company Info */}
          <motion.div variants={columnVariants} className="space-y-6">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold tracking-tight flex items-center gap-2"
            >
              <FiShield className="text-yellow-500" /> Activate
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 leading-relaxed max-w-xs"
            >
              Fuel your potential with science-backed energy boosts that last.
            </motion.p>
            <motion.div variants={itemVariants} className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1">
                <FiShield className="text-xs" /> Privacy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1">
                <FiFileText className="text-xs" /> Terms
              </a>
            </motion.div>
          </motion.div>

          {/* Column 3: Newsletter */}
          <motion.div variants={columnVariants} className="space-y-6">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold tracking-tight flex items-center gap-2"
            >
              <FiMail className="text-red-500" /> Stay Activated
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 leading-relaxed max-w-xs"
            >
              Launch alerts and exclusives straight to your inbox.
            </motion.p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                {...register('email', { required: 'Email is required' })}
                className={`flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all duration-300 text-sm ${
                  errors.email ? 'border-red-500 shake' : ''
                }`} 
              />
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full font-semibold hover:from-red-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-1"
              >
                Join <FiArrowRight className="text-xs" />
              </motion.button>
            </form>
            {errors.email && <p className="text-red-400 text-xs mt-1">Please enter a valid email.</p>}
          </motion.div>
        </div>

        {/* Social Grid */}
        <div className="border-t border-gray-700 pt-8">
          <motion.div 
            className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="mailto:hello@activatesupplement.com" 
              className="text-gray-400 hover:text-red-500 transition-all duration-300 text-3xl flex justify-center items-center rounded-lg p-3 bg-gray-800 hover:bg-red-500/10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
            </motion.a>
            <motion.a 
              href="https://twitter.com/activate_supplement" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-red-500 transition-all duration-300 text-3xl flex justify-center items-center rounded-lg p-3 bg-gray-800 hover:bg-red-500/10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiTwitter />
            </motion.a>
            <motion.a 
              href="https://facebook.com/activate_supplement" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-red-500 transition-all duration-300 text-3xl flex justify-center items-center rounded-lg p-3 bg-gray-800 hover:bg-red-500/10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiFacebook />
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-gray-500 text-sm tracking-wide"
        >
          &copy; 2025 Activate Supplement. Fuel Your Potential. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;