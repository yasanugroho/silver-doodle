import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
// component
import { L, _ } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutPlain from '../components/LayoutPlain';
import { listLogoTim } from '../utils/HomeVariables';
import { csCorp, checklist, TeamIcon } from '../lib/images';
import { dataSection, listBudaya, layanan } from '../utils/CorporateVariables';

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
    { id: '…dan masih banyak lagi, sesuaikan dengan kebutuhan bisnis anda!', en: '..and many more, ' },
    { id: 'Lorem ipsum', en: 'Lorem ipsum' },
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

  const card = (
    <div className="grid grid-cols-3 gap-4 py-20 items-center">
      <h1 className="text-gray-500 text-2xl text-left font-bold">
        {_(l, 'Mengapa Menggunakan Layanan Kami?', 'Why Choose Us?')}
      </h1>
      {layanan.map(el => (
        <div className="shadow-xl rounded-xl p-5 h-full" key={el.titleEn}>
          <h1 className="text-lg text-black mb-2">{_(l, el.titleId, el.titleEn)}</h1>
          <p className="text-md font-light text-gray-500 mb-0">{_(l, el.subTitleId, el.subTitleEn)}</p>
        </div>
      ))}
    </div>
  );

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Untuk Korporat', 'For Corporates') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="mx-auto container px-8 max-w-5xl flex">
          <div className="w-3/4">
            <h1 className="text-5xl font-bold text-left mb-4">
              {_(l, 'Orientasi pada ', 'Oriented to ')}
              <span className="text-xerpihan-secondary">{_(l, 'brand bisnis', 'business brand')}</span>,
            </h1>
            <h1 className="text-5xl font-bold text-left  whitespace-nowrap mb-4">
              {_(l, 'pengerjaan hingga ', 'Execution up to ')}
              <span className="text-xerpihan-primary-500 whitespace-nowrap">
                {_(l, 'detail terkecil', 'smallest detail')}
              </span>
              .
            </h1>
            <p className="text-3xl text-gray-500 font-bold">
              <L>
                <p>
                  Berikan tulisan terbaik untuk mewakili brand <br /> bisnis dengan teknologi dan tim profesional.
                </p>
                <p>
                  Hands on your best script to represent your business brand <br /> with technology and profesional
                  team.
                </p>
              </L>
            </p>
          </div>
          <div className="w-1/4 flex flex-row-reverse">
            <Image src={csCorp} alt="cs-img" objectFit="contain" className="mt-auto" />
          </div>
        </div>
      </div>
      <div className="relative mb-5">
        <div className="w-full h-full flex flex-col absolute">
          <div className="flex-1 bg-xerpihan-hero-gradient-end dark:bg-gray-800"></div>
          <div className="flex-1"></div>
        </div>
        <div className="max-w-5xl py-4 px-8 mx-auto relative">
          <div className="border-2 text-lg rounded-md p-5 bg-white dark:lg-black flex flex-col">
            <div className="p-4 space-y-10">
              <h2 className="text-lg text-black mb-4 text-center">
                {_(
                  l,
                  'Xerpihan dapan membantu menyelesaikan kebutuhan bahasa personal anda.',
                  'Xerpihan can help you menyelesaikan kebutuhan bahasa personal anda.',
                )}
              </h2>
              <ul className="block md:grid md:grid-cols-2 gap-4 mt-2 mx-10">
                {text.map((val: serviceText, index: number) => (
                  <li className="flex items-center space-x-4" key={index}>
                    <div className="w-[36px] h-[28px]">
                      <Image src={checklist} alt={val.id} />
                    </div>
                    <div>
                      <p className="text-black whitespace-normal">{_(l, val.id, val.en)}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <h2 className="text-center">
                {_(l, 'Konsultasikan kebutuhan bisnis anda, gratis!', 'Konsultasikan kebutuhan bisnis anda, gratis!')}
              </h2>
              <div className="justify-center block md:flex font-semibold space-x-3">
                <a
                  className=" xerp-b-button items-center p-2 px-4 md:0"
                  href="https://wa.me/083119161413"
                  target="_blank"
                  rel="noreferrer">
                  <p>
                    {_(l, 'WhatsApp ke ', 'WhatsApp to')}
                    <span className="underline text-xerpihan-primary-500 ">+62 831 1916 1413</span>
                  </p>
                </a>

                <a
                  className=" xerp-b-button items-center  p-2 px-4 md:0 "
                  href="mailto:layanan@xerpihan.id"
                  target="_blank"
                  rel="noreferrer">
                  <p>
                    {_(l, 'Email ke ', 'Email to')}
                    <span className="underline text-xerpihan-primary-500">layanan@xerpihan.id</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end">
        <div className="max-w-5xl py-4 mx-auto">
          <h1 className=" text-2xl font-bold text-center">{_(l, 'Layanan Bisnis', 'Business Services')}</h1>
          {SectionComp}
        </div>
      </div>
      <div className="max-w-5xl px-8 py-4 mx-auto pb-5">
        <h1 className="text-2xl font-bold text-center py-3">{_(l, 'Budaya Tim Kami', 'Team Culture')}</h1>
        <div className="grid grid-cols-3 gap-6 py-5 border-b-4 border-gray">
          {listBudaya.map(el => (
            <div key={el.subTitleId} className="space-y-6">
              <div className="justify-left w-32 ">
                <Image src={TeamIcon} alt={el.titleEn} />
              </div>
              <h2 className="text-2xl font-bold">{_(l, el.titleId, el.titleEn)}</h2>
              <h3 className="font-light text-lg">{_(l, el.subTitleId, el.subTitleEn)}</h3>
            </div>
          ))}
        </div>
        {card}

        <div className="py-10 space-y-10">
          <h1 className="text-gray-500 text-2xl text-center font-bold mb-20">
            {_(
              l,
              'Layanan kami telah digunakan oleh tim-tim terkemuka di Indonesia',
              'Our team had been colaborated with reputable team in Indonesia',
            )}
          </h1>
          <div className="flex justify-between mx-20">
            {listLogoTim.map(el => (
              <div key={el}>
                <Image src={el} alt="Proofreading" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </LayoutPlain>
  );
};

export default Page;
