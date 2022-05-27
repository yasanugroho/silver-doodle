//lib
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { L, _ } from '../lib/i18n';
import { useRouter } from 'next/router';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { listLayanan, serviceText, text } from '../utils/IndividualsVariables';
import { XerpihanServices, csPerson, checklist } from '../lib/images';
//component
import Tabs from '../components/Tabs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Layanan Bahasa - Jasa Proofreading Bahasa Inggris dan Indonesia',
      }}>
      <div
        className="bg-gradient-to-b
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="text-center pt-28">
        <h1 className=" text-3xl font-bold">
          {_(l, 'Pilih Paket yang Sesuai dengan Kebutuhan Kamu', 'Choose the Package That Fits Your Needs')}
        </h1>
      </div>
      <div>
        <Tabs />
      </div>
        <p> Jasa Proofreading Bahasa Inggris dan Indonesia Harga Bersahabat — Anda masih ragu-ragu dengan tulisan yang Anda buat? 
          Apakah sudah sesuai dengan tata bahasa dan tanda baca yang benar? 
          Atau apakah tulisan Anda sudah menggunakan pilihan kata dan struktur kalimat yang tepat? 
          Jangan khawatir, Xerpihan kini menyediakan jasa proofreading bahasa Inggris dan bahasa Indonesia dengan harga yang murah tapi berkualitas. 
          Jasa proofreading adalah layanan pemeriksaan sekaligus perbaikan tulisan untuk memastikan tidak ada kesalahan dalam teks tersebut. 
          Pemeriksaan tersebut meliputi tata letak, ejaan, tata bahasa, tanda baca, struktur kalimat, konsistensi gaya bahasa, hingga koherensi antarparagraf sehingga tulisan akan lebih mudah dipahami oleh pembaca.
          <hr>
            <strong>Kelebihan Jasa Proofreading Xerpihan</strong>
Dokumen Anda akan diperiksa oleh proofreader profesional yang sudah berpengalaman dalam melakukan proofreading berbagai macam dokumen dari berbagai perusahaan dan institusi.
Semua layanan proofreading tidak dikerjakan dengan mesin, melainkan dikerjakan secara manual oleh proofreader kami. Untuk menjaga kualitas dokumen, dokumen hasil proofread akan diperiksa ulang oleh proofreader yang lain sebelum diserahkan ke klien.
Kami akan memberikan dokumen yang berisi tracking editing agar klien dapat memeriksa setiap perubahan yang dilakukan oleh proofreader kami.
Jaminan kepuasan dan revisi tidak terbatas. Kami juga menyediakan layanan khusus jasa proofreading jurnal berupa revisi gratis berdasarkan komentar reviewer.
Konsultasi gratis terkait dokumen yang kami proofread.
            <hr>
              Harga jasa proofreading Xerpihan cukup terjangkau, yaitu mulai dari Rp10.000. 
              Biaya jasa proofreading ditentukan berdasarkan jumlah kata yang ada dalam dokumen. 
              Tarif jasa proofreading per kata berbeda-beda, tergantung bahasa yang digunakan dan jenis layanan proofreading yang dipilih. 
              Anda bisa klik menu ‘Layanan’ untuk melihat harga setiap layanan proofreading
              <hr>
                Hasil Proofreading Xerpihan:
Apabila Anda menggunakan jasa proofreading kami, hasil yang akan Anda terima adalah sebagai berikut:
Hasil akhir yang sudah jadi, berupa dokumen dalam format .docx (MS Word) yang sudah siap digunakan sesuai kebutuhan.
Dokumen yang memuat tracking changes supaya Anda bisa mengetahui setiap perubahan, penambahan, maupun pengurangan yang dilakukan oleh penyunting (proofreader). Apabila Anda kurang setuju dengan perubahan tersebut, Anda bisa mengajukan revisi kepada kami.
Sertifikat proofread apabila dibutuhkan. Sertifikat ini berisi tanggal pelaksanaan proofreading, judul tulisan, nama penulis, dan disahkan menggunakan cap Xerpihan.
            </p>
          
      <Footer />
    </LayoutPlain>
  );
};

export default Page;
