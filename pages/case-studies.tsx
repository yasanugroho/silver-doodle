import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { L, _ } from '../lib/i18n';
import { illustration, csKasus } from '../lib/images';
import { caseStudy1, theysSaid, komentar, media } from '../utils/CaseStudyVars';
import Carousel from 'react-grid-carousel';

import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { listLogoClient } from '../utils/HomeVariables';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Studi Kasus', 'Case Studies') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="mx-auto container px-8 max-w-5xl md:flex md:space-x-10">
          <div className="md:w-1/6 w-1/2 md:flex flex-row-reverse mx-auto">
            <Image src={csKasus} alt="cs-img" objectFit="contain" className="mt-auto" />
          </div>
          <div className="md:w-5/6 space-y-4 pb-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-left">
                {_(l, 'Dipercaya ', 'Trusted by ')}
                <span className="text-xerpihan-primary-500">1000+</span>
                {_(l, ' klien dari  ', ' clients from ')}
                <span className="text-xerpihan-primary-500">50+</span>
              </h1>
              <h1 className="text-3xl md:text-5xl  font-bold text-left">
                {_(l, ' universitas dan perusahaan.', ' university and company.')}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-500">
              <L>
                <p>
                  Kami percaya citra dan pelayanan adalah <br />
                  penghubung antara perusahaan dengan
                  <br /> pelanggan mereka.
                </p>
                <p>
                  We believe brand and service are <br />
                  the bridges between company and
                  <br /> their clients.
                </p>
              </L>
            </p>
          </div>
        </div>
      </div>
      <div className=" px-8 max-w-5xl container mx-auto md:py-10 md:grid-cols-3 md:grid gap-6 mt-10">
        <div className="text-left space-y-6">
          <h1 className="text-4xl font-bold"> {_(l, 'Studi Kasus', 'Case Study')}</h1>
          <p className="text-lg text-gray-500 font-light">
            {_(
              l,
              'Berikut beberapa klien dan contoh portofolio yang pernah kami tangani terkait layanan jasa proofreading, terjemahan, subtitle, dan transkripsi.',
              'Here are some clients and examples of portfolios that we have worked with regarding proofreading, translation, subtitle, and transcription services.',
            )}
          </p>
          <Image className="mt-6" src={illustration} alt="" height="336" width="360" />
        </div>
        <div className="col-span-2 my-auto">
          <Carousel cols={2} rows={2} gap={10} loop autoplay={1000}>
            {caseStudy1.map((el, idx) => (
              // eslint-disable-next-line react/jsx-key
              <Carousel.Item key={idx}>
                <div
                  key={idx}
                  className={` ${
                    idx % 2 === 0 ? 'bg-xerpihan-secondary ' : 'bg-xerpihan-primary-500 '
                  } text-white mt-4 text-left max-w-xl rounded-xl p-3 h-[200px] content-between flex-wrap flex`}>
                  <h1 className="text-xl text-bold">{_(l, el.title.substring(0, 35), el.titleEn.substring(0, 35))}</h1>
                  <p className="text-lg text-light">
                    {_(l, el.subtitle.substring(0, 52), el.subtitleEn.substring(0, 52))}
                  </p>
                  <div className="ml-auto">
                    <a
                      href={el.link}
                      target="_blank"
                      className="px-3 py-2 items-center my-4 text-xerpihan-primary-500 bg-white rounded-lg"
                      rel="noreferrer">
                      <span>{_(l, 'Detail', 'Detail')}</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="grid md:grid-cols-5 grid-cols-3 gap-4 md:mx-20 items-center px-6 mt-6">
        {listLogoClient.map(el => (
          <div key={el} className="h-24 w-20 flex items-center mx-auto">
            <Image src={el} alt="Proofreading" />
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto text-center py-10 px-4 md:px-0">
        <h1 className="pb-16 text-4xl font-bold mb-0">{_(l, 'Apa Kata Mereka?', 'What Do They Say?')}</h1>
        {theysSaid.map((el, idx) => (
          <div
            className={`md:flex px-4 md:px-0 justify-between ${idx % 2 !== 0 && 'flex-row-reverse'} mb-20`}
            key={el.name}>
            <div className="h-full md:w-1/2">
              <Image src={el.img} alt={el.name} />
            </div>
            <div className="text-left p-3 md:w-1/2">
              <p className="md:text-xl font-light text-black dark:text-white">{_(l, el.title, el.titleEn)}</p>
              <div className="mt-10">
                <p className=" font-bold mb-0">{el.name}</p>
                <p className=" font-light text-gray-500">{el.positon}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-100 bg-black  bg-opacity-75 text-center py-10">
        <h1 className="text-white text-4xl font-bold">{_(l, 'Komentar Akademisi', 'Academicians Comments')}</h1>
        <div className="max-w-5xl grid md:grid-cols-3 gap-6 mx-4 md:mx-auto mt-10">
          {komentar.map(el => (
            <div className="p-8 rounded-lg relative bg-white dark:bg-gray-900" key={el.name}>
              <Image src={el.img} alt="..." width="120" height="120" className="rounded-full object-cover" />
              <p className=" font-bold mb-0 mt-3">{el.name}</p>
              <p className=" font-light text-gray-500 dark:text-gray-400 mb-0">{el.from}</p>
              <p className="text-sm font-light text-justify dark:text-white tracking-tight mt-4">
                {_(l, el.title, el.titleEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center py-10 max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold my-8">{_(l, 'Diliput Berbagai Media', 'Media Coverage')}</h1>
        {media.map(el => (
          <div className="grid md:grid-cols-4 py-4 px-10 md:space-x-8" key={el.name}>
            <Image src={el.logo} alt="" objectFit="contain" width={150} height={150} />
            <div className="col-span-3 text-left">
              <a href={el.url} target="_blank" rel="noreferrer" className="text-black hover:text-gray-500">
                <p className="text-base font-light dark:text-white">{_(l, el.title, el.titleEn)}</p>
              </a>
              <p className=" font-bold mb-0 mt-3">{el.name}</p>
              <p className="font-light text-gray-500 mb-0">{_(l, el.from, el.from)}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </LayoutPlain>
  );
};

export default Page;
