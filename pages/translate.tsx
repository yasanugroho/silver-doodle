import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { _ } from '../lib/i18n';
import Footer from '../components/Footer';
import Tabs from '../components/Tabs';
export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Layanan dan Jasa Translate Berkualitas Bahasa Inggris dan Indonesia', 'Translation Service for English and Indonesian') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b max-w-5xl px-8 py-4 md:mx-auto space-y-6
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="text-center space-y-4">
          <h1> Xerpihan Translation</h1>
          <h6> Jasa Translate Bahasa Indonesia dan Inggris </h6>
        </div>
        <p>
          Apakah Anda sedang membutuhkan jasa penerjemah profesional? 
          Kini, Xerpihan menyediakan jasa penerjemah bahasa Inggris dan bahasa Indonesia dengan harga yang murah, tetapi berkualitas. 
          Kami menyediakan layanan jasa translate dalam dua bentuk, yaitu jasa translate dokumen online dan jasa translate video (subtitle). 
          Xerpihan sudah berpengalaman menerjemahkan berbagai jenis dokumen dan video. 
          Kami melayani jasa translate jurnal bahasa Inggris, artikel, abstrak, buku, transkrip nilai, website perusahaan, laporan, film, dan masih banyak lagi.
        </p>
        
        <div className="text-center pt-28">
        <h1 className=" text-3xl font-bold">
          {_(l, 'Pilih Paket yang Sesuai dengan Kebutuhan Kamu', 'Choose the Package That Fits Your Needs')}
        </h1>
      
      <div>
        <Tabs />
      </div>
        </div>
        <p>
         Harga jasa penerjemah video (subtitle) ditentukan berdasarkan durasi video. 
          Sementara tarif jasa penerjemah atau translate dokumen online ditentukan berdasarkan jumlah kata dan jenis layanan yang dipilih. 
          Harga jasa penerjemah kami cukup murah dibandingkan jasa penerjemah lainnya. 
          Dengan membayar Rp10.000, Anda sudah bisa menerjemahkan (translate) jurnal atau dokumen bahasa Inggris/Indonesia sebanyak 75 kata. 
          Anda bisa klik menu ‘Layanan’ untuk melihat harga setiap jenis jasa penerjemah kami
        </p>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
