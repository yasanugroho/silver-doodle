import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import profile4 from '../images/Profile4.png';
import LayoutPlain from '../components/LayoutPlain';
import { _ } from '../lib/i18n';
import { csAbout } from '../lib/images';
import { coreTeam, teamCore, listAdmin, LanguageOffice, creativeTeam } from '../utils/AboutVars';
import Footer from '../components/Footer';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Tentang', 'About') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="mx-auto container px-8 py-4 max-w-5xl flex space-x-10 items-center">
          <div className="w-1/6">
            <Image src={csAbout} alt="cs-img" objectFit="contain" className="" />
          </div>
          <div className="w-5/6 space-y-4 pb-4">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="text-[26px] font-light">
              Perusahaan startup teknologi yang membantu memperbaiki <br /> dokumen dalam Bahasa Inggris dan Bahasa
              Indonesia. Sedang <br />
              dalam pengembangan Al-based platform dalam menyediakan <br /> jasa proofread, translate, pembuatan
              subtitle dan transkripsi <br /> berkualitas.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto text-center py-14 px-8">
        <h1 className="text-4xl font-bold my-10">Core Team</h1>
        <div className="space-y-14">
          {teamCore.map((el: coreTeam) => (
            <div className="flex items-center space-x-10 w-full" key={el.name}>
              <div className=" w-2/6 ">
                <Image src={el.img} alt="..." width="275" height="275" className="rounded-full object-cover" />
              </div>
              <div className="text-left w-4/6">
                <p className="font-bold text-lg">{el.name}</p>
                <p className="font-light mb-6">{el.position}</p>
                <p>{el.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-100 bg-xerpihan-hero-gradient-end py-10">
        <h1 className="text-4xl font-bold my-10 text-center">Admins</h1>
        <div className="mx-auto grid grid-cols-3 gap-10 max-w-5xl py-10">
          {listAdmin.map((el: coreTeam) => (
            <div className=" text-center space-y-2" key={el.name}>
              <Image src={el.img} alt="..." width="120" height="120" className="rounded-full object-cover" />
              <div className="p-5 rounded-lg">
                <p className="text-base font-bold">{el.name}</p>
                <h1 className="text-base font-light text-gray-500 mb-4">{el.position}</h1>
                <p className="text-sm font-light tracking-tight">{el.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-100 py-10">
        <h1 className="text-4xl font-bold my-10 text-center">Creative Team</h1>
        <div className="mx-auto px-10 grid grid-cols-2 gap-10 max-w-5xl py-10">
          {creativeTeam.map((el: coreTeam) => (
            <div className=" text-center space-y-2" key={el.name}>
              <Image src={el.img} alt="..." width="120" height="120" className="rounded-full object-cover" />
              <div className="p-5 rounded-lg">
                <p className="text-base font-bold">{el.name}</p>
                <h1 className="text-base font-light text-gray-500 mb-4">{el.position}</h1>
                <p className="text-sm font-light tracking-tight">{el.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-100 py-10">
        <h1 className="text-4xl font-bold my-10 text-center">Language Officer</h1>
        <div className="mx-auto px-10 grid grid-cols-2 gap-10 max-w-5xl py-10">
          {LanguageOffice.map((el: coreTeam) => (
            <div className=" text-center space-y-2" key={el.name}>
              <Image src={el.img} alt="..." width="120" height="120" className="rounded-full object-cover" />
              <div className="p-5 rounded-lg">
                <p className="text-base font-bold">{el.name}</p>
                <h1 className="text-base font-light text-gray-500 mb-4">{el.position}</h1>
                <p className="text-sm font-light tracking-tight">{el.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </LayoutPlain>
  );
};

export default Page;
