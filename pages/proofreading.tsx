import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { _ } from '../lib/i18n';
import Tabs from '../components/Tabs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import Footer from '../components/Footer';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Layanan Bahasa - Jasa Proofreading Bahasa Indonesia dan Inggris', 'Language Service - Proofreading Service for English and Indonesian') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b max-w-5xl px-8 py-4 md:mx-auto space-y-6
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="text-center space-y-4">
          <h1> Layanan Bahasa - Jasa Proofreading Bahasa Indonesia dan Inggris</h1>
          <h6> Proofreading</h6>
        </div>
        <div className="text-center pt-28">
        <h1 className=" text-3xl font-bold">
          {_(l, 'Pilih Paket yang Sesuai dengan Kebutuhan Kamu', 'Choose the Package That Fits Your Needs')}
        </h1>
      </div>
      <div>
        <Tabs />
      </div>
        <p>
          Jasa Proofreading Bahasa Inggris dan Indonesia Harga Bersahabat — Anda masih ragu-ragu dengan tulisan yang Anda buat?<br>
          Apakah sudah sesuai dengan tata bahasa dan tanda baca yang benar? <br>
          Atau apakah tulisan Anda sudah menggunakan pilihan kata dan struktur kalimat yang tepat? <br>
          Jangan khawatir, Xerpihan kini menyediakan jasa proofreading bahasa Inggris dan bahasa Indonesia dengan harga yang murah tapi berkualitas. <br>
          Jasa proofreading adalah layanan pemeriksaan sekaligus perbaikan tulisan untuk memastikan tidak ada kesalahan dalam teks tersebut. <br>
          Pemeriksaan tersebut meliputi tata letak, ejaan, tata bahasa, tanda baca, struktur kalimat, konsistensi gaya bahasa, hingga koherensi antarparagraf sehingga tulisan akan lebih mudah dipahami oleh pembaca.
        <br>
          Kelebihan Jasa Proofreading Xerpihan<br>
          Dokumen Anda akan diperiksa oleh proofreader profesional yang sudah berpengalaman dalam melakukan proofreading berbagai macam dokumen dari berbagai perusahaan dan institusi.
          Semua layanan proofreading tidak dikerjakan dengan mesin, melainkan dikerjakan secara manual oleh proofreader kami. Untuk menjaga kualitas dokumen, dokumen hasil proofread akan diperiksa ulang oleh proofreader yang lain sebelum diserahkan ke klien.
          Kami akan memberikan dokumen yang berisi tracking editing agar klien dapat memeriksa setiap perubahan yang dilakukan oleh proofreader kami.
          Jaminan kepuasan dan revisi tidak terbatas. Kami juga menyediakan layanan khusus jasa proofreading jurnal berupa revisi gratis berdasarkan komentar reviewer.
          Konsultasi gratis terkait dokumen yang kami proofread.
        <hr>
          Harga jasa proofreading Xerpihan cukup terjangkau, yaitu mulai dari Rp10.000. <br>
          Biaya jasa proofreading ditentukan berdasarkan jumlah kata yang ada dalam dokumen. <br> 
          Tarif jasa proofreading per kata berbeda-beda, tergantung bahasa yang digunakan dan jenis layanan proofreading yang dipilih. <br>
          Anda bisa klik menu ‘Layanan’ untuk melihat harga setiap layanan proofreading. <br>
        </p>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
