import React from 'react';
import {MetaProps} from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="max-w-5xl px-8 mx-auto">Made with ❤️ by Xerpihan</div>
    </footer>
  );
};

export default Footer;
