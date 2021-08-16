import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { L, useLocale, _ } from '../lib/i18n';
import Footer from '../components/Footer';

export const Index: React.FC = () => {
  const l = useLocale();

  return (
    <LayoutPlain>
      <div className="bg-gradient-to-b from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-800 dark:to-gray-900">
        <Header />
        <L>
          <h1 className="text-6xl font-bold text-center">Layanan bahasa<br /><span className="text-xerpihan-primary-600">No.1</span> di Indonesia</h1>
          <h1 className="text-6xl font-bold text-center">Indonesian <span className="text-xerpihan-primary-600">No.1</span><br /> language service provider</h1>
        </L>
        <div className="flex justify-center flex-wrap pb-5">
          <div className="mx-5 text-2xl font-bold text-gray-500">
            <L>{'Proofreading'}{'Proofreading'}</L>
          </div>
          <div className="mx-5 text-2xl font-bold text-gray-500">
            <L>{'Terjemahan'}{'Translation'}</L>
          </div>
          <div className="mx-5 text-2xl font-bold text-gray-500">
            <L>{'Subtitle'}{'Subtitles'}</L>
          </div>
          <div className="mx-5 text-2xl font-bold text-gray-500">
            <L>{'Transkripsi'}{'Transcription'}</L>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-full flex flex-col absolute">
          <div className="flex-1 bg-xerpihan-hero-gradient-end dark:bg-gray-900"></div>
          <div className="flex-1 "></div>
        </div>
        <div className="max-w-5xl px-8 py-4 mx-auto relative">
          <div className="border-2 rounded-md p-5 bg-white dark:bg-black">
            Dapatkan estimasi biaya proofreading, terjemahan, subtitle, dan transkripsi, gratis!
          </div>
        </div>
      </div>
      <Footer />
    </LayoutPlain>
  );
};

export default Index;
