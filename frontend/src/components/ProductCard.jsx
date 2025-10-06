// src/components/ProductCard.jsx (Update button to open modal or link to form)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      className="product-card"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="product-card-content">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="price">${product.price}</span>
        </div>
        <Link to="/shop" className="w-full block text-center btn">Get Started</Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;