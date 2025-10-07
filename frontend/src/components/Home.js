// src/components/Home.js (Ultimate 2025 Flow: Timer Urgency + UGC Proof + Personalized CTA)
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import InterestForm from './InterestForm';
import UrgencyBanner from './UrgencyBanner';
import CountdownTimer from './CountdownTimer'; // New: Live launch countdown

const Home = () => (
  <>
    <Helmet>
      <title>Activate Supplement - 3X Energy in 30 Days | Join 5K+ Waitlist</title>
      <meta name="description" content="Natural boosts for breath, flow, focus. Pre-launch: 20% off + exclusives. Limited spots—sign up now." />
    </Helmet>
    <Hero />
    <UrgencyBanner />
    <CountdownTimer /> {/* New: Ticking FOMO – edits to Nov 1 launch */}
    <Benefits />
    <Testimonials />
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