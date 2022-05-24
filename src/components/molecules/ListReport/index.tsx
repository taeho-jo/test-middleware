import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { caption1_regular, heading5_bold } from '../../../styles/FontStyles';

interface PropsType {
  testType: string;
  testTitle: string;
  testDate: string;
  img: string | null;
}

const ListReport = ({ testType, testTitle, testDate, img }: PropsType) => {
  return (
    <div css={mainContainer(img)}>
      <span css={[caption1_regular, blockStyle]}>{testType}</span>
      <span css={[heading5_bold, titleStyle]}>{testTitle}</span>
      <span css={[caption1_regular, dateStyle]}>{testDate}</span>
    </div>
  );
};

export default ListReport;

const blockStyle = css`
  display: block;
  color: ${colors.grey._3c};
`;
const titleStyle = [
  blockStyle,
  css`
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
];
const dateStyle = [
  blockStyle,
  css`
    color: ${colors.grey._99};
    margin-top: 8px;
  `,
];

const mainContainer = img => css`
  width: 256px;
  height: 184px;
  border-radius: 8px;
  border: 1px solid ${colors.grey._ec};
  padding: 25px 20px 0 20px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  margin-bottom: 20px;
  margin-right: 16px;
`;
