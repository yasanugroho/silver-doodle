import { ServicesIcon4, ServicesIcon3, ServicesIcon2, ServicesIcon1 } from '../lib/images';

export const listLayanan = [
  {
    img: ServicesIcon1,
    titleId: 'Lebih dari 1.000 klien mempercayai Xerpihan',
    titleEn: 'Over than 1.000 clients trust Xerpihan',
    subTitleId: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    subTitleEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    styling: '',
  },
  {
    img: ServicesIcon2,
    titleId: 'Cukup Sekali Pesan',
    titleEn: 'Order Once',
    subTitleId: 'Sekali saja kamu pesan, nikmati layanan hingga puas. Tidak ada batas revisi.',
    subTitleEn: 'Once you order, enjoy the service until you are satisfied. No revision limit.',
    styling: '',
  },
  {
    img: ServicesIcon3,
    titleId: 'Ahli Bahasa Profesional',
    titleEn: 'Profesional Translator',
    subTitleId: 'Lulusan Sastra inggris, Penggunaan Referensi Terbaru',
    subTitleEn: 'English Major Graduates, Use Newest Reference',
    styling: '',
  },
  {
    img: ServicesIcon4,
    titleId: 'Jaminan Kerahasiaan',
    titleEn: 'Confidentiality Guarantee',
    subTitleId: 'Nam ultricies ligula massa, ultricies efficitur risus efficitur quis. Aliquam vitae ipsum lectus.',
    subTitleEn: 'Nam ultricies ligula massa, ultricies efficitur risus efficitur quis. Aliquam vitae ipsum lectus.',
    styling: '',
  },
];

export interface serviceText {
  id: string;
  en: string;
}

export const text: serviceText[] = [
  { id: 'Proofreading skripsi dan tesis', en: 'Script and thesis proofreading' },
  { id: 'Terjemahan dokumen', en: 'Document translate' },
  { id: 'Pemberian subtitle pada kanal YouTube', en: 'Subtitle on youtube channel' },
  { id: 'Transkripsi audio clip', en: 'Audio clip transcript' },
  { id: 'Jasa perbaikan proposal', en: 'Proposal perbaikan' },
  { id: '…dan masih banyak lagi, sesuaikan dengan kebutuhan anda!', en: '..and many more, ' },
  { id: '', en: '' },
];
