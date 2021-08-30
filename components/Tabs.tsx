import React, { useState } from 'react';
import { MetaProps } from '../types/layout';
import CheckIcon from '../images/Path.svg';
import Image from 'next/image';

type TabsProps = {
  children?: React.ReactNode[];
  customMeta?: MetaProps;
};
interface TabsContent {
  label: string;
  content: {
    title: string;
    alert: string;
    /**
     Harga layanan
     **/
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
        price: '150k',
        description: 'ENG: per 2500 words \nID: per 3500 words',
        services: ['Double spaces', 'Writing format', 'Typo', 'Punctuation', 'Grammar', 'Unlimited version'],
      },
      {
        title: 'Premium Editing',
        alert: 'Not eligible for proofreading certificate',
        price: '150k',
        description: 'ENG: per 2500 words \nID: per 3500 words',
        services: ['Double spaces', 'Writing format', 'Typo', 'Punctuation', 'Grammar', 'Unlimited version'],
      },
      {
        title: 'Premium Editing',
        alert: 'Not eligible for proofreading certificate',
        price: '150k',
        description: 'ENG: per 2500 words \nID: per 3500 words',
        services: ['Double spaces', 'Writing format', 'Typo', 'Punctuation', 'Grammar', 'Unlimited version'],
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

const Tabs: React.FC<TabsProps> = ({ children, customMeta }) => {
  const [activeTab, setActiveTab] = useState(tab[0].label);
  return (
    <>
      <div className="container max-w-5xl mx-auto pt-5 px-5 md:px-0">
        <ul className="p-0 m-0 flex justify-center border-2 rounded-3xl list-none md:max-w-max mx-auto">
          {tab.map((val: TabsContent, index: number) => {
            return (
              <a
                className={
                  val.label == activeTab
                    ? 'cursor-pointer text-sm md:text-lg bg-xerpihan-primary-500 text-white font-bold rounded-2xl m-1 md:m-2 position-relative p-1 md:p-2'
                    : 'cursor-pointer md:p-2 md:m-2 m-1 p-1 text-sm md:text-lg'
                }
                key={index}
                onClick={() => setActiveTab(val.label)}>
                {val.label}
              </a>
            );
          })}
        </ul>
        {tab.map((val: TabsContent, index: number) => {
          if (val.label == activeTab) {
            return (
              <div className="gap-5 pt-5 justify-center md:flex">
                {val.content.map((content, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded-3xl border-2 p-8"
                      style={{ background: color[index], color: '#585858' }}>
                      <div key={index}>
                        <h2 className="text-3xl font-bold">{content.title}</h2>
                        <small>{content.alert}</small>
                        <div className="py-5">
                          <p className="mb-0 text-sm">IDR</p>
                          <h2 className="text-4xl ml-4" style={{ textShadow: '5px 2px 2px rgba(171, 162, 162, 0.7)' }}>
                            {content.price}
                          </h2>
                          <p className="whitespace-pre-wrap mt-2 font-light">{content.description}</p>
                          <ul className="pt-5">
                            {content.services.map(el => {
                              return (
                                <li className="flex" key={index}>
                                  <div className="w-6 mr-3">
                                    <Image src={CheckIcon} alt="" className="flex-none h-full" />
                                  </div>
                                  <p className="text-md mb-0">{el}</p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div
                          className={
                            index === 1
                              ? 'bg-xerpihan-primary-500 w-full rounded-3xl p-3 text-center font-bold text-lg'
                              : 'w-full rounded-3xl border-2 border-gray-500 p-3 text-center font-bold text-lg'
                          }>
                          <a
                            href=""
                            style={index == 1 ? { color: 'white' } : { color: '#585858' }}
                            className={index === 1 ? 'text-white' : ''}>
                            Beli Paket
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Tabs;
