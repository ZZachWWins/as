// src/components/Home.js (Expanded: +FAQ Accordion for Trust/Engagement + Fixed Stagger)
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import InterestForm from './InterestForm';
import UrgencyBanner from './UrgencyBanner';
import CountdownTimer from './CountdownTimer';
import FAQ from './FAQ'; // New: Trust-building FAQ section

const Home = () => (
  <>
    <Helmet>
      <title>Activate Supplement - 3X Energy in 30 Days | Join 5K+ Waitlist</title>
      <meta name="description" content="Natural boosts for breath, flow, focus. Pre-launch: 20% off + exclusives. Limited spots—sign up now." />
    </Helmet>
    <Hero />
    <UrgencyBanner />
    <CountdownTimer />
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      className="py-16 bg-white"
      id="benefits"
    >
      <div className="max-w-7xl mx-auto px-4">
        <Benefits />
      </div>
    </motion.section>
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <Testimonials />
      </div>
    </motion.section>
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <FAQ />
      </div>
    </motion.section>
    <motion.section 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Ignite Your Transformation</h2>
        <p className="text-lg mb-8 max-w-lg mx-auto text-gray-600">Personalized alerts, VIP perks—join the revolution.</p>
        <InterestForm />
      </div>
    </motion.section>
  </>
);

export default Home;