import React from 'react';
import { Grid2, Box } from '@mui/material';
import BlogPostCard from './BlogPostCard'; // Import BlogPostCard component

import '../styles/Blog.css'

export default function BlogList({ posts }) {
  return (
    <Box sx={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 2,
      padding: 3 
      }}>
      <Grid2 container spacing={3} justifyContent={'center'}>
        {posts.map((post, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <BlogPostCard post={post} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}