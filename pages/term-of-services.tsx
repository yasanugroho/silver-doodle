import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { _ } from '../lib/i18n';
import Footer from '../components/Footer';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Term of services', 'Term of services') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b max-w-5xl px-8 py-4 md:mx-auto space-y-6
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="text-center space-y-4">
          <h1> Ketentuan layanan</h1>
          <h6> EFFECTIVE DATE: FEBRUARY 25, 2021 </h6>
        </div>

        <p>
          Produk yang sudah dibeli tidak dapat diuangkan kembali dengan alasan apapun.
          Mekanisme penggantian periode produk oleh user sepenuhnya wewenang mitra penyedia layanan dan user.
          Pembelian produk layanan dari Xerpihan yang sudah dibeli tidak dapat ditukar dengan produk lainnya.
          Pembelian layanan kursus harus dilakukan dengan menggunakan akun calon student agar user dapat tercatat sebagai student untuk kursus tersebut.
          Mekanisme Pengembalian Dana (Refund)
          Force Majeure: Pelanggan berhak mendapatkan pengembalian dana yang telah dibayarkan jika dalam proses transaksi maupun pembelajaran berjalan terdapat force majeure. Yang dimaksud dengan force majeure dalam hal ini adalah keadaan atau peristiwa yang terjadi di luar dugaan, kemampuan, dan kekuasaan para pihak yang mengakibatkan terhambatnya aktivitas transaksi maupun belajar mengajar, seperti:
          a.	Gempa bumi, angin topan, banjir bandang, tanah longsor, sambaran petir, kebakaran, ledakan, benda-benda angkasa, dan/atau bencana alam lainnya.
          b.	Peperangan, huru-hara, terorisme, pemberontakan, sabotase, embargo, dan/atau pemogokan umum.
          c.	Siswa mengalami sakit dan/atau cedera parah yang dibuktikan dengan surat keterangan dari dokter, atau meninggal dunia.

          Pelanggan yang mengalami kondisi force majeure akan menerima pengembalian dana setelah dokumen-dokumen bukti yang diperlukan dipenuhi oleh Pelanggan dan disetujui oleh pihak yang berwenang di Xerpihan dan/atau mitra Xerpihan.
          Pelanggan tidak diizinkan mengajukan pengembalian dana sesudah layanan dimulai/diproses.
          Pengembalian dana diproses dengan ketentuan sebagai berikut:
          a.	Xerpihan hanya memberlakukan besaran pengembalian dana sebesar 75% (tujuh puluh lima persen) dari total biaya yang sudah dibayarkan atau sesuai kontrak yang berlaku. Xerpihan tidak memiliki kewajiban untuk melakukan pengembalian dana secara penuh.
          b.	Permohonan pengembalian dana oleh pelanggan akan dicairkan selambat-lambatnya dalam 30 (tiga puluh) hari kerja sesudah pengajuan dilakukan.
          c.	Permohonan pengembalian dana dilakukan dengan turut menyertakan bukti-bukti yang diperlukan atas alasan permohonan pengembalian dana seperti nomor rekening, hasil pindai dan/atau fotokopi buku tabungan, surat keterangan kesehatan, surat kematian, dan sebagainya.
          d.	Pengembalian dana kepada Pelanggan hanya dapat dikirim oleh Xerpihan melalui rekening atau transfer bank.
          
          LAYANAN
          Proofread
          Pengerjaan proofread dilakukan secara manual dengan bantuan Track Change dari Microsoft Word. Setiap perubahan yang dilakukan merupakan saran perbaikan dari kami, bukan berarti harus diterima. Proofread yang dipesan menunjukkan bahwa Anda telah memesan jasa perbaikan penulisan dari Ahli Bahasa kami (lulusan Sastra Inggris UGM).
          Subtitle
          Pekerjaan subtitle yang dipesan menunjukkan bahwa Anda telah memesan jasa pembuatan subtitle kami. Pembuatan subtitle sendiri sepenuhnya mengikuti kehendak Anda, seperti format, tanda baca, dan gaya tulis. Ditambah lagi, Anda dapat memilih untuk mendapatkan file srt, ass, atau bahkan hardsub (file video dengan subtitle yang menempel)
          Terjemah
          Penerjemahan dilakukan dengan segala bantuan segala macam tools yang ada, seperti Thesaurus, Google Translate, hingga KBBI. Ini berarti pengerjaannya dilakukan secara manual kata demi kata oleh Ahli Bahasa kami (lulusan Sastra Inggris UGM) dengan memerhatikan kaidah penulisan. Segala tools yang digunakan hanyalah untuk mempermudah dan mempercepat pengerjaan.
          Transkripsi
          Transkripsi adalah pengerjaan yang melibatkan penulisan rekaman menjadi teks dalam segala format. Bedanya dengan subtitle adalah transkripsi ini tanpa memerhatikan timestamp yang ada dan hanya menghasilkan dokumen word/docx dengan format yang telah disetujui.

          STUDI KASUS
          Proofread/Terjemah
          Pada kasus ini, seringkali ditemui kesalahpahaman akan hasil yang didapat. Contohnya, pada penerjemahan, kami mengerjakannya tanpa pengubahan bentuk kalimat (parafrasa) apabila kalimat yang ada sudah baik dalam segi penulisan (grammar yang benar dan mudah dipahami). Sedangkan, boleh jadi hasilnya mirip dengan Google Translate. Tetapi, kalaupun mirip, kami jamin kebenaran penulisannya. Oleh karena itu, silakan tandai bagian mana yang perlu diubah apabila secara kalimat kurang sesuai.
          Subtitle/Transkripsi
          Karena setiap pengerjaan kami jamin kepuasannya, maka kami tidak menjamin pada pengiriman pertama hasil pengerjaan, hasilnya sudah baik dan sesuai. Oleh karena itu, silakan komunikasikan dengan baik keinginannya, kami akan menyesuaikannya sebaik dan secepat mungkin.

        </p>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
