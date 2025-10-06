// src/pages/Blog.jsx (Classes updated)
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BlogPost from '../components/BlogPost';
import BlogPostCard from '../components/BlogPostCard';
import blogPosts from '../data/blogPosts';

const Blog = () => {
  const { slug } = useParams();

  if (slug) {
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return <div className="py-16 text-center">Post not found</div>;
    return (
      <div className="py-16 max-w-4xl mx-auto px-4">
        <Helmet>
          <title>{post.title} - Activate Supplement</title>
        </Helmet>
        <Link to="/blog" className="back-link">&larr; Back to Blog</Link>
        <BlogPost post={post} />
      </div>
    );
  }

  return (
    <div className="py-16">
      <Helmet>
        <title>Blog - Activate Supplement</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;