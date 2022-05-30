/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react';
import Image from 'next/image';
import { L, _ } from '../lib/i18n';
import { useRouter } from 'next/router';
import { MetaProps } from '../types/layout';
import CheckIcon from '../images/Path.svg';
import Link from 'next/link';

type TabsProps = {
  children?: React.ReactNode[];
  customMeta?: MetaProps;
};
interface TabsContent {
  label: string;
  desc: string[];
  content: {
    title: string;
    id: string;
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
      'Jasa proofreading bahasa Indonesia dan bahasa Inggris untuk berbagai dokumen secara online maupun offline.',
      'Indonesian or English proofreading service for scientific paper, journal, essay, books (fiction and non-fiction), website, reports, and many other',
    ],
    content: [
      {
        id: '0-0',
        title: 'Proofreading',
        alert: 'Not eligible for proofreading certificate',
        price: '150K',
        description: 'ENG: per 2500 words \n ID: per 3500 words',
        services: [
          'Double spaces', 
          'Writing format', 
          'Typo', 
          'Punctuation', 
          'Grammar', 
          'Unlimited revision'
        ],
      },
      {
        id: '0-1',
        title: 'Premium Editing',
        alert: '',
        price: '300K',
        description: 'ENG: per 2500 words \nID: per 3500 words',
        services: [
          'Copy editing',
          'Rejection shield',
          'Edit your journal based on reviewers comment',
          'Ensure all issues are appropriately handled',
        ],
      },
      {
        id: '0-2',
        title: 'Copy Editing',
        alert: '',
        price: '250K',
        description: 'ENG: per 2500 words \nID: per 3500 words',
        services: [
          'Proofreading',
          'Wordy',
          'Conjunction',
          'Hard to read sentence',
          'Ambiguous term',
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
      'Jasa penerjemah dokumen sekaligus proofreading untuk bahasa Inggris dan bahasa Indonesia.',
      'Translation service combined with proofreading for English and Indonesian.',
    ],
    content: [
      {
        id: '3-0',
        title: 'Standard',
        alert: '',
        price: '200K',
        description: 'per 1500 words',
        services: ['UK/US Writing Style', 'Copy Editing', 'Unlimited Revision'],
      },
      {
        id: '3-1',
        title: 'Premium',
        alert: '',
        price: '250K',
        description: 'per 1500 words',
        services: ['UK/US Writing Style', 'Premium Editing', 'Unlimited Revision'],
      },
      {
        id: '3-2',
        title: 'Back Translation',
        alert: '',
        price: '100K',
        description: 'per 200 words',
        services: ['UK/US Writing Style', 'Back Translation', 'Unlimited Revision'],
      },
    ],
  },
  {
    label: 'Subtitle',
    desc: [
      'Jasa pembuatan subtitle, close caption (cc), dan terjemah subtitle bahasa Indonesia dan Inggris untuk film dan berbagai video.',
      'Indonesian and English subtitling service for videos and films packaged with custom request just for you.',
    ],
    content: [
      {
        id: '4-0',
        title: 'Standard',
        alert: '',
        price: '200K',
        description: 'per 8 minutes',
        services: ['Hardsub/SRT', 'English/Bahasa Indonesia', 'Unlimited Revision'],
      },
      {
        id: '4-1',
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
      'Jasa transkripsi yang mengubah rekaman suara menjadi teks dengan hasil instan atau manual sesuai permintaan. Tersedia dalam bahasa Indonesia dan bahasa Inggris.',
      'Speech-to-text or transcription service for Indonesian and/or English with instant result or custom request as you wish',
    ],
    content: [
      {
        id: '5-0',
        title: 'Standard',
        alert: '',
        price: '200K',
        description: 'per 20 minutes',
        services: ['Docs File As Requested', 'English/Bahasa Indonesia', 'Unlimited Revision'],
      },
      {
        id: '5-1',
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
  console.log(tab);
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
                  <div
                    className={`gap-8 pt-5 grid justify-center w-full ${
                      val.content.length === 2 ? 'md:grid-cols-2 md:px-20' : 'md:grid-cols-3'
                    }`}>
                    {val.content.map((content, index) => (
                      <div
                        key={content.title}
                        className={` rounded-3xl border-2 p-6 content-between shadow text-center space-y-10 items-stretch text-[#585858] flex-wrap flex ${
                          val.content.length < 3 && index === 0 && 'justify-self-auto'
                        }`}
                        style={{ background: color[index] }}>
                        <div className="text-center items-center w-full flex-col flex space-y-3">
                          <h2 className="text-3xl font-semiBold">{content.title}</h2>
                          <div className="flex items-center space-x-2">
                            <p className="text-sm">IDR</p>
                            <h2 className="text-4xl">{content.price}</h2>
                          </div>
                          <p className="md:whitespace-pre-wrap font-light">{content.description}</p>
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
                          onClick={() => {
                            window.localStorage.setItem('order-paket', content.id);
                          }}
                          className={`rounded-full p-3 w-full font-bold text-center text-lg  flex-1 items-end ${
                            index === 1
                              ? 'bg-xerpihan-primary-500 hover:bg-xerpihan-primary-400 text-white dark:text-white'
                              : 'border-1 bg-white border-gray-400 hover:bg-xerpihan-primary-500 text-[#585858] hover:text-white  '
                          }`}>
                          <Link href="/order">
                            <p>
                              <L>
                                {'Beli Paket'}
                                {'Buy Package'}
                              </L>
                            </p>
                          </Link>
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
