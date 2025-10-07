// src/components/Shop.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import InterestForm from './InterestForm';

const Shop = () => (
  <>
    <Helmet>
      <title>Shop Activate Supplement - Express Interest</title>
    </Helmet>
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Activate Your Order</h1>
        <p className="text-lg mb-8">Limited supply—sign up to lock in your spot and bundle deals.</p>
        <InterestForm />
      </div>
    </div>
  </>
);

export default Shop;