import React, { useState } from 'react';
import { MetaProps } from '../types/layout';
import CheckIcon from '../images/Path.svg';
import Image from 'next/image';
import { _ } from '../lib/i18n';
import { useRouter } from 'next/router';

type TabsProps = {
  children?: React.ReactNode[];
  customMeta?: MetaProps;
};
interface TabsContent {
  label: string;
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
    content: [
      {
        title: 'Proofread',
        alert: 'Not eligible for proofreading certificate',
        price: '150K',
        description: 'ENG: per 2500 words \nID: per 3500 words',
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
    content: [
      {
        title: 'Proofread',
        alert: 'Not eligible for proofreading certificate',
        price: '150k',
        description: 'ENG: per 2500 words \n ID: per 3500 words',
        services: ['Double spaces', 'Writing format', 'Typo', 'Punctuation', 'Grammar', 'Unlimited version'],
      },
    ],
  },
  {
    label: 'Subscription',
    content: [
      {
        title: 'Proofread',
        alert: 'Not eligible for proofreading certificate',
        price: '150k',
        description: 'ENG: per 2500 words \n ID: per 3500 words',
        services: ['Double spaces', 'Writing format', 'Typo', 'Punctuation', 'Grammar', 'Unlimited version'],
      },
    ],
  },
  {
    label: 'Transcription',
    content: [
      {
        title: 'Proofread',
        alert: 'Not eligible for proofreading certificate',
        price: '150k',
        description: 'ENG: per 2500 words \n ID: per 3500 words',
        services: ['Double spaces', 'Writing format', 'Typo', 'Punctuation', 'Grammar', 'Unlimited version'],
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
      <ul className="flex justify-between border-2 rounded-full mx-28 items-center p-2">
        {tab.map((val: TabsContent) => {
          return (
            <a
              className={`${
                val.label === activeTab && 'bg-xerpihan-primary-500 text-white font-bold rounded-full'
              } cursor-pointer px-8 items-center text-sm md:text-lg`}
              key={val.label}
              onClick={() => setActiveTab(val.label)}>
              {val.label}
            </a>
          );
        })}
      </ul>
      <div className="p-6 rounded-3xl border-2 relative my-20 shadow-lg ">
        <p className="text-center px-10">
          {_(
            l,
            'Jasa proofreading Bahasa Indonesia atau Inggris untuk keperluan paper ilmiah, jurnal, essay, buku (fiksi dan non-fiksi), situs web, laporan, dan masih banyak lagi.',
            'Indonesian or English proofreading service for scientific paper, journal, essay, books (fiction and non-fiction), website, reports, and many other',
          )}
        </p>
        <div className="-mb-14">
          {tab.map((val: TabsContent, index: number) => {
            if (val.label == activeTab) {
              return (
                <div className="gap-4 pt-5 grid grid-cols-3 justify-center ">
                  {val.content.map((content, index) => {
                    return (
                      <div
                        key={content.title}
                        className="rounded-3xl border-2 p-6 h-auto content-between	 shadow text-center space-y-10 items-stretch text-[#585858] flex-wrap flex"
                        style={{ background: color[index] }}>
                        <div className="text-center flex-col flex space-y-4">
                          <h2 className="text-3xl font-bold">{content.title}</h2>
                          <div className="flex items-center space-x-4 mx-auto">
                            <p className="mb-0 text-sm">IDR</p>
                            <h2 className="text-4xl ml-4">{content.price}</h2>
                          </div>
                          <p className="whitespace-pre-wrap mt-2 font-light">{content.description}</p>
                          <ul className="py-5 space-y-2">
                            {content.services.map(el => {
                              return (
                                <li className="flex space-x-4 items-center text-left" key={index}>
                                  <div className="w-6">
                                    <Image src={CheckIcon} alt={el} className="h-full" />
                                  </div>
                                  <p>{el}</p>
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
                          <a href="" className={index === 1 ? 'text-white' : 'text-[#585858]'}>
                            Beli Paket
                          </a>
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
