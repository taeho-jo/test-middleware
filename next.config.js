/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: process.env.DESTINATION_URL,
  //     },
  //   ];
  // },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
