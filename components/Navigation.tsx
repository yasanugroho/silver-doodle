import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import LocaleSwitcher from './LocaleSwitcher';

const Navigation: React.FC = () => {
  const router = useRouter();
  const isPosts = router.pathname.split('/')[2] === '[slug]';

  return (
    <nav className="flex flex-1 justify-center items-center">
      <div className="font-bold mr-10">
        Xerpihan
      </div>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
      <Link href="/blog">
        <a className="text-gray-900 dark:text-white px-6 py-4">Blog</a>
      </Link>
      <div className="flex-1"></div>

      {/* Hide language switcher in posts */}
      <div className="mr-5">
        {!isPosts && <LocaleSwitcher />}
      </div>
    </nav>
  );
};

export default Navigation;
