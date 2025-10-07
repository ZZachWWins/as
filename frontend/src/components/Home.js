// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import InterestForm from './InterestForm';

const Home = () => (
  <>
    <Helmet>
      <title>Activate Supplement - Sign Up Now</title>
    </Helmet>
    <Hero />
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Activate?</h2>
        <p className="text-lg mb-8 max-w-lg mx-auto">Express interest below—get launch pricing and exclusive access.</p>
        <InterestForm />
      </div>
    </motion.section>
  </>
);

export default Home;