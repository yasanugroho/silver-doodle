import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { _ } from '../lib/i18n';
import Footer from '../components/Footer';
import Tabs from '../components/Tabs';
export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Layanan dan Jasa Transkrip Audio Wawancara Bahasa Inggris dan Indonesia', 'Transcription Service for English and Indonesian') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b max-w-5xl px-8 py-4 md:mx-auto space-y-6
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="text-center space-y-4">
          <h1> Xerpihan Transcription</h1>
          <h6> Jasa Transkrip Bahasa Indonesia dan Inggris </h6>
        </div>
        <p>Apakah Anda sedang membutuhkan jasa transkrip wawancara? Kini, Xerpihan menyediakan jasa transkrip audio dengan harga yang murah, tetapi berkualitas.Jasa transkrip adalah layanan pengetikan yang mengubah suara menjadi tulisan. Xerpihan menyediakan jasa transkrip dalam dua versi, yaitu verbatim dan nonverbatim. Dalam KBBI, verbatim artinya kata demi kata, sehingga jasa transkrip verbatim adalah layanan pengetikan kata demi kata sesuai apa yang dibicarakan oleh pembicara. Hasil dari transkrip verbatim akan sama persis dengan suara yang ada dalam rekaman, termasuk kata yang diulang-ulang, filler (misalnya, jadi dan nah), dan unsur nonverbal (misalnya tertawa, batuk, dan suara pintu). Sementara transkrip nonverbatim tidak mencantumkan filler dan unsur nonverbal. Maka dari itu, hasil dari transkrip nonverbatim tidak sama persis dengan apa yang dikatakan oleh pembicara tetapi sudah disesuaikan dengan gaya bahasa tertentu sesuai dengan permintaan klien.</p>
        <div className="text-center pt-28">
        <h1 className=" text-3xl font-bold">
          {_(l, 'Pilih Paket yang Sesuai dengan Kebutuhan Kamu', 'Choose the Package That Fits Your Needs')}
        </h1>
      
      <div>
        <Tabs />
      </div>
        </div>
        <p>
        Harga jasa transkrip ditentukan berdasarkan durasi video dan jenis layanan yang dipilih. Tarif jasa transkrip yang kami sediakan terbilang cukup murah, yaitu mulai dari Rp10.000. Jika Anda ingin melihat harga setiap jenis layanan transkrip kami, silakan klik di menu ‘Layanan’.
        <br>Kelebihan Jasa Transkrip Xerpihan</br>
        <br>Berpengalaman membuat transkrip berbagai macam audio</br>
        Transkrip video Anda akan dikerjakan oleh tim kami yang sudah berpengalaman membuat transkrip berbagai macam video dari berbagai perusahaan, institusi, maupun perorangan.
        <br>Pengerjaan cepat dan berkualitas</br>
        Pengerjaan dilakukan dengan bantuan audio-to-text tool, kemudian diperiksa dan diperbaiki secara manual, sehingga waktu pengerjaan lebih cepat. Untuk menjaga kualitasnya, dokumen hasil transkrip akan diperiksa ulang oleh proofreader kami sebelum diserahkan ke klien.
        <br>Tersedia paket jasa transkrip sekaligus terjemah (translation)</br>
        Kami juga menyediakan paket transkrip sekaligus terjemah bahasa Indonesia dan bahasa Inggris dengan harga terjangkau dan dikerjakan oleh penerjemah (translator) yang berpengalaman.
        <br>Garansi uang kembali dan revisi tanpa batas</br>
        Klien bisa mengajukan revisi secara gratis jika kurang setuju dengan hasil transkrip kami. Apabila kami melakukan kesalahan fatal dan klien tidak puas dengan hasilnya, kami siap mengembalikan uangnya.
        <br>Konsultasi gratis</br>
        Kami menyediakan layanan konsultasi gratis terkait dokumen yang kami kerjakan.
        <br>Jaminan kerahasiaan</br>
        Kami bersedia untuk membuat dan menandatangani surat perjanjian kerahasiaan (non-disclosure agreement) apabila diperlukan.
        </p>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
