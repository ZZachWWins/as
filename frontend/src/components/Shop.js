// src/components/Shop.js (Product Grid + Ignite Hovers)
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import InterestForm from './InterestForm';
import UrgencyBanner from './UrgencyBanner';

const products = [
  { name: 'Activate Core', price: '$49 (20% off)', desc: 'Daily breath & flow boost', img: 'https://via.placeholder.com/300x200/red/white?text=Core+Bundle', loading: 'lazy' },
  { name: 'Focus Igniter', price: '$59', desc: 'Mind-sharp precision pack', img: 'https://via.placeholder.com/300x200/yellow/black?text=Focus+Pack', loading: 'lazy' },
  { name: 'Recovery Surge', price: '$69/bundle', desc: 'Post-workout revival', img: 'https://via.placeholder.com/300x200/orange/white?text=Recovery+Bundle', loading: 'lazy' },
];

const Shop = () => (
  <>
    <Helmet>
      <title>Shop Activate Supplement - Pre-Launch Waitlist | Exclusive Deals</title>
      <meta name="description" content="Secure your Activate bundle before launch. Limited spots—express interest for launch pricing and bonuses." />
      <link rel="preload" href={products[0].img} as="image" />
    </Helmet>
    <div className="py-16 bg-gray-50">
      <UrgencyBanner />
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-4xl font-bold mb-8 text-gray-800 text-center"
        >
          Fuel Your Edge – Pre-Launch Drops
        </motion.h1>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 stagger-children" whileInView={{ className: 'stagger-children animate' }} viewport={{ once: true }}>
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, rotate: 2 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-red-50/50"
              role="article"
              aria-label={`Shop ${product.name}`}
            >
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover" loading={product.loading} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <p className="text-2xl font-bold text-red-500 mb-4">{product.price}</p>
                <Link to="/" className="btn w-full text-sm">Ignite My Cart 🔥</Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Ready to Activate?</h2>
          <p className="text-lg mb-8 max-w-lg mx-auto text-gray-600">Be first in line for our energy revolution. Sign up to lock in deals and avoid missing out.</p>
          <InterestForm />
        </div>
      </div>
    </div>
  </>
);

export default Shop;