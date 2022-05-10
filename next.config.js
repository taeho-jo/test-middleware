/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:path*',
          destination: process.env.DESTINATION_URL,
        },
      ];
    } else {
      return [
        {
          source: '/:path*',
          destination: process.env.DESTINATION_URL,
        },
      ];
    }
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      // issuer: {
      //   test: /\.(js|ts)x?$/,
      // },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
