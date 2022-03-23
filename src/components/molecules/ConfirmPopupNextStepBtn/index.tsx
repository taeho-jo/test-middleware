import React from 'react';
import Button from '../../atoms/Button';
import { heading4_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';

interface PropsType {
  title: string;
  btnText: string;
  style?: any;
  pathname: string;
  onClick?: (path) => void;
}

const ConfirmPopupNextStepBtn = ({ title, btnText, onClick, style, pathname }: PropsType) => {
  return (
    <div css={[mainBoxStyle, style]}>
      <h4 css={[heading4_bold, titleBoxStyle]}>{title}</h4>
      <Button buttonType={'action'} btnText={btnText} onClick={() => onClick(pathname)} />
    </div>
  );
};

export default ConfirmPopupNextStepBtn;

const mainBoxStyle = css`
  margin-top: 40px;
`;

const titleBoxStyle = css`
  margin-bottom: 8px;
`;
