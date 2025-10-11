// src/components/Header.js (Ultimate: Mobile Burger, Icon Nav, Scroll Parallax)
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { slide as Menu } from 'react-burger-menu'; // npm i react-burger-menu
import { FiHome, FiShoppingBag, FiUsers } from 'react-icons/fi'; // npm i react-icons

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: '-100%' },
    visible: { x: 0 },
    exit: { x: '-100%' },
  };

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
      style={{ transform: `translateY(${Math.max(0, window.scrollY * 0.1)}px)` }} // Subtle parallax
    >
      {/* Desktop Nav */}
      <nav className="max-w-7xl mx-auto px-4 py-4 hidden md:flex justify-between items-center">
        <Link to="/">
          <motion.img 
            src="https://res.cloudinary.com/deheojfkt/image/upload/Untitled_512_x_512_px_sdrcsv.png" 
            alt="Activate" 
            className="logo-image h-10 w-auto" 
            whileHover={{ scale: 1.05, rotate: 2 }} 
            transition={{ type: "spring", stiffness: 300 }} 
          />
        </Link>
        <div className="flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
              {item.to ? (
                <Link 
                  to={item.to} 
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    location.pathname === item.to ? 'font-bold text-red-500' : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ) : (
                <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <FiUsers className="text-xs" />
                  {item.label}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Menu
          isOpen={isOpen}
          onStateChange={(state) => setIsOpen(state.isOpen)}
          customBurgerIcon={<FiMenu className="text-2xl text-red-500" />}
          customCrossIcon={<FiX className="text-2xl text-red-500" />}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          burgerBarClassName="bg-red-500"
          burgerButtonClassName="ml-4"
          crossButtonClassName="ml-4"
          itemClassName="text-gray-700 hover:text-red-500 border-l-4 border-transparent hover:border-red-500 pl-4"
        >
          <AnimatePresence mode="wait">
            {navItems.map((item, i) => (
              <motion.div
                key={i}
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: i * 0.1 }}
                className="py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.to ? (
                  <Link 
                    to={item.to} 
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      location.pathname === item.to ? 'font-bold text-red-500' : 'text-gray-700 hover:text-red-500'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ) : (
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <FiUsers className="text-xs" />
                    {item.label}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </Menu>
      </div>

      {/* Page Wrap for Burger Menu */}
      <main id="page-wrap">
        {/* Content goes here – injected by router */}
      </main>
    </motion.header>
  );
};

export default Header;