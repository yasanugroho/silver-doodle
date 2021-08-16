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
        title: _(l, 'Studi Kasus', 'Case Studies') + ' - Xerpihan',
      }}>
      <h1>{_(l, 'Studi Kasus', 'Case Studies')}</h1>
      <p>Hello World</p>
    </Layout>
  );
};

export default Page;
