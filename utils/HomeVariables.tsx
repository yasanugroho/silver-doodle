import {
  drawingProofreading,
  drawingTranslation,
  drawingSubtitle,
  drawingTranscription,
  spoon,
  bps,
  cirebon,
  procon,
  herba,
  as,
  sh,
  dapus,
  amarta,
  adhi,
} from '../lib/images';

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

export const listLogoClient = [adhi, bps, amarta, procon, sh, spoon, as, dapus, cirebon, herba];

export const dataSection = [
  {
    img: drawingProofreading,
    title: 'Proofreading',
    titleEn: 'Proofreading',
    subTitle: 'Hilangkan kesalahan penulisan di dokumen kamu',
    subTitleEn: 'Eliminate typos in your document',
    content:
      'Butuh jasa proofreading yang murah dan berkualitas? Proofreader kami telah berpengalaman menangani berbagai jenis dokumen bahasa Indonesia dan Inggris. Pesan sekarang dan dapatkan sertifikat proofreading untuk dokumenmu!',
    contentEn:
      'Do you need affordable and quality proofreading service? Our proofreaders have experienced in handling various Indonesian and English documents. Order now and get proofreading certificate for your document!',
    styling: true,
  },
  {
    img: drawingTranslation,
    title: 'Terjemahan',
    titleEn: 'Translation',
    subTitle: 'Alih bahasa dokumen',
    subTitleEn: 'Document translation',
    content:
      'Ingin menerjemahkan dokumen dari bahasa Inggris ke Indonesia atau sebaliknya? Gunakan jasa penerjemah kami dan dapatkan hasil terjemahan bahasa Inggris/Indonesia yang akurat dan cepat.',
    contentEn:
      'Do you need to translate your English and Indonesian document or vice versa? Use our translation service and we make sure you get accurate and acceptable translation result!',
  },
  {
    img: drawingSubtitle,
    title: 'Subtitle',
    titleEn: 'Subtitles',
    subTitle: 'Tingkatkan aksesibilitas di video kamu',
    subTitleEn: 'Increase your video accessibility rate',
    content:
      'Kamu aktif di YouTube dan media sosial lainnya? Ingin jangkauan audiensmu lebih luas? Gunakan jasa subtitle kami untuk meningkatkan engagement videomu!',
    contentEn:
      'Are you a YouTuber and social media influencer? Do you want to reach more audience? Use our subtitling service to increase your engagement!',
    styling: true,
  },
  {
    img: drawingTranscription,
    title: 'Transkripsi',
    titleEn: 'Transcription',
    subTitle: 'Konversi audio ke teks',
    subTitleEn: 'Converting audio to text',
    content:
      'Kamu butuh jasa untuk transkripsi rekaman rapat atau wawancara? Kami menyediakan jasa transkrip verbatim dan nonverbatim yang murah dan cepat.',
    contentEn:
      'Do you need a service to transcribe any meeting or interview recording? We provide affordable and instant verbatim and non-verbatim transcription.',
  },
];
