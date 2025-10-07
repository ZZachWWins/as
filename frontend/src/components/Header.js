// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.img src="/logo.png" alt="Activate" className="logo-image" whileHover={{ scale: 1.05, rotate: 2 }} transition={{ type: "spring", stiffness: 300 }} />
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className={location.pathname === '/' ? 'font-bold text-red-500' : 'transition text-gray-700 hover:text-red-500'}>Home</Link>
            <Link to="/shop" className={location.pathname === '/shop' ? 'font-bold text-red-500' : 'transition text-gray-700 hover:text-red-500'}>Shop</Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;