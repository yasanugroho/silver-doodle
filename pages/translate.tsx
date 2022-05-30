import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { L, _ } from '../lib/i18n';
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
        <L>
        <p>
          Apakah Anda sedang membutuhkan jasa penerjemah profesional? 
          Kini, Xerpihan menyediakan jasa penerjemah bahasa Inggris dan bahasa Indonesia dengan harga yang murah, tetapi berkualitas. 
          Kami menyediakan layanan jasa translate dalam dua bentuk, yaitu jasa translate dokumen online dan jasa translate video (subtitle). 
          Xerpihan sudah berpengalaman menerjemahkan berbagai jenis dokumen dan video. 
          Kami melayani jasa translate jurnal bahasa Inggris, artikel, abstrak, buku, transkrip nilai, website perusahaan, laporan, film, dan masih banyak lagi.
        </p>
        <p>
           Are you in need of a professional translator?
           Now, Xerpihan provides English and Indonesian translator services at low prices, but with high quality.
           We provide translation services in two forms, namely online document translation services and video translation services (subtitles).
           Xerpihan has experience translating various types of documents and videos.
           We provide translation services for English journals, articles, abstracts, books, transcripts, company websites, reports, films, and much more.
        </p>
        </L>
        <div className="text-center pt-28">
        <h1 className=" text-3xl font-bold">
          {_(l, 'Pilih Paket yang Sesuai dengan Kebutuhan Kamu', 'Choose the Package That Fits Your Needs')}
        </h1>
      
      <div>
        <Tabs />
      </div>
        </div>
        <L>
        <p>
          Harga jasa penerjemah video (subtitle) ditentukan berdasarkan durasi video. 
          Sementara tarif jasa penerjemah atau translate dokumen online ditentukan berdasarkan jumlah kata dan jenis layanan yang dipilih. 
          Harga jasa penerjemah kami cukup murah dibandingkan jasa penerjemah lainnya. 
          Dengan membayar Rp10.000, Anda sudah bisa menerjemahkan (translate) jurnal atau dokumen bahasa Inggris/Indonesia sebanyak 75 kata. 
          
        </p>
        <p>
           The price for video translation services (subtitles) is determined based on the duration of the video.
           Meanwhile, the tariff for online document translation services is determined based on the number of words and the type of service selected.
           The price of our translation services is quite cheap compared to other translation services.
           By paying Rp 10,000, you can translate 75 words of journals or English/Indonesian documents.
           
        </p>
        </L>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
