import { useRouter } from 'next/router';
import React from 'react';
import LayoutPlain from '../components/LayoutPlain';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import { L, _ } from '../lib/i18n';
import Image from 'next/image';
import XerpihanServices from '../images/Xerpihan-1.svg';
import ServicesIcon1 from '../images/Icon-1.svg';
import ServicesIcon2 from '../images/Icon-2.svg';
import ServicesIcon3 from '../images/Icon-3.svg';
import ServicesIcon4 from '../images/Icon-4.svg';
import { string } from 'yargs';
import Link from 'next/link';
import { ArrowSmRightIcon, CheckIcon } from '@heroicons/react/solid';
export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;
  interface serviceText {
    id: string;
    en: string;
  }
  const text: serviceText[] = [
    { id: 'Proofreading skripsi dan tesis', en: 'Script and thesis proofreading' },
    { id: 'Terjemahan dokumen', en: 'Document translate' },
    { id: 'Pemberian subtitle pada kanal YouTube', en: 'Subtitle on youtube channel' },
    { id: 'Transkripsi audio clip', en: 'Audio clip transcript' },
    { id: 'Jasa perbaikan proposal', en: 'Proposal perbaikan' },
    { id: '…dan masih banyak lagi, sesuaikan dengan kebutuhan anda!', en: '..and many more, ' },
    { id: '', en: '' },
  ];
  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Untuk Individual', 'For Individuals') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="mx-auto container px-8 max-w-5xl">
          <h1 className="text-5xl font-bold text-left">
            <L>
              {'Layanan bahasa dengan pemesanan yang '}
              {'Language service with order wkwwkw'}
            </L>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-xerpihan-primary-600 ">
              <L>
                {'mudah dan terjangkau'}
                {'easy and affordable'}
              </L>
            </span>
          </h1>
          <p className="text-2xl text-gray-500 mb-0">
            <L>
              {'Dibantu oleh Ahli Bahasa Profesional dengan Pendekatan Personal.'}
              {'Helped by Expert Ahli Bahasa Profesional dengan Pendekatan Personal.'}
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
            <div className="pb-0 p-4">
              <h2 className="text-lg text-black mb-4">
                <L>
                  {'Xerpihan dapan membantu menyelesaikan kebutuhan bahasa personal anda.'}
                  {'Xerpihan can help you menyelesaikan kebutuhan bahasa personal anda.'}
                </L>
              </h2>
              <ul className="block md:grid grid-flow-col md:grid-cols-2 md:grid-rows-4 mt-2">
                {text.map((val: serviceText, index: number) => {
                  if (val.id != '')
                    return (
                      <li className="flex" key={index}>
                        <div className="mr-3">
                          <CheckIcon className="ml-1 w-10 text-xerpihan-primary-500 font-bold" />
                        </div>
                        <p className="text-md text-black mb-0">{_(l, val.id, val.en)}</p>
                      </li>
                    );
                  else {
                    return (
                      <li className="mt-3">
                        <Link href="/">
                          <a className="inline-flex xerp-a-button items-center">
                            <span>
                              <L>
                                {'Order sekarang'}
                                {'Order now'}
                              </L>
                            </span>
                            <ArrowSmRightIcon className="ml-1 w-8" />
                          </a>
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-5 mb-5">
        <h1 className="text-gray-500 text-2xl font-bold">
          <L>
            {'Mengapa menggunakan layanan kami?'}
            {'Why you should use our services?'}
          </L>
        </h1>
        <div className="container mx-auto md:grid md:grid-cols-3 px-8 max-w-5xl items-center flex-col-reverse flex">
          <div className="text-left">
            <h1 className="text-black text-3xl font-bold mb-2">
              <L>
                {'Untuk dokumen kamu'}
                {'For your documents'}
              </L>
            </h1>
            <h2 className="text-md text-black font-normal">
              <L>
                {'Kami siap melayani berbagai jenis kebutuhan anda.'}
                {'We are ready to serve your kebutuhan'}
              </L>
            </h2>
          </div>
          <div className="col-span-2">
            <Image src={XerpihanServices} alt="Layanan Xerpihan"></Image>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <div className="pt-5 mb-5 block md:grid md:grid-cols-2 gap-4 container max-w-5xl mx-auto">
          <div className="text-center md:text-left p-4">
            <Image src={ServicesIcon1} alt="icon" />
            <h1 className="text-black text-3xl font-bold mb-3">
              <L>
                {'Lebih dari 1.000 klien mempercayai Xerpihan'}
                {'Over than 1.000 clients trust Xerpihan'}
              </L>
            </h1>
            <h2 className="text-md text-black font-light">
              <L>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
              </L>
            </h2>
          </div>
          <div className="text-center md:text-left p-4">
            <Image src={ServicesIcon2} alt="icon" />
            <h1 className="text-black text-3xl font-bold mb-3">
              <L>
                {'Cukup Sekali Pesan'}
                {'Order Once'}
              </L>
            </h1>
            <h2 className="text-md text-black font-light">
              <L>
                {'Sekali saja kamu pesan, nikmati layanan hingga puas. Tidak ada batas revisi.'}
                {'Once you order, enjoy the service until you are satisfied. No revision limit.'}
              </L>
            </h2>
          </div>
          <div className="text-center md:text-left p-4">
            <Image src={ServicesIcon3} alt="icon" />
            <h1 className="text-black text-3xl font-bold mb-3">
              <L>
                {'Ahli Bahasa Profesional'}
                {'Profesional Translator'}
              </L>
            </h1>
            <h2 className="text-md text-black font-light">
              <L>
                {'Lulusan Sastra inggris, Penggunaan Referensi Terbaru'}
                {'English Major Graduates, Use Newest Reference'}
              </L>
            </h2>
          </div>
          <div className="text-center md:text-left p-4">
            <Image src={ServicesIcon4} alt="icon" />
            <h1 className="text-black text-3xl font-bold mb-3">
              <L>
                {'Jaminan Kerahasiaan'}
                {'Profesional Translator'}
              </L>
            </h1>
            <h2 className="text-md text-black font-light">
              <L>
                {'Nam ultricies ligula massa, ultricies efficitur risus efficitur quis. Aliquam vitae ipsum lectus.'}
                {'Nam ultricies ligula massa, ultricies efficitur risus efficitur quis. Aliquam vitae ipsum lectus.'}
              </L>
            </h2>
          </div>
        </div>
      </div>
      <div className="text-center pt-5">
        <h1 className="text-black text-3xl font-bold mb-3">
          <L>
            {'Pilih Paket Yang Sesuai Dengan Kebutuhan Kamu'}
            {'Choose the Package That Fits Your Needs'}
          </L>
        </h1>
        <h2 className="text-md text-black font-light">
          <L>
            {'Nam ultricies ligula massa, ultricies efficitur risus efficitur quis. Aliquam vitae ipsum lectus.'}
            {'Nam ultricies ligula massa, ultricies efficitur risus efficitur quis. Aliquam vitae ipsum lectus.'}
          </L>
        </h2>
      </div>
      <div>
        <Tabs></Tabs>
      </div>
      <Footer />
    </LayoutPlain>
  );
};

export default Page;
