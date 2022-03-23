import React from 'react';
import { body2_regular, heading1_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';

interface PropsType {
  title: string;
  contents: string;
}

const ConfirmPopupContents = ({ title, contents }: PropsType) => {
  return (
    <div>
      <h2 css={[heading1_bold, fontSize]}>{title}</h2>
      <span css={[body2_regular, test]}>{contents}</span>
    </div>
  );
};

export default ConfirmPopupContents;

const fontSize = css`
  font-size: 32px;
  margin-bottom: 24px;
`;

const test = css`
  white-space: pre-line;
  //word-break: keep-all;
  line-height: 30px;
`;
