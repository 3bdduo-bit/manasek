'use client';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../theme';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin as any],
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
