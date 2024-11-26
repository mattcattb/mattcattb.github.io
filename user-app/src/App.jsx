import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { links, routes } from './routesConfig';

import blogPosts from './content/blogPosts.json';

const theme = createTheme({

  palette: {
    primary: {
      main: '#1976d2', // Customize primary color
    },
    secondary: {
      main: '#f50057', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Change global font
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h5: { fontSize: '1.5rem', fontWeight: 700 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.0 },

  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar links={links} />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={React.cloneElement(element, { blogPosts })} />
          ))}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
