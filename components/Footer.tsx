import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { cpImg, csOrderFooter } from '../lib/images';
import db from '../firebase/clientApp';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// component
import { L } from '../lib/i18n';

const listProduk = [
  {
    name: 'Produk',
    nameEn: 'Product',
    list: [
      { name: 'Untuk Korporat', nameEn: 'For Corporates', link: '/for-corporates' },
      { name: 'Untuk Individual', nameEn: 'For Individuals', link: '/service' },
      { name: 'Studi Kasus', nameEn: 'Case Study', link: '/case-studies' },
    ],
  },
  {
    name: 'Perusahaan',
    nameEn: 'Corporate',
    list: [
      { name: 'Blog', nameEn: 'Blog', link: '/blog' },
      { name: 'Tentang', nameEn: 'About', link: '/about' },
      { name: 'Ketentuan Layanan', nameEn: 'Ketentuan Layanan', link: '/term-of-services' },
      { name: 'Kebijakan Privasi', nameEn: 'Kebijakan Privasi', link: '/privacy-policy' },
    ],
  },
  {
    name: 'Media Sosial',
    nameEn: 'Social Media',
    list: [
      { name: 'Twitter', nameEn: 'Twitter', link: 'https://twitter.com/xerpihan' },
      { name: 'Facebook', nameEn: 'Facebook', link: 'https://facebook.com/xerpihan' },
      { name: 'Instagram', nameEn: 'Instagram', link: 'https://www.instagram.com/xerpihan' },
      { name: 'YouTube', nameEn: 'YouTube', link: 'https://youtube.com/channel/UC_ypxl44BSYNHjXAs5-zuaQ' },
    ],
  },
  {
    name: 'Kontak',
    nameEn: 'Contact',
    list: [
      { name: 'WhatsApp', nameEn: 'WhatsApp', link: 'https://wa.me/+6283119161413' },
      { name: 'Handphone', nameEn: 'Handphone', link: '/' },
    ],
  },
];

