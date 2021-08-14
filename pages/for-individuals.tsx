import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import { _ } from '../lib/i18n';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <Layout
      customMeta={{
        title: _(l, 'Untuk Individual', 'For Individuals') + ' - Xerpihan',
      }}
    >
      <h1>{_(l, 'Untuk Individual', 'For Individuals')}</h1>
      <p>Hello World</p>
    </Layout>
  );
};

export default Page;
