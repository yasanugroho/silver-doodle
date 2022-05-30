import Link from 'next/link';
import { useRouter } from 'next/router';

const LocaleSwitcher: React.FC = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter(locale => locale !== activeLocale) ?? [];
  const isBlogPost = router.pathname.split('/')[2] === '[slug]';

  return (
    <>
      {/* If it's a blog post */}
      {isBlogPost &&
        otherLocales.map(locale => {
          return (
            <Link key={locale} href="/blog" locale={locale}>
              <a>{locale}</a>
            </Link>
          );
        })}
      {/* Other than blog post */}
      {!isBlogPost &&
        otherLocales.map(locale => {
          const { pathname, query, asPath } = router;
          return (
            <Link key={locale} href={{ pathname, query }} as={asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          );
        })}
    </>
  );
};

export default LocaleSwitcher;
