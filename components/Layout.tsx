import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout: React.FC<LayoutProps> = ({ children, customMeta }) => {
  return (
    <>
      <Head customMeta={customMeta} />
      <Header />
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
