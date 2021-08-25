import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import illustration from '../images/IllustrationCaseStudy.svg';
import { L, _ } from '../lib/i18n';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Studi Kasus', 'Case Studies') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800 py-10">
        <Header></Header>
        <div className="mx-auto container px-8 max-w-5xl">
          <h1 className="text-5xl font-bold text-left">
            <L>
              {'Dipercaya '}
              {'Trusted by '}
            </L>
            <span className="text-xerpihan-primary-500">1000+</span>
            <L>
              {' klien dari '}
              {' clients from '}
            </L>
            <span className="text-xerpihan-primary-500">50+</span>
          </h1>
          <h1 className="text-5xl font-bold text-left">
            <L>
              {' universitas dan perusahaan.'}
              {' university and company.'}
            </L>
          </h1>
          <p className="text-3xl text-gray-500 mb-0">
            <L>{'Kami percaya merek dan perusahaan adalah penghubung antara perusahaan dengan pelanggan mereka.'}</L>
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid-cols-3 grid py-10">
        <div className="text-left">
          <h1 className="text-4xl text-xerpihan-primary-500 font-bold mb-0">Studi Kasus</h1>
          <p className="text-lg text-gray-500 font-light">
            Kami percaya merek dan perusahaan adalah penghubung antara perusahaan dengan pelanggan mereka.
          </p>
          <Image src={illustration} alt=""></Image>
        </div>
        <div className="col-span-2">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={1000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 2,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable>
            <div className="flex-row m-4">
              <div className="bg-xerpihan-primary-500 text-white mt-4 text-left max-w-xl rounded-xl p-3">
                <h1 className="text-2xl text-bold mb-0">Implementation of fuzzy logic</h1>
                <p className="text-lg text-light">Institut Teknologi Surabaya</p>
                <div className="flex justify-end">
                  <Link href="/">
                    <a className="rounded-2xl xerp-b-button items-center m-3 mr-0 md:0">
                      <span>Detail</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="bg-xerpihan-secondary text-white mt-4 text-left max-w-xl rounded-xl p-3">
                <h1 className="text-2xl text-bold mb-0">Implementation of fuzzy logic</h1>
                <p className="text-lg text-light">Institut Teknologi Surabaya</p>
                <div className="flex justify-end">
                  <Link href="/">
                    <a className="rounded-2xl xerp-b-button items-center m-3 mr-0 md:0">
                      <span>Detail</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-row m-4">
              <div className="bg-xerpihan-primary-500 text-white mt-4 text-left max-w-xl rounded-xl p-3">
                <h1 className="text-2xl text-bold mb-0">Implementation of fuzzy logic</h1>
                <p className="text-lg text-light">Institut Teknologi Surabaya</p>
                <div className="flex justify-end">
                  <Link href="/">
                    <a className="rounded-2xl xerp-b-button items-center m-3 mr-0 md:0">
                      <span>Detail</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="bg-xerpihan-secondary text-white mt-4 text-left max-w-xl rounded-xl p-3">
                <h1 className="text-2xl text-bold mb-0">Implementation of fuzzy logic</h1>
                <p className="text-lg text-light">Institut Teknologi Surabaya</p>
                <div className="flex justify-end">
                  <Link href="/">
                    <a className="rounded-2xl xerp-b-button items-center m-3 mr-0 md:0">
                      <span>Detail</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-row m-4">
              <div className="bg-xerpihan-primary-500 text-white mt-4 text-left max-w-xl rounded-xl p-3">
                <h1 className="text-2xl text-bold mb-0">Implementation of fuzzy logic</h1>
                <p className="text-lg text-light">Institut Teknologi Surabaya</p>
                <div className="flex justify-end">
                  <Link href="/">
                    <a className="rounded-2xl xerp-b-button items-center m-3 mr-0 md:0">
                      <span>Detail</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="bg-xerpihan-secondary text-white mt-4 text-left max-w-xl rounded-xl p-3">
                <h1 className="text-2xl text-bold mb-0">Implementation of fuzzy logic</h1>
                <p className="text-lg text-light">Institut Teknologi Surabaya</p>
                <div className="flex justify-end">
                  <Link href="/">
                    <a className="rounded-2xl xerp-b-button items-center m-3 mr-0 md:0">
                      <span>Detail</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer></Footer>
    </LayoutPlain>
  );
};

export default Page;
