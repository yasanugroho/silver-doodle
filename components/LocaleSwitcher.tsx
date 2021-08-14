import Link from 'next/link'
import { useRouter } from 'next/router'

const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  return (
    <>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <Link key={locale} href={{ pathname, query }} as={asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          )
        })}
    </>
  )
}

export default LocaleSwitcher;
