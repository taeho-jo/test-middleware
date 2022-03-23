import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { caption1_regular } from '../../../styles/FontStyles';

interface PropsType {
  children: React.ReactNode;
}

const FormInputLabel = ({ children }: PropsType) => {
  return <label css={labelStyle}>{children}</label>;
};

export default FormInputLabel;

const labelStyle = [caption1_regular, css``];
