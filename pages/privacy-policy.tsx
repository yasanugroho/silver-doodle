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
          Xerpihan.id is owned and operated by PT Xerpihan Kata Digital (“Xerpihan”, “Us”, “We”, or “Our”). This Privacy Policy describes how we collect, use, disclose, process and protect personally identifiable information (“Personal Data”) that you (the “User”) may provide in connection with Xerpihan services available through the website located at www.xerpihan.id (“Site”). Personal Data means data, whether true or not, about an individual. References to the Site are deemed to include derivatives thereof, including but not necessarily limited to mobile websites and applications. By visiting or using the Site, you agree and consent to the collection, use, disclosure and processing of your Personal Data in accordance with this Privacy Policy and/or the Website Terms. If you do not agree to the Privacy Policy below, please leave the Site immediately.
          From time to time, Xerpihan may revise this Privacy Policy to reflect changes in the law, our Personal Data collection and use practices, the features of our Site, or advances in technology. If we make revisions that change the way we collect or use your Personal Data, those changes will be posted in this Privacy Policy and the effective date will be noted at the beginning of this Privacy Policy. Therefore, you should review this Privacy Policy periodically so that you are up to date on our most current policies and practices. Xerpihan will also prominently post such material changes prior to implementing the change. If you do not agree with any changes or modifications to the Privacy Policy, please do not continue using the Site. You will be deemed to have consented to any modification of the Privacy Policy when you use the Site after the effective date of the modification.
          1. Information We Collect
          We collect the Personal Data that you provide to us when using the Site. This includes but is not limited to: your name, Xerpihan user identification and login credentials, address, phone number, email address, hotel name, hotel location, and/or length of stay. We may request that you provide information on your travel preferences, airline frequent flyer membership, as well as feedback on your travel experiences. We also collect non-personally identifiable information including but not limited to your internet protocol (IP) address, geographic location, operating system type, nationality, search preferences, as well as other generic Internet usage related data.
          2. How We Use Your Information
          We may use your Personal Data and other information gathered through the Site for the following purposes:
          •	registering, managing and/or administering your use and/or access of the Site
          •	managing, operating, administering and providing you the services offered on the Site
          •	contacting you on matters relating to your use and/or access of the Site and services on the Site, and any enquiries and/or requests submitted by you through the Site or otherwise
          •	to customize your experience when using the Site
          •	measuring and improving customer experience and satisfaction
          We may also use your Personal Data and other information collected for Social Media marketing using direct and open graph techniques; for digital and conventional marketing purposes such as sending you direct mailers about new products, and special offers or other information which we think you may find interesting. Please note that you may opt out of any marketing materials we may send to you at any time. Please follow the unsubscribe instructions set out in our marketing materials if you choose to opt out of any marketing materials and we will respect your wishes.
          3. Protecting Your Personal Data
          We protect Personal Data by maintaining reasonable security arrangements, including physical, technical and organizational procedures, to prevent unauthorised access, collection, use, disclosure, copying, modification, disposal or similar risks.
          When you place orders, we use a secure ¬server. The secure server software (SSL)¬ encrypts all information you input befo¬re it is sent to us. Furthermore, all of¬ the sensitive customer data we collect ¬is protected by several layers of encryp¬tion and several layers of security to ¬ prevent unauthorized access.
          4. Sharing and Transferring Your Personal Data
          Your Personal Data may be shared by Xerpihan to our affiliate companies. Xerpihan (and/or its affiliate companies) may also disclose your Personal Data to third party service providers, suppliers or agents for one or more of the above purposes. Third party services include but are not limited to: website hosting, data analysis, marketing, and service provisions.
          Please note that Xerpihan may disclose your Personal Data in the following situations:
          •	to bring or defend against any claims or suits
          •	to comply with court orders, judicial processes, legitimate requests, warrants or equivalent by law enforcement officials or the authorities
          •	to investigate fraud or other wrongdoing or as otherwise required or necessary in order to comply with any applicable law, or to protect our legitimate interests;
          •	to the purchasers in connection with any sale, assignment, or other transfer of all or part of our business or company
          •	to enforce or apply the terms and conditions applicable to our products and services
          •	for any other situations which is allowed under law
          5. Consent
          As stated above, by browsing and using the Site, ordering a product from the Site, registering for or using any service on the Site, or by clicking the “Confirm” button or equivalent when you create a new account on the Site, you:
          •	consent to Xerpihan and/or Xerpihan’ affiliate companies collecting, using, disclosing and/or processing your above mentioned personal data for the purposes as described above; and
          6. Withdrawing Consent
          You may withdraw your consent to our collection, use or disclosure of your personal data at any time, by giving us reasonable notice. If you wish to withdraw your consent, please inform us at our contact details listed below. We will cease to collect, use or disclose your personal data upon notification, unless required by law or if we have legitimate business or legal purposes for retaining it. Note that by withdrawing your consent to our collection, use or disclosure of your personal data, we may not be able to continue providing you with our services and you agree that we will not be liable to you for any losses or damages arising out of or in relation to such termination of services.
          7. Cookie Policy
          A “cookie” is an alphanumeric identifier which we transfer to your hard drive or memory card through your web browser when you visit our Site. It enables our own system to recognise you when you visit our Site again and improve our service to you. The information is used to track visitor use of the Site and to compile statistical reports on Site activity. For further information about cookies visit www.aboutcookies.org or www.allaboutcookies.org.
          Cookies may also be used to compile aggregate information about areas of our Site that are visited most frequently. This traffic information can be used to enhance the content of our Site and make your use of it easier. If you wish to reject our cookie, you can configure your browser to do so. However, some of our Site features may not function if you remove cookies from your browser. If you do not enable cookies, you may only be able to use the Site on a limited basis.
          8. Protecting Your Personal Data
          We protect Personal Data by maintaining reasonable security arrangements, including physical, technical and organizational procedures, to prevent unauthorised access, collection, use, disclosure, copying, modification, disposal or similar risks.
          9. Links to Other Websites
          Our Site may contain links to other websites of interest. However, once you have used these links to leave our Site, you should note that we do not have any control over that other website. Please note that we are not responsible for the privacy practices of such other websites and advise you to read the privacy statements of each website you visit which collects personal information.
          10. Registration and Memberships
          This Site allows you to create a user account with the membership register, based on the data you provide. By providing the data, registering, and creating your account, you warrant that:
          1.	Information about you is true and accurate, current and complete as required in the registration form on the Site (the “Registration Data”)
          2.	You will update this Registration Data to keep it true, accurate and complete.
          Further, you agree that Xerpihan is not responsible for any loss or damages that may be suffered by us, you or any third parties, where such loss or damage is caused by inaccurate or incomplete information given by you. After registering, you will receive a password and user identification (“Username”). You are responsible for maintaining the confidentiality of the password and Username, and you are fully responsible for all activities related to the Username or password. You can only use a single Username and password at one time and are not allowed to use more than one Username. Your password is strictly for your own personal use only, and you agree to keep your password strictly confidential. You agree to immediately notify Xerpihan about unauthorized use of your password or account or any other breach of security. For greater security, please ensure that you logout or exit from your account after each use of this Site.
          11. Approval of Privacy Policy Changes
          By using the Site or the services we provide, you agree to the collection, use, disclosure and processing of your Personal Data as set forth in this Privacy Policy. Furthermore, if you use our services, we reserve the right to collect, use, disclose and process your Personal Data in accordance to this Privacy Policy. From time to time, Xerpihan may change this Privacy Policy. We will display the changes on this Site prior to making the changes.
          12. Order of Precedence
          If you have agreed to our Website Terms, in the event of inconsistency between such Website Terms and this Privacy Policy, Website Terms shall prevail.
          13. Contact Us
          If you have any questions or requests relating to this Privacy Policy, please contact our Data Protection Officer at the following details, or such person as Xerpihan may designate by informing you through any letter, invoice, email or the Site: admin@xerpihan.id.


        </p>
      </div>

      <Footer />
    </LayoutPlain>
  );
};

export default Page;
