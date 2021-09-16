import { ServicesIcon4, ServicesIcon3, ServicesIcon2, ServicesIcon1 } from '../lib/images';

export const listLayanan = [
  {
    img: ServicesIcon1,
    titleId: 'Lebih dari 1.000 klien mempercayai Xerpihan',
    titleEn: 'Over than 1.000 clients trust Xerpihan',
    subTitleId:
      'Jasa proofreading, translate, subtitle dan transkripsi kami telah membantu banyak pihak mulai dari institusi pemerintah, perusahaan swasta, hingga YouTuber.',
    subTitleEn:
      'Jasa proofreading, translate, subtitle dan transkripsi kami telah membantu banyak pihak mulai dari institusi pemerintah, perusahaan swasta, hingga YouTuber.',
    styling: '',
  },
  {
    img: ServicesIcon2,
    titleId: 'Cukup Sekali Pesan',
    titleEn: 'Order Once',
    subTitleId: 'Kami siap memberikan garansi revisi tanpa batas untuk setiap pemesanan jasa proofreading, terjemah, subtitle, atau transkripsi.',
    subTitleEn: 'Once you order, enjoy the service until you are satisfied. No revision limit.',
    styling: '',
  },
  {
    img: ServicesIcon3,
    titleId: 'Ahli Bahasa Profesional',
    titleEn: 'Profesional Translator',
    subTitleId: 'Proofreader dan Penerjemah kami merupakan lulusan sastra Inggris yang sudah berpengalaman menyunting dan menerjemahkan dokumen serta membuat subtitle dan transkrip.',
    subTitleEn: 'English Major Graduates, Use Newest Reference',
    styling: '',
  },
  {
    img: ServicesIcon4,
    titleId: 'Jaminan Kerahasiaan',
    titleEn: 'Confidentiality Guarantee',
    subTitleId: 'Tersedia surat perjanjian kerahasiaan (non-disclosure agreement) apabila dibutuhkan.',
    subTitleEn: 'Kami siap memberikan perjanjian kerahasiaan (non-disclosure agreement) setiap saat',
    styling: '',
  },
];

export interface serviceText {
  id: string;
  en: string;
}

export const text: serviceText[] = [
  { id: 'Proofreading jurnal dan skripsi', en: 'Script and thesis proofreading' },
  { id: 'Subtitle YouTube dan film', en: 'Document translate' },
  { id: 'Terjemah jurnal dan artikel', en: 'Subtitle on youtube channel' },
  { id: 'Transkrip wawancara', en: 'Audio clip transcript' },
  { id: 'Parafrasa kalimat', en: 'Proposal perbaikan' },
  { id: '…dan masih banyak lagi, sesuaikan dengan kebutuhan anda!', en: '..and many more, ' },
  { id: '', en: '' },
];
