import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import { _ } from '../lib/i18n';

export const About: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <Layout
      customMeta={{
        title: 'About - Xerpihan',
      }}
    >
      <h1>{_(l, 'Tentang', 'About')}</h1>
      <p>Welcome to the about page</p>
    </Layout>
  );
};

export default About;
