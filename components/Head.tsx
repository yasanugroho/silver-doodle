import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { WEBSITE_HOST_URL } from '../lib/constants';
import { MetaProps } from '../types/layout';

const Head: React.FC<{ customMeta?: MetaProps }> = ({ customMeta }) => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Xerpihan | 1st Indonesian Translation and Proofreading Startup Company',
    description: 'First AI Startup in Indonesia for English and Indonesian text correction. Hands on your documents and videos to us for best tech-enabled translation, proofreading, subtitle, and transcription service.',
    image: `${WEBSITE_HOST_URL}/images/xerpihan-logo-black.svg`,
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Xerpihan - Website" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@huntarosan" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {meta.date && <meta property="article:published_time" content={meta.date} />}
    </NextHead>
  );
};

export default Head;
