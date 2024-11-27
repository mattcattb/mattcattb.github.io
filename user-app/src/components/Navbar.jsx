import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar({ links = [] }) {
  return (
    <AppBar 
      position="sticky" 
      color="primary" 
      className="h-[80px] flex justify-center" // Tailwind classes for height and vertical alignment
    >
      <Toolbar 
        className="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-center"
      >
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          color="inherit" 
          className="text-xl font-bold"
          sx={{
            textDecoration: 'none', // Remove the underline from the link
          }}
        >
          Matthew Boughton
        </Typography>
        
        <Box className="flex gap-20">
          {links.map(({ to, name }) => (
            <Typography 
              key={to} 
              component={Link} 
              to={to} 
              color="inherit" 
              className="text-base font-medium"
              sx={{
                textDecoration: 'none', // Remove the underline from the link
                cursor: 'pointer', // Make it feel like a clickable element
                '&:hover': {
                  textDecoration: 'underline', // Optional hover effect
                },
              }}
            >
              {name}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
