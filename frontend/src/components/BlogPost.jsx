// src/components/BlogPost.jsx (Unchanged)
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost = ({ post }) => {
  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default BlogPost;