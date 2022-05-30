import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import Footer from '../components/Footer';
import Tabs from '../components/Tabs';
import { L, _ } from '../lib/i18n';
export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Cek Grammar dan Jasa Proofreading Bahasa Inggris dan Indonesia', 'Proofreading Service for English and Indonesian') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b max-w-5xl px-8 py-4 md:mx-auto space-y-6
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="text-center space-y-4">
          <h1> Xerpihan Proofreading</h1>
          <h6> Jasa Proofreading Bahasa Indonesia dan Inggris </h6>
        </div>
        <L>
        <p>
        Jasa proofreading adalah layanan pemeriksaan sekaligus perbaikan tulisan untuk memastikan tidak ada kesalahan dalam teks tersebut. 
        Pemeriksaan tersebut meliputi tata letak, ejaan, tata bahasa, tanda baca, struktur kalimat, konsistensi gaya bahasa, hingga koherensi antarparagraf sehingga 
        tulisan akan lebih mudah dipahami oleh pembaca.
        </p>
        <p>
        A proofreading service is a service for checking and correcting writing to ensure that there are no errors in the text.
        The examination includes layout, spelling, grammar, punctuation, sentence structure, stylistic consistency, to coherence between paragraphs so that
        writing will be easier for readers to understand.
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
      <p>Kelebihan Jasa Proofreading Xerpihan.</p>
      <p>Xerpihan Proofreading Services Advantages.</p>
      </L>
      <L>
      <p>
      Dokumen Anda akan diperiksa oleh proofreader profesional yang sudah berpengalaman dalam melakukan proofreading berbagai macam dokumen dari berbagai perusahaan dan institusi.
      Semua layanan proofreading tidak dikerjakan dengan mesin, melainkan dikerjakan secara manual oleh proofreader kami. Untuk menjaga kualitas dokumen, dokumen hasil proofread akan diperiksa ulang oleh proofreader yang lain sebelum diserahkan ke klien.
      Kami akan memberikan dokumen yang berisi tracking editing agar klien dapat memeriksa setiap perubahan yang dilakukan oleh proofreader kami.
      Jaminan kepuasan dan revisi tidak terbatas. Kami juga menyediakan layanan khusus jasa proofreading jurnal berupa revisi gratis berdasarkan komentar reviewer.
      Tentunya, konsultasi gratis terkait dokumen yang kami proofread.
      </p>
      <p>Your documents will be checked by professional proofreaders who are experienced in proofreading various documents from various companies and institutions.
       All proofreading services are not done by machine, but are done manually by our proofreaders. To maintain the quality of the document, the proofread document will be re-examined by another proofreader before being submitted to the client.
       We will provide a document containing tracking editing so that the client can check any changes made by our proofreader.
       Satisfaction guarantee and unlimited revisions. We also provide special journal proofreading services in the form of free revisions based on reviewer comments.
       Of course, free consultation regarding the documents we proofread.
       </p>
      </L>
      <L>
      <p>
      Harga jasa proofreading Xerpihan cukup terjangkau, yaitu mulai dari Rp10.000. 
      Biaya jasa proofreading ditentukan berdasarkan jumlah kata yang ada dalam dokumen. 
      Tarif jasa proofreading per kata berbeda-beda, tergantung bahasa yang digunakan dan jenis layanan proofreading yang dipilih.
      </p>
      <p>
      The price of Xerpihan's proofreading services is quite affordable, starting from Rp. 10,000.
      The proofreading service fee is determined based on the number of words in the document.
      Proofreading service rates per word vary, depending on the language used and the type of proofreading service selected. 
      </p>
      </L>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
