// ExperienceView.js
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ExperienceView() {
  return (
    <Box className="flex flex-col items-center justify-center text-center min-h-[50vh] py-12 gap-16">
      <Typography variant="h2" component="h1" gutterBottom>
        Experiences
      </Typography>
      <Typography className="text-gray-600 max-w-[600px] text-base leading-relaxed mt-8">
        My collection of thoughts, updated when I find something else to sink my teeth into!
      </Typography>
    </Box>
  );
}