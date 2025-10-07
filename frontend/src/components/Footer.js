// src/components/Footer.js (Boosted with Social Links & Trust Badges)
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gradient-to-r from-red-50 to-yellow-50 py-8 border-t border-red-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex justify-center space-x-8 mb-4 md:mb-0">
          <Link to="/" className="transition hover:text-yellow-500 font-medium">Home</Link>
          <Link to="/shop" className="transition hover:text-yellow-500 font-medium">Shop</Link>
        </div>
        <div className="flex space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:text-red-500">Privacy</a>
          <a href="#" className="hover:text-red-500">Terms</a>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-4">&copy; 2025 Activate Supplement. Fuel Your Potential. No spam—ever.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="text-red-500 hover:text-red-700">📧 Newsletter</a>
        <a href="#" className="text-red-500 hover:text-red-700">🐦 Twitter</a>
        <a href="#" className="text-red-500 hover:text-red-700">📘 Facebook</a>
      </div>
    </div>
  </footer>
);

export default Footer;