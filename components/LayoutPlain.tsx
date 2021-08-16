import React from 'react';
import {MetaProps} from '../types/layout';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const LayoutPlain: React.FC<LayoutProps> = ({children, customMeta}) => {
  return (
    <>
      <Head customMeta={customMeta} />
      {children}
    </>
  );
};

export default LayoutPlain;
