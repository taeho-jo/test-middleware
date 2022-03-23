import React from 'react';
import { caption1_medium } from '../../../styles/FontStyles';

const Label = ({ children }) => {
  return <span css={caption1_medium}>{children}</span>;
};

export default Label;
