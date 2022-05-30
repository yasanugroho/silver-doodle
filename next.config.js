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
    localeDetection: false,
  },
  async rewrites() {
    return [
      // { source: "/:lang(en|id)?/tentang", destination: "/about" },
    ];
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // @ts-ignore
  images: {
    domains: ['http://localhost:3000'],
  },
};

module.exports = config;
