// src/components/Home.js (Transformed into Conversion Powerhouse—Benefits, Testimonials, Urgency)
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import InterestForm from './InterestForm';
import UrgencyBanner from './UrgencyBanner';

const Home = () => (
  <>
    <Helmet>
      <title>Activate Supplement - Unlock Instant Energy Boosts | Join 5K+ Waitlist</title>
      <meta name="description" content="Instant boosts to breathing, blood flow, and brain power. Pre-launch access to Activate—sign up now for exclusive pricing and early drops." />
    </Helmet>
    <Hero />
    <UrgencyBanner />
    <Benefits />
    <Testimonials />
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Ready to Ignite Your Edge?</h2>
        <p className="text-lg mb-8 max-w-lg mx-auto text-gray-600">Join thousands who've activated their potential. Get launch alerts, VIP pricing, and first dibs.</p>
        <InterestForm />
      </div>
    </motion.section>
  </>
);

export default Home;