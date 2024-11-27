const { createTheme } = require('@mui/material/styles');

// Import MUI theme
const muiTheme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#f50057' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h5: { fontSize: '1.5rem', fontWeight: 700 },
    body1: { lineHeight: 1.6 },
    body2: { lineHeight: 1.0 },
  },
});

// Tailwind config
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths to your files
  ],
  theme: {
    extend: {
      colors: {
        primary: muiTheme.palette.primary.main,
        secondary: muiTheme.palette.secondary.main,
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        h1: muiTheme.typography.h1.fontSize,
        h5: muiTheme.typography.h5.fontSize,
      },
    },
  },
  plugins: [],
};
