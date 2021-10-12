import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { contactImg } from '../lib/images';
// component
import { L } from '../lib/i18n';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { listFitur, listLogoTim, dataSection } from '../utils/HomeVariables';

export const Index: React.FC = () => {
  const SectionComp = (
    <div className="max-w-5xl px-8 py-4 md:mx-auto">
      {dataSection.map(el => (
        <section
          key={el.title}
          className={`flex flex-col items-center my-20 space-x-4 ${
            el.styling ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}>
          <div className="md:w-1/2 flex mb-5 md:mb-0 justify-center items-center">
            <figure className="w-64 h-64 md:w-80 md:h-80">
              <Image src={el.img} alt="Proofreading" objectFit="contain" />
            </figure>
          </div>
          <div className="md:w-1/2 space-y-3">
            <p className="text-xl font-bold mb-1 text-gray-500">
              <L>
                {el.title}
                {el.titleEn}
              </L>
            </p>
            <h2 className="text-3xl font-bold mb-2">
              <L>
                {el.subTitle}
                {el.subTitleEn}
              </L>
            </h2>
            <p className="text-lg">
              <L>
                {el.content}
                {el.contentEn}
              </L>
            </p>
          </div>
        </section>
      ))}
    </div>
  );

  return (
    <LayoutPlain>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header />
        <L>
          <h1 className=" text-4xl md:text-6xl font-bold text-center">
            Layanan bahasa
            <br />
            <span className="text-xerpihan-primary-600 leading-normal">No.1</span> di Indonesia
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Indonesian <span className="text-xerpihan-primary-600 leading-normal">No.1</span>
            <br /> language service provider
          </h1>
        </L>
        <div className="grid grid-cols-2 text-center justify-center md:flex-wrap md:flex py-5">
          {listFitur.map(el => (
            <div className="mx-5 md:text-2xl font-bold text-gray-400" key={el.id}>
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
        <div className="max-w-5xl px-8 pt-8 md:pt-16 pb-10 mx-auto ">
          <div className="relative">
            <div className="border-2 px-5 text-lg rounded-md bg-white dark:bg-black overflow-hidden lg:flex lg:flex-1 md:flex-row">
              <div className="mt-5 mr-5">
                <Image src={contactImg} alt="cp" width={190} height={190} />
              </div>
              <div className="space-y-4 mb-5 lg:my-10">
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
                <div className="md:flex md:space-x-4 items-center">
                  <Link href="/order">
                    <a className="xerp-a-button flex items-center justify-between p-4 text-sm font-bold  md:w-[270px] h-[61px]">
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
                    className="xerp-b-button flex items-center justify-between lg:p-2.5 p-4   md:w-[270px]"
                    href="https://wa.me/+6283119161413"
                    target="_blank"
                    rel="noreferrer">
                    <div className=" text-sm font-bold">
                      <L>
                        <p className="m-0">
                          Konsultasi via WhatsApp <br />
                          +62 831 1916 1413
                        </p>
                        <p>
                          Consult via WhatsApp <br />
                          +62 831 1916 1413
                        </p>
                      </L>
                    </div>
                    <ArrowSmRightIcon className="  w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl px-8 mx-auto text-lg text-center text-[#A0A0A0] space-y-10">
        <L>
          <p>Layanan kami telah digunakan oleh tim-tim terkemuka di Indonesia</p>
          <p>Our services have been widely used by great teams in Indonesia</p>
        </L>
        <div className="grid md:grid-cols-5 grid-cols-3 gap-2 md:mx-20">
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