export default function Footer() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const subs = useCallback(async () => {
    try {
      const docRef = await addDoc(collection(db, 'email-subscription'), {
        email: email,
        timestamp: serverTimestamp(),
      });
      alert('subscribe success');
      console.log('Success : ', docRef.id);
    } catch (e) {
      console.error('Error adding Order: ', e);
    }
  }, [email]);
  return (
    <footer
      className="bg-gradient-to-t relative
    dark:from-gray-900 dark:to-gray-800 py-8">
      {/* Background */}
      <div className="w-full h-full flex flex-col absolute">
        <div className="h-1/5 bg-white dark:bg-gray-800"></div>
        <div className="flex-1 bg-xerpihan-hero-gradient-end dark:bg-gray-800"></div>
      </div>
      {/* Box */}
      <div className="max-w-5xl px-6 md:px-8 py-4 mx-auto relative  ">
        <div
          className={`border-2 text-lg rounded-lg p-6 md:p-10 dark:bg-black relative overflow-hidden  ${
            router.pathname === '/order'
              ? 'bg-white flex flex-row-reverse border-gray-300'
              : 'bg-[#05acc2] text-white border-[#7fd5df]'
          }`}>
          <div>
            <div className="mb-4 space-y-4">
              <div className="text-2xl md:text-3xl">
                <L>
                  <p>
                    {router.pathname === '/order'
                      ? 'Bingung mengisi formulir di atas?'
                      : 'Konsultasikan kebutuhan Anda, gratis!'}
                  </p>
                  <p>
                    {router.pathname === '/order'
                      ? 'Bingung mengisi formulir di atas?'
                      : 'Konsultasikan kebutuhan Anda, gratis!'}
                  </p>
                </L>
              </div>
              <L>
                {router.pathname === '/order' ? (
                  <p>
                    Konsultasikan kebutuhan anda dengan admin kami. Akan kami berikan <br />
                    layanan yang paling pas untuk anda!
                  </p>
                ) : (
                  <p>
                    Tim Xerpihan akan membantu menemukan solusi untuk segala kebutuhan
                    <br /> layanan bahasa Anda.
                  </p>
                )}
                {router.pathname === '/order' ? (
                  <p>
                    Konsultasikan kebutuhan anda dengan admin kami. Akan kami berikan <br />
                    layanan yang paling pas untuk anda!
                  </p>
                ) : (
                  <p>
                    Tim Xerpihan akan membantu menemukan solusi untuk segala kebutuhan
                    <br /> layanan bahasa Anda.
                  </p>
                )}
              </L>
            </div>{' '}
            <div className="md:flex md:space-x-4 items-center text-sm">
              <a href="https://wa.me/+6283119161413" target="_blank" rel="noreferrer">
                <div
                  className={` border rounded-lg  ${
                    router.pathname === '/order'
                      ? 'text-xerpihan-primary-500 border-xerpihan-primary-500'
                      : 'border-white text-white'
                  } p-4 md:mb-0 mb-4 font-semibold`}>
                  <L>
                    <p>WhatsApp ke +62 831 1916 1413</p>
                    <p> WhatsApp to +62 831 1916 1413</p>
                  </L>
                </div>
              </a>
              <a href="mailto:layanan@xerpihan.id" target="_blank" rel="noreferrer">
                <div
                  className={` border rounded-lg  ${
                    router.pathname === '/order'
                      ? 'text-xerpihan-primary-500 border-xerpihan-primary-500'
                      : 'border-white text-white'
                  } p-4 md:mb-0 mb-4 font-semibold`}>
                  <L>
                    <p>E-mail ke layanan@xerpihan.id</p>
                    <p> E-mail to layanan@xerpihan.id</p>
                  </L>
                </div>
              </a>
            </div>
          </div>

          <div
            className={`${
              router.pathname === '/order' ? 'left-20' : ' right-20'
            } -bottom-6 lg:block hidden lg:absolute `}>
            <Image src={router.pathname === '/order' ? csOrderFooter : cpImg} alt="cp" width={190} height={220} />
          </div>
        </div>
        <div className="bg-xerpihan-hero-gradient-end dark:bg-gray-800 my-10">
          {/* subscibtion */}
          <div className="md:flex md:space-y-0 space-y-8">
            <div className="md:w-1/2">
              <p className="font-bold">
                <L>
                  {'Langganan Kabar Terbaru dari Kami'}
                  {'Langganan Kabar Terbaru dari Kami'}
                </L>
              </p>
              <p className="text-[#838383]">Artikel, berita, dan kabar bulanan dari Xerpihan.</p>
            </div>
            <div className="space-y-4 md:w-1/2">
              <div className="border flex">
                <input
                  type="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Alamat email kamu"
                  className="w-full focus:outline-none px-4 py-3"
                />
                <button
                  className="px-4 py-3 text-white bg-red-200 dark:bg-red-500"
                  onClick={() => {
                    subs();
                  }}>
                  <p>
                    <L>
                      {'Langganan'}
                      {'subscribe'}
                    </L>
                  </p>
                </button>
              </div>
              <div className="flex items-center space-x-4 text-[#838383] text-xs">
                <input type="checkbox" required />
                <p>
                  <L>
                    {'Saya setuju untuk mendapatkan email marketing dari Xerpihan.'}
                    {'Saya setuju untuk mendapatkan email marketing dari Xerpihan.'}
                  </L>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gray-200 my-10"></div>
          {/* Produk */}
          <div className="grid md:grid-cols-5 grid-cols-3 gap-4 md:gap-2">
            {listProduk.map(el => (
              <div key={el.name} className="space-y-2">
                <p className="font-bold">
                  <L>
                    {el.name}
                    {el.nameEn}
                  </L>
                </p>
                {el.list.map(item => (
                  <div key={item.name}>
                    {el.name === 'Media Sosial' ? (
                      <a className="text-[#838383]" href={`${item.link}`} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.link ? item.link : ''}>
                        <a className="text-[#838383]">
                          <L>
                            {item.name}
                            {item.nameEn}
                          </L>
                        </a>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ))}
            <div className="space-y-2 md:col-span-1 col-span-2">
              <p className="font-bold">
                {' '}
                <L>
                  {'Kantor'}
                  {'Office'}
                </L>
              </p>
              <p className="text-[#838383] dark:text-white text-sm">
                PT Xerpihan Kata Digital <br /> Jl. Semangu No.4a, Rejowinangun, Kec. Kotagede, Kota Yogyakarta, Daerah
                Istimewa Yogyakarta 55171
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
function async(): any {
  throw new Error('Function not implemented.');
}
