'use client';
import { createTheme } from '@mui/material/styles';
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  weight: ['300', '400', '500', '700'],
  subsets: ['arabic', 'latin'],
  display: 'swap',
});

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: cairo.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#0a6c60', // Manasek signature green
      light: '#14a18f',
      dark: '#06423a',
    },
    secondary: {
      main: '#eab308', // Gold/Yellow
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
});

export default theme;
