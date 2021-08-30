import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { L, useLocale, _ } from '../lib/i18n';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeSwitch from './ThemeSwitch';

import { xerpihanLogoWhite, xerpihanLogoBlack } from '../lib/images';
import Image from 'next/image';

const Navigation: React.FC = () => {
  const router = useRouter();
  const l = useLocale();
  const isPosts = router.pathname.split('/')[2] === '[slug]';

  const mainLogo = (
    <Link href="/">
      <a
        className="text-gray-900 dark:text-white pr-6 py-4 font-bold flex justify-center items-center"
        style={{ minWidth: 95 }}>
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
  );

  const menu = (
    <>
      <Link href="/for-corporates">
        <a
          className={
            router.pathname == '/for-corporates'
              ? 'active:text-xerpihan-primary-500 dark:text-white px-2 md:px-3 py-2'
              : 'text-gray-900 dark:text-white px-2 md:px-3 py-2'
          }>
          {_(l, 'Untuk Korporat', 'For Corporates')}
        </a>
      </Link>
      <Link href="/for-individuals">
        <a
          className={
            router.pathname == '/for-individuals'
              ? 'active:text-xerpihan-primary-500 dark:text-white px-2 md:px-3 py-2'
              : 'text-gray-900 dark:text-white px-2 md:px-3 py-2'
          }>
          {_(l, 'Untuk Individual', 'For Individuals')}
        </a>
      </Link>
      <Link href="/case-studies">
        <a
          className={
            router.pathname == '/case-studies'
              ? 'active:text-xerpihan-primary-500 dark:text-white px-2 md:px-3 py-2'
              : 'text-gray-900 dark:text-white px-2 md:px-3 py-2'
          }>
          {_(l, 'Studi Kasus', 'Case Studies')}
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={
            router.pathname == '/blog'
              ? 'active:text-xerpihan-primary-500 dark:text-white px-2 md:px-3 py-2'
              : 'text-gray-900 dark:text-white px-2 md:px-3 py-2'
          }>
          Blog
        </a>
      </Link>
      <Link href="/about">
        <a
          className={
            router.pathname == '/about'
              ? 'active:text-xerpihan-primary-500 dark:text-white px-2 md:px-3 py-2'
              : 'text-gray-900 dark:text-white px-2 md:px-3 py-2'
          }>
          {_(l, 'Tentang', 'About')}
        </a>
      </Link>
    </>
  );

  const langAndTheme = (
    <>
      <div className="mr-5">{!isPosts && <LocaleSwitcher />}</div>
      <ThemeSwitch />
    </>
  );

  return (
    <>
      {/* Small Screen */}
      <nav className="flex md:hidden flex-1 flex-col">
        <div className="flex items-center justify-center">
          {mainLogo}
          <div className="flex-1"></div>
          {langAndTheme}
        </div>
        <div className="flex center flex-wrap pb-6 mb-1 border-b-2">{menu}</div>
      </nav>
      {/* Big Screen */}
      <nav className="hidden md:flex flex-1 justify-center items-center">
        {mainLogo}
        {menu}
        <div className="flex-1"></div>
        {langAndTheme}
      </nav>
    </>
  );
};

export default Navigation;
