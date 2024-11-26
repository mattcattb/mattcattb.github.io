import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css'; // Import the CSS

export default function Navbar({ links = [] }) { 
  return (
    <AppBar position='sticky' color="primary" className="navbar">
      <Toolbar className="toolbar">
        {/* "Matthew Boughton" button on the left */}
        <Button 
          component={Link} 
          to='/' 
          color="inherit" 
          className="left-button"
        >
          Matthew Boughton
        </Button>
        
        {/* Container for the rest of the links, aligned to the right */}
        <Box className="right-container">
          {links.map(({ to, name }) => (
            <Button 
              key={to} 
              component={Link} 
              to={to} 
              color="inherit" 
              className="right-button"
            >
              {name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
