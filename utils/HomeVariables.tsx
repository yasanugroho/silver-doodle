import { proofreading, translation, subtitle, transcription, spoon, bps, cirebon, procon, herba } from '../lib/images';

export const listFitur = [
  {
    id: 'Proofreading',
    en: 'Proofreading',
  },
  {
    id: 'Terjemahan',
    en: 'Translation',
  },
  {
    id: 'Subtitle',
    en: 'Subtitles',
  },
  {
    id: 'Transkripsi',
    en: 'Transcription',
  },
];

export const listLogoTim = [herba, bps, cirebon, procon, spoon];

export const dataSection = [
  {
    img: proofreading,
    title: 'Proofreading',
    subTitle: 'Hilangkan kesalahan penulisan di dokumen kamu',
    content:
      'Terlalu banyak jasa proofreading di luar sana dengan rekam jejak dan hasil yang kurang jelas. Coba sekarang dan dapatkan sertifikat proofreading untuk dokumenmu.',
    styling: true,
  },
  {
    img: translation,
    title: 'Terjemahan',
    subTitle: 'Alih bahasa dokumen',
    content:
      'Untuk kamu yang bingung dengan hasil mesin penerjemah dan tidak dapat menilai hasilnya. Pilih harga dan waktu penyelesaian sesuai kebutuhanmu. Jasa translate dokumen kamu yang kekinian.',
  },
  {
    img: subtitle,
    title: 'Subtitle',
    subTitle: 'Tingkatkan aksesibilitas di video kamu',
    content:
      'Content creator menjadi pengguna utama jasa subtitle ini. Cocok buat kamu yang ingin meningkatkan engagement konten.',
    styling: true,
  },
  {
    img: transcription,
    title: 'Transkripsi',
    subTitle: 'Konversi audio ke teks',
    content:
      'Ada rekaman hasil wawancara atau sedang membuat konten dan ingin ditranskripsi? Tersedia jasa transkrip instan atau manual yang mudah dan cepat.',
  },
];
