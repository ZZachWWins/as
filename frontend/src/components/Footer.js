// src/components/Footer.js (Fixed ESLint a11y: Valid hrefs for Privacy/Terms/Social)
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
          <a href="/privacy-policy" className="hover:text-red-500">Privacy</a>
          <a href="/terms-of-service" className="hover:text-red-500">Terms</a>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-4">&copy; 2025 Activate Supplement. Fuel Your Potential. No spam—ever.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="mailto:hello@activatesupplement.com" className="text-red-500 hover:text-red-700">📧 Newsletter</a>
        <a href="https://twitter.com/activate_supplement" className="text-red-500 hover:text-red-700" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
        <a href="https://facebook.com/activate_supplement" className="text-red-500 hover:text-red-700" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
      </div>
    </div>
  </footer>
);

export default Footer;