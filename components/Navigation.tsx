//lib
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
//component & asset
import ThemeSwitch from './ThemeSwitch';
import { L, useLocale, _ } from '../lib/i18n';
import LocaleSwitcher from './LocaleSwitcher';
import { xerpihanLogoWhite, xerpihanLogoBlack } from '../lib/images';

const listMenu = [
  {
    link: '/service',
    id: 'Layanan',
    en: 'Service',
  },
  {
    link: '/for-corporates',
    id: 'Untuk Korporat',
    en: 'For Corporates',
  },
  {
    link: '/case-studies',
    id: 'Studi Kasus',
    en: 'Case Studies',
  },
  {
    link: '/about',
    id: 'Tentang',
    en: 'About',
  },
  {
    link: '/blog',
    id: 'Blog',
    en: 'Blog',
  },
];

const Navigation: React.FC = () => {
  const router = useRouter();
  const l = useLocale();

  const mainLogo = (
    <Link href="/">
      <a
        className="text-gray-900 dark:text-white pr-6 py-4 font-bold flex justify-center items-center minw"
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
    <div className="grid md:flex grid-cols-6 gap-3 md:gap-0 text-xs md:text-base">
      {listMenu.map((el, index) => {
        // Kalau blog, pakai link biasa, karena blog kita di wordpress
        if (el.link === '/blog') {
          return (
            <a
              key={el.link}
              href="https://xerpihan.id/blog"
              className={`text-center whitespace-nowrap ${index === 0 || index === 1 ? 'col-span-3' : 'col-span-2'} ${
                router.pathname == el.link
                  ? 'active:text-xerpihan-primary-500 px-2 md:px-3 py-2 bg-xerpihan-primary-100 md:bg-transparent dark:bg-black  md:dark:bg-opacity-0'
                  : 'text-gray-900 dark:text-white px-2 md:px-3 py-2 bg-gray-100 md:bg-transparent md:dark:bg-opacity-0  dark:bg-gray-800 hover:text-xerpihan-primary-500 dark:hover:text-xerpihan-primary-500'
              }`}>
              {_(l, el.id, el.en)}
            </a>
          );
        }

        // Other
        return (
          <Link href={el.link} key={el.link}>
            <a
              className={`text-center whitespace-nowrap ${index === 0 || index === 1 ? 'col-span-3' : 'col-span-2'} ${
                router.pathname == el.link
                  ? 'active:text-xerpihan-primary-500 px-2 md:px-3 py-2 bg-xerpihan-primary-100 md:bg-transparent dark:bg-black  md:dark:bg-opacity-0'
                  : 'text-gray-900 dark:text-white px-2 md:px-3 py-2 bg-gray-100 md:bg-transparent md:dark:bg-opacity-0  dark:bg-gray-800 hover:text-xerpihan-primary-500 dark:hover:text-xerpihan-primary-500'
              }`}>
              {_(l, el.id, el.en)}
            </a>
          </Link>
        );
      })}
    </div>
  );

  return (
    <nav className=" md:flex flex-1 justify-center items-center">
      <div className="flex items-center space-x-4 justify-between">
        {mainLogo}
        <div className="hidden md:block">{menu}</div>
        <div className="flex items-center space-x-4">
          <LocaleSwitcher />
          <ThemeSwitch />
        </div>
      </div>
      <div className="md:hidden w-full pb-6 border-b-2">{menu}</div>
    </nav>
  );
};

export default Navigation;
