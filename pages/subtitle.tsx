import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { L, _ } from '../lib/i18n';
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
        <L>
        <p>
          Apakah Anda sedang membutuhkan jasa pembuatan subtitle? Kini, Xerpihan menyediakan jasa subtitle film dan video YouTube dengan harga yang murah, tetapi berkualitas. 
          Kami menyediakan jasa subtitle dalam dua bahasa, yaitu bahasa Inggris dan bahasa Indonesia. Subtitle dapat membantu meningkatkan jangkauan audiens video Anda. 
          Penambahan subtitle bahasa Inggris di dalam video, akan memudahkan Anda menggaet penonton asing yang tidak paham bahasa Anda. 
          Subtitle bahasa Indonesia juga dapat membantu penonton yang mempunyai gangguan pendengaran supaya lebih memahami video Anda.
        </p>
        <p>
           Are you in need of subtitling services? Now, Xerpihan provides subtitles for movies and YouTube videos at low prices, but with high quality.
           We provide subtitle services in two languages, namely English and Indonesian. Subtitles can help increase your video's audience reach.
           The addition of English subtitles in the video will make it easier for you to attract foreign viewers who do not understand your language.
           Indonesian subtitles can also help viewers with hearing impairments to better understand your videos.
        </p>
        </L>
        <div className="text-center pt-28">
        <h1 className=" text-3xl font-bold">
          {_(l, 'Pilih Paket yang Sesuai dengan Kebutuhan Kamu', 'Choose the Package That Fits Your Needs')}
        </h1>
      
      <div>
        <Tabs />
      </div>
        </div>
        <L>
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
        <p>
        <br/><br/>1. Experienced in making subtitles for various videos
        <br/>Subtitles of your videos will be done by our experienced team who has many experiences in making subtitles for various videos from various companies, institutions, and individuals. Our team has worked on subtitle services for various types of videos, ranging from films, web series, YouTube podcasts, and company profiles.
        <br/>2. Fast and quality work
        <br/>The work is done with the help of an audio-to-text tool, then it is checked and corrected manually, so the processing time is faster. To maintain the quality, the subtitles will be re-checked by our proofreader before being submitted to the client.
        <br/>3. There are subtitle and translation service packages available
        <br/>We also provide subtitle and translation packages at affordable prices and are done by experienced translators.
        <br/>4. A variety of formats and styles are available
        <br/>We can make subtitles in various formats and styles so that clients can choose the font, size and color they want. The client can also choose the type of document to be received, whether hardsub or softsub (.srt) or both.
        <br/>5. Money back guarantee and unlimited revisions
        <br/>Clients can submit revisions for free if they do not agree with our subtitle results. If we make a fatal mistake and the client is not satisfied with the result, we are ready to refund the money.
        <br/>6. Free consultation
        <br/>We provide free consulting services regarding the videos we work on.
        <br/>7. Confidentiality guarantee
        <br/>We are willing to make and sign a non-disclosure agreement if necessary.
        </p>
        </L>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
