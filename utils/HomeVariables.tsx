import Link from 'next/link';
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
    id: 'Paket Wisata Jogja',
    en: 'Jogja Tour Package',
  },
  {
    id: 'Paket Wisata Magelang',
    en: 'Magelang Tour Package',
  },
  {
    id: 'Paket Wisata Solo',
    en: 'Solo Tour Package',
  },
  {
    id: 'Paket Wisata Semarang',
    en: 'Semarang Tour Package',
  },
];

export const listLogoTim = [herba, bps, cirebon, procon, spoon];

export const listLogoClient = [adhi, bps, amarta, procon, sh, spoon, as, dapus, cirebon, herba];

export const dataSection = [
  {
    img: drawingProofreading,
    title: <Link href={"/jasa-proofreading"}><a>Paket Wisata Jogja</a></Link>,
    titleEn: <Link href={"/jasa-proofreading"}><a>Jogja Tour Package</a></Link>,
    subTitle: 'Lorem Ipsum',
    subTitleEn: 'Lorem Ipsum',
    content:
      'Lorem Ipsum',
    contentEn:
      'Lorem Ipsum',
    styling: true,
  },
  {
    img: drawingTranslation,
    title: <Link href={"/translate"}><a>Paket Wisata Magelang</a></Link>,
    titleEn: <Link href={"/translate"}><a>Magelang Tour Package</a></Link>,
    subTitle: 'Lorem Ipsum',
    subTitleEn: 'Lorem Ipsum',
    content:
      'Lorem Ipsum',
    contentEn:
      'Lorem Ipsum',
  },
  {
    img: drawingSubtitle,
    title: <Link href={"/subtitle"}><a>Paket Wisata Solo</a></Link>,
    titleEn: <Link href={"/subtitle"}><a>Solo Tour Package</a></Link>,
    subTitle: 'Lorem Ipsum',
    subTitleEn: 'Lorem Ipsum',
    content:
      'Lorem Ipsum',
    contentEn:
      'Lorem Ipsum',
    styling: true,
  },
  {
    img: drawingTranscription,
    title: <Link href={"/transcription"}><a>Paket Wisata Magelang</a></Link>,
    titleEn: <Link href={"/transcription"}><a>Magelang Tour Package</a></Link>,
    subTitle: 'Lorem Ipsum',
    subTitleEn: 'Lorem Ipsum',
    content:
      'Lorem Ipsum',
    contentEn:
      'Lorem Ipsum',
  },
];
