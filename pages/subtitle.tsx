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
        title: _(l, 'Layanan dan Jasa Subtitle Video Film Bahasa Inggris dan Indonesia', 'Subtitling Service for English and Indonesian') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b max-w-5xl px-8 py-4 md:mx-auto space-y-6
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="text-center space-y-4">
          <h1> Xerpihan Subtitle</h1>
          <h6> Jasa Subtitle Bahasa Indonesia dan Inggris </h6>
        </div>
        <p>Apakah Anda sedang membutuhkan jasa pembuatan subtitle? Kini, Xerpihan menyediakan jasa subtitle film dan video YouTube dengan harga yang murah, tetapi berkualitas. Kami menyediakan jasa subtitle dalam dua bahasa, yaitu bahasa Inggris dan bahasa Indonesia.

Subtitle dapat membantu meningkatkan jangkauan audiens video Anda. Penambahan subtitle bahasa Inggris di dalam video, akan memudahkan Anda menggaet penonton asing yang tidak paham bahasa Anda. Subtitle bahasa Indonesia juga dapat membantu penonton yang mempunyai gangguan pendengaran supaya lebih memahami video Anda.</p>
        <div className="text-center pt-28">
        <h1 className=" text-3xl font-bold">
          {_(l, 'Pilih Paket yang Sesuai dengan Kebutuhan Kamu', 'Choose the Package That Fits Your Needs')}
        </h1>
      
      <div>
        <Tabs />
      </div>
        </div>
        <p>
        Kelebihan Jasa Subtitle Film dan Video Xerpihan
        <br/><br/>1. Berpengalaman membuat subtitle berbagai macam video
        <br/>Subtitle video Anda akan dikerjakan oleh tim kami yang sudah berpengalaman membuat subtitle berbagai macam video dari berbagai perusahaan, institusi, maupun perorangan. Tim kami sudah pernah mengerjakan jasa subtitle untuk berbagai jenis video, mulai dari film, web series, podcast YouTube, dan company profile.
        <br/>2. Pengerjaan cepat dan berkualitas
        <br/>Pengerjaan dilakukan dengan bantuan audio-to-text tool, kemudian diperiksa dan diperbaiki secara manual, sehingga waktu pengerjaan lebih cepat. Untuk menjaga kualitasnya, hasil subtitle akan diperiksa ulang oleh proofreader kami sebelum diserahkan ke klien.
        <br/>3. Tersedia paket layanan subtitle sekaligus translation
        <br/>Kami juga menyediakan paket subtitle sekaligus terjemah dengan harga terjangkau dan dikerjakan oleh penerjemah (translator) yang berpengalaman.
        <br/>4. Tersedia berbagai macam format dan gaya
        <br/>Kami dapat membuat subtitle dengan berbagai macam format dan gaya sehingga klien dapat memilih jenis font, ukuran, dan warna sesuai keinginan. Klien juga bisa memilih jenis dokumen yang akan diterima, apakah hardsub atau softsub (.srt) atau keduanya.
        <br/>5. Garansi uang kembali dan revisi tanpa batas
        <br/>Klien bisa mengajukan revisi secara gratis jika kurang setuju dengan hasil subtitle kami. Apabila kami melakukan kesalahan fatal dan klien tidak puas dengan hasilnya, kami siap mengembalikan uangnya.
        <br/>6. Konsultasi gratis
        <br/>Kami menyediakan layanan konsultasi gratis terkait video yang kami kerjakan.
        <br/>7. Jaminan kerahasiaan
        <br/>Kami bersedia untuk membuat dan menandatangani surat perjanjian kerahasiaan (non-disclosure agreement) apabila diperlukan.
        </p>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
