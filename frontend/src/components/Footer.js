// src/components/Footer.jsx (Classes updated)
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <p>&copy; 2025 Activate Supplement. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;