import React from 'react';
import Layout from '../components/Layout';
import { L, useLocale, _ } from '../lib/i18n';

// type IndexProps = {
//   posts: PostType[];
// };

export const Index: React.FC = () => {
  const l = useLocale();

  return (
    <Layout>
      <L>
        <h1 className="text-6xl font-bold text-center">Layanan bahasa<br /><span className="text-xerp-primary">No.1</span> di Indonesia</h1>
        <h1 className="text-6xl font-bold text-center">Indonesian <span className="text-xerp-primary">No.1</span><br /> language service provider</h1>
      </L>

      <div className="flex justify-center flex-wrap mb-10">
        <div className="mx-5 text-2xl font-bold text-gray-500">
          Proofreading
        </div>
        <div className="mx-5 text-2xl font-bold text-gray-500">
          <L>{'Terjemahan'}{'Translation'}</L>
        </div>
        <div className="mx-5 text-2xl font-bold text-gray-500">
          <L>{'Subtitle'}{'Subtitles'}</L>
        </div>
        <div className="mx-5 text-2xl font-bold text-gray-500">
          <L>{'Transkripsi'}{'Transcription'}</L>
        </div>
      </div>

      <div className="border-2 rounded-md p-5">
        Dapatkan estimasi biaya proofreading, terjemahan, subtitle, dan transkripsi, gratis!
      </div>
    </Layout>
  );
};

export default Index;
