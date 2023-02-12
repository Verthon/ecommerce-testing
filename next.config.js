/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'pl-PL'],
    defaultLocale: 'pl-PL',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        //pathname: '*',
      },
    ],
  },
}

module.exports = nextConfig
