import { ArrowSmRightIcon, CheckIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { L, _ } from '../lib/i18n';
// import CheckIcon from '../images/Path.svg';
import TeamIcon from '../images/TeamIcon.svg';
import BrandLogo from '../images/Brand-Logo.png';
import Image from 'next/image';
import { proofreading, translation, subtitle, transcription } from '../lib/images';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;
  interface serviceText {
    id: string;
    en: string;
  }
  const text: serviceText[] = [
    { id: 'Terjemahan laporan', en: 'Script translate' },
    { id: 'Terjemahan dokumen', en: 'Document translate' },
    { id: 'Lorem ipsum', en: 'Lorem ipsum' },
    { id: 'Lorem ipsum', en: 'Lorem ipsum' },
    { id: 'Lorem ipsum', en: 'Lorem ipsum' },
    { id: 'Lorem ipsum', en: 'Lorem ipsum' },
    { id: '…dan masih banyak lagi, sesuaikan dengan kebutuhan bisnis anda!', en: '..and many more, ' },
  ];
  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Untuk Korporat', 'For Corporates') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="mx-auto container px-8 max-w-5xl">
          <h1 className="text-5xl font-bold text-left">
            <L>
              {'Orientasi pada '}
              {'Oriented to '}
            </L>
            <span className="text-xerpihan-secondary">
              <L>
                {'brand bisnis'}
                {'business brand'}
              </L>
            </span>
            ,
          </h1>
          <h1 className="text-5xl font-bold text-left">
            <L>
              {'pengerjaan hingga '}
              {'Execution up to '}
            </L>
            <span className="text-xerpihan-primary-500">
              <L>
                {'detail terkecil'}
                {'smallest detail'}
              </L>
            </span>
            .
          </h1>
          <p className="text-2xl text-gray-500 mb-0">
            <L>
              {'Berikan tulisan terbaik untuk mewakili brand bisnis dengan teknologi dan tim profesional.'}
              {'Hands on your best script to represent your business brand with technology and profesional team.'}
            </L>
          </p>
        </div>
      </div>
      <div className="relative mb-5">
        <div className="w-full h-full flex flex-col absolute">
          <div className="flex-1 bg-xerpihan-hero-gradient-end dark:bg-gray-800"></div>
          <div className="flex-1"></div>
        </div>
        <div className="max-w-5xl py-4 px-8 mx-auto relative">
          <div className="border-2 text-lg rounded-md p-5 bg-white dark:lg-black">
            <div className="p-4">
              <h2 className="text-lg text-black mb-4">
                <L>
                  {'Xerpihan dapan membantu menyelesaikan kebutuhan bahasa personal anda.'}
                  {'Xerpihan can help you menyelesaikan kebutuhan bahasa personal anda.'}
                </L>
              </h2>
              <ul className="block md:grid grid-flow-col md:grid-cols-2 md:grid-rows-4 mt-2">
                {text.map((val: serviceText, index: number) => {
                  return (
                    <li className="flex" key={index}>
                      <div className="mr-3">
                        <CheckIcon className="ml-1 w-10 text-xerpihan-primary-500 font-bold" />
                      </div>
                      <p className="text-md text-black mb-0">{_(l, val.id, val.en)}</p>
                    </li>
                  );
                })}
              </ul>
              <h2 className="text-center pt-5">Konsultasikan kebutuhan bisnis anda, gratis!</h2>
              <div className="justify-center block md:flex gap-4 pt-5">
                <Link href="/">
                  <a className="inline-flex xerp-b-button items-center m-3 md:0">
                    <span>
                      <L>
                        {'WhatsApp ke '}
                        {'WhatsApp to '}
                      </L>
                      <span className="underline text-xerpihan-primary-500">+62 812 9876 5432</span>
                    </span>
                    <ArrowSmRightIcon className="ml-1 w-8" />
                  </a>
                </Link>
                <Link href="/">
                  <a className="inline-flex xerp-b-button items-center m-3 md:0">
                    <span>
                      <L>
                        {'Email ke '}
                        {'Email to '}
                      </L>
                      <span className="underline text-xerpihan-primary-500">layanan@xerpihan.id</span>
                    </span>
                    <ArrowSmRightIcon className="ml-1 w-8" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end">
        <div className="max-w-5xl px-8 py-4 mx-auto">
          <h1 className="text-gray-500 text-2xl font-bold text-center">
            <L>
              {'Layanan Bisnis'}
              {'Business Services'}
            </L>
          </h1>
          <section className="flex flex-col md:flex-row-reverse items-center my-14">
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
          <section className="flex flex-col md:flex-row items-center my-14">
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
          <section className="flex flex-col md:flex-row-reverse items-center my-14">
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
          <section className="flex flex-col md:flex-row items-center my-14">
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
      </div>
      <div className="max-w-5xl px-8 py-4 mx-auto pb-5">
        <h1 className="text-gray-500 text-2xl font-bold text-center py-3">
          <L>
            {'Budaya Tim Kami'}
            {'Team Culture'}
          </L>
        </h1>
        <div className="grid grid-cols-3 gap-4 pb-5 border-b-4 border-gray">
          <div>
            <div className="justify-left w-32">
              <Image className="" src={TeamIcon} alt="" />
            </div>
            <h2 className="text-black text-2xl font-bold mt-2">
              <L>
                {'Komunikasi Yang Intensif'}
                {'Intensive Communication'}
              </L>
            </h2>
            <div className="text-black font-light text-lg mt-2">
              <L>
                {'Layanan berbasis komunikasi, online meeting yang fleksibel dan perhatian penuh dari kami.'}
                {'Communication-based services, flexible online meeting and full attention from us.'}
              </L>
            </div>
          </div>
          <div>
            <div className="justify-left w-32">
              <Image className="" src={TeamIcon} alt="" />
            </div>
            <h2 className="text-black text-2xl font-bold mt-2">
              <L>
                {'Tim Profesional yang Berdedikasi'}
                {'Dedicated Profesional Team'}
              </L>
            </h2>
            <div className="text-black font-light text-lg mt-2">
              <L>
                {
                  'Tim yang beranggotakan Ahli Bahasa, Liaison Officer / Person in Charge (Corporate Relationship), Digital Marketing.'
                }
                {
                  'Team consist of Expert Translator, Liaison Officer / Person in Charge (Corporate Relationship), Digital Marketing.'
                }
              </L>
            </div>
          </div>
          <div>
            <div className="justify-left w-32">
              <Image className="" src={TeamIcon} alt="" />
            </div>
            <h2 className="text-black text-2xl font-bold mt-2">
              <L>
                {'Penggunaan Teknologi Lanjutan'}
                {'Using Advanced Technology'}
              </L>
            </h2>
            <div className="text-black font-light text-lg mt-2">
              <L>
                {
                  'Menggunakan teknologi terkini seperti Computer Assisted Translation Tool, Proofreading Tool (typo, double space, punctuation, dll), Speech to Text, QA/QC.'
                }
                {
                  'Using advanced technology such as Computer Assisted Translation Tool, Proofreading Tool (typo, double space, punctuation, dll), Speech to Text, QA/QC.'
                }
              </L>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-5">
          <h1 className="text-gray-500 text-2xl text-left font-bold pt-5 pb-3">
            <L>
              {'Mengapa Menggunakan Layanan Kami?'}
              {'Why Choose Us?'}
            </L>
          </h1>
          <div className="shadow-2xl rounded-xl p-5">
            <h1 className="text-lg text-black mb-2">
              <L>
                {'Pengerjaan hingga detail terkecil'}
                {'Execution to the smallest detail'}
              </L>
            </h1>
            <p className="text-md font-light text-gray-500 mb-0">
              <L>
                {'Berikan tulisan terbaik untuk mewakili brand bisnis dengan teknologi dan tim profesional.'}
                {'Hands on your best script to represent your business brand with technology and profesional team.'}
              </L>
            </p>
          </div>
          <div className="shadow-2xl rounded-xl p-5">
            <h1 className="text-lg text-black mb-2">
              <L>
                {'Orientasi pada brand bisnis'}
                {'Business brand oriented'}
              </L>
            </h1>
            <p className="text-md font-light text-gray-500 mb-0">
              <L>
                {'Berikan tulisan terbaik untuk mewakili brand bisnis dengan teknologi dan tim profesional.'}
                {'Serve your best script to represent your business brand with technology and profesional team.'}
              </L>
            </p>
          </div>
        </div>
        <div className="py-10">
          <h1 className="text-gray-500 text-2xl text-center font-bold pt-5 pb-3">
            <L>
              {'Layanan kami telah digunakan oleh tim-tim terkemuka di Indonesia'}
              {'Our team had been colaborated with reputable team in Indonesia'}
            </L>
          </h1>
          <Image className="" src={BrandLogo} alt="" />
        </div>
      </div>
    </LayoutPlain>
  );
};

export default Page;
