/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowSmRightIcon } from '@heroicons/react/solid';

// component
import { L } from '../lib/i18n';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { proofreading, translation, subtitle, transcription } from '../lib/images';

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
          <div className="flex-1 "></div>
        </div>
        {/* Box */}
        <div className="max-w-5xl px-8 py-4 mx-auto relative">
          <div className="border-2 text-lg rounded-md p-5 bg-white dark:bg-black">
            <div className="mb-2">
              <L>
                <p>Dapatkan estimasi biaya proofreading, terjemahan, subtitle, dan transkripsi, gratis!</p>
                <p>Get cost estimation of proofreading, translation, subtitles and transcription, for free! </p>
              </L>
            </div>
            <div className="flex space-x-4 items-center">
              <Link href="/">
                <a className="xerp-a-button flex items-center space-x-4">
                  <L>
                    {'Order Sekarang'}
                    {'Order now'}
                  </L>
                  <ArrowSmRightIcon className="ml-1 w-8" />
                </a>
              </Link>
              <L>
                {'atau'}
                {'or'}
              </L>
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
      <div className="max-w-5xl px-8 py-4 mx-auto">
        <section className="flex flex-col md:flex-row items-center my-14">
          <div className="flex-1 flex mb-5 md:mb-0 justify-center items-center">
            <figure className="w-36 h-36 md:w-48 md:h-48">
              <Image src={proofreading} alt="Proofreading" objectFit="contain" />
            </figure>
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold mb-1 text-gray-500">proofreading</div>
            <h2 className="text-3xl font-bold mb-2">Hilangkan kesalahan penulisan di dokumen kamu</h2>
            <p className="text-lg">
              Terlalu banyak jasa proofreading di luar sana dengan rekam jejak dan hasil yang kurang jelas. Coba
              sekarang dan dapatkan sertifikat proofreading untuk dokumenmu.
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row-reverse items-center my-14">
          <div className="flex-1 flex mb-5 md:mb-0 justify-center items-center">
            <figure className="w-36 h-36 md:w-48 md:h-48">
              <Image src={translation} alt="Translation" objectFit="contain" />
            </figure>
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold mb-1 text-gray-500">terjemahan</div>
            <h2 className="text-3xl font-bold mb-2">Alih bahasa dokumen</h2>
            <p className="text-lg">
              Untuk kamu yang bingung dengan hasil mesin penerjemah dan tidak dapat menilai hasilnya. Pilih harga dan
              waktu penyelesaian sesuai kebutuhanmu. Jasa translate dokumen kamu yang kekinian.
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center my-14">
          <div className="flex-1 flex mb-5 md:mb-0 justify-center items-center">
            <figure className="w-36 h-36 md:w-48 md:h-48">
              <Image src={subtitle} alt="Subtitle" objectFit="contain" />
            </figure>
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold mb-1 text-gray-500">subtitle</div>
            <h2 className="text-3xl font-bold mb-2">Tingkatkan aksesibilitas di video kamu</h2>
            <p className="text-lg">
              Content creator menjadi pengguna utama jasa subtitle ini. Cocok buat kamu yang ingin meningkatkan
              engagement konten.
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row-reverse items-center my-14">
          <div className="flex-1 flex mb-5 md:mb-0 justify-center items-center">
            <figure className="w-44 h-44 md:w-56 md:h-56">
              <Image src={transcription} alt="Transcription" objectFit="contain" />
            </figure>
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold mb-1 text-gray-500">transkripsi</div>
            <h2 className="text-3xl font-bold mb-2">Konversi audio ke teks</h2>
            <p className="text-lg">
              Ada rekaman hasil wawancara atau sedang membuat konten dan ingin ditranskripsi? Tersedia jasa transkrip
              instan atau manual yang mudah dan cepat.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </LayoutPlain>
  );
};

export default Index;
