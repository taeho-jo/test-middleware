/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;

module.exports = {
  nextConfig,
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

// module.exports = {
//   images: {
//     formats: ['image/webp'],
//   },
// };
