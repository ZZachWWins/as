// src/components/Home.js (Symphonic Polish: Variants Orchestra, Icon Headers, Infinite Scroll Delight - Fixed ESLint)
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaFire, FaChartLine, FaQuestionCircle, FaRocket } from 'react-icons/fa';
import Hero from './Hero';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import InterestForm from './InterestForm';
import UrgencyBanner from './UrgencyBanner';
import CountdownTimer from './CountdownTimer';
import FAQ from './FAQ';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  hover: { scale: 1.02 },
};

const childVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

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
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-gradient-to-b from-white to-red-50"
      id="benefits"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          variants={childVariants}
          className="text-5xl font-bold mb-12 text-gray-800 flex items-center justify-center gap-3"
        >
          <FaFire className="text-4xl text-red-500 animate-pulse" /> Activate Transforms Your Day
        </motion.h2>
        <Benefits />
      </div>
    </motion.section>
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          variants={childVariants}
          className="text-5xl font-bold mb-12 text-gray-800 flex items-center justify-center gap-3"
        >
          <FaChartLine className="text-4xl text-yellow-500" /> What Early Testers Are Saying
        </motion.h2>
        <Testimonials />
      </div>
    </motion.section>
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-gradient-to-b from-white to-red-50"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          variants={childVariants}
          className="text-5xl font-bold mb-12 text-gray-800 flex items-center justify-center gap-3"
        >
          <FaQuestionCircle className="text-4xl text-red-500" /> Frequently Asked Questions
        </motion.h2>
        <FAQ />
      </div>
    </motion.section>
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2 
          variants={childVariants}
          className="text-5xl font-bold mb-8 text-gray-800 flex items-center justify-center gap-3"
        >
          <FaRocket className="text-4xl text-yellow-500 animate-bounce" /> Ignite Your Transformation
        </motion.h2>
        <motion.p 
          variants={childVariants}
          className="text-xl mb-12 max-w-2xl mx-auto text-gray-600 leading-relaxed"
        >
          Personalized alerts, VIP perks—join the revolution.
        </motion.p>
        <InterestForm />
      </div>
    </motion.section>
  </>
);

export default Home;