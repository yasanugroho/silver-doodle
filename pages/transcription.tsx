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
        <L>
        <p>Apakah Anda sedang membutuhkan jasa transkrip wawancara? Kini, Xerpihan menyediakan jasa transkrip audio dengan harga yang murah, tetapi berkualitas. 
          Jasa transkrip adalah layanan pengetikan yang mengubah suara menjadi tulisan. 
          Xerpihan menyediakan jasa transkrip dalam dua versi, yaitu verbatim dan nonverbatim. 
          Dalam KBBI, verbatim artinya kata demi kata, sehingga jasa transkrip verbatim adalah layanan pengetikan kata demi kata sesuai apa yang dibicarakan oleh pembicara. 
          Hasil dari transkrip verbatim akan sama persis dengan suara yang ada dalam rekaman, termasuk kata yang diulang-ulang, filler (misalnya, jadi dan nah), 
          dan unsur nonverbal (misalnya tertawa, batuk, dan suara pintu). Sementara transkrip nonverbatim tidak mencantumkan filler dan unsur nonverbal. 
          Maka dari itu, hasil dari transkrip nonverbatim tidak sama persis dengan apa yang dikatakan oleh pembicara tetapi sudah disesuaikan dengan 
          gaya bahasa tertentu sesuai dengan permintaan klien.
        </p>
        <p>
          Are you in need of an interview transcript service? Now, Xerpihan provides audio transcription services at low prices, but with high quality.
          A transcription service is a typing service that converts sound into writing.
          Xerpihan provides transcription services in two versions, namely verbatim and nonverbatim.
          In KBBI (Dictionary of Indonesian Language), verbatim means word for word, so verbatim transcription services are word-for-word typing services according to what the speaker is talking about.
          The result of the verbatim transcript will be exactly the same as the sound in the recording, including repeated words, filler (eg, so and nah),
          and nonverbal elements (eg laughing, coughing, and the sound of a door). While the nonverbatim transcript does not include filler and nonverbal elements.
          Therefore, the results of the nonverbatim transcripts do not exactly match what the speaker said but have been adjusted to
          specific language style according to client's request.
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
        Harga jasa transkrip ditentukan berdasarkan durasi video dan jenis layanan yang dipilih. Tarif jasa transkrip yang kami sediakan terbilang cukup murah, yaitu mulai dari Rp10.000. Jika Anda ingin melihat harga setiap jenis layanan transkrip kami, silakan klik di menu ‘Layanan’.
        <br/><br/>Kelebihan Jasa Transkrip Xerpihan
        <br/><br/>1. Berpengalaman membuat transkrip berbagai macam audio
        <br/>Transkrip video Anda akan dikerjakan oleh tim kami yang sudah berpengalaman membuat transkrip berbagai macam video dari berbagai perusahaan, institusi, maupun perorangan.
        <br/>2. Pengerjaan cepat dan berkualitas
        <br/>Pengerjaan dilakukan dengan bantuan audio-to-text tool, kemudian diperiksa dan diperbaiki secara manual, sehingga waktu pengerjaan lebih cepat. Untuk menjaga kualitasnya, dokumen hasil transkrip akan diperiksa ulang oleh proofreader kami sebelum diserahkan ke klien.
        <br/>3. Tersedia paket jasa transkrip sekaligus terjemah (translation)
        <br/>Kami juga menyediakan paket transkrip sekaligus terjemah bahasa Indonesia dan bahasa Inggris dengan harga terjangkau dan dikerjakan oleh penerjemah (translator) yang berpengalaman.
        <br/>4. Garansi uang kembali dan revisi tanpa batas
        <br/>Klien bisa mengajukan revisi secara gratis jika kurang setuju dengan hasil transkrip kami. Apabila kami melakukan kesalahan fatal dan klien tidak puas dengan hasilnya, kami siap mengembalikan uangnya.
        <br/>5. Konsultasi gratis
        <br/>Kami menyediakan layanan konsultasi gratis terkait dokumen yang kami kerjakan.
        <br/>6. Jaminan kerahasiaan
        <br/>Kami bersedia untuk membuat dan menandatangani surat perjanjian kerahasiaan (non-disclosure agreement) apabila diperlukan.
        </p>
        <p>
        The price for the transcription service is determined based on the duration of the video and the type of service selected. The rates for the transcription services that we provide are quite cheap, starting from IDR 10,000. If you want to see the prices for each of our types of transcription services, please click on the 'Services' menu.
        <br/><br/>The Advantages of Xerpihan's Transcription Service
        <br/><br/>1. Experienced in transcribing various kinds of audio
        <br/>The transcript of your video will be done by our experienced team of transcribing various videos from various companies, institutions, and individuals.
        <br/>2. Fast and quality work
        <br/>The work is done with the help of an audio-to-text tool, then it is checked and repaired manually, so the processing time is faster. To maintain its quality, the transcription document will be re-checked by our proofreader before being submitted to the client.
        <br/>3. There are transcription and translation service packages available
        <br/>We also provide transcript packages as well as Indonesian and English translations at affordable prices and are carried out by experienced translators.
        <br/>4. Money back guarantee and unlimited revisions
        <br/>Clients can submit revisions for free if they do not agree with our transcript. If we make a fatal mistake and the client is not satisfied with the result, we are ready to refund the money.
        <br/>5. Free consultation
        <br/>We provide free consulting services regarding the documents we are working on.
        <br/>6. Confidentiality guarantee
        <br/>We are willing to make and sign a non-disclosure agreement if necessary.
        </p>
        </L>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
