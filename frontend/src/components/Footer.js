// src/components/Footer.js (Modern Sleek: Light Theme, Gradient Circles, Frosted Glass, Form Glow)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiTwitter, FiFacebook, FiHome, FiShoppingBag, FiShield, FiFileText, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data),
    }).then(() => reset());
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
      className="relative bg-white/95 backdrop-blur-md text-gray-800 py-16 border-t border-red-100 shadow-lg"
      variants={columnVariants}
      animate="visible"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-yellow-500 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 justify-items-center">
          <motion.div variants={columnVariants} className="space-y-6 text-center lg:text-left">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight flex items-center justify-center lg:justify-start gap-2 mb-4">
              <FiHome className="text-red-500" /> Navigate
            </motion.h3>
            <nav className="space-y-3">
              <motion.div variants={itemVariants}>
                <Link to="/" className="block btn-outline text-gray-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 group rounded-full bg-white/20 backdrop-blur-md p-2" style={{ textDecoration: 'none' }}>
                  <FiHome className="text-lg opacity-70 group-hover:opacity-100" /> Home
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link to="/shop" className="block btn-outline text-gray-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 group rounded-full bg-white/20 backdrop-blur-md p-2" style={{ textDecoration: 'none' }}>
                  <FiShoppingBag className="text-lg opacity-70 group-hover:opacity-100" /> Shop
                </Link>
              </motion.div>
            </nav>
          </motion.div>

          <motion.div variants={columnVariants} className="space-y-6 text-center lg:text-left">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight flex items-center justify-center lg:justify-start gap-2 mb-4">
              <FiShield className="text-yellow-500" /> Activate
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed max-w-xs">
              Fuel your potential with science-backed energy boosts that last.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm justify-center lg:justify-start">
              <a href="/privacy-policy" className="btn-outline text-gray-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center lg:justify-start gap-1 group rounded-full bg-white/20 backdrop-blur-md p-2" style={{ textDecoration: 'none' }}>
                <FiShield className="text-lg" /> Privacy
              </a>
              <a href="/terms-of-service" className="btn-outline text-gray-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center lg:justify-start gap-1 group rounded-full bg-white/20 backdrop-blur-md p-2" style={{ textDecoration: 'none' }}>
                <FiFileText className="text-lg" /> Terms
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={columnVariants} className="space-y-6 text-center">
            <motion.h3 variants={itemVariants} className="text-2xl font-bold tracking-tight flex items-center justify-center gap-2 mb-4">
              <FiMail className="text-red-500" /> Stay Activated
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed max-w-xs mb-4">
              Launch alerts and exclusives straight to your inbox.
            </motion.p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                {...register('email', { required: 'Email is required' })}
                className={`flex-1 px-4 py-3 rounded-full border border-gray-300 text-gray-800 placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all duration-300 text-sm ${
                  errors.email ? 'border-red-500 shake' : ''
                }`} 
              />
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-btn px-6 py-3 font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-1 text-white text-sm"
              >
                Join <FiArrowRight className="text-xs" />
              </motion.button>
            </form>
            {errors.email && <p className="text-red-500 text-xs mt-1 text-center">Please enter a valid email.</p>}
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="rounded-full bg-white/20 backdrop-blur-md p-3 border-2 border-transparent hover:border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)] transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="mailto:hello@activatesupplement.com" 
                className="btn-outline text-gray-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center text-2xl" style={{ textDecoration: 'none' }}
              >
                <FiMail />
              </a>
            </motion.div>
            <motion.div 
              className="rounded-full bg-white/20 backdrop-blur-md p-3 border-2 border-transparent hover:border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)] transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://twitter.com/activate_supplement" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline text-gray-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center text-2xl" style={{ textDecoration: 'none' }}
              >
                <FiTwitter />
              </a>
            </motion.div>
            <motion.div 
              className="rounded-full bg-white/20 backdrop-blur-md p-3 border-2 border-transparent hover:border-[linear-gradient(90deg,#ff0000,#ffaa00,#00aaff)] transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://facebook.com/activate_supplement" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline text-gray-600 hover:text-red-500 transition-all duration-300 flex items-center justify-center text-2xl" style={{ textDecoration: 'none' }}
              >
                <FiFacebook />
              </a>
            </motion.div>
          </motion.div>
        </div>

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