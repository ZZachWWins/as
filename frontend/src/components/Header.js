// src/components/Header.js (Modern Pop: Gradient Badge, Icon Hovers, Responsive Wrap)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiShoppingBag, FiUsers } from 'react-icons/fi';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: <FiHome />, label: 'Home' },
    { to: '/shop', icon: <FiShoppingBag />, label: 'Shop' },
    { label: '5,000+ Activated', badge: true },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-red-100"
      style={{ transform: `translateY(${Math.max(0, window.scrollY * 0.1)}px)` }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0">
        <Link to="/" className="flex-shrink-0">
          <motion.img 
            src="https://res.cloudinary.com/deheojfkt/image/upload/Untitled_512_x_512_px_sdrcsv.png" 
            alt="Activate" 
            className="logo-image h-10 w-auto" 
            whileHover={{ scale: 1.05, rotate: 2 }} 
            transition={{ type: "spring", stiffness: 300 }} 
          />
        </Link>
        <div className="flex flex-wrap justify-center md:justify-start items-center space-x-0 md:space-x-8 space-y-2 md:space-y-0 gap-2 md:gap-8">
          {navItems.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
              {item.to ? (
                <Link 
                  to={item.to} 
                  className={`relative flex items-center gap-2 transition-all duration-300 text-sm md:text-base ${
                    location.pathname === item.to ? 'font-bold text-red-500' : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ) : (
                <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold flex items-center gap-1 shadow-lg">
                  <FiUsers className="text-xs" />
                  {item.label}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;