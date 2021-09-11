//lib
import Image from 'next/image';
import { _ } from '../lib/i18n';
import { csOrder, Spinner } from '../lib/images';
import { useRouter } from 'next/router';
import db from '../firebase/clientApp';
import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
//component
import Footer from '../components/Footer';
import Header from '../components/Header';
import Modal from '../components/Modal';

import LayoutPlain from '../components/LayoutPlain';
import CustomInput from '../components/CustomInput';
import SelectWithLabel from '../components/SelectWithLabel';
import { topicMultiplier, listService, selectionData, showDate } from '../utils/OrderVars';

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
  const [isNeedCertif, setIsNeedCertif] = useState(false);
  const [isNeedNDA, setIsNeedNda] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const totalPriceText = useCallback(() => {
    let totalPriceToText = totalPrice.toString();
    let totalPriceLength = totalPriceToText.length;
    let result = '';
    for (let i = 0; i < totalPriceLength; i = i + 3) {
      result = totalPriceToText.substring(totalPriceLength - i - 3, totalPriceLength - i) + (i > 0 ? '.' : '') + result;
    }
    return result;
  }, [totalPrice]);

  const sendEmail = useCallback(async () => {
    let deliveryEst = `${Math.ceil(parseInt(panjang) / (panjang && selectionData[service].delivery)) || ''}`;
    // TODO: Pakai axios biar hasil sama
    try {
      const res = await fetch('https://xerpihan-site.vercel.app/api/sendemail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          service,
          paket,
          panjang,
          totalPrice: totalPriceText(),
          dueDate: showDate(new Date()),
          orderId: (new Date().getTime() % 100000) + 100000,
          deliveryEst,
          addInfo: info,
        }),
      });
      const resData = await res.json();
      console.log(resData);
      if (resData?.data?.status === '200') {
        console.log('success');
      }
    } catch (e) {
      console.error('Error Send Email: ', e);
    }
  }, [email, info, name, paket, panjang, service, totalPriceText]);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      try {
        setShowModal(true);
        const docRef = await addDoc(collection(db, 'new-order-db'), {
          'user-name': name,
          'user-email': email,
          'user-phone': phone,
          'service-type': service,
          'service-package': paket,
          'order-length': panjang,
          need_certif: isNeedCertif,
          need_nda: isNeedNDA,
          topic: topicMultiplier[topik].topic,
          'order-additional-info': info,
          'order-id': (new Date().getTime() % 100000) + 100000,
          'order-payment-completion': 0,
          'order-status': 0,
          'order-total-price': totalPrice,
          'order-date': new Date().getTime(),
        });
        console.log('order Success with ID: ', docRef.id);
        setIsSuccess(true);
        sendEmail();
      } catch (e) {
        console.error('Error adding Order: ', e);
      }
    },
    [email, info, isNeedCertif, isNeedNDA, name, paket, panjang, phone, sendEmail, service, topik, totalPrice],
  );

  useEffect(() => {
    if (service !== '' && paket !== '') {
      let total = Math.max(
        Math.ceil(
          (selectionData[service]?.packages[paket]?.price * parseInt(panjang)) /
            (selectionData[service]?.packages[paket]?.perunit * 10),
        ) *
          11000 *
          topicMultiplier[topik]?.multiplier,
        10000,
      );
      setTotalPrice(total);
    }
  }, [service, paket, panjang, topik]);

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Order', 'order') + ' - Xerpihan',
      }}>
      {/* Modal Success Order */}
      <Modal showModal={showModal}>
        {!isSuccess && <Image src={Spinner} alt="loading..." />}
        {isSuccess && (
          <div className="space-y-4 text-center flex flex-col p-6">
            <p className="text-2xl text-xerpihan-primary-500">Terimakasih, {name && name.split(' ')[0]}</p>
            <p>
              Order anda telah kami terima <br />
              Kami akan segera menghubungi nomor anda
            </p>

            <p>Silakan melakukan pembayaran sebesar</p>
            <p className="text-xl text-xerpihan-primary-500">Rp {totalPriceText()}</p>
            <div>ke rekening</div>
            <p className="text-lg">
              8465595724 (BCA) <br />
              a.n PT Xerpihan Kata Digital
            </p>
            <p className="text-[#f542aa]">paling lambat {showDate(new Date())}</p>
            <p>Kami mengirimkan invoice melalui email anda</p>
            <button
              className="xerp-a-button px-4 py-2 w-full !rounded-full my-6"
              onClick={() => {
                setShowModal(false);
                setIsSuccess(false);
              }}>
              Close
            </button>
          </div>
        )}
      </Modal>
      {/* Header */}
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
      </div>
      <div className=" max-w-5xl mx-auto py-8 px-7 md:px-0">
        <p className="text-[#00ACC1] font-bold text-2xl py-8">
          {_(l, 'Order kebutuhanmu sekarang', 'Order kebutuhanmu sekarang')}
        </p>
        <form onSubmit={e => handleSubmit(e)}>
          {/* Input Data Order */}
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
                listData={listService}
                require={true}
              />
              <SelectWithLabel
                value={paket}
                setValue={setPaket}
                title="Package"
                defaults="select Package"
                require={true}
                listData={selectionData[service]?.packages}
              />
              <SelectWithLabel
                defaults="select Package"
                title="Topic"
                value={topik}
                setValue={setTopik}
                require={true}
                listData={topicMultiplier}
              />
              <div className={'grid grid-cols-4'}>
                <p></p>
                <p className="col-span-3">
                  {(topik && `Topic adjustment : ${topicMultiplier[topik].multiplier} x price`) || ''}
                </p>
              </div>
              <CustomInput title="Length" value={panjang} setValue={setPanjang} require={true} isNumber={true} />
              <div className="grid grid-cols-4 items-center space-x-4 text-[#838383] text-xs">
                <div></div>
                <div className="col-span-3 flex space-x-2">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    checked={isNeedNDA}
                    onChange={() => setIsNeedNda(!isNeedNDA)}
                  />
                  <p>Need non-disclosure agreement?</p>
                </div>
              </div>
              {service && parseInt(service) < 2 && parseInt(paket) > 0 && (
                <div className="grid grid-cols-4 items-center space-x-4 text-[#838383] text-xs">
                  <div></div>
                  <div className="col-span-3 flex space-x-2">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      checked={isNeedCertif}
                      onChange={() => setIsNeedCertif(!isNeedCertif)}
                    />
                    <p>Need Proofread certificate?</p>
                  </div>
                </div>
              )}
              <CustomInput title="Additional info" value={info} setValue={setInfo} type={true} />
            </div>

            {/* Details Order */}
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
                <p className="font-bold">{selectionData[service]?.name}</p>
                <p>{_(l, 'Package', 'Package')}</p>
                <p className="font-bold"> {paket && selectionData[service]?.packages[paket]?.package}</p>
                <p>{_(l, 'Price', 'Price')}</p>
                <p className="font-bold">
                  {paket && 'Rp'} {paket && selectionData[service]?.packages[paket]?.price} {paket && 'k/'}
                  {paket && selectionData[service]?.packages[paket]?.perunit} {paket && selectionData[service]?.unit}
                </p>
                <p>{_(l, 'Topic adjustment', 'Topic adjustment')}</p>
                <p className="font-bold">{topik && topicMultiplier[topik].multiplier + 'x price'}</p>
                <p>{_(l, 'Length', 'Length')}</p>
                <p className="font-bold">
                  {panjang} {panjang && service && selectionData[service].unit}
                </p>
                <p>{_(l, 'Delivery estimation', 'Delivery estimation')}</p>
                <p className="font-bold">
                  {Math.ceil(parseInt(panjang) / (paket && selectionData[service].delivery)) || ''}
                  {panjang
                    ? Math.ceil(parseInt(panjang) / (paket && selectionData[service].delivery)) > 1
                      ? ' days'
                      : ' day'
                    : ''}
                </p>
                <div className="h-0.5 bg-gray-100 w-full col-span-2" />
                <p>{_(l, 'Total Price', 'Total Price')}</p>
                <p className="font-bold">
                  {panjang && 'Rp '}
                  {panjang && totalPriceText()}
                  <br />
                  <span className="font-light text-xs ">{panjang && '*Harga sudah termasuk pajak 10%'}</span>
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-4 text-sm pl-2">
                  <input required type="checkbox" id="periks" name="periksa" value="periksadong" />
                  <p>
                    {_(
                      l,
                      'Saya telah memeriksa kembali data yang saya isikan',
                      'Saya telah memeriksa kembali data yang saya isikan',
                    )}
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-sm pl-2">
                  <input required type="checkbox" id="setuju" name="tuju" value="ahay" />
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
