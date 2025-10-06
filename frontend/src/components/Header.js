// src/components/Header.jsx (Classes updated)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { totalItems } = useCart();
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
    { to: '/cart', label: 'Cart', badge: totalItems > 0 ? totalItems : null },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="header"
    >
      <nav className="nav">
        <div className="nav-content">
          <Link to="/" className="logo">Activate</Link>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`${location.pathname === item.to ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="cart-badge">{item.badge}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;