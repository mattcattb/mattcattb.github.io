// BlogHomeView.js
import React from 'react';
import {Grid2, Box, Typography } from '@mui/material';
import BlogPostCard from '../components/BlogPostCard'; // Import BlogPostCard component

export default function BlogHomeView({ posts }) {
  return (
    <Box className="flex flex-col items-center justify-center text-center min-h-[50vh] py-12 gap-16">
      <Typography variant="h2" component="h1" gutterBottom>
        Blog
      </Typography>
      <Typography className="text-gray-600 max-w-[600px] text-base leading-relaxed mt-8">
        My collection of thoughts, updated when I find something else to sink my teeth into!
      </Typography>

      <Grid2 
        container 
        spacing={3} 
        justifyContent="center" 
        alignItems="flex-start" 
        className="max-w-screen-xl mx-auto"
      >
        {posts.map((post, index) => (
          <Grid2 item key={index} xs={12} sm={6} md={4}>
            <BlogPostCard post={post} />
          </Grid2>
        ))}
      </Grid2>

    </Box>
  );
}