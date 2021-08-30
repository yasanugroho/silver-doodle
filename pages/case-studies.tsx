import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import illustration from '../images/IllustrationCaseStudy.svg';
import brandLogo from '../images/BrandLogo2.svg';
import profile1 from '../images/Profile1.png';
import profile2 from '../images/Profile2.png';
import profile3 from '../images/Profile3.png';
import profile4 from '../images/Profile4.png';
import KoranTempo from '../images/KoranTempo.png';
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
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800 pb-10">
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
      <div className="max-w-5xl mx-auto p-4 md:px-0 md:py-10 md:grid-cols-3 md:grid">
        <div className="text-left">
          <h1 className="text-4xl text-xerpihan-primary-500 font-bold mb-0">Studi Kasus</h1>
          <p className="text-lg text-gray-500 font-light">
            Kami percaya merek dan perusahaan adalah penghubung antara perusahaan dengan pelanggan mereka.
          </p>
          <Image className="hidden md:block" src={illustration} alt=""></Image>
        </div>
        <div className="col-span-2">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2000}
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
            <div className="flex flex-col m-4">
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
            <div className="flex flex-col-reverse m-4">
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
            <div className="flex-col flex m-4">
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
      <div className="grid grid-cols-2 max-w-5xl mx-auto py-10">
        <Image src={brandLogo} alt=""></Image>
        <Image src={brandLogo} alt=""></Image>
      </div>
      <div className="max-w-3xl mx-auto text-center py-10">
        <h1 className="pb-10 text-4xl text-xerpihan-primary-500 font-bold mb-0">Apa Kata Mereka?</h1>
        <div className="grid grid-cols-2">
          <div className="h-full">
            <Image src={profile1} alt=""></Image>
          </div>
          <div className="text-left p-3">
            <h1 className="text-xl font-light text-black">
              Terima kasih teman-teman, pertahankan kerja bagus! Xerpihan harus dinominasikan untuk service of the year.
              Anda tidak akan menyesalinya.
            </h1>
            <p className="text-md font-bold mb-0">Alberto Donko</p>
            <p className="text-md font-light text-gray-500">CEO, Squareround</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-left p-3">
            <h1 className="text-xl font-light text-black">
              Menghemat waktu dan tenaga saya, persis seperti yang kurang dari bisnis kami. Xerpihan sangat berharga
              bagi perusahaan saya.
            </h1>
            <p className="text-md font-bold mb-0">Alex Parkinson</p>
            <p className="text-md font-light text-gray-500">Director, MyTravel.com</p>
          </div>
          <div className="h-full">
            <Image src={profile2} alt=""></Image>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="h-full">
            <Image src={profile3} alt=""></Image>
          </div>
          <div className="text-left p-3">
            <h1 className="text-xl font-light text-black">
              Xerpihan adalah sumber daya bisnis paling berharga yang pernah kami beli.
            </h1>
            <p className="text-md font-bold mb-0">Elizabeth Martin</p>
            <p className="text-md font-light text-gray-500">CEO, Abcs</p>
          </div>
        </div>
      </div>
      <div className="max-w-100 bg-gray-700 text-center py-10">
        <h1 className="text-white text-4xl font-bold">Komentar Akademisi</h1>
        <div className="max-w-5xl grid grid-cols-4 gap-4 mx-auto">
          <div className="p-5 rounded-lg relative bg-white">
            <Image src={profile4} alt="..." width="120" height="120" className="rounded-full object-cover" />
            <h1 className="text-base font-bold mb-0 mt-3">Albert Donko</h1>
            <h1 className="text-base font-light text-gray-500 mb-0">Universitas Gadjah Mada</h1>
            <p className="text-sm font-light text-justify tracking-tight">
              Terima kasih teman-teman, pertahankan kerja bagus! Xerpihan harus dinominasikan untuk service of the year.
              Anda tidak akan menyesalinya.
            </p>
          </div>
          <div className="p-5 rounded-lg relative bg-white">
            <Image src={profile4} alt="..." width="120" height="120" className="rounded-full object-cover" />
            <h1 className="text-base font-bold mb-0 mt-3">Albert Donko</h1>
            <h1 className="text-base font-light text-gray-500 mb-0">Universitas Gadjah Mada</h1>
            <p className="text-sm font-light text-justify tracking-tight">
              Terima kasih teman-teman, pertahankan kerja bagus! Xerpihan harus dinominasikan untuk service of the year.
              Anda tidak akan menyesalinya.
            </p>
          </div>
          <div className="p-5 rounded-lg relative bg-white">
            <Image src={profile4} alt="..." width="120" height="120" className="rounded-full object-cover" />
            <h1 className="text-base font-bold mb-0 mt-3">Albert Donko</h1>
            <h1 className="text-base font-light text-gray-500 mb-0">Universitas Gadjah Mada</h1>
            <p className="text-sm font-light text-justify tracking-tight">
              Terima kasih teman-teman, pertahankan kerja bagus! Xerpihan harus dinominasikan untuk service of the year.
              Anda tidak akan menyesalinya.
            </p>
          </div>
          <div className="p-5 rounded-lg relative bg-white">
            <Image src={profile4} alt="..." width="120" height="120" className="rounded-full object-cover" />
            <h1 className="text-base font-bold mb-0 mt-3">Albert Donko</h1>
            <h1 className="text-base font-light text-gray-500 mb-0">Universitas Gadjah Mada</h1>
            <p className="text-sm font-light text-justify tracking-tight">
              Terima kasih teman-teman, pertahankan kerja bagus! Xerpihan harus dinominasikan untuk service of the year.
              Anda tidak akan menyesalinya.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-10 max-w-5xl mx-auto">
        <h1 className="text-xerpihan-primary-500 text-4xl font-bold">Diliput Berbagai Media</h1>
        <div className="grid grid-cols-4 py-4">
          <Image src={KoranTempo} alt=""></Image>
          <div className="col-span-3 text-left">
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium aliquet mauris, vitae consequat
              ante dictum sed. Cras ultricies consectetur dui vitae elementum. Quisque in ante dignissim, facilisis diam
              ac, commodo dolor. Nulla vel felis ut eros aliquam dictum sed vel metus. Donec ac vulputate sapien, a
              rutrum justo. Etiam fringilla ante non felis pellentesque, id mollis mauris viverra.
            </p>
            <h1 className="text-base font-bold mb-0 mt-3">Elizabeth Martin</h1>
            <h1 className="text-base font-light text-gray-500 mb-0">Reporter Koran Tempo</h1>
          </div>
        </div>
        <div className="grid grid-cols-4 py-4">
          <Image src={KoranTempo} alt=""></Image>
          <div className="col-span-3 text-left">
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium aliquet mauris, vitae consequat
              ante dictum sed. Cras ultricies consectetur dui vitae elementum. Quisque in ante dignissim, facilisis diam
              ac, commodo dolor. Nulla vel felis ut eros aliquam dictum sed vel metus. Donec ac vulputate sapien, a
              rutrum justo. Etiam fringilla ante non felis pellentesque, id mollis mauris viverra.
            </p>
            <h1 className="text-base font-bold mb-0 mt-3">Elizabeth Martin</h1>
            <h1 className="text-base font-light text-gray-500 mb-0">Reporter Koran Tempo</h1>
          </div>
        </div>
        <div className="grid grid-cols-4 py-4">
          <Image src={KoranTempo} alt=""></Image>
          <div className="col-span-3 text-left">
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium aliquet mauris, vitae consequat
              ante dictum sed. Cras ultricies consectetur dui vitae elementum. Quisque in ante dignissim, facilisis diam
              ac, commodo dolor. Nulla vel felis ut eros aliquam dictum sed vel metus. Donec ac vulputate sapien, a
              rutrum justo. Etiam fringilla ante non felis pellentesque, id mollis mauris viverra.
            </p>
            <h1 className="text-base font-bold mb-0 mt-3">Elizabeth Martin</h1>
            <h1 className="text-base font-light text-gray-500 mb-0">Reporter Koran Tempo</h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </LayoutPlain>
  );
};

export default Page;
