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
        localeDetection: false
    },
}

module.exports = config;
