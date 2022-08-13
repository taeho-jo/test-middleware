import React from 'react';
import { heading4_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import IconTextButton from '../../atoms/Button/IconTextButton';

interface PropsType {
  title?: string;
  btnText: string;
  style?: any;
  onClick?: () => void;
}

const ConfirmPopupNextStepBtn = ({ title, onClick, style, btnText }: PropsType) => {
  return (
    <div css={[mainBoxStyle, style]} onClick={onClick}>
      {title && <h4 css={[heading4_bold, titleBoxStyle]}>{title}</h4>}
      <IconTextButton text={btnText} name={'NAVIGATION_CHEVRON_RIGHT'} />
    </div>
  );
};

export default ConfirmPopupNextStepBtn;

const mainBoxStyle = css`
  padding: 0 40px 40px;
`;

const titleBoxStyle = css`
  //margin-bottom: 10px;
  margin: 16px 0;
`;
