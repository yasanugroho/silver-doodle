import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cpImg } from '../lib/images';
// component
import { L } from '../lib/i18n';

const listProduk = [
  {
    name: 'Produk',
    list: [
      { name: 'Untuk Korporat', link: '/for-corporates' },
      { name: 'Untuk Individual', link: '/for-individuals' },
      { name: 'Studi Kasus', link: '/case-studies' },
    ],
  },
  {
    name: 'Perusahaan',
    list: [
      { name: 'Blog', link: '/blog' },
      { name: 'Tentang', link: '/about' },
      { name: 'Ketentuan Layanan', link: null },
    ],
  },
  {
    name: 'Media Sosial',
    list: [
      { name: 'Twitter', link: 'https://twitter.com/xerpihan' },
      { name: 'Facebook', link: 'https://facebook.com/xerpihan' },
      { name: 'Instagram', link: 'https://www.instagram.com/xerpihan' },
      { name: 'Youtube', link: '/https://youtube.com/channel/UC_ypxl44BSYNHjXAs5-zuaQ' },
    ],
  },
  {
    name: 'Kontak',
    list: [
      { name: 'Whatsapp', link: 'https://wa.me/083119161413' },
      { name: 'Handphone', link: '/' },
    ],
  },
  {
    name: 'Kantor',
    list: [
      {
        name: 'PT. Xerpihan Kata Digital Jl. Semangu No.4a, Rejowinangun, Kec. Kotagede, Kota Yogyakarta,Daerah Istimewa Yogyakarta 55171',
        link: '#',
      },
    ],
  },
];

export default function Footer() {
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
      <div className="max-w-5xl px-8 py-4 mx-auto relative ">
        <div className="border-2 text-lg rounded-lg border-[#7fd5df] p-10 bg-[#05acc2] dark:bg-black relative overflow-hidden">
          <div className="mb-4 text-white space-y-4">
            <div className="text-3xl ">
              <L>
                <p>Konsultasikan kebutuhan anda, gratis!</p>
                <p>Konsultasikan kebutuhan anda, gratis!</p>
              </L>
            </div>
            <L>
              <p>
                Tim Xerpihan akan membantu menemukan solusi untuk segala kebutuhan
                <br /> layanan bahasa anda.
              </p>
              <p>
                Tim Xerpihan akan membantu menemukan solusi untuk segala kebutuhan
                <br /> layanan bahasa anda.
              </p>
            </L>
          </div>
          <div className="flex space-x-4 items-center">
            <a
              className="border-white border rounded-lg flex items-center text-white space-x-10 p-4 text-sm font-semibold"
              href="https://wa.me/083119161413"
              target="_blank"
              rel="noreferrer">
              <L>
                <p className="m-0">WhatsApp ke +62 812 9876 5432</p>
                <p> WhatsApp to +62 812 9876 5432</p>
              </L>
            </a>
            <a
              className="border-white border rounded-lg items-center text-white space-x-10  p-4 text-sm font-semibold"
              href="mailto:layanan@xerpihan.id"
              target="_blank"
              rel="noreferrer">
              <L>
                <p className="m-0">E-mail ke layanan@xerpihan.id</p>
                <p> E-mail to layanan@xerpihan.id</p>
              </L>
            </a>
          </div>

          <div className="absolute -bottom-6 right-20">
            <Image src={cpImg} alt="cp" />
          </div>
        </div>
        <div className="bg-xerpihan-hero-gradient-end dark:bg-gray-800 my-10">
          {/* subscibtion */}
          <div className="flex">
            <div className="w-1/2">
              <p className="font-bold">Langganan Kabar Terbaru dari Kami</p>
              <p className="text-[#838383]">Artikel, berita dan kabar bulanan dari Xerpihan.</p>
            </div>
            <div className="space-y-4 w-1/2">
              <div className="border flex">
                <input type="email" placeholder="Alamat email kamu" className="w-full focus:outline-none px-4 py-3" />
                <button className="px-4 py-3 text-white bg-red-200">
                  <p>Langganan</p>
                </button>
              </div>
              <div className="flex items-center space-x-4 text-[#838383] text-xs">
                <input type="checkbox" />
                <p>Saya setuju untuk mendapatkan email marketing dari Xerpihan.</p>
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gray-200 my-10"></div>
          {/* Produk */}
          <div className="grid grid-cols-5">
            {listProduk.map(el => (
              <div key={el.name} className="space-y-2">
                <p className="font-bold">{el.name}</p>
                {el.list.map(item => (
                  <div key={item.name}>
                    {el.name === 'Media Sosial' ? (
                      <a className="text-[#838383]" href={`${item.link}`} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      <Link href={item.link ? item.link : ''}>
                        <a className="text-[#838383]">{item.name}</a>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
