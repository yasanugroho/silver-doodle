export const listService = [
  { id: 0, name: 'Proofread - English' },
  { id: 1, name: 'Proofread - Bahasa Indonesia' },
  { id: 2, name: 'Proofread - Paraphrase' },
  { id: 3, name: 'Translator' },
  { id: 4, name: 'Subtitle' },
  { id: 5, name: 'Transcription' },
];
export const showDate = date => {
  let todayMs = Date.parse(date);
  let tomorrowMs = todayMs + 3600 * 24 * 1000;
  let tomorrowDate = new Date(tomorrowMs);
  let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  let months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'November',
    'Desember',
  ];
  return `${days[tomorrowDate.getDay()]}, ${tomorrowDate.getDate()} ${
    months[tomorrowDate.getMonth()]
  } ${tomorrowDate.getFullYear()}, pukul ${tomorrowDate.getHours()}.${
    tomorrowDate.getMinutes() < 10 ? '0' : ''
  }${tomorrowDate.getMinutes()}`;
};

export const selectionData = [
  {
    name: 'Proofread English',
    delivery: 10000,
    unit: 'words',
    packages: [
      {
        id: 0,
        name: 'Proofreading',
        package: 'Proofreading',
        price: 150,
        perunit: 2500,
      },
      {
        id: 1,
        name: 'Premium Editing',
        package: 'Premium Editing',
        price: 300,
        perunit: 2500,
      },
      {
        id: 2,
        name: 'Copy Editing',
        package: 'Copy Editing',
        price: 250,
        perunit: 2500,
      },
    ],
  },
  {
    name: 'Proofread Bahasa Indonesia',
    unit: 'words',
    delivery: 10000,
    packages: [
      {
        id: 0,
        name: 'Proofreading',
        package: 'Proofreading',
        price: 150,
        perunit: 3500,
      },
      {
        id: 1,
        name: 'Premium Editing',
        package: 'Premium Editing',
        price: 300,
        perunit: 3500,
      },
      {
        id: 2,
        name: 'Premium Editing',
        package: 'Premium Editing',
        price: 250,
        perunit: 3500,
      },
    ],
  },
  {
    name: 'Proofread Paraphrase',
    unit: 'words',
    delivery: 10000,
    packages: [
      {
        id: 0,
        name: 'Standard',
        package: 'Standard',
        price: 300,
        perunit: 1000,
      },
    ],
  },
  {
    name: 'Translation',
    unit: 'words',
    delivery: 5000,
    packages: [
      {
        id: 0,
        name: 'Standard',
        package: 'Standard',
        price: 200,
        perunit: 1500,
      },
      {
        id: 1,
        name: 'Premium',
        package: 'Premium',
        price: 250,
        perunit: 1500,
      },
      {
        id: 2,
        name: 'Back Translation',
        package: 'Back Translation',
        price: 100,
        perunit: 200,
      },
    ],
  },
  {
    name: 'Subtitle',
    unit: 'minutes',
    delivery: 20,
    packages: [
      {
        id: 0,
        name: 'Standard',
        package: 'Standard',
        price: 200,
        perunit: 8,
      },
      {
        id: 1,
        name: 'Premium',
        package: 'Premium',
        price: 300,
        perunit: 8,
      },
    ],
  },

  {
    name: 'Transcription',
    unit: 'minutes',
    delivery: 60,
    packages: [
      {
        id: 0,
        name: 'Standard',
        package: 'Standard',
        price: 200,
        perunit: 20,
      },
      {
        id: 1,
        name: 'Premium',
        package: 'Premium',
        price: 300,
        perunit: 20,
      },
    ],
  },
];

export const topicMultiplier = [
  {
    id: 0,
    topic: 'Sastra',
    name: 'Sastra',
    multiplier: 2,
  },
  {
    id: 1,
    topic: 'Kreatif',
    name: 'Kreatif',
    multiplier: 2,
  },
  { id: 2, topic: 'Jurnalistik', name: 'Jurnalistik', multiplier: 1.5 },
  { id: 3, topic: 'Bisnis', name: 'Bisnis', multiplier: 2.5 },
  { id: 4, topic: 'Ilmiah', name: 'Ilmiah', multiplier: 1.5 },
  { id: 5, topic: 'Hukum', name: 'Hukum', multiplier: 1.2 },
  { id: 6, topic: 'Umum', name: 'Umum', multiplier: 1.0 },
];
