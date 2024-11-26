import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import '../styles/Blog.css';

export default function BlogPostCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className='blog-card-link'>
      <Card className='blog-card'>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
