// src/pages/Home.jsx (Add interest teaser with form)
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import BlogPostCard from '../components/BlogPostCard';
import InterestForm from '../components/InterestForm';
import products from '../data/products';
import blogPosts from '../data/blogPosts';

const Home = () => {
  const featuredProduct = products[0];
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Home - Activate Supplement</title>
      </Helmet>
      <Hero />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured: Activate</h2>
          <div className="grid place-items-center mb-8">
            <ProductCard product={featuredProduct} />
          </div>
          <div className="text-center">
            <p className="text-lg mb-4">Ready to activate? Tell us more!</p>
            <InterestForm />
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-16 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <div className="blog-grid">
            {latestPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;