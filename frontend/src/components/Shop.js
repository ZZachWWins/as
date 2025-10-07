// src/components/Shop.js (Mirrored Enhancements for Consistency)
import React from 'react';
import { Helmet } from 'react-helmet-async';
import InterestForm from './InterestForm';
import UrgencyBanner from './UrgencyBanner';

const Shop = () => (
  <>
    <Helmet>
      <title>Shop Activate Supplement - Pre-Launch Waitlist | Exclusive Deals</title>
      <meta name="description" content="Secure your Activate bundle before launch. Limited spots—express interest for launch pricing and bonuses." />
    </Helmet>
    <div className="py-16 bg-gray-50">
      <UrgencyBanner />
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Activate Your Order Now</h1>
        <p className="text-lg mb-8 max-w-lg mx-auto text-gray-600">Be first in line for our energy revolution. Sign up to lock in deals and avoid missing out.</p>
        <InterestForm />
      </div>
    </div>
  </>
);

export default Shop;