import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Typography, Box, Card, CardContent, CircularProgress } from '@mui/material';


export default function BlogPostView({ posts }) {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const post = posts.find((post) => post.id === id);

  useEffect(() => {
    if (post) {
      fetch(`/blog-posts/${post.file}`)
        .then((response) => response.text())
        .then((data) => {
          setMarkdown(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error loading markdown:', error);
          setLoading(false);
        });
    }
  }, [id, post]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-4 text-center">
        <h3 className="text-3xl font-semibold">{post.title}</h3>
        <p className="text-gray-600 text-lg">{post.date}</p>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

