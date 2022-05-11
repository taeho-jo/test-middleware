/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: process.env.DESTINATION_URL,
      },
    ];
  },
  webpack: config => {
    // const prod = process.env.NODE_ENV === 'production';

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // config = {
    //   ...config,
    //   mode: prod ? 'production' : 'development',
    // };

    return config;
  },
};
