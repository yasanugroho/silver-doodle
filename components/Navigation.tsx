import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useLocale, _ } from '../lib/i18n';
import LocaleSwitcher from './LocaleSwitcher';

import { xerpihanLogoWhite, xerpihanLogoBlack } from '../lib/images';
import Image from 'next/image';

const Navigation: React.FC = () => {
  const router = useRouter();
  const l = useLocale();
  const isPosts = router.pathname.split('/')[2] === '[slug]';

  return (
    <nav className="flex flex-1 justify-center items-center">
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4 font-bold flex justify-center items-center">
          <div className="flex dark:hidden justify-center items-center">
            <Image src={xerpihanLogoBlack} alt="Xerpihan Logo" height={37} width={125} objectFit="contain" />
          </div>
          <div className="hidden dark:flex justify-center items-center">
            <Image
              className="light"
              src={xerpihanLogoWhite}
              alt="Xerpihan Logo"
              height={37}
              width={125}
              objectFit="contain"
            />
          </div>
        </a>
      </Link>
      <Link href="/for-corporates">
        <a className="text-gray-900 dark:text-white px-6 py-4">{_(l, 'Untuk Korporat', 'For Corporates')}</a>
      </Link>
      <Link href="/for-individuals">
        <a className="text-gray-900 dark:text-white px-6 py-4">{_(l, 'Untuk Individual', 'For Individuals')}</a>
      </Link>
      <Link href="/case-studies">
        <a className="text-gray-900 dark:text-white px-6 py-4">{_(l, 'Studi Kasus', 'Case Studies')}</a>
      </Link>
      <Link href="/blog">
        <a className="text-gray-900 dark:text-white px-6 py-4">Blog</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">{_(l, 'Tentang', 'About')}</a>
      </Link>
      <div className="flex-1"></div>

      {/* Hide language switcher in posts */}
      <div className="mr-5">{!isPosts && <LocaleSwitcher />}</div>
    </nav>
  );
};

export default Navigation;
