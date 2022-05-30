import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const LayoutPlain: React.FC<LayoutProps> = ({ children, customMeta }) => {
  return (
    <>
      <Head customMeta={customMeta} />
      {children}
    </>
  );
};

export default LayoutPlain;
