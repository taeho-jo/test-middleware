const path = require('path');

const resolvePath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async config => {
    const rules = config.module.rules;
    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // webpackFinal: async config => ({
  //   ...config,
  //   resolve: {
  //     ...config.resolve,
  //     alias: {
  //       ...config.resolve.alias,
  //       '@emotion/core': resolvePath('node_modules/@emotion/react'),
  //       'emotion-theming': resolvePath('node_modules/@emotion/react'),
  //     },
  //   },
  // }),
  // webpackFinal: async config => {
  //   config.module.rules.unshift({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
};
