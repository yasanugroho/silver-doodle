import { cw, cwk, ezzat, yasa } from '../lib/images';

export interface coreTeam {
  img: any;
  name: string;
  position: string;
  about: string;
  aboutEn: string;
}

export const teamCore: coreTeam[] = [
  {
    img: yasa,
    name: 'Yasa Nugroho',
    position: 'CEO',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
    aboutEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
  },
  {
    img: ezzat,
    name: 'Ezzat Chamudi',
    position: 'CTO',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedortor non metus rhoncus lacinia.',
    aboutEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
  },
];

export const listAdmin: coreTeam[] = [
  {
    img: cw,
    name: 'Asprilla Aqmarina',
    position: 'Operational Manager',
    about: 'Lorem ipsum dolor sit amet, consleus rhoncus lacinia.',
    aboutEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
  },
  {
    img: cw,
    name: 'Rika Rahmawati',
    position: 'Secretary',
    about: 'Lorem ipsum dolor sit.',
    aboutEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
  },

  {
    img: cw,
    name: 'Rika Rahmawati',
    position: 'SEO Specialist',
    about: 'Lorem ipsusectetur. Suspendisse potenti. In non tortor non metus rhoncus lacinia.',
    aboutEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
  },
];

export const creativeTeam: coreTeam[] = [
  {
    img: cwk,
    name: 'M Shidiq Hanif',
    position: 'Head of Creative',
    about: 'Lorem ipsum dolor sibulum vitae ipsum us rhoncus lacinia.',
    aboutEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
  },
  {
    img: cwk,
    name: 'Ferdian Sazali',
    position: 'Creative Agent',
    about: 'Lorem ipsumSed iaculis, orci sed imsan sem pellentesque, posuereia.',
    aboutEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
  },
];

export const LanguageOffice: coreTeam[] = [
  {
    img: cwk,
    name: 'Firosyan Sulaiman',
    position: 'Language Officer',
    about: 'Lorem ipsum dtenti. In non tortor non metus rhoncus lacinia.',
    aboutEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
  },
  {
    img: cw,
    name: 'Prahastuti Nastiti',
    position: 'Language Officer',
    about: 'Lorem ipsums rhoncus lacinia.',
    aboutEn: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis, o',
  },
];
