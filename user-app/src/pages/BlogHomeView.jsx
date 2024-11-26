import React from 'react';
import { Box, Typography } from '@mui/material';
import BlogList from '../components/BlogList';

import '../styles/Blog.css';

export default function BlogHomeView({ posts }) {
  return (
    <Box className="blog-home">
      <Typography variant="h2" component="h1" gutterBottom>
        Blog
      </Typography>
      <Typography className='blog-home-text'>
        My collection of thoughts, updated when I find something else to sink my teeth into!
      </Typography>
      <BlogList posts={posts} />
    </Box>
  );
}
