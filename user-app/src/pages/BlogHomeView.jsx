// BlogHomeView.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import BlogList from '../components/BlogList';

export default function BlogHomeView({ posts }) {
  return (
    <Box className="flex flex-col items-center justify-center text-center min-h-[50vh] py-12 gap-16">
      <Typography variant="h2" component="h1" gutterBottom>
        Blog
      </Typography>
      <Typography className="text-gray-600 max-w-[600px] text-base leading-relaxed mt-8">
        My collection of thoughts, updated when I find something else to sink my teeth into!
      </Typography>
      <BlogList posts={posts} />
    </Box>
  );
}