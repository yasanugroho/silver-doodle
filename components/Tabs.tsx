import React, { useState } from 'react';
import Image from 'next/image';
import { L, _ } from '../lib/i18n';
import { useRouter } from 'next/router';
import { MetaProps } from '../types/layout';
import CheckIcon from '../images/Path.svg';

type TabsProps = {
  children?: React.ReactNode[];
  customMeta?: MetaProps;
};
interface TabsContent {
  label: string;
  desc: string[];
  content: {
    title: string;
    alert: string;
    price: string;
    description: string;
    services: string[];
  }[];
}
const tab: TabsContent[] = [
  {
    label: 'Proofread',
    desc: [
      'Jasa proofreading Bahasa Indonesia atau Inggris untuk keperluan paper ilmiah, jurnal, essay, buku (fiksi dan non-fiksi), situs web, laporan, dan masih banyak lagi.',
      'Indonesian or English proofreading service for scientific paper, journal, essay, books (fiction and non-fiction), website, reports, and many other',
    ],
    content: [
      {
        title: 'Proofread',
        alert: 'Not eligible for proofreading certificate',
        price: '150K',
        description: 'ENG: per 2500 words \n ID: per 3500 words',
        services: ['Double spaces', 'Writing format', 'Typo', 'Punctuation', 'Grammar', 'Unlimited version'],
      },
      {
        title: 'Premium Editing',
        alert: '',
        price: '300K',
        description: 'ENG: per 2500 words \nID: per 3500 words',
        services: [
          'Copy editing',
          'Rejection shield',
          'Edit your journal based on reviewers comment',
          'Ensure all issues are appropiately handled',
        ],
      },
      {
        title: 'Copy Editing',
        alert: '',
        price: '250K',
        description: 'ENG: per 2500 words \nID: per 3500 words',
        services: [
          'Proof reading',
          'Wordy',
          'Conjunction',
          'Hard to read sentence',
          'Ambigous term',
          'Fragment and run on sentence',
          'Incoherent paragraph',
          'Literal translation',
        ],
      },
    ],
  },
  {
    label: 'Translation',
    desc: [
      'Jasa penerjemah sekaligus proofreading untuk Bahasa Inggris dan Indonesia.',
      'Translation service combined with proofreading for English and Indonesian.',
    ],
    content: [
      {
        title: 'Standard',
        alert: '',
        price: '200K',
        description: 'per 1500 words',
        services: ['UK/US Writing Style', 'Copy Editing', 'Unlimited Revision'],
      },
      {
        title: 'Premium',
        alert: '',
        price: '250K',
        description: 'per 1500 words',
        services: ['UK/US Writing Style', 'Premium Editing', 'Unlimited Revision'],
      },
      {
        title: 'BACK TRANSLATION',
        alert: '',
        price: '100K',
        description: 'per 200 words',
        services: ['UK/US Writing Style', 'Back Translation', 'Unlimited Revision'],
      },
    ],
  },
  {
    label: 'Subscription',
    desc: [
      'Jasa subtitle Bahasa Indonesia dan Inggris untuk video dan film yang mengikuti permintaan khusus kamu.',
      'Indonesian and English subtitling service for videos and films packaged with custom request just for you.',
    ],
    content: [
      {
        title: 'Standard',
        alert: '',
        price: '200K',
        description: 'per 8 minutes',
        services: ['Hardsub/SRT', 'English/Bahasa Indonesia', 'Unlimited Revision'],
      },
      {
        title: 'Premium',
        alert: '',
        price: '300K',
        description: 'per 8 minutes',
        services: ['Premium Translation', 'Hardsub/SRT', 'English/Bahasa Indonesia', 'Unlimited Revision'],
      },
    ],
  },
  {
    label: 'Transcription',
    desc: [
      'Jasa transkripsi untuk Bahasa Indonesia dan/atau Inggris dengan hasil instan atau permintaan khusus sesukamu',
      'Speech-to-text or transcription service for Indonesian and/or English with instant result or custom request as you wish',
    ],
    content: [
      {
        title: 'Standard',
        alert: '',
        price: '200K',
        description: 'per 20 minutes',
        services: ['Docs File As Requested', 'English/Bahasa Indonesia', 'Unlimited Revision'],
      },
      {
        title: 'Premium',
        alert: '',
        price: '300K',
        description: 'per 20 minutes',
        services: ['Premium Translation', 'Docs File As Requested', 'English/Bahasa Indonesia', 'Unlimited Revision'],
      },
    ],
  },
];

const color = ['#F7E5E5', '#FFFFFF', '#ECE9E9'];

const Tabs: React.FC<TabsProps> = () => {
  const router = useRouter();
  const { locale: l } = router;
  const [activeTab, setActiveTab] = useState(tab[0].label);
  return (
    <div className="w-full max-w-5xl mx-auto pt-5 md:px-0 space-y-4 mb-20">
      <ul className="grid md:grid-cols-4 grid-cols-2 border-2 rounded-xl md:rounded-full mx-4 md:mx-28 md:items-center p-2">
        {tab.map((val: TabsContent) => {
          return (
            <div key={val.label}>
              <a
                className={`${
                  val.label === activeTab &&
                  'bg-xerpihan-primary-500 text-white dark:text-white font-bold rounded-full p-1'
                } cursor-pointer px-8 items-center text-sm md:text-lg`}
                onClick={() => setActiveTab(val.label)}>
                {val.label}
              </a>
            </div>
          );
        })}
      </ul>
      <div className="p-6 rounded-3xl border-2 relative mx-4 md:mx-0 my-20 shadow-lg ">
        <div className="-mb-14 overflow-auto">
          {tab.map((val: TabsContent, index: number) => (
            <div key={val.label}>
              {val.label === activeTab && (
                <div>
                  <p className="text-center py-4 md:px-10">{_(l, val.desc[0], val.desc[1])}</p>
                  <div className="gap-8 pt-5 grid md:grid-cols-3 justify-center w-full">
                    {val.content.map((content, index) => (
                      <div
                        key={content.title}
                        className={`rounded-3xl border-2 p-6 h-auto content-between shadow text-center space-y-10 items-stretch text-[#585858] flex-wrap flex ${
                          val.content.length < 3 && index === 0 && 'justify-self-auto'
                        }`}
                        style={{ background: color[index] }}>
                        <div className="text-center flex-col flex space-y-4">
                          <h2 className="text-3xl font-bold">{content.title}</h2>
                          <div className="flex items-center space-x-4 mx-auto">
                            <p className="mb-0 text-sm">IDR</p>
                            <h2 className="text-4xl ml-4">{content.price}</h2>
                          </div>
                          <p className="md:whitespace-pre-wrap mt-2 font-light">{content.description}</p>
                          <ul className="py-5 space-y-2">
                            {content.services.map(el => {
                              return (
                                <li className="flex space-x-4 items-center text-left" key={index}>
                                  <div className="w-1/6">
                                    <Image src={CheckIcon} alt={el} className="h-full" />
                                  </div>
                                  <p className="w-5/6">{el}</p>
                                </li>
                              );
                            })}
                          </ul>
                          <p className="text-sm">{content.alert}</p>
                        </div>
                        <button
                          className={`rounded-full p-3 w-full font-bold text-center text-lg  flex-1 items-end ${
                            index === 1 ? 'bg-xerpihan-primary-500' : 'border-1 bg-white border-gray-400'
                          }`}>
                          <a href="" className={index === 1 ? 'text-white dark:text-white' : 'text-[#585858] '}>
                            <L>
                              {'Beli Paket'}
                              {'Buy Package'}
                            </L>
                          </a>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
