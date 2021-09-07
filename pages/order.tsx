//lib
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { _ } from '../lib/i18n';
import { useRouter } from 'next/router';
import { ArrowSmRightIcon, CheckIcon } from '@heroicons/react/solid';
import { listLayanan, serviceText, text } from '../utils/IndividualsVariables';
import { XerpihanServices, csPerson } from '../lib/images';
//component
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import CustomInput from '../components/CustomInput';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  const [name, setName] = useState('');
  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Order', 'order') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
      </div>
      <div className=" max-w-5xl mx-auto p-8">
        <p className="text-[#00ACC1] font-bold text-2xl py-8">Order kebutuhanmu sekarang</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <CustomInput title="Full Name" value={name} setValue={setName} />
            <CustomInput title="Email" value={name} setValue={setName} />
            <CustomInput title="Phone" value={name} setValue={setName} />
            <CustomInput title="Topic" value={name} setValue={setName} />
            <CustomInput title="Length" value={name} setValue={setName} />
            <CustomInput title="Additional info" value={name} setValue={setName} type={true} />
          </div>
        </div>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
