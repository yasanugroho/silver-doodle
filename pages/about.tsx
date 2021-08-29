import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import LayoutPlain from '../components/LayoutPlain';
import profile4 from '../images/Profile4.png';
import { _ } from '../lib/i18n';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Tentang', 'About') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="text-left max-w-5xl mx-auto py-10">
          <h1 className="text-xerpihan-primary-500 text-5xl font-bold">Tentang Kami</h1>
          <p className="text-2xl font-light">
            Perusahaan startup teknologi yang membantu memperbaiki dokumen dalam Bahasa Inggris dan Bahasa Indonesia.
            Sedang dalam pengembangan Al-based platform dalam menyediakan jasa proofread, translate, pembuatan subtitle
            dan transkripsi berkualitas.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto text-center py-10">
        <h1 className="text-xerpihan-primary-500 text-4xl font-bold">Team Kami</h1>
        <p className="text-2xl font-light">
          Perusahaan startup teknologi yang membantu memperbaiki dokumen dalam Bahasa Inggris dan Bahasa Indonesia.
          Sedang dalam pengembangan Al-based platform dalam menyediakan jasa proofread, translate, pembuatan subtitle
          dan transkripsi berkualitas.
        </p>
      </div>
      <div className="max-w-100 bg-xerpihan-hero-gradient-end">
        <div className="mx-auto grid grid-cols-3 gap-10 max-w-5xl py-10">
          <div className="relative text-center">
            <Image src={profile4} alt="..." width="120" height="120" className="rounded-full object-cover" />
            <div className="bg-white border border-gray-300 p-5 rounded-lg" style={{ marginTop: '-70px' }}>
              <h1 className="text-base font-bold mb-0" style={{ marginTop: '70px' }}>
                Albert Donko
              </h1>
              <h1 className="text-base font-light text-gray-500 mb-0">Universitas Gadjah Mada</h1>
              <p className="text-sm font-light text-justify tracking-tight">
                Terima kasih teman-teman, pertahankan kerja bagus! Xerpihan harus dinominasikan untuk service of the
                year. Anda tidak akan menyesalinya.
              </p>
            </div>
          </div>
          <div className="relative text-center">
            <Image src={profile4} alt="..." width="120" height="120" className="rounded-full object-cover" />
            <div className="bg-white border border-gray-300 p-5 rounded-lg" style={{ marginTop: '-70px' }}>
              <h1 className="text-base font-bold mb-0" style={{ marginTop: '70px' }}>
                Albert Donko
              </h1>
              <h1 className="text-base font-light text-gray-500 mb-0">Universitas Gadjah Mada</h1>
              <p className="text-sm font-light text-justify tracking-tight">
                Terima kasih teman-teman, pertahankan kerja bagus! Xerpihan harus dinominasikan untuk service of the
                year. Anda tidak akan menyesalinya.
              </p>
            </div>
          </div>
          <div className="relative text-center">
            <Image src={profile4} alt="..." width="120" height="120" className="rounded-full object-cover" />
            <div className="bg-white border border-gray-300 p-5 rounded-lg" style={{ marginTop: '-70px' }}>
              <h1 className="text-base font-bold mb-0" style={{ marginTop: '70px' }}>
                Albert Donko
              </h1>
              <h1 className="text-base font-light text-gray-500 mb-0">Universitas Gadjah Mada</h1>
              <p className="text-sm font-light text-justify tracking-tight">
                Terima kasih teman-teman, pertahankan kerja bagus! Xerpihan harus dinominasikan untuk service of the
                year. Anda tidak akan menyesalinya.
              </p>
            </div>
          </div>
          <div className="relative text-center">
            <Image src={profile4} alt="..." width="120" height="120" className="rounded-full object-cover" />
            <div className="bg-white border border-gray-300 p-5 rounded-lg" style={{ marginTop: '-70px' }}>
              <h1 className="text-base font-bold mb-0" style={{ marginTop: '70px' }}>
                Albert Donko
              </h1>
              <h1 className="text-base font-light text-gray-500 mb-0">Universitas Gadjah Mada</h1>
              <p className="text-sm font-light text-justify tracking-tight">
                Terima kasih teman-teman, pertahankan kerja bagus! Xerpihan harus dinominasikan untuk service of the
                year. Anda tidak akan menyesalinya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutPlain>
  );
};

export default Page;
