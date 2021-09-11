//lib
import Image from 'next/image';
import { _ } from '../lib/i18n';
import { csOrder } from '../lib/images';
import { useRouter } from 'next/router';
import db from '../firebase/clientApp';
import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
//component
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import CustomInput from '../components/CustomInput';
import SelectWithLabel from '../components/SelectWithLabel';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topik, setTopik] = useState('');
  const [panjang, setPanjang] = useState('');
  const [info, setInfo] = useState('');
  const [service, setService] = useState('');
  const [paket, setPaket] = useState('');

  const getData = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, 'test-order'));
    console.log(querySnapshot.docs.map(doc => doc.data()));
  }, []);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      try {
        const docRef = await addDoc(collection(db, 'test-order'), {
          'order-additional-info': 'Untuk video yousup',
          'order-date': new Date().getTime(),
          'order-id': (new Date().getTime() % 100000) + 100000,
          'order-length': panjang,
          'order-payment-completion': 0,
          'order-status': 0,
          'order-total-price': 627000,
          'service-package': '0',
          'service-type': '4',
          topic: topik,
          'user-email': email,
          'user-name': name,
          'user-phone': phone,
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    },
    [db],
  );

  useEffect(() => {
    getData();
    // submit();
    // getCities(db);
  }, [getData]);

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
      <div className=" max-w-5xl mx-auto py-8 px-7 md:px-0">
        <p className="text-[#00ACC1] font-bold text-2xl py-8">Order kebutuhanmu sekarang</p>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <CustomInput title="Full Name" value={name} setValue={setName} require={true} />
              <CustomInput title="Email" value={email} setValue={setEmail} require={true} />
              <CustomInput title="Phone" value={phone} setValue={setPhone} require={true} isNumber={true} />
              <div className="grid grid-cols-4 space-x-4 text-[#838383] text-xs">
                <div></div>
                <div className="col-span-3">*We always keep your contact secure and never give it to another party</div>
              </div>
              <SelectWithLabel
                value={service}
                setValue={setService}
                title="Service"
                defaults="select service"
                listData={[
                  { id: 'Proofread - English', name: 'Proofread - English' },
                  { id: 'Proofread - Bahasa Indonesia', name: 'Proofread - Bahasa Indonesia' },
                  { id: 'Proofread - Paraphrase', name: 'Proofread - Paraphrase' },
                  { id: 'Translator', name: 'Translator' },
                  { id: 'Subtitle', name: 'Subtitle' },
                  { id: 'Transcription', name: 'Transcription' },
                ]}
              />
              <SelectWithLabel
                value={paket}
                setValue={setPaket}
                title="Package"
                defaults="select Package"
                listData={[
                  { id: 'Proofreading', name: 'Proofreading' },
                  { id: 'Premium Editing', name: 'Premium Editing' },
                  { id: 'Copy Editing', name: 'Copy Editing' },
                ]}
              />
              <CustomInput title="Topic" value={topik} setValue={setTopik} require={true} />
              <CustomInput title="Length" value={panjang} setValue={setPanjang} require={true} />
              <div className="grid grid-cols-4 items-center space-x-4 text-[#838383] text-xs">
                <div></div>
                <div className="col-span-3 flex space-x-2">
                  <input type="checkbox" />
                  <p>Need non-disclosure agreement?</p>
                </div>
              </div>
              <CustomInput title="Additional info" value={info} setValue={setInfo} type={true} />
            </div>
            <div className="rounded-lg border shadow text-center p-10 space-y-10 content-between relative">
              <div className="absolute -top-5 -right-14 hidden md:block">
                <Image src={csOrder} alt="order" objectFit="contain" />
              </div>
              <div>
                <h1>{_(l, 'Invoice', 'Invoice')}</h1>
                <p>{_(l, 'We will send this invoice to your email', 'We will send this invoice to your email')}</p>
              </div>
              <div className="grid grid-cols-2 gap-6 text-left py-4">
                <p>{_(l, 'Service', 'Service')}</p>
                <p className="font-bold">{service}</p>
                <p>{_(l, 'Package', 'Package')}</p>
                <p className="font-bold">{paket}</p>
                <p>{_(l, 'Price', 'Price')}</p>
                <p className="font-bold">{paket}</p>
                <p>{_(l, 'Topic adjustment', 'Topic adjustment')}</p>
                <p className="font-bold">{topik}</p>
                <p>{_(l, 'Length', 'Length')}</p>
                <p className="font-bold">{panjang}</p>
                <p>{_(l, 'Delivery estimation', 'Delivery estimation')}</p>
                <p className="font-bold">{topik}</p>
                <div className="h-0.5 bg-gray-100 w-full col-span-2" />
                <p>{_(l, 'Total Price', 'Total Price')}</p>
                <p className="font-bold">{topik}</p>
              </div>
              <div>
                <div className="flex items-center space-x-4 text-sm pl-2">
                  <input type="checkbox" />
                  <p>
                    {_(
                      l,
                      'Saya telah memeriksa kembali data yang saya isikan',
                      'Saya telah memeriksa kembali data yang saya isikan',
                    )}
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-sm pl-2">
                  <input type="checkbox" />
                  <p>
                    Saya menyetujui{' '}
                    <a
                      href="https://drive.google.com/file/d/1xNCzNgxapv7hNZmlFXonkJnAL5UgMqbi/view"
                      target="_blank"
                      rel="noreferrer">
                      syarat dan ketentuan
                    </a>{' '}
                    yang berlaku
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className={
                  'text-white rounded-full p-3 w-full font-bold text-center text-lg items-end bg-xerpihan-primary-500 '
                }>
                Submit Order
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
