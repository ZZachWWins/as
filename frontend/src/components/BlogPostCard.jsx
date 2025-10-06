// src/components/BlogPostCard.jsx (New component for home/blog teasers)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPostCard = ({ post }) => {
  return (
    <motion.div
      className="blog-post"
      whileHover={{ y: -5 }}
    >
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="blog-post-content">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="btn">Read More</Link>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;