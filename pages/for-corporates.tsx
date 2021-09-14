import React from 'react';
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
    { id: 'Penyuntingan laporan', en: 'Penyuntingan laporan' },
    { id: 'Pembuatan subtitle video internal', en: 'Pembuatan subtitle video internal' },
    { id: 'Transkripsi rapat direksi', en: 'Transkripsi rapat direksi' },
    { id: '…dan masih banyak lagi, sesuaikan dengan kebutuhan bisnis anda!', en: '..and many more, ' },
    { id: 'Terjemahan situs', en: 'Terjemahan situs' },
  ];

  const SectionComp = (
    <div className="max-w-5xl px-8 py-4 mx-auto">
      {dataSection.map(el => (
        <section key={el.title} className={`flex flex-col items-center my-14 space-x-4 ${el.styling}`}>
          <div className="md:w-1/2 flex mb-5 md:mb-0 justify-center items-center">
            <figure className="w-36 h-36 md:w-48 md:h-48">
              <Image src={el.img} alt="Proofreading" objectFit="contain" />
            </figure>
          </div>
          <div className="md:w-1/2 space-y-3">
            <p className="text-xl font-bold mb-1 text-gray-500">{_(l, el.title, el.titleEn)}</p>
            <h2 className="text-3xl font-bold mb-2">{_(l, el.subTitle, el.subTitleEn)}</h2>
            <p className="text-lg">{_(l, el.content, el.contentEn)}</p>
          </div>
        </section>
      ))}
    </div>
  );

  const card = (
    <div className="grid md:grid-cols-3 gap-4 py-20 items-center">
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
            <h1 className="text-3xl md:text-5xl font-bold text-left md:mb-2">
              {_(l, 'Orientasi pada ', 'Oriented to ')}
              <span className="text-xerpihan-secondary">{_(l, 'brand bisnis', 'business brand')}</span>,
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold text-left md:whitespace-nowrap mb-4">
              {_(l, 'pengerjaan hingga ', 'Execution up to ')}
              <span className="text-xerpihan-primary-500 md:whitespace-nowrap">
                {_(l, 'detail terkecil', 'smallest detail')}
              </span>
              .
            </h1>
            <p className="text-xl md:text-2xl text-gray-500">
              <L>
                <p>
                  Berikan tulisan terbaik untuk mewakili brand bisnis dengan <br /> teknologi dan tim profesional.
                </p>
                <p>
                  Hands on your best script to represent your business brand with <br /> technology and profesional
                  team.
                </p>
              </L>
            </p>
          </div>
          <div className="w-1/4  flex-row-reverse md:flex hidden">
            <Image src={csCorp} alt="cs-img" objectFit="contain" className="mt-auto" />
          </div>
        </div>
      </div>
      <div className="relative mb-5">
        <div className="w-full h-full flex flex-col absolute">
          <div className="flex-1 bg-xerpihan-hero-gradient-end dark:bg-gray-800"></div>
          <div className="flex-1"></div>
        </div>
        <div className="max-w-5xl py-4 px-4 md:px-8 mx-auto relative">
          <div className="border-2 text-lg rounded-md p-2 bg-white dark:bg-black  flex flex-col">
            <div className="p-2 md:p-4 space-y-6">
              <h2 className="text-lg text-black dark:text-white mb-4 text-center">
                {_(
                  l,
                  'Xerpihan dapan membantu menyelesaikan kebutuhan bahasa personal anda.',
                  'Xerpihan can help you menyelesaikan kebutuhan bahasa personal anda.',
                )}
              </h2>
              <ul className="grid md:grid-cols-2 mt-2 gap-2 mx-4 md:mx-10">
                {text.map((val: serviceText, index: number) => (
                  <li className="flex items-center space-x-4" key={index}>
                    <div className="w-1/6">
                      <Image src={checklist} alt={val.id} />
                    </div>
                    <div className="w-5/6">
                      <p className="text-black dark:text-white md:whitespace-normal text-sm md:text-base">
                        {_(l, val.id, val.en)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <h2 className="text-center text-sm md:text-2xl">
                {_(l, 'Konsultasikan kebutuhan bisnis anda, gratis!', 'Konsultasikan kebutuhan bisnis anda, gratis!')}
              </h2>
              <div className="justify-center block md:flex font-semibold space-x-3">
                <a href="https://wa.me/083119161413" target="_blank" rel="noreferrer">
                  <div className=" xerp-b-button items-center p-2 px-4 md:0">
                    <p>
                      {_(l, 'WhatsApp ke ', 'WhatsApp to ')}
                      <span className="underline text-xerpihan-primary-500 ">+62 831 1916 1413</span>
                    </p>
                  </div>
                </a>

                <a href="mailto:layanan@xerpihan.id" target="_blank" rel="noreferrer">
                  <div className=" xerp-b-button items-center  p-2 px-4 md:0 ">
                    <p>
                      {_(l, 'Email ke ', 'Email to ')}
                      <span className="underline text-xerpihan-primary-500">layanan@xerpihan.id</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b">
        <div className="max-w-5xl py-4 mx-auto">
          <h1 className=" text-2xl font-bold text-center">{_(l, 'Layanan Bisnis', 'Business Services')}</h1>
          {SectionComp}
        </div>
      </div>
      <div className="max-w-5xl px-8 py-4 mx-auto pb-5">
        <h1 className="text-2xl font-bold text-center py-3">{_(l, 'Budaya Tim Kami', 'Team Culture')}</h1>
        <div className="grid md:grid-cols-3 gap-6 py-5 border-b-4 border-gray">
          {listBudaya.map(el => (
            <div key={el.subTitleId} className="space-y-6">
              <div className="md:justify-left md:w-32 ">
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
          <div className="grid md:grid-cols-5 grid-cols-3 gap-4 md:mx-20">
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
