import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowSmRightIcon } from '@heroicons/react/solid';

// component
import { L } from '../lib/i18n';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { proofreading, translation, subtitle, transcription, spoon, bps, cirebon, procon, herba } from '../lib/images';

const listFitur = [
  {
    id: 'Proofreading',
    en: 'Proofreading',
  },
  {
    id: 'Terjemahan',
    en: 'Translation',
  },
  {
    id: 'Subtitle',
    en: 'Subtitles',
  },
  {
    id: 'Transkripsi',
    en: 'Transcription',
  },
];

const listLogoTim = [herba, bps, cirebon, procon, spoon];
const dataSection = [
  {
    img: proofreading,
    title: 'Proofreading',
    subTitle: 'Hilangkan kesalahan penulisan di dokumen kamu',
    content:
      'Terlalu banyak jasa proofreading di luar sana dengan rekam jejak dan hasil yang kurang jelas. Coba sekarang dan dapatkan sertifikat proofreading untuk dokumenmu.',
    styling: 'md:flex-row-reverse',
  },
  {
    img: translation,
    title: 'Terjemahan',
    subTitle: 'Alih bahasa dokumen',
    content:
      'Untuk kamu yang bingung dengan hasil mesin penerjemah dan tidak dapat menilai hasilnya. Pilih harga dan waktu penyelesaian sesuai kebutuhanmu. Jasa translate dokumen kamu yang kekinian.',
    styling: 'md:flex-row',
  },
  {
    img: subtitle,
    title: 'Subtitle',
    subTitle: 'Alih bahasa dokumen',
    content:
      'Untuk kamu yang bingung dengan hasil mesin penerjemah dan tidak dapat menilai hasilnya. Pilih harga dan waktu penyelesaian sesuai kebutuhanmu. Jasa translate dokumen kamu yang kekinian.',
    styling: 'md:flex-row-reverse',
  },
  {
    img: transcription,
    title: 'Transkripsi',
    subTitle: 'Konversi audio ke teks',
    content:
      'Ada rekaman hasil wawancara atau sedang membuat konten dan ingin ditranskripsi? Tersedia jasa transkrip instan atau manual yang mudah dan cepat.',
    styling: 'md:flex-row',
  },
];

const SectionComp = (
  <div className="max-w-5xl px-8 py-4 mx-auto">
    {dataSection.map(el => (
      <section key={el.title} className={`flex flex-col items-center my-14 space-x-4 ${el.styling}`}>
        <div className="w-1/2 flex mb-5 md:mb-0 justify-center items-center">
          <figure className="w-36 h-36 md:w-48 md:h-48">
            <Image src={el.img} alt="Proofreading" objectFit="contain" />
          </figure>
        </div>
        <div className="w-1/2 space-y-3">
          <p className="text-xl font-bold mb-1 text-gray-500">{el.title}</p>
          <h2 className="text-3xl font-bold mb-2">{el.subTitle}</h2>
          <p className="text-lg">{el.content}</p>
        </div>
      </section>
    ))}
  </div>
);

export const Index: React.FC = () => {
  return (
    <LayoutPlain>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header />
        <L>
          <>
            <h1 className="text-6xl font-bold text-center">
              Layanan bahasa
              <br />
              <span className="text-xerpihan-primary-600 leading-normal">No.1</span> di Indonesia
            </h1>
          </>

          <h1 className="text-6xl font-bold text-center">
            Indonesian <span className="text-xerpihan-primary-600 leading-normal">No.1</span>
            <br /> language service provider
          </h1>
        </L>
        <div className="flex justify-center flex-wrap py-5">
          {listFitur.map(el => (
            <div className="mx-5 text-2xl font-bold text-gray-400" key={el.id}>
              <L>
                {el.id}
                {el.en}
              </L>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        {/* Background */}
        <div className="w-full h-full flex flex-col absolute">
          <div className="flex-1 bg-xerpihan-hero-gradient-end dark:bg-gray-800"></div>
          <div className="flex-1"></div>
        </div>
        {/* Box */}
        <div className="max-w-5xl px-8 py-4 mx-auto relative">
          <div className="border-2 text-lg rounded-md p-5 bg-white dark:bg-black">
            <div className="mb-2">
              <L>
                <p>
                  Dapatkan estimasi biaya proofreading, terjemahan, subtitle,
                  <br /> dan transkripsi, <span className="font-bold">gratis!</span>
                </p>
                <p>
                  Get cost estimation of proofreading, translation, subtitles
                  <br /> and transcription, for <span className="font-bold">free!</span>
                </p>
              </L>
            </div>
            <div className="flex space-x-4 items-center">
              <Link href="/">
                <a className="xerp-a-button flex items-center justify-between p-4 text-sm font-bold  w-[270px] h-[61px]">
                  <L>
                    {'Order Sekarang'}
                    {'Order now'}
                  </L>
                  <ArrowSmRightIcon className="ml-1 w-8" />
                </a>
              </Link>
              <div>
                <L>
                  {'atau'}
                  {'or'}
                </L>
              </div>
              <a
                className="xerp-b-button flex items-center space-x-10 w-[270px]"
                href="https://wa.me/081298765432"
                target="_blank"
                rel="noreferrer">
                <div className="p-2 text-sm font-bold">
                  <L>
                    <p className="m-0">
                      Konsultasi via WhatsApp <br />
                      +62 812 9876 5432
                    </p>
                    <p>Konsultasi via WhatsApp</p>
                  </L>
                </div>
                <ArrowSmRightIcon className="ml-1 w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl px-8 mx-auto text-lg text-center">
        <L>
          <p>Layanan kami telah digunakan oleh tim-tim terkemuka di Indonesia</p>
          <p>Layanan kami telah digunakan oleh tim-tim terkemuka di Indonesia</p>
        </L>
        <div className="flex justify-between mx-20">
          {listLogoTim.map(el => (
            <div key={el}>
              <Image src={el} alt="Proofreading" />
            </div>
          ))}
        </div>
      </div>
      {SectionComp}
      <Footer />
    </LayoutPlain>
  );
};

export default Index;
