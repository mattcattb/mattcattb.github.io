import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

export default function Navbar({ links = [] }) { 
  return (
    <AppBar position='sticky' color="primary">
      <Toolbar>
      {links.map(({ to, name }) => (
          <Button 
            key={to} 
            component={Link} 
            to={to} 
            color="inherit" 
            sx={{ marginRight: 2 }}
          >
            {name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
