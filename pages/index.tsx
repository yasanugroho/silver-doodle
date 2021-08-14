import React from 'react';
import Layout from '../components/Layout';
import { useLocale, _ } from '../lib/i18n';

// type IndexProps = {
//   posts: PostType[];
// };

export const Index: React.FC = () => {
  const l = useLocale();

  return (
    <Layout>
      <h1>{_(l, 'Selamat Datang', 'Welcome')}</h1>
      {_(l,
        <p>Permulaian Next.js</p>,
        <p>Next.js starter for your next blog or personal site. Built with:</p>
      )}

      <ul className="list-disc pl-4 my-6">
        <li>Next.js</li>
        <li className="mt-2">Typescript</li>
        <li className="mt-2">MDX</li>
        <li className="mt-2">Tailwind CSS</li>
      </ul>

    </Layout>
  );
};

export default Index;
