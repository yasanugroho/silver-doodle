import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import LocaleSwitcher from './LocaleSwitcher';

const Navigation: React.FC = () => {
  const router = useRouter();
  const isPosts = router.pathname.split('/')[2] === '[slug]';

  return (
    <nav>
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>

      {/* Hide language switcher in posts */}
      {!isPosts && <LocaleSwitcher />}
    </nav>
  );
};

export default Navigation;
