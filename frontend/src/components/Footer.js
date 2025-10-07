// src/components/Footer.js (Xeriweb Refined: Deep Gradient, Clean Columns, Inline Newsletter)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-slate-800 text-white py-16 relative">
    <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div> {/* Subtle accent line */}
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Navigation – Clean Links */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold tracking-tight">Navigate</h3>
          <nav className="space-y-3">
            <Link to="/" className="block text-gray-300 hover:text-white transition-colors duration-200 ease-out">Home</Link>
            <Link to="/shop" className="block text-gray-300 hover:text-white transition-colors duration-200 ease-out">Shop</Link>
          </nav>
        </motion.div>
        {/* Column 2: Company Info – Minimal Text */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold tracking-tight">Activate</h3>
          <p className="text-gray-400 leading-relaxed max-w-xs">Fuel your potential with science-backed energy boosts that last.</p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200">Terms</a>
          </div>
        </motion.div>
        {/* Column 3: Newsletter – Inline, Refined Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold tracking-tight">Stay Activated</h3>
          <p className="text-gray-400 leading-relaxed max-w-xs">Launch alerts and exclusives straight to your inbox.</p>
          <form className="flex space-x-2">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-all duration-200 text-sm" 
            />
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full font-semibold hover:from-red-600 hover:to-yellow-600 transition-all duration-200 shadow-lg hover:shadow-xl">Join</button>
          </form>
        </motion.div>
      </div>
      {/* Social Row – Horizontal, Scaled Icons */}
      <div className="border-t border-gray-700 pt-8 flex justify-center space-x-8 mb-8">
        <motion.a 
          href="mailto:hello@activatesupplement.com" 
          className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-2xl hover:scale-110"
          whileHover={{ scale: 1.1 }}
        >
          📧
        </motion.a>
        <motion.a 
          href="https://twitter.com/activate_supplement" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-2xl hover:scale-110"
          whileHover={{ scale: 1.1 }}
        >
          🐦
        </motion.a>
        <motion.a 
          href="https://facebook.com/activate_supplement" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-2xl hover:scale-110"
          whileHover={{ scale: 1.1 }}
        >
          📘
        </motion.a>
      </div>
      {/* Copyright – Centered, Faded */}
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="text-center text-gray-500 text-sm tracking-wide"
      >
        &copy; 2025 Activate Supplement. Fuel Your Potential. All rights reserved.
      </motion.p>
    </div>
  </footer>
);

export default Footer;