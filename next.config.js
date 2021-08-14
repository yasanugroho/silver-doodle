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
    async rewrites() {
        return [
            // { source: "/:lang(en|id)?/tentang", destination: "/about" },
        ]
      },
}

module.exports = config;
