// src/components/Header.js (Cloudinary Logo: Fiery Transparent PNG)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-red-100"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.img 
              src="https://res.cloudinary.com/deheojfkt/image/upload/Untitled_512_x_512_px_sdrcsv.png" 
              alt="Activate" 
              className="logo-image" 
              whileHover={{ scale: 1.05, rotate: 2 }} 
              transition={{ type: "spring", stiffness: 300 }} 
            />
          </Link>
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition ${location.pathname === '/' ? 'font-bold text-red-500' : 'text-gray-700 hover:text-red-500'}`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`transition ${location.pathname === '/shop' ? 'font-bold text-red-500' : 'text-gray-700 hover:text-red-500'}`}
            >
              Shop
            </Link>
            <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              5,000+ Activated
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;