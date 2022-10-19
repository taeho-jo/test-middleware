import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType {
  tooltip: {
    title: string;
    content: string;
    top: number;
    left: number;
    backgroundColor: any;
  };
}
const ResearchDetailTooltipModal = ({ tooltip }: PropsType) => {
  return (
    <div css={popupBoxStyle(tooltip?.top, tooltip?.left, tooltip?.backgroundColor)}>
      <span css={title}>{tooltip?.title}</span>
      <span css={subTitle}>{tooltip?.content}</span>
    </div>
  );
};

export default ResearchDetailTooltipModal;
const title = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: white;
  margin-bottom: 23px;
`;
const subTitle = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: white;
  white-space: pre-line;
  margin: 20px 0;
`;
const popupBoxStyle = (modalTop, modalLeft, backgroundColor = colors.grey._3c) => css`
  width: 430px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${backgroundColor};
  position: absolute;
  left: ${modalLeft}px;
  top: ${modalTop}px;
  color: white;
  padding: 24px 32px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;
