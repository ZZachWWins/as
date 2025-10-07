// src/components/Footer.js (Xeriweb-Style: Dark Columns, Newsletter Card, Fade Social)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 via-red-900 to-yellow-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Column 1: Nav */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Navigate</h3>
          <Link to="/" className="block hover:text-yellow-300 transition-colors">Home</Link>
          <Link to="/shop" className="block hover:text-yellow-300 transition-colors">Shop</Link>
        </motion.div>
        {/* Column 2: Company */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Activate</h3>
          <p className="text-gray-300">Fuel your potential with instant energy boosts.</p>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms</a>
          </div>
        </motion.div>
        {/* Column 3: Newsletter */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Stay Activated</h3>
          <p className="text-gray-300 mb-4">Get launch alerts & exclusives.</p>
          <div className="flex">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:border-yellow-300" />
            <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-r-lg font-bold hover:from-red-600 hover:to-yellow-600 transition-all">Subscribe</button>
          </div>
        </motion.div>
      </div>
      {/* Social Row */}
      <div className="border-t border-gray-800 pt-8 flex justify-center space-x-6 mb-4">
        <motion.a href="mailto:hello@activatesupplement.com" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 hover:text-yellow-300 transition-colors">
          📧
        </motion.a>
        <motion.a href="https://twitter.com/activate_supplement" target="_blank" rel="noopener noreferrer" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.2 }} className="text-gray-400 hover:text-yellow-300 transition-colors">
          🐦
        </motion.a>
        <motion.a href="https://facebook.com/activate_supplement" target="_blank" rel="noopener noreferrer" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.3 }} className="text-gray-400 hover:text-yellow-300 transition-colors">
          📘
        </motion.a>
      </div>
      {/* Copyright */}
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4 }} 
        className="text-center text-gray-400 text-sm"
      >
        &copy; 2025 Activate Supplement. Fuel Your Potential. No spam—ever.
      </motion.p>
    </div>
  </footer>
);

export default Footer;