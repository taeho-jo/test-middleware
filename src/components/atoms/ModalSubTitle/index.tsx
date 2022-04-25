import React from 'react';
import { css } from '@emotion/react';
import { body2_regular } from '../../../styles/FontStyles';

interface PropsType {
  subTitle: string[];
}

const ModalSubTitle = ({ subTitle }: PropsType) => {
  return (
    <div css={subTitleStyle}>
      {subTitle?.map((item, index) => {
        const lastChild = index === subTitle.length - 1;
        return (
          <>
            <span css={[body2_regular, textStyle(lastChild)]}>{item}</span>
            {lastChild ? null : <br />}
          </>
        );
      })}
    </div>
  );
};

export default ModalSubTitle;

const subTitleStyle = css`
  box-sizing: border-box;
  padding: 0 40px 32px;
`;
const textStyle = lastChild => css`
  display: inline-block;
  margin-bottom: ${lastChild ? 0 : '8px'};
`;
