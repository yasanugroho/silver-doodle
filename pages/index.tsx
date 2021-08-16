import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { L, useLocale } from '../lib/i18n';
import { proofreading, translation, subtitle, transcription } from '../lib/images';

export const Index: React.FC = () => {
  const l = useLocale();

  return (
    <LayoutPlain>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header />
        <L>
          <h1 className="text-6xl font-bold text-center">
            Layanan bahasa
            <br />
            <span className="text-xerpihan-primary-600">No.1</span> di Indonesia
          </h1>
          <h1 className="text-6xl font-bold text-center">
            Indonesian <span className="text-xerpihan-primary-600">No.1</span>
            <br /> language service provider
          </h1>
        </L>
        <div className="flex justify-center flex-wrap pb-5">
          <div className="mx-5 text-2xl font-bold text-gray-500">
            <L>
              {'Proofreading'}
              {'Proofreading'}
            </L>
          </div>
          <div className="mx-5 text-2xl font-bold text-gray-500">
            <L>
              {'Terjemahan'}
              {'Translation'}
            </L>
          </div>
          <div className="mx-5 text-2xl font-bold text-gray-500">
            <L>
              {'Subtitle'}
              {'Subtitles'}
            </L>
          </div>
          <div className="mx-5 text-2xl font-bold text-gray-500">
            <L>
              {'Transkripsi'}
              {'Transcription'}
            </L>
          </div>
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
            <L>
              <>Dapatkan estimasi biaya proofreading, terjemahan, subtitle, dan transkripsi, gratis!</>
              <>Get cost estimation of proofreading, translation, subtitles and transcription, for free! </>
            </L>
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
