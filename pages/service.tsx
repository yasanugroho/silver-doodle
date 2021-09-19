//lib
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { L, _ } from '../lib/i18n';
import { useRouter } from 'next/router';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { listLayanan, serviceText, text } from '../utils/IndividualsVariables';
import { XerpihanServices, csPerson, checklist } from '../lib/images';
//component
import Tabs from '../components/Tabs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Untuk Individual', 'For Individuals') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="mx-auto container px-8 max-w-5xl flex flex-col-reverse md:flex-row">
          <div className="md:w-5/6 pb-6 md:pb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-left mb-4">
              {_(l, 'Layanan bahasa dengan pemesanan yang ', 'Language service with order ')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-xerpihan-primary-600 ">
                {_(l, 'mudah dan terjangkau', 'easy and affordable')}
              </span>
            </h1>
            <p className="md:text-2xl text-gray-500 mb-4">
              {_(
                l,
                'Dibantu oleh Ahli Bahasa Profesional dengan Pendekatan Personal.',
                'Helped by Expert Ahli Bahasa Profesional dengan Pendekatan Personal.',
              )}
            </p>
          </div>

          <div className="md:w-1/6 w-2/4 mx-auto md:flex md:flex-row-reverse">
            <Image src={csPerson} alt="cs-img" objectFit="contain" className="mt-auto" />
          </div>
        </div>
      </div>
      <div className="relative mb-5">
        <div className="w-full h-full flex flex-col absolute">
          <div className="flex-1 bg-xerpihan-hero-gradient-end dark:bg-gray-800"></div>
          <div className="flex-1"></div>
        </div>
        <div className="max-w-5xl px-4 md:px-8 mx-auto relative">
          <div className="border-2 text-lg rounded-md p-4 bg-white dark:bg-black">
            <div className="py-2 px-4 md:px-28">
              <h2 className="text-lg text-black dark:text-white">
                {_(
                  l,
                  'Xerpihan dapat membantu menyelesaikan kebutuhan bahasa personal Anda.',
                  'Xerpihan can help you menyelesaikan kebutuhan bahasa personal Anda.',
                )}
              </h2>
              <ul className="block md:grid grid-flow-col md:grid-cols-2 md:grid-rows-4 my-4 ">
                {text.map((val: serviceText, index: number) => {
                  if (val.id != '')
                    return (
                      <li className="flex items-center" key={index}>
                        <div className="w-1/6 mr-3">
                          <Image src={checklist} alt={val.id} />
                        </div>
                        <p className="w-5/6 text-sm md:text-base text-black dark:text-white mb-0">
                          {_(l, val.id, val.en)}
                        </p>
                      </li>
                    );
                  else {
                    return (
                      <React.Fragment>
                        <li></li>
                        <li className="md:ml-14">
                          <Link href="/order">
                            <a className="flex justify-between xerp-a-button p-2 items-center mt-6 md:mt-0 md:w-2/3 px-4">
                              <p>{_(l, 'Order sekarang', 'Order now')}</p>
                              <ArrowSmRightIcon className=" w-8" />
                            </a>
                          </Link>
                        </li>
                      </React.Fragment>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-10 space-y-12">
        <h1 className="text-2xl font-bold">
          {_(l, 'Mengapa menggunakan layanan kami?', 'Why you should use our services?')}
        </h1>
        <div className="w-full mx-auto md:grid md:grid-cols-3 px-8 md:px-0 md:pl-8 gap-10 max-w-5xl items-center">
          <div className="text-left space-y-6">
            <h1 className="text-4xl font-bold">{_(l, 'Untuk semua dokumen kamu', 'For your documents')}</h1>
            <p className="text-xl">
              {_(l, 'Kami siap melayani segala jenis kebutuhan Anda.', 'We are ready to serve your kebutuhan')}
            </p>
          </div>
          <div className="col-span-2 mt-3 md:mt-0">
            <Image src={XerpihanServices} alt="Layanan Xerpihan"></Image>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <div className="block md:grid md:grid-cols-2 gap-10 container max-w-5xl mx-auto py-20 px-10">
          {listLayanan.map(el => (
            <div className="text-left p-4 space-y-4" key={el.titleId}>
              <Image src={el.img} alt="icon" />
              <h1 className="text-black dark:text-white text-3xl font-bold">{_(l, el.titleId, el.titleEn)}</h1>
              <h2 className="text-lg text-black dark:text-white font-light">{_(l, el.subTitleId, el.subTitleEn)}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center pt-28">
        <h1 className=" text-3xl font-bold">
          {_(l, 'Pilih Paket yang Sesuai dengan Kebutuhan Kamu', 'Choose the Package That Fits Your Needs')}
        </h1>
      </div>
      <div>
        <Tabs />
      </div>
      <Footer />
    </LayoutPlain>
  );
};

export default Page;
