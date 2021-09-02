import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cpImg } from '../lib/images';

// component
import { L } from '../lib/i18n';

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-t relative
    dark:from-gray-900 dark:to-gray-800 py-8">
      {/* Background */}
      <div className="w-full h-full flex flex-col absolute">
        <div className="flex-1 bg-white"></div>

        <div className="flex-1 bg-xerpihan-hero-gradient-end dark:bg-gray-800"></div>
      </div>
      {/* Box */}
      <div className="max-w-5xl px-8 py-4 mx-auto relative">
        <div className="border-2 text-lg rounded-lg border-[#7fd5df] p-10 bg-[#05acc2] dark:bg-black relative overflow-hidden">
          <div className="mb-2 text-white">
            <div className="text-3xl">
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
              href="https://wa.me/081298765432"
              target="_blank"
              rel="noreferrer">
              <L>
                <p className="m-0">WhatsApp ke +62 812 9876 5432</p>
                <p> WhatsApp to +62 812 9876 5432</p>
              </L>
            </a>
            <a
              className="border-white border rounded-lg items-center text-white space-x-10  p-4 text-sm font-semibold"
              href="https://wa.me/081298765432"
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
        {/* subscibtion */}
        <div className="flex">
          <div>
            <p>Langganan Kabar Terbaru dari Kami </p>
            <p>Artikel, berita dan kabar bulanan dari Xerpihan.</p>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
