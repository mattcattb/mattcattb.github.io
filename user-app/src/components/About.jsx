import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

import '../styles/About.css';

export default function About() {
  return (
    <Box className="about-container">
      <Avatar 
        src={"/mattypfp.jpeg"} 
        alt="Matthew Boughton" 
        sx={{ width: 120, height: 120, margin: 'auto', marginBottom: 2 }}
      />
      <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: 2 }}>
        About Me!
      </Typography>
      <Typography variant="body1">
        Hey! My name's Matthew. I'm a Computer Science student at the University of Florida who loves to get his hands dirty. 
        I'm constantly fascinated by the world around us and want to dive into any system I can find. You can follow my GitHub 
        to see what I'm working on, or read through my blog to see a deeper dive into what I'm doing!
      </Typography>
    </Box>
  );
}
