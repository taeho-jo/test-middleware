import React from 'react';
import GlobalStyle from '../src/styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from '../src/pages/_app';
import GlobalStylesStorybook from '../src/styles/GlobalStylesStorybook';

export const decorators = [
  Story => (
    <>
      <GlobalStylesStorybook />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
