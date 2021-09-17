import React from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import LayoutPlain from '../components/LayoutPlain';
import { _ } from '../lib/i18n';
import Footer from '../components/Footer';

export const Page: React.FC = () => {
  const router = useRouter();
  const { locale: l } = router;

  return (
    <LayoutPlain
      customMeta={{
        title: _(l, 'Privacy Policy', 'Privacy Policy') + ' - Xerpihan',
      }}>
      <div
        className="bg-gradient-to-b max-w-5xl px-8 py-4 md:mx-auto space-y-6
        from-xerpihan-hero-gradient-start to-xerpihan-hero-gradient-end dark:from-gray-900 dark:to-gray-800">
        <Header></Header>
        <div className="text-center space-y-4">
          <h1> Xerpihan Privacy Policy</h1>
          <h6> EFFECTIVE DATE: FEBRUARY 25, 2021 </h6>
        </div>

        <p>
          This Privacy Policy describes how InVisionApp Inc. and its affiliates (collectively, the ‘InVision’ or ‘we’ or
          ‘us’ or ‘our’) collect, use and disclose information about you and what choices you have with respect to your
          information. Your privacy is really important to us, so whether you’re new to InVision or a long-time user,
          please take the time to get to know our practices. We have made some updates to the format of this Privacy
          Policy to help you more easily find information. Our privacy practices have remained the same. Our previous
          privacy policy is available here. We have kept this simple to make it easy to understand, but if you are not
          familiar with any terms in this Privacy Policy, please reach out to us.
        </p>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
