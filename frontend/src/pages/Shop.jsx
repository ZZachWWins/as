// src/pages/Shop.jsx (Full page now a big interest form with product showcase)
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import InterestForm from '../components/InterestForm';
import products from '../data/products';

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop - Activate Supplement</title>
        <meta name="description" content="Express interest in Activate and get personalized pricing/shipping info." />
      </Helmet>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Shop Activate</h1>
          <p className="text-center text-lg mb-8 max-w-2xl mx-auto">Our revolutionary supplement is launching soon. Fill out the form below to get first dibs, pricing, and exclusive offers.</p>
          <div className="product-grid mb-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <InterestForm />
        </div>
      </div>
    </>
  );
};

export default Shop;