import React from 'react';
import { css } from '@emotion/react';
import { commonStyles } from '../../../styles/Common.styles';

interface PropsType {
  children: React.ReactNode;
}

const FormInputLabel = ({ children }: PropsType) => {
  return <label css={labelStyle}>{children}</label>;
};

export default FormInputLabel;

const labelStyle = css`
  display: inline-block;
  color: ${commonStyles.colors.b_1};
  margin-bottom: 5px;
`;
