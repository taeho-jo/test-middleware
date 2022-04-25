import React from 'react';
import { Global } from '@emotion/react';
import reset from './Global.styles';

const GlobalStylesStorybook = () => {
  return <Global styles={reset('login', true)} />;
};

export default GlobalStylesStorybook;
