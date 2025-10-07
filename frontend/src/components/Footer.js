// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center space-x-8 mb-4">
        <Link to="/" className="transition hover:text-yellow-400">Home</Link>
        <Link to="/shop" className="transition hover:text-yellow-400">Shop</Link>
      </div>
      <p>&copy; 2025 Activate Supplement. Fuel Your Potential.</p>
    </div>
  </footer>
);

export default Footer;