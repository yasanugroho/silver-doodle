import { ServicesIcon4, ServicesIcon3, ServicesIcon2, ServicesIcon1 } from '../lib/images';

export const listLayanan = [
  {
    img: ServicesIcon1,
    titleId: 'Lebih dari 1.000 Klien Mempercayai Xerpihan',
    titleEn: 'More Than 1.000 Clients Trust Xerpihan',
    subTitleId:
      'Jasa proofreading, translate, subtitle dan transkripsi kami telah membantu banyak pihak mulai dari institusi pemerintah, perusahaan swasta, hingga YouTuber.',
    subTitleEn:
      'Our proofreading, translation, subtitling and transcription services have helped many government institutions, private companies, and YouTubers.',
    styling: '',
  },
  {
    img: ServicesIcon2,
    titleId: 'Cukup Sekali Pesan',
    titleEn: 'Order Once',
    subTitleId: 'Kami siap memberikan garansi revisi tanpa batas untuk setiap pemesanan jasa proofreading, translate, subtitle, atau transkripsi.',
    subTitleEn: 'We are ready to offer unlimited revision guarantee for every order of proofreading, translation, subtitle, and transcription service.',
    styling: '',
  },
  {
    img: ServicesIcon3,
    titleId: 'Ahli Bahasa Profesional',
    titleEn: 'Professional Translator',
    subTitleId: 'Proofreader dan penerjemah kami merupakan lulusan Sastra Inggris yang sudah berpengalaman menyunting dan menerjemahkan dokumen serta membuat subtitle dan transkrip.',
    subTitleEn: 'Our proofreaders and translators are English Literature graduates who are experienced in editing and translating documents and also in subtitling and transcribing',
    styling: '',
  },
  {
    img: ServicesIcon4,
    titleId: 'Jaminan Kerahasiaan',
    titleEn: 'Confidentiality Guarantee',
    subTitleId: 'Tersedia surat perjanjian kerahasiaan (non-disclosure agreement) apabila dibutuhkan.',
    subTitleEn: 'A non-disclosure agreement is available if needed',
    styling: '',
  },
];

export interface serviceText {
  id: string;
  en: string;
}

export const text: serviceText[] = [
  { id: 'Proofreading jurnal dan skripsi', en: 'Journal and thesis proofreading' },
  { id: 'Subtitle YouTube dan film', en: 'YouTube and film subtitle' },
  { id: 'Terjemah jurnal dan artikel', en: 'Journal and article translation' },
  { id: 'Transkrip wawancara', en: 'Audio clip transcript' },
  { id: 'Parafrasa kalimat', en: 'Sentences paraphrase' },
  { id: '…dan masih banyak lagi, sesuaikan dengan kebutuhan anda!', en: '..and many more, ' },
  { id: '', en: '' },
];
