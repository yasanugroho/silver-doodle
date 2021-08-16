import {ThemeProvider} from 'next-themes';
import type {AppProps} from 'next/app';
import React from 'react';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
