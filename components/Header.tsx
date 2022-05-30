import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header>
      <div className="max-w-5xl px-2 md:px-8 mx-auto">
        <div className="flex items-center justify-between py-6">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
