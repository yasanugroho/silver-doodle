// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const config = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['id', 'en'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'id',
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
        domains: [
            {
                domain: 'example.com',
                defaultLocale: 'id',
            },
            {
                domain: 'example.com/en',
                defaultLocale: 'en',
            },
        ],
    },
}

module.exports = config;
